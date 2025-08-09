import ProjectCard from "../components/projectCard";
import { useDocumentTitle } from "../utils/utils";

export default function ProjectsPage() {
  useDocumentTitle("Projects | Joao Pedro Dudziak Fonseca");

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24">
      <h1 className="mb-8 ml-4 mt-8 text-4xl font-bold text-slate-200 sm:text-5xl">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Inverses Kinematics with Machine Learning"
          description="Designed a machine learning framework to solve inverse kinematics (IK) for redundant robotic arms, achieving sub-degree accuracy and sub-ms inference in predicted joint angles."
          image="projects/IK-ML/cover.png"
          tags={["Machine Learning", "Robotic Manipulation", "Teamwork", "Git", "Award Winning"]}
          xlink="https://jfonseca32.github.io/Inverse-Kinematics-Approximation-with-ML/"
        />
        <ProjectCard
          title="Robotic Backpack to Follow Me to Class"
          description="Currently designing and prototyping a 'robot backpack' that follows user using YOLO-based person tracking and obstacle avoidance on a Raspberry Pi."
          image="projects/RoboBackpack/cover.png"
          tags={["Startup Idea", "DFMA", "3D Modeling", "Hardware", "Software", "Machine Learning"]}
          xlink="/under-construction"
        />
        <ProjectCard
          title="Creative Desicions and Design Challenge"
          description="Used a structured design process to design, construct, build and test an automated system for a head-to-head competition with 50+ teams (placed #2 seed)."
          image="projects/ME2110/cover.png"
          tags={["Rapid Prototyping", "Machining", "3D Modelling", "Arduino"]}
          xlink="https://drive.google.com/file/u/0/d/1NChYIQVQt2E1Q0AGluSSGinvtOE8hyNx/view?usp=sharing&usp=embed_facebook&pli=1"
        />
        <ProjectCard
          title="My Very Own Personal Website"
          description="Designed and developed a responsive website using React, Tailwind CSS, and Framer Motion, with animated page transitions, dynamic content rendering, and custom 3D assets."
          image="projects/Website/cover.png"
          tags={["React", "Typescript", "TailwindCSS", "Framer Motion", "Blender"]}
          xlink="https://jpdf.netlify.app/"
        />
      </div>
    </div>
  );
}
