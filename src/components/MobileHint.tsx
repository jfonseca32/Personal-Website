import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "mobileHintShown_v2";

export default function MobileHint() {
  const [show, setShow] = useState(false);
  const timerRef = useRef<number | null>(null);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, "1");
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    // Only once per device/browser
    if (localStorage.getItem(STORAGE_KEY) === "1") return;

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    // Only show when it actually helps
    if (!isMobile || !isPortrait) return;

    setShow(true);

    // Auto-dismiss after 6s
    timerRef.current = window.setTimeout(() => {
      dismiss();
    }, 6000);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center px-6">
      {/* Overlay (tap outside to dismiss) */}
      <button
        aria-label="Dismiss hint overlay"
        onClick={dismiss}
        className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-sm"
      />

      {/* Message card */}
      <div className="relative w-full max-w-sm rounded-2xl border border-white/30 bg-slate-900/95 p-5 text-center shadow-2xl ring-2 ring-yellow-400/40">
        <p className="text-xl font-extrabold text-white drop-shadow">
          Rotate your phone
        </p>
        <p className="mt-2 text-base font-medium text-slate-100">
          Drag to move the lanyard.
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-yellow-200/90">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-300" />
          <span>Tip</span>
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-300" />
        </div>

        <div className="mt-5 flex justify-center">
          <button
            onClick={dismiss}
            className="rounded-xl bg-yellow-400 px-5 py-2 text-sm font-bold text-slate-900 shadow hover:bg-yellow-300 active:scale-[0.99]"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
