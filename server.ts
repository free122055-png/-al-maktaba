import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import sharp from "sharp";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper function for lazy initialization of the GoogleGenAI instance.
// This allows the server to look up the newest GEMINI_API_KEY from environment variables
// on every request, instead of pre-caching a stale or undefined key at boot time.
function getAiClient(): GoogleGenAI | null {
  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (!geminiApiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey: geminiApiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Function to dynamically generate high-quality PNG splash and launcher images 
// from our golden Al-Maktaba logo so Chrome on Android generates a real standalone native WebAPK package.
async function generatePwaIcons() {
  const svgPath = path.join(process.cwd(), "public", "logo.svg");
  const pwa192Path = path.join(process.cwd(), "public", "logo-192.png");
  const pwa512Path = path.join(process.cwd(), "public", "logo-512.png");

  try {
    if (fs.existsSync(svgPath)) {
      // Opt-in optimization: If the launcher PNG files have already been generated,
      // skip running the heavy sharp compiler to prevent blocking during sandboxed cold-starts.
      if (fs.existsSync(pwa192Path) && fs.existsSync(pwa512Path)) {
        console.log("[PWA Icons Builder] PWA launch icons already exist. Skipping heavy sharp processing.");
        return;
      }

      console.log("[PWA Icons Builder] Generating PWA PNG icons with sharp...");
      
      const publicDir = path.join(process.cwd(), "public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Generate 192x192 PNG
      await sharp(svgPath)
        .resize(192, 192)
        .png()
        .toFile(pwa192Path);
      console.log("[PWA Icons Builder] Created logo-192.png successfully");

      // Generate 512x512 PNG
      await sharp(svgPath)
        .resize(512, 512)
        .png()
        .toFile(pwa512Path);
      console.log("[PWA Icons Builder] Created logo-512.png successfully");

      // ALSO WRITE INTO DIST DIRECTORY SO THEY ARE SERVED IN PRODUCTION MODE
      const distDir = path.join(process.cwd(), "dist");
      if (fs.existsSync(distDir)) {
        await sharp(svgPath)
          .resize(192, 192)
          .png()
          .toFile(path.join(distDir, "logo-192.png"));
        await sharp(svgPath)
          .resize(512, 512)
          .png()
          .toFile(path.join(distDir, "logo-512.png"));
        console.log("[PWA Icons Builder] Successfully copied PNG icons directly into dist/ folder for live production!");
      }
    } else {
      console.error("[PWA Icons Builder] public/logo.svg is missing! Cannot compile PNGs.");
    }
  } catch (error) {
    console.error("[PWA Icons Builder] Error pre-compiling Android launcher PNGs:", error);
  }
}

// Server API Endpoint to check Gemini API Key configuration status
app.get("/api/ai-status", (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const isConfigured = !!apiKey && apiKey !== "" && apiKey !== "MY_GEMINI_API_KEY";
  return res.json({ configured: isConfigured });
});

// Server API Endpoint for "দ্বীনি জিজ্ঞাসা" (AI Islamic Q&A Advisor)
app.post("/api/qa", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: "প্রশ্ন প্রদান করা হয়নি।" });
    }

    const ai = getAiClient();
    if (!ai) {
      return res.status(503).json({
        error: "দুঃখিত, এপিআই কি (API Key) কনফিগার করা নেই। অনুগ্রহ করে সেটিংস প্যানেল থেকে GEMINI_API_KEY প্রদান করুন।"
      });
    }

    const systemInstruction = `
Você é "দ্বীনি জিজ্ঞাসা" (AI Islamic Scholar Panel & Advisor).
Você deve se comunicar exclusivamente em língua bengala (Bengali).
Responda de forma extremamente gentil, sábia, respeitosa e baseada no Al-Corão e na Sunnah de acordo com o entendimento tradicional islâmico.
Sempre cite as fontes (Surah e Ayat do Al-Corão ou Hadiths confiáveis como Bukhari/Muslim) de maneira clara em Bengali se for relevante.
Se você não souber uma resposta ou se a questão for altamente controversa para uma IA decidir, recomende consultar educadamente um erudito local (স্থানীয় আলেম).
Evite envolver-se em discussões políticas.
Mantenha um tom humilde e acolhedor.
    `.trim();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const answer = response.text || "দুঃখিত, কোনো উত্তর পাওয়া যায়নি।";
    return res.json({ answer });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({
      error: "সার্ভারে কিছু সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
      details: error?.message || ""
    });
  }
});

