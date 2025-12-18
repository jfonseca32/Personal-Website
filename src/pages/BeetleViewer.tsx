import "@google/model-viewer";

export default function BeetleViewer() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold text-white">VW Beetle Assembly</h1>
      <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <model-viewer
          src="/beetle_assembly.glb"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "600px" }}
        />
      </div>
    </div>
  );
}
