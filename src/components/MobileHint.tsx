import { useEffect, useState } from "react";

const STORAGE_KEY = "mobileHintShown_v1";

export default function MobileHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only once per device/browser
    if (localStorage.getItem(STORAGE_KEY) === "1") return;

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (!isMobile || !isPortrait) return;

    setShow(true);
    localStorage.setItem(STORAGE_KEY, "1");

    const t = window.setTimeout(() => setShow(false), 6000);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center px-8">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-center shadow-xl backdrop-blur">
        <p className="text-lg font-semibold text-slate-100">Rotate your phone</p>
        <p className="mt-1 text-sm text-slate-300">
          Drag to move the lanyard.
        </p>
      </div>
    </div>
  );
}
