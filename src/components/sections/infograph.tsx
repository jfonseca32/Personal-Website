import Button from "../button";
import ExperienceCard from "../experienceCard";

export default function Infograph() {
  return (
    <div className="z-10 flex flex-col pb-10 md:basis-1/2 md:pt-20">
      <div>
        <h1 className="top-0 z-50 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200">
          About Me
        </h1>
        <div className="mb-8">
          <AboutMe />
        </div>
      </div>

      <div>
        <h1 className="top-0 z-50 mb-4 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200">
          Experiences
        </h1>
        <div className="mb-8">
          <Experience />
          <div className="mt-4">
            <Button text="View Resume" xlink="/resume.pdf" />
          </div>
        </div>
      </div>

      {/* <h1 className="sticky top-0 z-50 mb-4 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200 backdrop-blur-md">
        Projects
      </h1>
      <div>
        <Projects />
        <div className="mt-4">
          <Button text="View All Projects" xlink="/under-construction" />
        </div>
      </div> */}
    </div>
  );
}

{/* prettier-ignore */}
function AboutMe() {
  return (
    <>
      <p>
        Hey, glad you’re here! My name is Danny and I am a freshman at&nbsp;
        <a
          className="font-medium text-slate-200 hover:text-red-500 focus-visible:text-red-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.stanford.edu/"
        >
          Stanford University&nbsp;
        </a>
        studying Electrical Engineering and Computer Science. Broadly speaking,
        I am interested in startups, robotics, machine learning, and sustainable
        tech.
      </p>
    </>
  );
}

function Experience() {
  return (
    <>
      <ExperienceCard
        title="Summer Fellows Grant Recipient"
        company="Y Combinator"
        tags={[
          "Startup",
          "Software",
          "Music Technology",
          "Artificial Intelligence",
          "LLM's",
        ]}
        dates="Jun 2025 - Sep 2025"
        description="20k to build something great, more coming soon..."
        image="logos/yc_logo.png"
        xlink="https://www.ycombinator.com/"
      />
      <ExperienceCard
        title="Software Development Engineer Intern"
        company="Amazon"
        tags={[
          "Software Development",
          "Java",
          "Machine Learning",
          "Git",
          "Teamwork",
        ]}
        dates="Jun 2025 - Sep 2025"
        description="GenAI content for influencers and storefronts @ SEA70"
        image="logos/amazon_logo.png"
        xlink="https://www.amazon.com/"
      />
      <ExperienceCard
        title="Research Assistant"
        company="Stanford ARMLab"
        tags={[
          "ROS",
          "Software Development",
          "Mixed Reality",
          "Robotic Manipulation",
          "Imitation Learning",
        ]}
        dates="Jan 2025 - Jun 2025"
        description="Mixed Reality teleoperation of robotic arms for imitation learning"
        image="logos/stanford_engineering_logo.jpeg"
        xlink="https://arm.stanford.edu/"
      />
      <ExperienceCard
        title="ML Research Intern"
        company="NASA + UT Austin"
        tags={[
          "Python",
          "Machine Learning",
          "Data Parsing/Automation",
          "Climate Science",
          "Remote Sensing",
          "Jupyter",
        ]}
        dates="Jun 2022 - Aug 2022"
        description="LSTM RNN trained on satellite data for water loss prediction"
        image="logos/nasa_logo.png"
        xlink="https://www.youtube.com/watch?v=7xi6A9HeBX8"
      />
      <ExperienceCard
        title="Alumni Mentor (Former Team President)"
        company="FIRST Robotics"
        tags={[
          "Java",
          "Physics Simulation",
          "Git",
          "Motion Control",
          "Path Planning",
          "3D-Modeling",
        ]}
        dates="Jan 2022 - Present"
        description="Led team in designing/programming robots for FRC World Championship, helped grow team from 20 to 45 students"
        image="logos/first_logo.png"
        xlink="https://github.com/BBR8ERS-FRC-TEAM5557"
      />
    </>
  );
}
