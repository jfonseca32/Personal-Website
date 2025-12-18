import { useEffect, useState } from "react";

export default function MobileHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (!isMobile || !isPortrait) return;

    setShow(true);

    const t = window.setTimeout(() => setShow(false), 6000);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center px-6">
      {/* Dark overlay to separate it from the background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Message card */}
      <div className="relative w-full max-w-sm rounded-2xl border border-white/30 bg-slate-900/95 p-5 text-center shadow-2xl ring-2 ring-yellow-400/40">
        <p className="text-xl font-extrabold text-white drop-shadow">
          Rotate your phone
        </p>
        <p className="mt-2 text-base font-medium text-slate-100">
          Drag to move the lanyard.
        </p>

        {/* little “hint” icon bar */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-yellow-200/90">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-300" />
          <span>Tip</span>
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-300" />
        </div>
      </div>
    </div>
  );
}
