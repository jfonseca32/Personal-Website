import TypewriterComponent from "typewriter-effect";
import SocialBar from "../socialBar";

export default function Hero() {
  return (
    <div className="pointer-events-none z-10 flex flex-col pt-16 md:sticky md:top-0 md:max-h-screen md:basis-1/2">
      <div className="pointer-events-auto rounded-lg border border-slate-400 border-opacity-0 p-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 drop-shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-slate-400 sm:text-5xl">
          <a href="/">Joao Pedro</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl">
          <TypewriterComponent
            options={{
              delay: 50,
              deleteSpeed: "natural",
              strings: [
                "Senior at Georgia Tech",
                "Studying ME + CS",
                "Bhamla Lab Undegraduate Researcher",
                "Coca-Cola Engineering Intern",
                "HyTech Racing Aerodynamics Engineer",
                "Inverse Kinematics ML Research",
                "Rochinha Ice-Cream Production Engineer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <SocialBar />
      </div>
    </div>
  );
}
