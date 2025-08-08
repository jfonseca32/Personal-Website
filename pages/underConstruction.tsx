import { useNavigate } from "react-router-dom";
import { DocumentTitle } from "../utils/utils";
import "../components/loader.css";

export default function UnderConstruction() {
  const navigate = useNavigate();
  DocumentTitle("🚧 This page is under construction 🚧");

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="mb-6 flex flex-row items-center">
        <div className="loader mr-4 border-r-2 border-slate-400 pr-4" />
        <h1 className="font-medium">
          🚧 Coming soon, this page is currently under construction! 🚧
        </h1>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 rounded border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:bg-white/10"
      >
        ← Go Back
      </button>
    </div>
  );
}