// Server API Endpoint for Custom Daily Premium Routines via Gemini
app.post("/api/premium/routine", async (req, res) => {
  try {
    const { deedCount, district } = req.body;
    const ai = getAiClient();
    if (!ai) {
      return res.status(503).json({
        error: "দুঃখিত, এপিআই কি কনফিগার করা নেই।"
      });
    }

    const promptText = `
Analyze this daily religious progress data for Al-Maktaba user:
- Quran read: ${deedCount?.quran || 0} pages
- Prayers prayed: ${deedCount?.prayers || 0}/5 daily prayers
- Tasbih/Dhikr repeated: ${deedCount?.tasbih || 0} times
- Charity/Sadaqah actions helper: ${deedCount?.charity || 0} time(s).
- User District: ${district || "Dhaka"}.

Based on this, generate a highly personalized, spiritually encouraging study/prayer routine evaluation in clean Bengali. 
Acknowledge their accomplishments (or encourage them gently if any prayer is missed). 
Suggest three actionable, specific adjustments or times in Bengali to block for their next day's spiritual improvement. 
Keep the tone exceptionally polite and encouraging.
    `.trim();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
      config: {
        temperature: 0.7,
      },
    });

    const recommendation = response.text || "দুঃখিত, সুপারিশ জেনারেট করা সম্ভব হয়নি।";
    return res.json({ recommendation });
  } catch (error: any) {
    console.error("Routine API Error:", error);
    return res.status(500).json({ error: "রুটিন মূল্যায়ন ব্যর্থ হয়েছে।" });
  }
});

// Server API Endpoint for Mental and Emotional wellness advisor
app.post("/api/premium/wellness", async (req, res) => {
  try {
    const { mood, query } = req.body;
    const ai = getAiClient();
    if (!ai) {
      return res.status(503).json({
        error: "দুঃখিত, এপিআই কি কনফিগার করা নেই।"
      });
    }

    const systemInstruction = `
Você é "মাকতাবা এআই প্রশান্তি থերাপিস্ট" (Islamic Compassionate Emotional & Mental Wellness Advisor).
Usa a sabedoria do Al-Corão, Tafseer e Sunnah para dar conforto psicológico em língua bengala (Bengali).
Nunca dê diagnósticos médicos nem desacredite tratamentos médicos reais se a questão apresentar riscos sérios.
Adapte-se ao sentimento selecionado pelo usuário (${mood}) e de forma extremamente humana, terna, consoladora e empática, ofereça soluções práticas de oração, reflexão e incentivo saudável.
Mantenha o tom íntimo e de paz sob a luz do Islamismo.
    `.trim();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query || `User feels: ${mood}`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.6,
      },
    });

    const responseText = response.text || "আপনার কথার জন্য যথাযথ আন্তরিক সমাধান তৈরি করা যাচ্ছে না। দয়া করে একটু পর পুনরায় চেষ্টা করুন।";
    return res.json({ response: responseText });
  } catch (error: any) {
    console.error("Wellness API Error:", error);
    return res.status(500).json({ error: "মানসিক গাইডেন্স সংযোগ ব্যর্থ হয়েছে।" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Islamic Super App] Server is live at http://0.0.0.0:${PORT}`);
    
    // Run pre-generation asynchronously so port 3000 binds instantly without any waiting or timeout risks.
    generatePwaIcons().catch(err => {
      console.error("[PWA Icons Builder] Error in background icon compilation:", err);
    });
  });
}

startServer();
