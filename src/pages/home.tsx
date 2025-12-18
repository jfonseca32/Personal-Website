import { useEffect, useState } from "react";
import Lanyard from "../components/lanyard";
import Hero from "../components/sections/hero";
import Infograph from "../components/sections/infograph";
import { useDocumentTitle } from "../utils/utils";

function useShowLanyard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const mdUp = window.matchMedia("(min-width: 768px)").matches;
      const isLandscape = w > h;

      // show on desktop/tablet OR on mobile landscape
      setShow(mdUp || isLandscape);
    };

    compute();

    const onChange = () => {
      // iOS sometimes needs a beat after rotate before dimensions settle
      window.setTimeout(compute, 50);
    };

    window.addEventListener("resize", onChange);
    window.addEventListener("orientationchange", onChange);

    return () => {
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
    };
  }, []);

  return show;
}

export default function Home() {
  useDocumentTitle("Home | Joao Pedro Dudziak Fonseca");

  const showLanyard = useShowLanyard();

  return (
    <>
      {showLanyard && (
        <div className="fixed inset-0 max-h-screen">
          <Lanyard />
        </div>
      )}

      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Hero />
        <Infograph />
      </div>
    </>
  );
}
