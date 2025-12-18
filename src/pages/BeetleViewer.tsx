import "@google/model-viewer";
import { useEffect, useRef, useState } from "react";

export default function BeetleViewer() {
  const ref = useRef<any>(null);
  const [msg, setMsg] = useState("Loading model…");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onLoad = () => setMsg("");
    const onError = (e: any) => {
      console.error("model-viewer failed:", e);
      setMsg("Failed to load model. Open DevTools → Console/Network for details.");
    };

    el.addEventListener("load", onLoad);
    el.addEventListener("error", onError);
    return () => {
      el.removeEventListener("load", onLoad);
      el.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold text-white">VW Beetle Assembly</h1>

      <div className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/5">
        {msg && (
          <div className="absolute inset-0 z-10 grid place-items-center text-slate-300">
            {msg}
          </div>
        )}

        <model-viewer
          ref={ref}
          src="/beetle_assembly.glb"
          camera-controls
          auto-rotate
          shadow-intensity="0.8"
          exposure="1"
          style={{ width: "100%", height: "600px" }}
        />
      </div>
    </div>
  );
}
