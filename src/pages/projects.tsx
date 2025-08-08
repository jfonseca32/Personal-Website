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
          title="Inverses Kinematics Approximation Using Machine Learning"
          description="Designed a machine learning framework to solve inverse kinematics (IK) for redundant robotic arms, achieving sub-degree accuracy and sub-ms inference in predicted joint angles."
          image=""
          tags={["GT", "CS 4641", "Robotics"]}
          xlink="https://jfonseca32.github.io/Inverse-Kinematics-Approximation-with-ML/"
        />
        <ProjectCard
          title="RoboBackpack"
          description="Backpack that follows user using YOLO-based person and obstacle detection on Raspberry Pi."
          image=""
          tags={["Stanford", "ENGR 40M", "Hardware", "Stuff"]}
          xlink="/under-construction"
        />
        <ProjectCard
          title="Squid-Inspired Soft Nozzles for Underwater Vehicles"
          description="Experimental and computational research on self-designed squid-inspired soft nozzle to improve underwater vehicle efficiency by >20% beyond conventional rigid propellers (η > 80%)."
          image=""
          tags={["Bhamla Lab", "Research", "Computational Fluid Dynamics", "Particle Tracing Velocimetry"]}
          xlink="/under-construction"
        />
        <ProjectCard
          title="JoaoPedroDudziakFonseca.com"
          description="My very own personal website."
          image=""
          tags={["Personal", "Software"]}
          xlink=""
        />
      </div>
    </div>
  );
}
