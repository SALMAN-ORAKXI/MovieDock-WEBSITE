import React, { useEffect } from 'react';
import { ShieldCheck, Lock, EyeOff, Server, FileText } from 'lucide-react';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16 px-4 max-w-4xl mx-auto">
      
      <div className="text-center mb-10">
        <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 mx-auto flex items-center justify-center mb-3">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy & Safety
        </h1>
        <p className="text-sm text-slate-600 mt-2">MovieDock Official Portal • Android Security Verified</p>
      </div>

      <div className="space-y-4">
        
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-base mb-2">
            <Lock className="w-5 h-5 text-sky-600" />
            1. Zero Personal Data Logging
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            MovieDock does not ask for or collect names, email addresses, phone numbers, or account passwords. You can search, stream, and download without registering.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-base mb-2">
            <Server className="w-5 h-5 text-sky-600" />
            2. Storage Permissions Explained
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The application only requires storage access to write media files to your Downloads folder when you explicitly tap the download button. We do not inspect other files on your device.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-base mb-2">
            <EyeOff className="w-5 h-5 text-sky-600" />
            3. Advertising & Monetag Network
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            To provide continuous free downloads and server upkeep, non-intrusive ads from verified ad networks (like Monetag) may appear. These networks comply with standard privacy frameworks.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-base mb-2">
            <FileText className="w-5 h-5 text-sky-600" />
            4. Support & Legal Inquiries
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            For privacy inquiries or technical support, contact developer Salman Khan via WhatsApp at <strong>+92 327 5176283</strong>.
          </p>
        </div>

      </div>

    </div>
  );
}