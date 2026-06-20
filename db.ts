import { 
  halalProductsData, matrimonyProfilesData, jobCircularsData, 
  quizQuestionsData, masailData, duasData, hadithsData,
  asmaNamesData, surahsData, audioSpeeches,
  HalalProduct, MatrimonyProfile, JobCircular, QuizQuestion, MasalaItem, Dua, Hadith,
  AsmaName, Surah
} from "./islamicData";

import { ISLAMIC_NAMES_DATA, IslamicName } from "./islamicNamesData";

import {
  ARABIC_ALPHABET_PRESETS, KIDS_SURAHS_PRESETS, KIDS_DUAS_PRESETS,
  ISLAMIC_STORIES_PRESETS, KIDS_QUIZ_QUESTIONS_PRESETS,
  AlphabetLetter, KidItem, IslamicStory, KidsQuizQuestion
} from "./kidsDataPresets";

// DB categories (all 15 tables in Muslim Bangla)
export type DbType = 
  | "masala" 
  | "shop" 
  | "matrimony" 
  | "jobs" 
  | "quiz" 
  | "duas" 
  | "hadiths"
  | "asmaul_husna"
  | "baby_names"
  | "quran_surahs"
  | "kids_alphabets"
  | "kids_surahs"
  | "kids_duas"
  | "kids_stories"
  | "kids_quizzes"
  | "audio_speeches";

// Helper to get from localstorage with fallback and proactive merge
export function getDbData<T>(type: DbType, fallback: T[]): T[] {
  const cacheKey = `al_maktaba_db_${type}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed)) {
        // Safe check to merge missing indices/defaults seamlessly
        if (fallback.length > 0 && typeof (fallback[0] as any).id !== "undefined") {
          const parsedIds = new Set(parsed.map((item: any) => String(item.id)));
          const missingItems = fallback.filter((item: any) => !parsedIds.has(String(item.id)));
          if (missingItems.length > 0) {
            const merged = [...parsed, ...missingItems];
            localStorage.setItem(cacheKey, JSON.stringify(merged));
            return merged as T[];
          }
        }
        return parsed;
      }
    } catch (e) {
      console.error(`Error parsing DB ${type}`, e);
    }
  }
  // Initialize cache with default data
  localStorage.setItem(cacheKey, JSON.stringify(fallback));
  return fallback;
}

// Helper to save to localstorage and dispatch reactive change event
export function saveDbData<T>(type: DbType, data: T[]) {
  const cacheKey = `al_maktaba_db_${type}`;
  localStorage.setItem(cacheKey, JSON.stringify(data));
  // Dispatch custom event to trigger React components' state update in real-time
  window.dispatchEvent(new CustomEvent("al-maktaba-db-updated", { detail: { type } }));
}

// Specialized CRUD getters/setters for all features
export const db = {
  getMasail: () => getDbData<MasalaItem>("masala", masailData),
  saveMasail: (data: MasalaItem[]) => saveDbData("masala", data),

  getProducts: () => getDbData<HalalProduct>("shop", halalProductsData),
  saveProducts: (data: HalalProduct[]) => saveDbData("shop", data),

  getMatrimony: () => getDbData<MatrimonyProfile>("matrimony", matrimonyProfilesData),
  saveMatrimony: (data: MatrimonyProfile[]) => saveDbData("matrimony", data),

  getJobs: () => getDbData<JobCircular>("jobs", jobCircularsData),
  saveJobs: (data: JobCircular[]) => saveDbData("jobs", data),

  getQuiz: () => getDbData<QuizQuestion>("quiz", quizQuestionsData),
  saveQuiz: (data: QuizQuestion[]) => saveDbData("quiz", data),

  getDuas: () => getDbData<Dua>("duas", duasData),
  saveDuas: (data: Dua[]) => saveDbData("duas", data),

  getHadiths: () => getDbData<Hadith>("hadiths", hadithsData),
  saveHadiths: (data: Hadith[]) => saveDbData("hadiths", data),

  // New customizable collections
  getAsmaulHusna: () => getDbData<AsmaName>("asmaul_husna", asmaNamesData),
  saveAsmaulHusna: (data: AsmaName[]) => saveDbData("asmaul_husna", data),

  getBabyNames: () => getDbData<IslamicName>("baby_names", ISLAMIC_NAMES_DATA),
  saveBabyNames: (data: IslamicName[]) => saveDbData("baby_names", data),

  getQuranSurahs: () => getDbData<Surah>("quran_surahs", surahsData),
  saveQuranSurahs: (data: Surah[]) => saveDbData("quran_surahs", data),

  getKidsAlphabets: () => getDbData<AlphabetLetter>("kids_alphabets", ARABIC_ALPHABET_PRESETS),
  saveKidsAlphabets: (data: AlphabetLetter[]) => saveDbData("kids_alphabets", data),

  getKidsSurahs: () => getDbData<KidItem>("kids_surahs", KIDS_SURAHS_PRESETS),
  saveKidsSurahs: (data: KidItem[]) => saveDbData("kids_surahs", data),

  getKidsDuas: () => getDbData<KidItem>("kids_duas", KIDS_DUAS_PRESETS),
  saveKidsDuas: (data: KidItem[]) => saveDbData("kids_duas", data),

  getKidsStories: () => getDbData<IslamicStory>("kids_stories", ISLAMIC_STORIES_PRESETS),
  saveKidsStories: (data: IslamicStory[]) => saveDbData("kids_stories", data),

  getKidsQuizzes: () => getDbData<KidsQuizQuestion>("kids_quizzes", KIDS_QUIZ_QUESTIONS_PRESETS),
  saveKidsQuizzes: (data: KidsQuizQuestion[]) => saveDbData("kids_quizzes", data),

  getAudioSpeeches: () => getDbData<any>("audio_speeches", audioSpeeches),
  saveAudioSpeeches: (data: any[]) => saveDbData("audio_speeches", data),

  // Reset helper
  resetAll: () => {
    localStorage.removeItem("al_maktaba_db_masala");
    localStorage.removeItem("al_maktaba_db_shop");
    localStorage.removeItem("al_maktaba_db_matrimony");
    localStorage.removeItem("al_maktaba_db_jobs");
    localStorage.removeItem("al_maktaba_db_quiz");
    localStorage.removeItem("al_maktaba_db_duas");
    localStorage.removeItem("al_maktaba_db_hadiths");
    localStorage.removeItem("al_maktaba_db_asmaul_husna");
    localStorage.removeItem("al_maktaba_db_baby_names");
    localStorage.removeItem("al_maktaba_db_quran_surahs");
    localStorage.removeItem("al_maktaba_db_kids_alphabets");
    localStorage.removeItem("al_maktaba_db_kids_surahs");
    localStorage.removeItem("al_maktaba_db_kids_duas");
    localStorage.removeItem("al_maktaba_db_kids_stories");
    localStorage.removeItem("al_maktaba_db_kids_quizzes");
    localStorage.removeItem("al_maktaba_db_audio_speeches");
    
    window.dispatchEvent(new CustomEvent("al-maktaba-db-updated", { detail: { type: "all" } }));
  }
};
