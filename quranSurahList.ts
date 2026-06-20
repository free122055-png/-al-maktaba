export interface SurahListItem {
  number: number;
  name: string;
  englishTranslation: string;
  bengaliTranslation: string;
  arabicName: string;
  type: "মক্কী" | "মাদানী";
  versesCount: number;
}

export interface QuranWord {
  ar: string;
  bn: string;
}

export interface ScholarTranslation {
  scholar: string;
  text: string;
}

export interface QuranVerse {
  number: number;
  text: string;
  words: QuranWord[];
  translations: ScholarTranslation[];
  audioUrl?: string;
}

export const quranSurahList: SurahListItem[] = [
  { number: 1, name: "আল ফাতিহা", englishTranslation: "Al-Fatihah", bengaliTranslation: "সূচনা", arabicName: "الفاتحة", type: "মক্কী", versesCount: 7 },
  { number: 2, name: "আল বাকারাহ্", englishTranslation: "Al-Baqarah", bengaliTranslation: "বকনা-বাছুর", arabicName: "البقرة", type: "মাদানী", versesCount: 286 },
  { number: 3, name: "আলে ইমরান", englishTranslation: "Al-Imran", bengaliTranslation: "ইমরানের পরিবার", arabicName: "آل عمران", type: "মাদানী", versesCount: 200 },
  { number: 4, name: "আন নিসা", englishTranslation: "An-Nisa", bengaliTranslation: "নারী", arabicName: "النساء", type: "মাদানী", versesCount: 176 },
  { number: 5, name: "আল মায়িদাহ্", englishTranslation: "Al-Ma'idah", bengaliTranslation: "খাদ্য পরিবেশিত দস্তরখান", arabicName: "المائدة", type: "মাদানী", versesCount: 120 },
  { number: 6, name: "আল আন'আম", englishTranslation: "Al-An'am", bengaliTranslation: "গৃহপালিত পশু", arabicName: "الأنعام", type: "মক্কী", versesCount: 165 },
  { number: 7, name: "আল আ'রাফ", englishTranslation: "Al-A'raf", bengaliTranslation: "উঁচু স্থানসমূহ", arabicName: "الأعراف", type: "মক্কী", versesCount: 206 },
  { number: 8, name: "আল আনফাল", englishTranslation: "Al-Anfal", bengaliTranslation: "যুদ্ধলব্ধ ধন-সম্পদ", arabicName: "الأنفال", type: "মাদানী", versesCount: 75 },
  { number: 9, name: "আত তাওবাহ্", englishTranslation: "At-Tawbah", bengaliTranslation: "অনুতাপ", arabicName: "التوبة", type: "মাদানী", versesCount: 129 },
  { number: 10, name: "ইউনুস", englishTranslation: "Yunus", bengaliTranslation: "ইউনুস (আঃ)", arabicName: "يونس", type: "মক্কী", versesCount: 109 },
  { number: 11, name: "হূদ", englishTranslation: "Hud", bengaliTranslation: "হূদ (আঃ)", arabicName: "هود", type: "মক্কী", versesCount: 123 },
  { number: 12, name: "ইউসুফ", englishTranslation: "Yusuf", bengaliTranslation: "ইউসুফ (আঃ)", arabicName: "يوسف", type: "মক্কী", versesCount: 111 },
  { number: 13, name: "আর রা'দ", englishTranslation: "Ar-Ra'd", bengaliTranslation: "বজ্রপাত", arabicName: "الرعد", type: "মাদানী", versesCount: 43 },
  { number: 14, name: "ইব্রাহীম", englishTranslation: "Ibrahim", bengaliTranslation: "ইব্রাহীম (আঃ)", arabicName: "إبراهيم", type: "মক্কী", versesCount: 52 },
  { number: 15, name: "আল হিজর", englishTranslation: "Al-Hijr", bengaliTranslation: "পাথুরে পাহাড়", arabicName: "الحجر", type: "মক্কী", versesCount: 99 },
  { number: 16, name: "আন নাহল", englishTranslation: "An-Nahl", bengaliTranslation: "মৌমাছি", arabicName: "النحل", type: "মক্কী", versesCount: 128 },
  { number: 17, name: "আল ইসরা", englishTranslation: "Al-Isra", bengaliTranslation: "রাত্রীকালীন ভ্রমণ", arabicName: "الإسراء", type: "মক্কী", versesCount: 111 },
  { number: 18, name: "আল কাহাফ", englishTranslation: "Al-Kahf", bengaliTranslation: "গুহা", arabicName: "الكهف", type: "মক্কী", versesCount: 110 },
  { number: 19, name: "মারইয়াম", englishTranslation: "Maryam", bengaliTranslation: "মারইয়াম (আঃ)", arabicName: "مريم", type: "মক্কী", versesCount: 98 },
  { number: 20, name: "ত্বোয়া-হা", englishTranslation: "Ta-Ha", bengaliTranslation: "ত্বোয়া-হা", arabicName: "طه", type: "মক্কী", versesCount: 135 },
  { number: 21, name: "আল আম্বিয়া", englishTranslation: "Al-Anbiya", bengaliTranslation: "নবীগণ", arabicName: "الأنبياء", type: "মক্কী", versesCount: 112 },
  { number: 22, name: "আল হাজ্জ", englishTranslation: "Al-Hajj", bengaliTranslation: "হজ্জ", arabicName: "الحج", type: "মাদানী", versesCount: 78 },
  { number: 23, name: "আল মু'মিনূন", englishTranslation: "Al-Mu'minun", bengaliTranslation: "মুমিনগণ", arabicName: "المؤمنون", type: "মক্কী", versesCount: 118 },
  { number: 24, name: "আন নূর", englishTranslation: "An-Nur", bengaliTranslation: "জ্যোতি", arabicName: "النور", type: "মাদানী", versesCount: 64 },
  { number: 25, name: "আল ফুরকান", englishTranslation: "Al-Furqan", bengaliTranslation: "সত্য-মিথ্যার পার্থক্যকারী", arabicName: "الفرقان", type: "মক্কী", versesCount: 77 },
  { number: 26, name: "আশ শু'আরা", englishTranslation: "As-Shu'ara", bengaliTranslation: "কবিগণ", arabicName: "الشعراء", type: "মক্কী", versesCount: 227 },
  { number: 27, name: "আন নামল", englishTranslation: "An-Naml", bengaliTranslation: "পিপীলিকা", arabicName: "النمل", type: "মক্কী", versesCount: 93 },
  { number: 28, name: "আল কাসাস", englishTranslation: "Al-Qasas", bengaliTranslation: "কাহিনী", arabicName: "القصص", type: "মক্কী", versesCount: 88 },
  { number: 29, name: "আল আনকাবূত", englishTranslation: "Al-Ankabut", bengaliTranslation: "মাকড়সা", arabicName: "العنكبوت", type: "মক্কী", versesCount: 69 },
  { number: 30, name: "আর রূম", englishTranslation: "Ar-Rum", bengaliTranslation: "রোমান সাম্রাজ্য", arabicName: "الروم", type: "মক্কী", versesCount: 60 },
  { number: 31, name: "লুকমান", englishTranslation: "Luqman", bengaliTranslation: "লুকমান (আঃ)", arabicName: "لقمان", type: "মক্কী", versesCount: 34 },
  { number: 32, name: "আস সাজদাহ্", englishTranslation: "As-Sajdah", bengaliTranslation: "সিজদা", arabicName: "السجدة", type: "মক্কী", versesCount: 30 },
  { number: 33, name: "আল আহযাব", englishTranslation: "Al-Ahzab", bengaliTranslation: "শত্রু জোট", arabicName: "الأحزاب", type: "মাদানী", versesCount: 73 },
  { number: 34, name: "সাবা", englishTranslation: "Saba", bengaliTranslation: "সাবা শহর", arabicName: "سبأ", type: "মক্কী", versesCount: 54 },
  { number: 35, name: "ফাতির", englishTranslation: "Fatir", bengaliTranslation: "আদি স্রষ্টা", arabicName: "فاطر", type: "মক্কী", versesCount: 45 },
  { number: 36, name: "ইয়া-সীন", englishTranslation: "Ya-Sin", bengaliTranslation: "ইয়া-সীন", arabicName: "يس", type: "মক্কী", versesCount: 83 },
  { number: 37, name: "আস ছাফফাত", englishTranslation: "As-Saffat", bengaliTranslation: "সারিবদ্ধভাবে দাঁড়ানো", arabicName: "الصافات", type: "মক্কী", versesCount: 182 },
  { number: 38, name: "ছাদ", englishTranslation: "Sad", bengaliTranslation: "আরবি বর্ণ ক্বাফ", arabicName: "ص", type: "মক্কী", versesCount: 88 },
  { number: 39, name: "আয যুমার", englishTranslation: "Az-Zumar", bengaliTranslation: "দলবদ্ধ জনতা", arabicName: "الزمر", type: "মক্কী", versesCount: 75 },
  { number: 40, name: "গাফির", englishTranslation: "Ghafir", bengaliTranslation: "ক্ষমাকারী", arabicName: "غافر", type: "মক্কী", versesCount: 85 },
  { number: 41, name: "ফুচ্ছিলাত", englishTranslation: "Fussilat", bengaliTranslation: "সুস্পষ্ট বিবরণ", arabicName: "فصلت", type: "মক্কী", versesCount: 54 },
  { number: 42, name: "আশ শূরা", englishTranslation: "As-Shura", bengaliTranslation: "পরামর্শ", arabicName: "الشورى", type: "মক্কী", versesCount: 53 },
  { number: 43, name: "আয যুখরুফ", englishTranslation: "Az-Zukhruf", bengaliTranslation: "স্বর্ণালঙ্কার", arabicName: "الزخرف", type: "মক্কী", versesCount: 89 },
  { number: 44, name: "আদ দুখান", englishTranslation: "Ad-Dukhan", bengaliTranslation: "ধোঁয়া", arabicName: "الدخان", type: "মক্কী", versesCount: 59 },
  { number: 45, name: "আল জাসিয়াহ্", englishTranslation: "Al-Jathiyah", bengaliTranslation: "নতজানু", arabicName: "الجاثية", type: "মক্কী", versesCount: 37 },
  { number: 46, name: "আল আহকাফ", englishTranslation: "Al-Ahqaf", bengaliTranslation: "বালুর পাহাড়", arabicName: "الأحقاف", type: "মক্কী", versesCount: 35 },
  { number: 47, name: "মুহাম্মদ", englishTranslation: "Muhammad", bengaliTranslation: "মুহাম্মদ (সাঃ)", arabicName: "محمد", type: "মাদানী", versesCount: 38 },
  { number: 48, name: "আল ফাতহ", englishTranslation: "Al-Fath", bengaliTranslation: "বিজয়", arabicName: "الفتح", type: "মাদানী", versesCount: 29 },
  { number: 49, name: "আল হুজুরাত", englishTranslation: "Al-Hujurat", bengaliTranslation: "বাসগৃহসমূহ", arabicName: "الحجرات", type: "মাদানী", versesCount: 18 },
  { number: 50, name: "ক্বাফ", englishTranslation: "Qaf", bengaliTranslation: "ক্বাফ বর্ণ", arabicName: "ق", type: "মক্কী", versesCount: 45 },
  { number: 51, name: "আয যারিয়াত", englishTranslation: "Az-Zariyat", bengaliTranslation: "বিক্ষেপকারী বাতাস", arabicName: "الذاريات", type: "মক্কী", versesCount: 60 },
  { number: 52, name: "আত তূর", englishTranslation: "At-Tur", bengaliTranslation: "তূর পর্বত", arabicName: "الطور", type: "মক্কী", versesCount: 49 },
  { number: 53, name: "আন নাজমু", englishTranslation: "An-Najm", bengaliTranslation: "নক্ষত্র", arabicName: "النجم", type: "মক্কী", versesCount: 62 },
  { number: 54, name: "আল কামার", englishTranslation: "Al-Qamar", bengaliTranslation: "চন্দ্র", arabicName: "القمر", type: "মক্কী", versesCount: 55 },
  { number: 55, name: "আর রহমান", englishTranslation: "Ar-Rahman", bengaliTranslation: "পরম করুণাময়", arabicName: "الرحمن", type: "মাদানী", versesCount: 78 },
  { number: 56, name: "আল ওয়াকি'আহ্", englishTranslation: "Al-Waqi'ah", bengaliTranslation: "নিশ্চিত ঘটনা", arabicName: "الواقعة", type: "মক্কী", versesCount: 96 },
  { number: 57, name: "আল হাদীদ", englishTranslation: "Al-Hadid", bengaliTranslation: "লোহা", arabicName: "الحديد", type: "মাদানী", versesCount: 29 },
  { number: 58, name: "আল মুজাদালাহ্", englishTranslation: "Al-Mujadilah", bengaliTranslation: "অনুনয়-বিনয়কারিণী", arabicName: "المجادلة", type: "মাদানী", versesCount: 22 },
  { number: 59, name: "আল হাশর", englishTranslation: "Al-Hashr", bengaliTranslation: "সমাবেশ", arabicName: "الحشر", type: "মাদানী", versesCount: 24 },
  { number: 60, name: "আল মুমতাহানাহ্", englishTranslation: "Al-Mumtahanah", bengaliTranslation: "পরীক্ষিতা নারী", arabicName: "الممتحنة", type: "মাদানী", versesCount: 13 },
  { number: 61, name: "আস ছফ", englishTranslation: "As-Saff", bengaliTranslation: "সারিবদ্ধ বাহিনী", arabicName: "الصف", type: "মাদানী", versesCount: 14 },
  { number: 62, name: "আল জুমু'আহ্", englishTranslation: "Al-Jumu'ah", bengaliTranslation: "শুক্রবার", arabicName: "الجمعة", type: "মাদানী", versesCount: 11 },
  { number: 63, name: "আল মুনাফিকূন", englishTranslation: "Al-Munafiqun", bengaliTranslation: "কপটচারী দল", arabicName: "المنافقون", type: "মাদানী", versesCount: 11 },
  { number: 64, name: "আত তাগাবুন", englishTranslation: "At-Taghabun", bengaliTranslation: "হার-জিত", arabicName: "التغابن", type: "মাদানী", versesCount: 18 },
  { number: 65, name: "আত ত্বলাক্ব", englishTranslation: "At-Talaq", bengaliTranslation: "তালাক", arabicName: "الطلاق", type: "মাদানী", versesCount: 12 },
  { number: 66, name: "আত তাহরীম", englishTranslation: "At-Tahrim", bengaliTranslation: "নিষিদ্ধকরণ", arabicName: "التحريم", type: "মাদানী", versesCount: 12 },
  { number: 67, name: "আল মুলক", englishTranslation: "Al-Mulk", bengaliTranslation: "সার্বভৌম কর্তৃত্ব", arabicName: "الملك", type: "মক্কী", versesCount: 30 },
  { number: 68, name: "আল কলাম", englishTranslation: "Al-Qalam", bengaliTranslation: "কলম", arabicName: "القلم", type: "মক্কী", versesCount: 52 },
  { number: 69, name: "আল হাক্কাহ্", englishTranslation: "Al-Haqqah", bengaliTranslation: "অনিবার্য সত্য", arabicName: "الحاقة", type: "মক্কী", versesCount: 52 },
  { number: 70, name: "আল মা'আরিজ", englishTranslation: "Al-Ma'arij", bengaliTranslation: "উন্নয়নের সিঁড়ি", arabicName: "المعارج", type: "মক্কী", versesCount: 44 },
  { number: 71, name: "নূহ", englishTranslation: "Nuh", bengaliTranslation: "নূহ (আঃ)", arabicName: "نوح", type: "মক্কী", versesCount: 28 },
  { number: 72, name: "আল জীন", englishTranslation: "Al-Jinn", bengaliTranslation: "জ্বীন সম্প্রদায়", arabicName: "الجن", type: "মক্কী", versesCount: 28 },
  { number: 73, name: "আল মুয্যাম্মিল", englishTranslation: "Al-Muzzammil", bengaliTranslation: "বস্ত্রাবৃত", arabicName: "المزمل", type: "মক্কী", versesCount: 20 },
  { number: 74, name: "আল মুদ্দাচ্ছির", englishTranslation: "Al-Muddaththir", bengaliTranslation: "কম্বল গায়ে দেওয়া", arabicName: "المدثر", type: "মক্কী", versesCount: 56 },
  { number: 75, name: "আল ক্বিয়ামাহ্", englishTranslation: "Al-Qiyamah", bengaliTranslation: "মহাপ্রলয়", arabicName: "القيامة", type: "মক্কী", versesCount: 40 },
  { number: 76, name: "আল ইনসান", englishTranslation: "Al-Insan", bengaliTranslation: "মানুষ", arabicName: "الإنسان", type: "মাদানী", versesCount: 31 },
  { number: 77, name: "আল মুরসালাত", englishTranslation: "Al-Mursalat", bengaliTranslation: "প্রেরিত বাতাস", arabicName: "المرسلات", type: "মক্কী", versesCount: 50 },
  { number: 78, name: "আন নাবা", englishTranslation: "An-Naba", bengaliTranslation: "মহা বার্তা", arabicName: "النبأ", type: "মক্কী", versesCount: 40 },
  { number: 79, name: "আন নাযি'আত", englishTranslation: "An-Nazi'at", bengaliTranslation: "উৎপাটনকারী", arabicName: "النازعات", type: "মক্কী", versesCount: 46 },
  { number: 80, name: "আবাসা", englishTranslation: "Abasa", bengaliTranslation: "ভুরু কুঁচকানো", arabicName: "عبس", type: "মক্কী", versesCount: 42 },
  { number: 81, name: "আত তাকবীর", englishTranslation: "At-Takwir", bengaliTranslation: "অন্ধকারাচ্ছন্ন", arabicName: "التكوير", type: "মক্কী", versesCount: 29 },
  { number: 82, name: "আল ইনফিতার", englishTranslation: "Al-Infitar", bengaliTranslation: "বিদীর্ণ হওয়া", arabicName: "الانفطار", type: "মক্কী", versesCount: 19 },
  { number: 83, name: "আল মুত্বাফফিফীন", englishTranslation: "Al-Mutaffifin", bengaliTranslation: "পরমাপে কম দানকারী", arabicName: "المطففين", type: "মক্কী", versesCount: 36 },
  { number: 84, name: "আল ইনশিক্বাক্ব", englishTranslation: "Al-Inshiqaq", bengaliTranslation: "ফেটে যাওয়া", arabicName: "الانشقاق", type: "মক্কী", versesCount: 25 },
  { number: 85, name: "আল বুরূজ", englishTranslation: "Al-Buruj", bengaliTranslation: "নক্ষত্রপুঞ্জ", arabicName: "الوجنة", type: "মক্কী", versesCount: 22 },
  { number: 86, name: "আত ত্বারিক্ব", englishTranslation: "At-Tariq", bengaliTranslation: "রাতের নক্ষত্র", arabicName: "الطارق", type: "মক্কী", versesCount: 17 },
  { number: 87, name: "আল আ'লা", englishTranslation: "Al-A'la", bengaliTranslation: "সর্বোচ্চ", arabicName: "الأعلى", type: "মক্কী", versesCount: 19 },
  { number: 88, name: "আল গাশিয়াহ্", englishTranslation: "Al-Ghashiyah", bengaliTranslation: "অভিভূতকারী দুর্যোগ", arabicName: "الغاشية", type: "মক্কী", versesCount: 26 },
  { number: 89, name: "আল ফজর", englishTranslation: "Al-Fajr", bengaliTranslation: "ভোরবেলা", arabicName: "الفجر", type: "মক্কী", versesCount: 30 },
  { number: 90, name: "আল বালাদ", englishTranslation: "Al-Balad", bengaliTranslation: "নগরী", arabicName: "البلد", type: "মক্কী", versesCount: 20 },
  { number: 91, name: "আশ শামস", englishTranslation: "As-Shams", bengaliTranslation: "সূর্য", arabicName: "الشمس", type: "মক্কী", versesCount: 15 },
  { number: 92, name: "আল লাইল", englishTranslation: "Al-Layl", bengaliTranslation: "রাত্রি", arabicName: "الليل", type: "মক্কী", versesCount: 21 },
  { number: 93, name: "আদ দুহা", englishTranslation: "Ad-Duha", bengaliTranslation: "পূর্বাহ্নের রোদ", arabicName: "الضحى", type: "মক্কী", versesCount: 11 },
  { number: 94, name: "আল ইনশিরাহ", englishTranslation: "Al-Inshirah", bengaliTranslation: "বক্ষ উন্মোচন ও প্রশান্তি", arabicName: "الشرح", type: "মক্কী", versesCount: 8 },
  { number: 95, name: "আত তীন", englishTranslation: "At-Tin", bengaliTranslation: "ডুমুর ফল", arabicName: "التين", type: "মক্কী", versesCount: 8 },
  { number: 96, name: "আল আলাক্ব", englishTranslation: "Al-Alaq", bengaliTranslation: "রক্তপিণ্ড", arabicName: "العلق", type: "মক্কী", versesCount: 19 },
  { number: 97, name: "আল ক্বদর", englishTranslation: "Al-Qadr", bengaliTranslation: "মহিমান্বিত রজনী", arabicName: "القدر", type: "মক্কী", versesCount: 5 },
  { number: 98, name: "আল বাইয়্যিনাহ্", englishTranslation: "Al-Bayyinah", bengaliTranslation: "সুস্পষ্ট প্রমাণ", arabicName: "البينة", type: "মাদানী", versesCount: 8 },
  { number: 99, name: "আয যিলযাল", englishTranslation: "Az-Zalzalah", bengaliTranslation: "ভূমিকম্প", arabicName: "الزلزلة", type: "মাদানী", versesCount: 8 },
  { number: 100, name: "আল আদিয়াত", englishTranslation: "Al-Adiyat", bengaliTranslation: "অভিযানকারী অশ্বদল", arabicName: "العاديات", type: "মক্কী", versesCount: 11 },
  { number: 101, name: "আল কারি'আহ্", englishTranslation: "Al-Qari'ah", bengaliTranslation: "মহা খটখট শব্দকারী কিয়ামত", arabicName: "القارعة", type: "মক্কী", versesCount: 11 },
  { number: 102, name: "আত তাকাসুর", englishTranslation: "At-Takathur", bengaliTranslation: "প্রাচুর্যের প্রতিযোগিতা", arabicName: "التكاثر", type: "মক্কী", versesCount: 8 },
  { number: 103, name: "আল আছর", englishTranslation: "Al-Asr", bengaliTranslation: "মহাকাল", arabicName: "العصر", type: "মক্কী", versesCount: 3 },
  { number: 104, name: "আল হুমাযাহ্", englishTranslation: "Al-Humazah", bengaliTranslation: "পরনিন্দাকারী", arabicName: "الهمزة", type: "মক্কী", versesCount: 9 },
  { number: 105, name: "আল ফীল", englishTranslation: "Al-Fil", bengaliTranslation: "হাতি", arabicName: "الفيل", type: "মক্কী", versesCount: 5 },
  { number: 106, name: "কুরাইশ", englishTranslation: "Quraysh", bengaliTranslation: "কুরাইশ বংশ", arabicName: "قريش", type: "মক্কী", versesCount: 4 },
  { number: 107, name: "আল মা'ঊন", englishTranslation: "Al-Ma'un", bengaliTranslation: "সাহায্য-সহযোগিতা", arabicName: "الماعون", type: "মক্কী", versesCount: 7 },
  { number: 108, name: "আল কাওসার", englishTranslation: "Al-Kawthar", bengaliTranslation: "প্রাচুর্য প্রস্রবণ কাওসার", arabicName: "الكوثر", type: "মক্কী", versesCount: 3 },
  { number: 109, name: "আল কাফিরূন", englishTranslation: "Al-Kafirun", bengaliTranslation: "অবিশ্বাসী দল", arabicName: "الكافرون", type: "মক্কী", versesCount: 6 },
  { number: 110, name: "আন নাসর", englishTranslation: "An-Nasr", bengaliTranslation: "বিজয় সাহায্য", arabicName: "النصر", type: "মাদানী", versesCount: 3 },
  { number: 111, name: "আল মাসাদ", englishTranslation: "Al-Masad", bengaliTranslation: "খেজুরের পাকানো দড়ি", arabicName: "المسد", type: "মক্কী", versesCount: 5 },
  { number: 112, name: "আল ইখলাস", englishTranslation: "Al-Ikhlas", bengaliTranslation: "এককত্ব ও আন্তরিকতা", arabicName: "الإخلاص", type: "মক্কী", versesCount: 4 },
  { number: 113, name: "আল ফালাক্ব", englishTranslation: "Al-Falaq", bengaliTranslation: "ঊষার আলো", arabicName: "الفلق", type: "মক্কী", versesCount: 5 },
  { number: 114, name: "আন নাস", englishTranslation: "An-Nas", bengaliTranslation: "সার্বভৌমিক মানব সমাজ", arabicName: "الناس", type: "মক্কী", versesCount: 6 }
];

