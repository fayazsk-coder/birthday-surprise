import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, QrCode, Globe, Key, ShieldAlert, Image, Calendar } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'customize' | 'deploy' | 'qrcode' | 'privacy'>('customize');
  const [testUrl, setTestUrl] = useState('https://my-birthday-surprise.vercel.app');

  if (!isOpen) return null;

  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(testUrl)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-rose-950/70 backdrop-blur-md">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-200 max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-pink-500 via-rose-500 to-rose-400 text-white flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-200" />
                <h2 className="font-serif text-xl sm:text-2xl font-bold">
                  Boyfriend's Setup & Deployment Guide
                </h2>
              </div>
              <p className="text-xs text-rose-100 mt-1">
                Everything you need to personalize, deploy, and generate the QR code!
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-pink-100 bg-pink-50/50 px-4 pt-2 overflow-x-auto gap-2">
            <button
              onClick={() => setActiveTab('customize')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'customize'
                  ? 'bg-white text-rose-600 border-t border-x border-pink-200 shadow-sm'
                  : 'text-rose-800/70 hover:text-rose-900'
              }`}
            >
              <Key className="w-4 h-4" />
              <span>1. Customize Info & Photos</span>
            </button>

            <button
              onClick={() => setActiveTab('deploy')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'deploy'
                  ? 'bg-white text-rose-600 border-t border-x border-pink-200 shadow-sm'
                  : 'text-rose-800/70 hover:text-rose-900'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>2. Deploy Online (Vercel)</span>
            </button>

            <button
              onClick={() => setActiveTab('qrcode')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'qrcode'
                  ? 'bg-white text-rose-600 border-t border-x border-pink-200 shadow-sm'
                  : 'text-rose-800/70 hover:text-rose-900'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>3. Generate QR Code</span>
            </button>

            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'bg-white text-rose-600 border-t border-x border-pink-200 shadow-sm'
                  : 'text-rose-800/70 hover:text-rose-900'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>4. Privacy Notice</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 overflow-y-auto flex-1 font-sans text-rose-950 text-sm space-y-4">
            {activeTab === 'customize' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                  <h3 className="font-bold text-rose-900 flex items-center gap-2 mb-1">
                    <Key className="w-4 h-4 text-rose-500" />
                    <span>All Configuration is in One File:</span>
                  </h3>
                  <code className="text-xs bg-white px-2 py-1 rounded text-rose-700 font-mono">
                    src/config/surpriseConfig.ts
                  </code>
                  <p className="text-xs text-rose-800/80 mt-2">
                    Open that single file to edit names, password, birthday date, timezone, messages, love letter, and photo memories!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-pink-100 bg-white">
                    <h4 className="font-semibold text-rose-900 flex items-center gap-1.5 mb-1">
                      <Key className="w-4 h-4 text-pink-500" />
                      <span>Change Secret Password</span>
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      In <code className="text-rose-600">surpriseConfig.ts</code>, look for:
                    </p>
                    <pre className="text-[11px] bg-slate-900 text-pink-200 p-2.5 rounded-lg overflow-x-auto">
{`security: {
  secretPassword: "love", // change this!
  passwordHint: "Try entering 'love'!"
}`}
                    </pre>
                  </div>

                  <div className="p-4 rounded-xl border border-pink-100 bg-white">
                    <h4 className="font-semibold text-rose-900 flex items-center gap-1.5 mb-1">
                      <Calendar className="w-4 h-4 text-pink-500" />
                      <span>Set Her Birthday Date</span>
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      In <code className="text-rose-600">surpriseConfig.ts</code>, look for:
                    </p>
                    <pre className="text-[11px] bg-slate-900 text-pink-200 p-2.5 rounded-lg overflow-x-auto">
{`birthday: {
  targetDate: "2026-11-10T00:00:00",
  timezone: "auto"
}`}
                    </pre>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-pink-100 bg-white">
                  <h4 className="font-semibold text-rose-900 flex items-center gap-1.5 mb-1">
                    <Image className="w-4 h-4 text-pink-500" />
                    <span>How to Add Your Real Photos</span>
                  </h4>
                  <ol className="list-decimal list-inside text-xs text-gray-700 space-y-1 mt-2">
                    <li>Copy your photos into the <code className="text-rose-600 font-mono">public/memories/</code> folder (e.g. <code className="font-mono">photo1.jpg</code>).</li>
                    <li>In <code className="text-rose-600 font-mono">surpriseConfig.ts</code>, update the <code className="font-mono">image: "/memories/photo1.jpg"</code>.</li>
                    <li>Update the title, date, location, and your personal caption for each photo.</li>
                    <li>Set <code className="font-mono">isDemo: false</code>.</li>
                  </ol>
                </div>
              </div>
            )}

            {activeTab === 'deploy' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200">
                  <h3 className="font-bold text-rose-900 mb-1">How to Deploy to Vercel (Fastest & Free)</h3>
                  <p className="text-xs text-rose-800">
                    Deploying gives you a permanent, live HTTPS link that works directly on your girlfriend's phone!
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-xl border border-pink-100">
                    <strong className="text-rose-950 text-xs">Step 1: Test Build Locally</strong>
                    <pre className="text-[11px] bg-slate-900 text-emerald-300 p-2 rounded mt-1">
                      npm run build
                    </pre>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-pink-100">
                    <strong className="text-rose-950 text-xs">Step 2: Deploy to Vercel via CLI</strong>
                    <p className="text-xs text-gray-600 mb-1">Run in your project terminal:</p>
                    <pre className="text-[11px] bg-slate-900 text-emerald-300 p-2 rounded">
                      npx vercel
                    </pre>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Press enter to accept all defaults. When prompted, link your Vercel account.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-pink-100">
                    <strong className="text-rose-950 text-xs">Alternative: Push to GitHub & Connect to Vercel or Netlify</strong>
                    <ol className="list-decimal list-inside text-xs text-gray-600 mt-1 space-y-1">
                      <li>Push your repository to GitHub.</li>
                      <li>Visit <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-rose-600 underline">vercel.com</a> or <a href="https://netlify.com" target="_blank" rel="noreferrer" className="text-rose-600 underline">netlify.com</a>.</li>
                      <li>Click "Add New Project" and import your repo.</li>
                      <li>Vercel automatically detects Vite! Click "Deploy".</li>
                      <li>You will receive an HTTPS URL (e.g., <code className="text-rose-600 font-mono">https://30-days-surprise.vercel.app</code>).</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'qrcode' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <h3 className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                    <QrCode className="w-4 h-4 text-amber-600" />
                    <span>Important Rule for QR Codes:</span>
                  </h3>
                  <p className="text-xs text-amber-800">
                    <strong>NEVER generate a QR code pointing to localhost!</strong> Her phone cannot access localhost on your computer. First deploy the site to Vercel or Netlify to get a real public HTTPS URL, then generate the QR code pointing to that URL.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-pink-100 bg-white">
                  <label className="block text-xs font-semibold text-rose-900 mb-1.5">
                    Enter your live deployed HTTPS URL here to generate the QR code:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={testUrl}
                      onChange={(e) => setTestUrl(e.target.value)}
                      placeholder="https://your-site-name.vercel.app"
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-pink-200 focus:outline-none focus:border-rose-400 font-mono"
                    />
                  </div>
                </div>

                {/* QR Code Preview */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-pink-50/60 border border-pink-200">
                  <div className="p-3 bg-white rounded-2xl shadow-md border border-pink-100">
                    <img
                      src={qrApiUrl}
                      alt="Surprise QR Code"
                      className="w-44 h-44 rounded-lg object-contain"
                    />
                  </div>

                  <div className="space-y-2 text-xs">
                    <strong className="text-rose-950 block text-sm">How to Print & Test:</strong>
                    <p className="text-gray-600">
                      1. Open your camera app on your phone and point it at the QR code to verify it opens the live site!
                    </p>
                    <p className="text-gray-600">
                      2. Right click the QR code image above to save it, or print it out on a cute greeting card or romantic envelope.
                    </p>
                    <p className="text-gray-600">
                      3. Give it to her with a little note: "Scan me for your birthday surprise ❤️🧸".
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300">
                  <h3 className="font-bold text-rose-950 flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    <span>Important Privacy & Security Disclaimer</span>
                  </h3>
                  <div className="text-xs text-rose-900 space-y-2 leading-relaxed">
                    <p>
                      <strong>Client-Side Password Notice:</strong> The password lock screen in this application is implemented using frontend JavaScript.
                    </p>
                    <p>
                      This is designed as a <em>romantic, playful novelty experience</em> for your girlfriend to scan the QR code and unlock her surprise gift.
                    </p>
                    <p>
                      <strong>It is NOT encrypted military-grade security.</strong> Any technically skilled user inspecting frontend network requests or JavaScript bundles could view images and text.
                    </p>
                    <p>
                      If you ever need genuine, confidential privacy for highly sensitive personal data, you should implement backend server-side session authentication with protected cloud storage.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-pink-50/70 border-t border-pink-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-sm cursor-pointer"
            >
              Close Setup Guide
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
