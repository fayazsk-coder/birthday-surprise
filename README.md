# 30 Days to Your Birthday ❤️ — Romantic Birthday Surprise Website

A complete, premium, romantic, animated birthday surprise web application created for your girlfriend.

Built with **React 19**, **Vite**, **TypeScript**, **Framer Motion**, and a custom **Pastel Fairytale Design System**.

---

## ✨ Features Included

1. **Screen 1 — Secret Password Screen 🗝️**
   - Welcomes her with an adorable animated waving teddy bear holding a glowing heart.
   - Text: *"Someone Has a Little Surprise for You... ❤️"* and *"This little world was created just for you. Are you ready to open it?"*
   - Interactive password input with show/hide password toggle.
   - Animated glowing unlock button.
   - Cute error message and card shake animation if the wrong code is entered.
   - Magical chime, heart confetti explosion, and smooth transition when the correct code is entered.
   - Unlocked session automatically persists in `sessionStorage` while navigating between screens.

2. **Screen 2 — Three Interactive Teddy Bears Hub 🧸**
   - Header: *"Welcome to Our Little World, My Love! 💗"*
   - Subtitle: *"I have three little surprises for you. Each one holds a little piece of my heart. Choose your teddy!"*
   - Three large, adorable interactive cards:
     - 🎂 **Teddy 1: Birthday Surprise** — Holding a delicious birthday cake with glowing candle & wrapped gift.
     - 📸 **Teddy 2: Our Memories** — Holding a cute photo album scrapbook & camera.
     - 💌 **Teddy 3: My Love Letter** — Holding a wax-sealed love letter with heart seal.
   - Float, sway, glow, and micro-interactions on hover & tap.
   - Working back navigation to easily explore each teddy bear.

3. **Screen 3 — Birthday Countdown 🎂**
   - Interactive gift unboxing with confetti fireworks.
   - Header: *"Happy Birthday in Advance, My Love! ❤️🎂"*
   - Dynamic countdown subtitle: *"Only X Days to Go Until Your Special Day!"*
   - Real-time live countdown timer (Days, Hours, Minutes, Seconds) calculated based on her actual configured birthday date.
   - Heartfelt message celebrating starting 30 days early.
   - Dedicated *"Back to My Teddy Bears 🧸"* button.

4. **Screen 4 — Our Memories (Scrapbook Gallery) 📸**
   - Romantic scrapbook with Polaroid-style cards.
   - Natural slight rotations, washi tape & heart pin decorations, dates, locations, and sweet captions.
   - Clicking any photo opens an interactive **Photo Lightbox Modal** with full details and love reaction button.
   - Includes the complete romantic message about preserving memories in photographs.
   - Clearly marked demo photos until you add your real pictures.

5. **Screen 5 — Personal Love Letter & Hug Surprise 💌**
   - Centered vintage envelope with wax seal.
   - Click to break the wax seal and unfold the parchment letter.
   - Smooth typewriter animation for the romantic letter (with an instant skip button if she wants to read immediately).
   - Interactive button: **“One Last Little Hug ❤️”** — triggers an adorable animated hugging teddy bear (`TeddyHug`), floating heart explosion, and the sweetest hug message.

6. **Romantic Music System 🎵**
   - Floating music toggle in the top navbar.
   - Built-in **Romantic Music Box Synthesizer** (powered by Web Audio API): plays a gentle lullaby arpeggio right out of the box without requiring any external MP3 download!
   - Supports custom MP3: if you drop your favorite song into `public/audio/bg-music.mp3`, it will automatically play that instead.
   - Respects autoplay policies and visitor preferences.

---

## 🛠️ How to Personalize (In 1 File!)

All personalization is centralized in **`src/config/surpriseConfig.ts`**:

### 1. Change Names & Password
Open `src/config/surpriseConfig.ts` and edit:
```typescript
senderName: "Your Name",         // 👈 Your name (e.g., "Fayaz")
recipientName: "Her Name",       // 👈 Her name (e.g., "Aisha")

security: {
  secretPassword: "love",        // 👈 Your secret code or anniversary date
  passwordHint: "Try entering 'love' or our special nickname! 🧸❤️",
}
```

### 2. Set Her Actual Birthday Date
```typescript
birthday: {
  // Format: "YYYY-MM-DDTHH:mm:ss"
  targetDate: "2026-11-10T00:00:00", // 👈 Set to her real birthday!
  timezone: "auto",
}
```

### 3. Add Your Real Photos & Captions
1. Place your photos into the `public/memories/` folder (e.g., `public/memories/photo1.jpg`).
2. In `src/config/surpriseConfig.ts`, update the `items` array:
```typescript
{
  id: "mem-1",
  title: "Our First Date",
  date: "October 15, 2024",
  location: "Sunset Cafe",
  image: "/memories/photo1.jpg", // 👈 Path to your photo
  caption: "The day everything felt a little brighter...",
  isDemo: false,
}
```

### 4. Edit Your Love Letter
In `src/config/surpriseConfig.ts`, update `loveLetter.letterParagraphs` and `loveLetter.letterSignoff` with your own personal love notes.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🌐 Deploying to Vercel or Netlify (To get a Public HTTPS Link)

To share this surprise with your girlfriend, you need a public HTTPS link (do not send localhost).

### Option A: 1-Click Deploy via Vercel CLI
```bash
# Build production bundle
npm run build

# Deploy to Vercel
npx vercel
```
Follow the short terminal prompts (press Enter to accept defaults). You will get a live link such as:
`https://30-days-to-your-birthday.vercel.app`

### Option B: Deploy via GitHub & Vercel Dashboard
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Romantic birthday surprise website"
   git remote add origin https://github.com/YOUR_USERNAME/birthday-surprise.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will build and provide your free HTTPS link!

---

## 📱 Generating the QR Code for Her

1. Open the deployed website link on your phone to verify everything looks perfect.
2. In the website, click the **"Setup Guide & QR"** button in the top navbar, go to tab **"3. Generate QR Code"**, and enter your live URL.
3. Or visit any free QR code generator (e.g., [qr-code-generator.com](https://www.qr-code-generator.com/)) and enter your live deployed HTTPS URL:
   `https://your-site-name.vercel.app`
4. Download or print the QR code image.
5. Print it on a cute card, place it in an envelope with chocolates or flowers, and tell her:
   *"Scan me for your birthday surprise ❤️🧸"*

---

## 🔒 Privacy Notice

The password on this website is implemented on the frontend in JavaScript. This creates a charming, playful, interactive experience for a romantic gift. 

It is **not** bank-grade cryptographic security. Any technical user with access to browser developer tools could inspect client-side files. If you require absolute confidential protection for sensitive media, implement server-side authentication with protected cloud storage.
