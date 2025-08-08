import TypewriterComponent from "typewriter-effect";
import SocialBar from "../socialBar";

export default function Hero() {
  return (
    <div className="pointer-events-none z-10 flex flex-col pt-16 md:sticky md:top-0 md:max-h-screen md:basis-1/2">
      <div className="pointer-events-auto rounded-lg border border-slate-400 border-opacity-0 p-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 drop-shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-slate-400 sm:text-5xl">
          <a href="/">Danny Hagenlocker</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl">
          <TypewriterComponent
            options={{
              delay: 50,
              deleteSpeed: "natural",
              strings: [
                "Freshman at Stanford",
                "Studying EE + CS",
                "YC Summer Fellow Grant Recipient",
                "Amazon SDE Intern",
                "Stanford ARMLab Research Assistant",
                "NASA ML Research",
                "FIRST Robotics Alumni Mentor",
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
