import Lanyard from "../components/lanyard";
import Hero from "../components/sections/hero";
import Infograph from "../components/sections/infograph";
import { DocumentTitle } from "../utils/utils";

export default function Home() {
  DocumentTitle("Home | Danny Hagenlocker");
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24">
      <div className="fixed inset-0 hidden max-h-screen md:block">
        <Lanyard />
      </div>
      {/*
        <div className="fixed bottom-0 right-0 z-20 m-8 hidden lg:block">
          <ImageJackbox />
        </div>
      */}

      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Hero></Hero>
        <Infograph></Infograph>
      </div>
    </div>
  );
}
