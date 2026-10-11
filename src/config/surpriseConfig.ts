/**
 * ==============================================================================
 * ❤️ 30 DAYS TO YOUR BIRTHDAY - ROMANTIC SURPRISE CONFIGURATION ❤️
 * ==============================================================================
 */

export interface SurpriseConfig {
  // === 1. PERSONAL INFORMATION ===
  senderName: string; // Your name
  recipientName: string; // Her romantic name
  siteTitle: string;
  siteSubtitle: string;

  // === 2. SECRET PASSWORD SCREEN ===
  security: {
    secretPassword: string;
    alternativePasswords: string[];
    passwordHint: string;
    welcomeBadge: string;
    welcomeHeading: string;
    welcomeSubheading: string;
    inputPlaceholder: string;
    unlockButtonText: string;
    errorToastMessage: string;
    successToastMessage: string;
  };

  // === 3. BIRTHDAY & COUNTDOWN CONFIGURATION ===
  birthday: {
    targetDate: string;
    timezone: string;
    countdownBadge: string;
    countdownHeading: string;
    countdownSubheading: string;
    celebrationText: string[];
    birthdayReachedHeading: string;
    birthdayReachedMessage: string;
  };

  // === 4. THREE TEDDY BEARS HUB ===
  teddyHub: {
    heading: string;
    subheading: string;
    teddy1: {
      badge: string;
      title: string;
      description: string;
      buttonText: string;
    };
    teddy2: {
      badge: string;
      title: string;
      description: string;
      buttonText: string;
    };
    teddy3: {
      badge: string;
      title: string;
      description: string;
      buttonText: string;
    };
  };

  // === 5. SHAYARI & HEARTFELT FEELINGS ===
  shayariData: {
    heading: string;
    subheading: string;
    lines: string[];
    concludingNote: string;
    secretLoveTag: string;
  };

  // === 6. PERSONAL LOVE LETTER ===
  loveLetter: {
    heading: string;
    envelopeTitle: string;
    envelopeSubtitle: string;
    letterSalutation: string;
    letterParagraphs: string[];
    letterSignoff: string;
    hugButtonText: string;
    hugMessage: string;
  };

  // === 7. MUSIC CONFIGURATION ===
  music: {
    enabledByDefault: boolean;
    audioFilePath: string;
    songTitle: string;
    artist: string;
    youtubeVideoId: string;
    youtubeStartSeconds: number;
  };

  // === 8. THEME & COLORS ===
  theme: {
    primaryPink: string;
    lavender: string;
    roseGold: string;
    cream: string;
    floatingHeartsCount: number;
  };
}

