/**
 * ==============================================================================
 * ❤️ 30 DAYS TO YOUR BIRTHDAY - ROMANTIC SURPRISE CONFIGURATION ❤️
 * ==============================================================================
 * 
 * Edit this file to personalize everything for your girlfriend!
 * All texts, names, dates, passwords, photos, and letters can be changed right here.
 */

export interface MemoryItem {
  id: string;
  title: string;
  date: string;
  location?: string;
  image: string; // URL or local path like "/memories/photo1.jpg"
  caption: string;
  isDemo?: boolean; // Set to false when you replace with your real picture!
  tag?: string;
}

export interface SurpriseConfig {
  // === 1. PERSONAL INFORMATION ===
  senderName: string; // Your name
  recipientName: string; // Your girlfriend's name
  siteTitle: string;
  siteSubtitle: string;

  // === 2. SECRET PASSWORD SCREEN ===
  security: {
    // The secret password she needs to enter (case-insensitive)
    secretPassword: string;
    // Alternative accepted codes (e.g., your anniversary "1024", nicknames)
    alternativePasswords: string[];
    // Helpful romantic hint shown if she forgets
    passwordHint: string;
    // Messages
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
    // Target birthday date in "YYYY-MM-DDTHH:mm:ss" format
    // Defaults to 30 days ahead from today (e.g., Nov 10, 2026)
    targetDate: string;
    // Target timezone (e.g., "Asia/Kolkata", "America/New_York", "Europe/London", or "auto")
    timezone: string;
    // Heading & messages
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

  // === 5. SCRAPBOOK / MEMORIES GALLERY ===
  memoriesData: {
    heading: string;
    subheading: string;
    romanticNote: string[];
    // List of photos in the scrapbook
    items: MemoryItem[];
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
    // If you add your own romantic song to public/audio/bg-music.mp3, it will play!
    // Otherwise, the built-in soft music box lullaby synthesizer will play automatically!
    audioFilePath: string;
    songTitle: string;
    artist: string;
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
  senderName: "Your Boyfriend", // 👈 REPLACE WITH YOUR NAME (e.g., "Fayaz")
  recipientName: "My Sweetheart", // 👈 REPLACE WITH HER NAME (e.g., "Aisha")
  siteTitle: "30 Days to Your Birthday ❤️",
  siteSubtitle: "A Little Romantic World Created Just for You",

  // === 2. SECRET PASSWORD SCREEN ===
  security: {
    // 👈 CHANGE YOUR SECRET PASSWORD HERE! (Case-insensitive)
    secretPassword: "love",
    alternativePasswords: ["1024", "iloveyou", "sweetheart", "birthday", "forever"],
    passwordHint: "Try entering 'love' or our special nickname! 🧸❤️",
    welcomeBadge: "✨ A Secret Gift for You ✨",
    welcomeHeading: "Someone Has a Little Surprise for You... ❤️",
    welcomeSubheading: "This little world was created just for you. Are you ready to open it?",
    inputPlaceholder: "Enter our secret code...",
    unlockButtonText: "Unlock My Surprise 🗝️✨",
    errorToastMessage: "Oopsie! That's not our secret code, sweetheart 🧸💭 Check the hint!",
    successToastMessage: "Welcome in, my favorite person! Opening your world... 💖",
  },

  // === 3. BIRTHDAY & COUNTDOWN CONFIGURATION ===
  birthday: {
    // 👈 SET HER REAL BIRTHDAY DATE HERE!
    // Format: "YYYY-MM-DDTHH:mm:ss"
    // Currently configured for 30 days from launch (November 10, 2026, 00:00:00)
    targetDate: "2026-11-10T00:00:00",
    timezone: "auto", // Set to "auto" or e.g. "Asia/Kolkata", "America/New_York"
    countdownBadge: "🎂 SPECIAL COUNTDOWN",
    countdownHeading: "Happy Birthday in Advance, My Love! ❤️🎂",
    countdownSubheading: "Only 30 Days to Go Until Your Special Day!",
    celebrationText: [
      "Baby, I couldn't wait until your birthday to celebrate you, so I decided to start 30 days early.",
      "You are someone so special to me, and I want these next 30 days to be filled with little reminders of how much you mean to me.",
      "Every day brings us closer to your special day, and every second gives me another reason to smile thinking about you.",
      "This is just the beginning of your birthday surprise. I have memories to show you, feelings to share, and a little letter waiting just for you.",
      "Until your birthday arrives, remember that you deserve all the happiness, love, and beautiful moments in the world.",
      "Happy Birthday in Advance, My Favorite Person! ❤️🧸",
    ],
    birthdayReachedHeading: "🎉 IT'S FINALLY YOUR SPECIAL DAY! 🎂🥳",
    birthdayReachedMessage: "Today is all about YOU, my love! May your day be filled with endless smiles, warmth, and magic. Happy Birthday to the queen of my heart! ❤️✨",
  },

  // === 4. THREE TEDDY BEARS HUB ===
  teddyHub: {
    heading: "Welcome to Our Little World, My Love! 💗",
    subheading: "I have three little surprises for you. Each one holds a little piece of my heart. Choose your teddy!",
    teddy1: {
      badge: "Teddy #1 • Countdown",
      title: "30 Days to Your Special Day!",
      description: "A little countdown filled with all my love.",
      buttonText: "Open Birthday Surprise 🎂",
    },
    teddy2: {
      badge: "Teddy #2 • Scrapbook",
      title: "Our Little Memories",
      description: "Every picture tells a little story about us.",
      buttonText: "Browse Our Memories 📸",
    },
    teddy3: {
      badge: "Teddy #3 • Love Letter",
      title: "A Letter From My Heart",
      description: "Words I want you to keep forever.",
      buttonText: "Read My Letter 💌",
    },
  },

  // === 5. SCRAPBOOK / MEMORIES GALLERY ===
  memoriesData: {
    heading: "Our Little World, Our Little Memories ❤️",
    subheading: "Some moments become memories, and some memories become treasures.",
    romanticNote: [
      "Every picture holds a little piece of our story. Whenever I look at these moments, I remember the happiness, the smiles, and the little things that make them special.",
      "If I could save every beautiful feeling in a photograph, I would fill an entire world with our memories.",
      "These moments mean more to me than words can explain, and I hope they make you smile as much as they make me smile. ❤️",
    ],
    // 👈 REPLACE WITH YOUR REAL PHOTOS & CAPTIONS!
    // To add your own photos:
    // 1. Put your images into `public/memories/` (e.g. `public/memories/photo1.jpg`)
    // 2. Change the `image` path below to `/memories/photo1.jpg`
    // 3. Update the title, date, and caption!
    items: [
      {
        id: "mem-1",
        title: "The Sweetest Beginning",
        date: "Our First Date",
        location: "That Cozy Cafe",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
        caption: "The day everything felt a little brighter. I remember how nervous I was and how effortlessly you made me laugh.",
        isDemo: true,
        tag: "First Sparks ✨",
      },
      {
        id: "mem-2",
        title: "Sunset Whispers",
        date: "Golden Hour Walk",
        location: "By the Lake",
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
        caption: "Watching the sky turn pink and gold with you. The world went quiet, and it was just us two.",
        isDemo: true,
        tag: "Favorite Sunset 🌅",
      },
      {
        id: "mem-3",
        title: "Your Adorable Smile",
        date: "A Random Beautiful Sunday",
        location: "City Garden",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        caption: "Caught mid-laugh! This smile right here has the power to brighten up my heaviest days in a second.",
        isDemo: true,
        tag: "Pure Joy 💖",
      },
      {
        id: "mem-4",
        title: "Late Night Conversations",
        date: "Midnight Under the Stars",
        location: "Under Fairy Lights",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
        caption: "Talking about everything and nothing until 3 AM. Time always moves too fast when I am with you.",
        isDemo: true,
        tag: "Starlight 🌙",
      },
      {
        id: "mem-5",
        title: "Coffee & Stolen Glares",
        date: "Weekend Morning",
        location: "Our Favorite Corner",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        caption: "Warm cups, sweet pastries, and holding hands across the wooden table. Simple moments that feel like home.",
        isDemo: true,
        tag: "Warmth ☕",
      },
      {
        id: "mem-6",
        title: "Hand in Hand Forever",
        date: "Every Day Since",
        location: "Everywhere With You",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
        caption: "Every step we take together is a step I cherish. Here is to making a million more memories together.",
        isDemo: true,
        tag: "Together ❤️",
      },
    ],
  },

  // === 6. PERSONAL LOVE LETTER ===
  loveLetter: {
    heading: "A Little Letter, Just for You 💌",
    envelopeTitle: "Tap to Open With Love",
    envelopeSubtitle: "Sealed with a kiss & kept safe for you",
    letterSalutation: "My Dearest Love,",
    letterParagraphs: [
      "I wanted to create something special for you because one birthday wish never feels like enough to celebrate someone as wonderful as you.",
      "So I made this little world just for you, filled with surprises, memories, and words that come straight from my heart.",
      "I may not always find the perfect words to explain my feelings, but I hope the little things I do remind you how special you are to me.",
      "As your birthday gets closer, I hope every day brings you a new reason to smile. You deserve happiness, beautiful memories, and all the wonderful things life has to offer.",
      "Thank you for being such a special part of my life. I hope this little surprise makes you feel loved and appreciated.",
      "This is only the beginning of your birthday countdown, sweetheart. There is so much more I want to celebrate about you.",
      "Happy Birthday in Advance, My Love! ❤️",
    ],
    letterSignoff: "Forever with love,\nYour Love ❤️", // 👈 Replace with your nickname/name!
    hugButtonText: "One Last Little Hug ❤️",
    hugMessage: "If I could send you one thing through this screen, it would be the biggest hug ever. Until then, let this little surprise remind you how special you are to me. ❤️🧸",
  },

  // === 7. MUSIC CONFIGURATION ===
  music: {
    enabledByDefault: false, // Respects browser autoplay policy
    audioFilePath: "/audio/bg-music.mp3",
    songTitle: "Romantic Music Box Melody",
    artist: "A Gentle Birthday Lullaby",
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
