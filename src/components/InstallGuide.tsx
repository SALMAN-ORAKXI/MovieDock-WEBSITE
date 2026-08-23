import React from 'react';
import { ArrowDownToLine, LockOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export default function InstallGuide() {
  const steps = [
    {
      step: "01",
      icon: ArrowDownToLine,
      title: "Download APK File",
      desc: "Tap the Download APK button on this website to save 'app-release.apk' onto your Android device."
    },
    {
      step: "02",
      icon: LockOpen,
      title: "Allow Unknown Sources",
      desc: "If Android asks for verification, tap Settings → Security and allow installation from your web browser."
    },
    {
      step: "03",
      icon: Sparkles,
      title: "Install & Stream",
      desc: "Open the downloaded file from notifications, click Install, and launch MovieDock for unlimited 4K streaming!"
    }
  ];

  return (
    <section id="install-guide" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200/80">
          Fast Installation
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3">
          How to Install MovieDock on Android
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          No rooting required. Ready to stream in under 30 seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="liquid-glass-card rounded-[32px] p-7 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-200">
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-black text-sky-300 font-mono">
                  {s.step}
                </span>
                <div className="w-11 h-11 rounded-2xl bg-sky-100/90 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                <span>Verified Android Package</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}