export const surpriseConfig: SurpriseConfig = {
  // === 1. PERSONAL INFORMATION ===
  senderName: "Fayzuuu",
  recipientName: "Bubbuuuu ❤️",
  siteTitle: "30 Days to Your Birthday ❤️",
  siteSubtitle: "A Little Romantic World Created Just for Chokkiii Maaa",

  // === 2. SECRET PASSWORD SCREEN ===
  security: {
    secretPassword: "Fayzuuu ka biwi",
    alternativePasswords: [
      "fayzuuu ka biwi",
      "fayzuuu ki biwi",
      "fayzu ka biwi",
      "fayzu ki biwi",
      "fayzuu ka biwi",
      "fayzuu ki biwi",
      "fayzuuu",
      "bubbuuuu",
      "bubbu",
      "biwi jii",
      "biwijii",
      "biwi",
      "love",
    ],
    // Hint now just asks the question without giving away the answer!
    passwordHint: "Who are you to Fayzuuu? 🧸💭❤️ (Batao batao... tum meri kaun ho?)",
    welcomeBadge: "✨ A Secret Gift for Chokkiii Maaa ✨",
    welcomeHeading: "Someone Has a Little Surprise for You, Chokkiii Maaa... ❤️",
    welcomeSubheading: "This little world was created just for you. Are you ready to open it?",
    inputPlaceholder: "Enter our secret code...",
    unlockButtonText: "Unlock My Surprise 🗝️✨",
    errorToastMessage: "Oopsie! That's not our secret code, sweetheart 🧸💭 Check the hint!",
    successToastMessage: "Welcome in, Bubbuuuu! (Mera pyaar, meri Biwi jii ❤️) Opening your world... 💖",
  },

  // === 3. BIRTHDAY & COUNTDOWN CONFIGURATION ===
  birthday: {
    targetDate: "2026-11-11T00:00:00",
    timezone: "auto",
    countdownBadge: "✨ 30 DAYS ADVANCE BIRTHDAY SURPRISE ✨",
    countdownHeading: "Happy Birthday in Advance, Chokkiii Maaa! ❤️🎂",
    countdownSubheading: "Only 30 Days to Go Until My Special Day (Your Birthday, Bubbuuuu)!",
    celebrationText: [
      "Chokkiiiiii, I couldn't wait until your birthday to celebrate you, so I decided to start 30 days early.",
      "You are someone so special to me, and I want these next 30 days to be filled with little reminders of how much you mean to me, Bubbuuuu.",
      "Every day brings us closer to your special day, and every second gives me another reason to smile thinking about you.",
      "This is just the beginning of your birthday surprise. I have feelings to share, a little shayari, and a letter waiting just for you.",
      "Until your birthday arrives, remember that you deserve all the happiness, love, and beautiful moments in the world, Chokkiii Maaa.",
      "Happy Birthday in Advance, My Favorite Person (Meri Biwi jii)! ❤️🧸",
    ],
    birthdayReachedHeading: "🎉 IT'S FINALLY YOUR SPECIAL DAY! 🎂🥳",
    birthdayReachedMessage: "Today is all about YOU, Chokkiii Maaa! May your day be filled with endless smiles, warmth, and magic. Happy Birthday to the queen of my heart, Bubbuuuu! ❤️✨",
  },

  // === 4. THREE TEDDY BEARS HUB ===
  teddyHub: {
    heading: "Welcome to Our Little World, Chokkiii Maaa! 💗",
    subheading: "I have three little surprises for you, Bubbuuuu. Each one holds a piece of my heart. Choose your teddy!",
    teddy1: {
      badge: "Teddy #1 • Advance Wishes",
      title: "30 Days to My Special Day!",
      description: "A little countdown filled with all my love for you, Chokkiii Maaa.",
      buttonText: "Open Birthday Surprise 🎂",
    },
    teddy2: {
      badge: "Teddy #2 • Fayzuuu Ki Shayari",
      title: "Dil Ki Shayari & Feelings 💖",
      description: "Sukoon milta hai tere paas aakar jo milta kisi aur se nhi...",
      buttonText: "Read My Heart's Shayari 📜✨",
    },
    teddy3: {
      badge: "Teddy #3 • Love Letter",
      title: "A Letter From My Heart",
      description: "Words I want you to keep forever, Bubbuuuu.",
      buttonText: "Read My Letter 💌",
    },
  },

  // === 5. SHAYARI & HEARTFELT FEELINGS ===
  shayariData: {
    heading: "Dil Ki Baat & Fayzuuu Ki Shayari ❤️",
    subheading: "Sukoon milta hai tere paas aakar...",
    lines: [
      "Sukoon milta hai tere paas aakar jo milta kisi aur se nhi,",
      "Ishq hai ya Kuch aur nhi maloom magar jo tujhse hai wo kisi aur se nhi...",
      "Ishq, mohabbat sab kuch ho gaya hai tumse, khud se zyada, sab se zyada, hadd se zyada.",
    ],
    concludingNote: "Chokkiii Maaa, tum sirf meri khushi nahi, meri rooh ka sukoon ho. Har ek pal jo tumhare saath hota hai, wo meri zindagi ka sabse khubsurat ehsaas ban jata hai. 💖",
    secretLoveTag: "Hamesha sirf tumhara, aur sirf tum meri Biwi jii ❤️💍",
  },

  // === 6. PERSONAL LOVE LETTER ===
  loveLetter: {
    heading: "A Little Letter, Just for Chokkiii Maaa 💌",
    envelopeTitle: "Tap to Open With Love, Bubbuuuu",
    envelopeSubtitle: "Sealed with a kiss & kept safe just for you",
    letterSalutation: "My Dearest Chokkiiiiii (Bubbuuuu),",
    letterParagraphs: [
      "I wanted to create something special for you, Chokkiiiiii, because one birthday wish never feels like enough to celebrate someone as wonderful as you.",
      "So I made this little world just for you, Bubbuuuu, filled with surprises, feelings, and words that come straight from my heart.",
      "I may not always find the perfect words to explain my feelings, but I hope the little things I do remind you how special you are to me.",
      "As your birthday gets closer, I hope every day brings you a new reason to smile. You deserve happiness, beautiful memories, and all the wonderful things life has to offer.",
      "Thank you for being such a special part of my life, Chokkiii Maaa. I hope this little surprise makes you feel loved and appreciated.",
      "This is only the beginning of your birthday countdown, sweetheart. There is so much more I want to celebrate about you.",
      "Happy Birthday in Advance, My Love! ❤️",
    ],
    letterSignoff: "Forever with love,\nYour Fayzuuu ❤️\n(Hamesha tumhara... aur sirf tum meri Biwi jii ❤️)",
    hugButtonText: "One Last Little Hug ❤️",
    hugMessage: "If I could send you one thing through this screen, it would be the biggest hug ever. Until then, remember you are my Chokkiii Maaa, my Bubbuuuu, my Biwi jii, and my whole world. ❤️🧸",
  },

  // === 7. MUSIC CONFIGURATION ===
  music: {
    enabledByDefault: false,
    audioFilePath: "/audio/bg-music.m4a",
    youtubeVideoId: "yQ6d627OZig",
    youtubeStartSeconds: 30,
    songTitle: "Samjhawan (Our Favorite Song) ❤️",
    artist: "Dedicated to Chokkiii Maaa from Fayzuuu",
  },

  // === 8. THEME & COLORS ===
  theme: {
    primaryPink: "#ff7597",
    lavender: "#d8b4e2",
    roseGold: "#d47a88",
    cream: "#fffdf9",
    floatingHeartsCount: 22,
  },
};
