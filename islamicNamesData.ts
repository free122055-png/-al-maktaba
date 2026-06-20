export interface IslamicName {
  id: string;
  category: "girls" | "kids" | "both" | "baby" | "all";
  gender: "boy" | "girl";
  nameBn: string;
  nameAr: string;
  meaning: string;
}

export const ISLAMIC_NAMES_DATA: IslamicName[] = [
  // ==========================================
  // BOYS NAMES
  // ==========================================
  { id: "b_1", category: "all", gender: "boy", nameBn: "আরিফ (Arif)", nameAr: "عَرِيف", meaning: "জ্ঞানী, আধ্যাত্মিক অনুরাগী" },
  { id: "b_2", category: "all", gender: "boy", nameBn: "ইমরান (Imran)", nameAr: "عِمْرَان", meaning: "উন্নতি, জাতির সমৃদ্ধি" },
  { id: "b_3", category: "all", gender: "boy", nameBn: "ফাহাদ (Fahad)", nameAr: "فَهَد", meaning: "চিতাবাঘ, শক্তিশালী" },
  { id: "b_4", category: "all", gender: "boy", nameBn: "তৌসিফ (Tawsif)", nameAr: "تَوْصِيف", meaning: "প্রশংসাকারী, গুণাবলী বর্ণনাকারী" },
  { id: "b_5", category: "kids", gender: "boy", nameBn: "আয়ান (Ayan)", nameAr: "أَيَّان", meaning: "আল্লাহর উপহার, শুভ সময়, যুগপৎ সময়" },
  { id: "b_6", category: "all", gender: "boy", nameBn: "আরহাম (Arham)", nameAr: "أَرْحَم", meaning: "পরম দয়ালু, দয়াশীল, মহান আল্লাহর গুণবাচক রূপের প্রকাশ" },
  { id: "b_7", category: "all", gender: "boy", nameBn: "ইব্রাহিম (Ibrahim)", nameAr: "إِبْرَاهِيم", meaning: "মানবজাতির পিতা, আল্লাহর খলীল মহান নবী ইব্রাহিম (আঃ)" },
  { id: "b_8", category: "all", gender: "boy", nameBn: "ইউসুফ (Yusuf)", nameAr: "يُوْسُف", meaning: "পরম অদ্বিতীয় রূপবান, অত্যন্ত সুন্দর চরিত্রধারী প্রিয় সর্বশ্রেষ্ঠ নবী" },
  { id: "b_9", category: "all", gender: "boy", nameBn: "রায়ান (Rayan)", nameAr: "رَيَّان", meaning: "পরম পরিতৃপ্ত, বেহেশতের বিখ্যাত রেইয়ান নামক ফটক" },
  { id: "b_10", category: "all", gender: "boy", nameBn: "তানভীর (Tanveer)", nameAr: "تَنْوِير", meaning: "আলোকিত করা, উজ্জ্বল প্রদীপ, আলোকময় জ্ঞানশক্তি" },
  { id: "b_11", category: "both", gender: "boy", nameBn: "জাওয়াদ (Jawad)", nameAr: "جَوَاد", meaning: "দানশীল, উদার, অত্যন্ত মহানুভব ব্যক্তি" },
  { id: "b_12", category: "baby", gender: "boy", nameBn: "সাদমান (Sadman)", nameAr: "شَادْمَان", meaning: "সদা উৎফুল্ল, আনন্দিত ও সুখী মন বা সজীব" },
  { id: "b_13", category: "baby", gender: "boy", nameBn: "আদিয়ান (Adiyan)", nameAr: "أَدْيَان", meaning: "ধার্মিকতা, বহু ধর্ম (উচ্চ ইসলামী চেতনা ও মর্তব্য)" },
  { id: "b_14", category: "baby", gender: "boy", nameBn: "জারীফ (Zarif)", nameAr: "ظَرِيْف", meaning: "অত্যন্ত বুদ্ধিমান, হাস্যোজ্জ্বল চমৎকার বাকপটু বা রসিক" },
  { id: "b_15", category: "baby", gender: "boy", nameBn: "রাফসান (Rafsan)", nameAr: "رَفْسَان", meaning: "উজ্জ্বল আলো বিকিরণকারী, উজ্জ্বল ও দীপ্তিময়" },
  { id: "b_16", category: "all", gender: "boy", nameBn: "জিশান (Zishan)", nameAr: "ذِي شَأن", meaning: "উচ্চ মর্যাদাবান, জমকালো, রাজকীয় মহিমামণ্ডিত" },
  { id: "b_17", category: "kids", gender: "boy", nameBn: "রিহান (Rihan)", nameAr: "رِيْحَان", meaning: "জান্নাতের সুগন্ধি তুলসী বা ফুল গাছের সুঘ্রাণ" },
  { id: "b_18", category: "kids", gender: "boy", nameBn: "জুহাইর (Zuhair)", nameAr: "زُهَيْر", meaning: "প্রস্ফুটিত ছোট ফুল, উজ্জ্বল ও মনোহর মুখাবয়ব" },
  { id: "b_19", category: "both", gender: "boy", nameBn: "আরিশ (Arish)", nameAr: "عَرِيْش", meaning: "মহিমান্বিত ছায়া, উচ্চ প্রাসাদ বা মর্যাদা" },
  { id: "b_20", category: "both", gender: "boy", nameBn: "তাহসিন (Tahsin)", nameAr: "تَحْسِيْن", meaning: "সৌন্দর্যবর্ধন, প্রশংসা, নিখুঁত কর্মসম্পдование" },

  // ==========================================
  // GIRLS NAMES
  // ==========================================
  { id: "g_1", category: "girls", gender: "girl", nameBn: "আয়েশা (Ayesha)", nameAr: "عَائِسَة", meaning: "স্বচ্ছন্দময় জীবনযাপনকারিনী, প্রিয় নবীজি (সাঃ)-এর প্রিয়তমা স্ত্রী" },
  { id: "g_2", category: "girls", gender: "girl", nameBn: "ফাতিমা (Fatima)", nameAr: "فَاطِمَة", meaning: "ক্রন্দন থেকে মুক্ত, নবী কারীম (সাঃ)-এর প্রিয় কন্যা" },
  { id: "g_3", category: "girls", gender: "girl", nameBn: "খাদীজাতুল কুবরা (Khadija)", nameAr: "خَدِيجَةُ الكُبْرَى", meaning: "আগে জন্ম নেওয়া মহাকুলীন নারী, রাসুলুল্লাহ (সাঃ)-এর প্রথমা স্ত্রী" },
  { id: "g_4", category: "girls", gender: "girl", nameBn: "জয়নব (Zaynab)", nameAr: "زَيْنَب", meaning: "সুগন্ধি গাছ, পিতার সৌন্দর্য" },
  { id: "g_5", category: "girls", gender: "girl", nameBn: "হুমায়রা (Humaira)", nameAr: "حُمَيْرَاء", meaning: "লালচে রঙের সুন্দরী মেয়ে, মা আয়েশা (রাঃ)-এর লক্বব" },
  { id: "g_6", category: "girls", gender: "girl", nameBn: "সুমাইয়া (Sumaiya)", nameAr: "سُمَيَّة", meaning: "উচ্চ মর্যাদা বা সুখ্যাতিসম্পন্না, ইসলামের প্রথম নারী শহীদ" },
  { id: "g_7", category: "girls", gender: "girl", nameBn: "মারিয়া (Mariya)", nameAr: "مَارِيَة", meaning: "শুভ্রবর্ণা, উজ্জ্বল চেহারার অধিকারী" },
  { id: "g_8", category: "girls", gender: "girl", nameBn: "আফিফা (Afifa)", nameAr: "عَفِيفَة", meaning: "Scalar, চরিত্রবান, পবিত্র নারী" },
  { id: "g_9", category: "girls", gender: "girl", nameBn: "আদিবা (Adiba)", nameAr: "أَدِيبَة", meaning: "শিষ্টাচারী, বিদূষী, ভদ্র সমাজ" },
  { id: "g_10", category: "kids", gender: "girl", nameBn: "সাফা (Safa)", nameAr: "صَفَا", meaning: "বিশুদ্ধ, স্বচ্ছ, মক্কার পবিত্র সাফা পাহাড়" },
  { id: "g_11", category: "kids", gender: "girl", nameBn: "মারওয়া (Marwa)", nameAr: "مَرْوَة", meaning: "নরম পাথর, মক্কার পবিত্র মারওয়া পাহাড়" },
  { id: "g_12", category: "kids", gender: "girl", nameBn: "আলিশা (Alisha)", nameAr: "عَلِيْشَا", meaning: "আল্লাহর আশ্রিতা, উচ্চ গৌরবময় চরিত্রের অধিকারী" },
  { id: "g_13", category: "kids", gender: "girl", nameBn: "মাইশা (Maisha)", nameAr: "مَعِيْشَة", meaning: "জীবনযাপন, সচ্ছল জীবন ও সদা হাস্যোজ্জ্বল মেয়ে" },
  { id: "g_14", category: "kids", gender: "girl", nameBn: "লিয়ানা (Liyana)", nameAr: "لِيَانة", meaning: "স্নিগ্ধতা, নমনীয়তা, পরম কোমল হৃদয়ের অধিকারী" },
  { id: "g_15", category: "kids", gender: "girl", nameBn: "নুসাইবা (Nusaiba)", nameAr: "نُسَيْبَة", meaning: "উচ্চ বংশের অংশীদারী, বীর মুসলিম নারী সাহাবী" },
  { id: "g_16", category: "both", gender: "girl", nameBn: "আনিকা (Anika)", nameAr: "أَنِيْقَة", meaning: "অত্যন্ত রূপসী, আকর্ষণীয়, পরিপাটি ও রুচিসম্মত" },
  { id: "g_17", category: "both", gender: "girl", nameBn: "ফারিহা (Fariha)", nameAr: "فَرِيْحَة", meaning: "সদা প্রফুল্ল, পরম কৌতুকপূর্ণ ও আনন্দিত চেহারার" },
  { id: "g_18", category: "both", gender: "girl", nameBn: "নাদিয়া (Nadia)", nameAr: "نَادِيَة", meaning: "আহ্বায়ক, কোমল সিক্ত স্থান, দয়ালু কণ্ঠস্বর" },
  { id: "g_19", category: "both", gender: "girl", nameBn: "সামিয়া (Samiya)", nameAr: "سَامِيَة", meaning: "উন্নত, সর্বশ্রেষ্ঠা, মর্যাদাবান ও সুখ্যাত" },
  { id: "g_20", category: "all", gender: "girl", nameBn: "বুশরা (Bushra)", nameAr: "بُشْرَى", meaning: "সুসংবাদ, আনন্দদায়ক শুভ সংবাদ বা সুবারতা" },
  { id: "g_21", category: "all", gender: "girl", nameBn: "মরিয়ম (Mariyam)", nameAr: "مَرْيَم", meaning: "ইবাদতকারিণী, সতীত্ব রক্ষাকারিণী হযরত ঈসা (আঃ)-এর পুণ্যবান আম্মাজান" },
  { id: "g_22", category: "all", gender: "girl", nameBn: "সারা (Sara)", nameAr: "سَارَة", meaning: "রাজকুমারী, অত্যন্ত মর্যাদা ও খুশির সুসংবাদ বহনকারী" }
];