export const staticWordByWordVerses: Record<number, QuranVerse[]> = {
  // AL-FATIHA
  1: [
    {
      number: 1,
      text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      words: [
        { ar: "بِسْمِ", bn: "নামে" },
        { ar: "اللَّهِ", bn: "আল্লাহর" },
        { ar: "الرَّحْمَنِ", bn: "পরম করুণাময়" },
        { ar: "الرَّحِيمِ", bn: "অসীম দয়ালু" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে (শুরু করছি)।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "অনন্ত দয়াময় পরম দয়ালু আল্লাহর নামে শুরু করছি।" },
        { scholar: "ইসলামিক ফাউন্ডেশন", text: "পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে।" },
        { scholar: "মাওলানা জহুরুল হক", text: "পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে।" }
      ]
    },
    {
      number: 2,
      text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      words: [
        { ar: "الْحَمْدُ", bn: "সকল প্রশংসা" },
        { ar: "لِلَّهِ", bn: "আল্লাহরই জন্য" },
        { ar: "رَبِّ", bn: "(যিনি) রব" },
        { ar: "الْعَالَمِينَ", bn: "সারা জগতের" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "সমস্ত প্রশংসা আল্লাহর, যিনি জগতসমূহের প্রতিপালক।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "যাবতীয় প্রশংসা আল্লাহ তাআলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।" },
        { scholar: "ইসলামিক ফাউন্ডেশন", text: "সকল প্রশংসা জগতসমূহের প্রতিপালক আল্লাহরই," },
        { scholar: "মাওলানা জহুরুল হক", text: "সমস্ত প্রশংসা আল্লাহর প্রাপ্য, যিনি নিখিল বিশ্বজগতের প্রতিপালনকর্তা।" }
      ]
    },
    {
      number: 3,
      text: "الرَّحْمَنِ الرَّحِيمِ",
      words: [
        { ar: "الرَّحْمَنِ", bn: "পরম দয়ালু" },
        { ar: "الرَّحِيمِ", bn: "অশেষ করুণাময়" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "যিনি অত্যন্ত দয়াময়, পরম করুণাশীল।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "যিনি পরম দয়ালু ও করুণাময়।" },
        { scholar: "ইসলামিক ফাউন্ডেশন", text: "যিনি পরম করুণাময়, অসীম দয়ালু।" },
        { scholar: "মাওলানা জহুরুল হক", text: "যিনি মহাদয়ালু, অত্যন্ত করুণাময়।" }
      ]
    },
    {
      number: 4,
      text: "مَالِكِ يَوْمِ الدِّينِ",
      words: [
        { ar: "مَالِكِ", bn: "একমাত্র মালিক" },
        { ar: "يَوْمِ", bn: "দিনের" },
        { ar: "الدِّينِ", bn: "বিচার ও প্রতিফল" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "যিনি বিচার দিনের মালিক।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "যিনি বিচার দিনের একমাত্র মালিক বা অধিপতি।" },
        { scholar: "ইসলামিক ফাউন্ডেশন", text: "যিনি বিচার দিবসের মালিক।" },
        { scholar: "মাওলানা জহুরুল হক", text: "যিনি বিচার দিবসের অধিপতি।" }
      ]
    },
    {
      number: 5,
      text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      words: [
        { ar: "إِيَّاكَ", bn: "আপনারই শুধু" },
        { ar: "نَعْبُدُ", bn: "আমরা ইবাদত করি" },
        { ar: "وَإِيَّاكَ", bn: "এবং আপনারই শুধু" },
        { ar: "نَسْتَعِينُ", bn: "আমরা সাহায্য চাই" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "আমরা আপনারই ইবাদত করি এবং আপনারই কাছে সাহায্য চাই।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "আমরা একমাত্র আপনারই ইবাদত করছি এবং একমাত্র আপনারই সাহায্য প্রার্থনা করছি।" },
        { scholar: "ইসলামিক ফাউন্ডেশন", text: "আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই সাহায্য প্রার্থনা করি।" },
        { scholar: "মাওলানা জহুরুল হক", text: "আমরা আপনারই দাসত্ব করি, আর আপনারই কাছে সাহায্য চাই।" }
      ]
    },
    {
      number: 6,
      text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      words: [
        { ar: "اهْدِنَا", bn: "আমাদের দেখান" },
        { ar: "الصِّرَاطَ", bn: "পথ" },
        { ar: "الْمُسْتَقِيمَ", bn: "সরল সঠিক" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "আমাদেরকে সরল সঠিক পথ প্রদর্শন করুন।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "আমাদেরকে সরল-সঠিক পথ প্রদর্শন করুন।" },
        { scholar: "ইসলামিক ফাউন্ডেশন", text: "আমাদেরকে সরল সঠিক পথে পরিচালিত করুন;" },
        { scholar: "মাওলানা জহুরুল হক", text: "আমাদের সরল সঠিক পথে পরিচালনা করুন।" }
      ]
    },
    {
      number: 7,
      text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      words: [
        { ar: "صِرَاطَ", bn: "তাদের পথ" },
        { ar: "الَّذِينَ", bn: "যাদের ওপর" },
        { ar: "أَنْعَمْتَ", bn: "আপনি দয়া করেছেন" },
        { ar: "عَلَيْهِمْ", bn: "তাদের ওপর" },
        { ar: "غَيْرِ", bn: "তাদের পথ নয়" },
        { ar: "الْمَغْضُوبِ", bn: "যারা অভিশপ্ত" },
        { ar: "عَلَيْهِمْ", bn: "তাদের ওপর" },
        { ar: "وَلَا", bn: "এবং তারাও নয়" },
        { ar: "الضَّالِّينَ", bn: "যারা পথভ্রষ্ট" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "তাদের পথ, যাদের আপনি অনুগ্রহ দান করেছেন। যারা রোষে পতিত হয়নি এবং পথভ্রষ্টও হয়নি।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "তাঁদের পথ, যাদেরকে আপনি নেয়ামত দান করেছেন; তাঁদের পথ নয় যারা ক্রোধের শিকার এবং পথভ্রষ্ট হয়েছে।" },
        { scholar: "ইসলামিক ফাউন্ডেশন", text: "তাঁদেরই পথ, যাদেরকে আপনি অনুগ্রহ দান করেছেন, যে পথ ক্রোধভাজনদের নয় এবং বিভ্রান্তদেরও নয়।" },
        { scholar: "মাওলানা জহুরুল হক", text: "তাদের সরণিতে চালিত করুন যাদের আপনি অনুগ্রহ দান করেছেন, তাদের নয় যাদের ওপর অভিশাপ নেমেছে, আর পথভ্রষ্টদেরও নয়।" }
      ]
    }
  ],
  // AL-IKHLAS
  112: [
    {
      number: 1,
      text: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      words: [
        { ar: "قُلْ", bn: "বলুন" },
        { ar: "هُوَ", bn: "তিনি" },
        { ar: "اللَّهُ", bn: "আল্লাহ" },
        { ar: "أَحَدٌ", bn: "একক অদ্বিতীয়" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "বলুন, তিনিই আল্লাহ, একক ও অদ্বিতীয়।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "বলুন, তিনিই আল্লাহ, এক।" }
      ]
    },
    {
      number: 2,
      text: "اللَّهُ الصَّمَدُ",
      words: [
        { ar: "اللَّهُ", bn: "আল্লাহ" },
        { ar: "الصَّمَدُ", bn: "ধন্য, অমূখাপেক্ষী" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "আল্লাহ হচ্ছেন নিরপেক্ষ, অমুখাপেক্ষী এবং সকলের আশ্রয়স্থল।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "আল্লাহ অমুখাপেক্ষী।" }
      ]
    },
    {
      number: 3,
      text: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      words: [
        { ar: "لَمْ", bn: "না" },
        { ar: "يَلِدْ", bn: "তিনি জন্ম দিয়েছেন" },
        { ar: "وَلَمْ", bn: "এবং না" },
        { ar: "يُولَدْ", bn: "তাঁকে জন্ম দেওয়া হয়েছে" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "তিনি কাউকে জন্ম দেননি এবং জন্ম নেননি।" }
      ]
    },
    {
      number: 4,
      text: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      words: [
        { ar: "وَلَمْ", bn: "এবং না" },
        { ar: "يَكُن", bn: "হয়েছেন" },
        { ar: "لَّهُ", bn: "তাঁর" },
        { ar: "كُفُوًا", bn: "সমকক্ষ" },
        { ar: "أَحَدٌ", bn: "কেউ" }
      ],
      translations: [
        { scholar: "মুফতী তাকী উসমানী", text: "এবং তাঁর সমকক্ষ বা সমতুল্য কেউই নেই।" },
        { scholar: "মাওলানা মুহিউদ্দিন খান", text: "এবং তাঁর সমতুল্য কেউই নেই।" }
      ]
    }
  ]
};
