import { useState } from "react";
import ExperienceCard from "../experienceCard";

export default function Infograph() {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <div className="z-10 flex flex-col pb-10 md:basis-1/2 md:pt-20">
      {/* Modal for embedded PowerPoint */}
      {showPresentation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-11/12 h-5/6 bg-white rounded shadow-lg">
            <button
              onClick={() => setShowPresentation(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              ✕
            </button>
            <iframe
              src="https://1drv.ms/p/c/8e55a37ffd6c4837/IQQtja8d-hw3RaucZ8teW-FFAaCcCk-0_su9_rDdRVBQbvA?wdAr=1.7777777777777777"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Bhamla Lab Presentation"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* About Me */}
      <div>
        <h1 className="top-0 z-50 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200">
          About Me
        </h1>
        <div className="mb-8">
          <AboutMe />
        </div>
      </div>

      {/* Experiences */}
      <div>
        <h1 className="top-0 z-50 mb-4 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200">
          Experiences
        </h1>
        <div className="mb-8">
          <Experience onBhamlaClick={() => setShowPresentation(true)} />
        </div>
      </div>
    </div>
  );
}

/* prettier-ignore */
function AboutMe() {
  return (
    <p>
      Hey, glad you’re here! My name is Joao Pedro and I am a Senior at&nbsp;
      <a
        className="font-medium text-slate-200 hover:text-yellow-500 focus-visible:text-yellow-700"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.gatech.edu/"
      >
        Georgia Tech&nbsp;
      </a>
      studying Mechanical Engineering and Computer Science. Broadly speaking,
      I am interested in mechanical design, robotics, machine learning, and sustainable
      tech. I am currently seeking Engineering or Programming roles for the Fall, Spring, and Summer, 
      and full-time opportunities after graduation where I can apply my skills to solve complex, real-world problems.
    </p>
  );
}

function Experience({ onBhamlaClick }) {
  return (
    <>
      <ExperienceCard
        title="Undergraduate Researcher"
        company="The Bhamla Lab"
        tags={[
          "Research",
          "Fluid Mechanics",
          "Simulations",
          "Artificial Intelligence",
          "Design and Manufacturing",
        ]}
        dates="May 2025 - Present"
        description="Researching squid-inspired soft nozzle for propellers to improve underwater vehicle efficiency (η > 80%) funded by DARPA."
        image="logos/bhamla_lab_logo.png"
        onClick={onBhamlaClick} // Open modal when clicked
      />
      <ExperienceCard
        title="Inverse Kinematics Approximation with ML"
        company="Georgia Tech"
        tags={[
          "Robotic Manipulation",
          "Python",
          "Machine Learning",
          "TensorFlow",
          "PyBullet",
          "Git",
          "Teamwork",
        ]}
        dates="May 2025 - Sep 2025"
        description="Machine Learning pipeline for approximating joint angles given coordinates for redundant robot arms (Best Project Award)."
        image="logos/ik_ml_logo.png"
        xlink="https://jfonseca32.github.io/Inverse-Kinematics-Approximation-with-ML/"
      />
      <ExperienceCard
        title="Equipment Engineering Intern (2 Rotations)"
        company="The Coca-Cola Company"
        tags={[
          "Mechanical Engineering",
          "Quality Assurance",
          "Rapid Prototyping",
          "Experiment Design",
          "Thermodynamics",
          "Global Impact",
        ]}
        dates="May 2023 - Aug 2023, Jan 2024 - May 2024"
        description="Improved and validated emerging vending and dispensing technologies, optimizing functionality and deployment methods."
        image="logos/coca_cola_logo.png"
        xlink="https://www.cokesolutions.com/equipment/"
      />
      <ExperienceCard
        title="Aerodynamics Engineer"
        company="FSAE HyTech Racing"
        tags={[
          "CATIA/SolidWorks",
          "Ansys Simulation",
          "Wind Tunnels",
          "Aerodynamics Design",
          "Chassis Design",
          "FEA",
        ]}
        dates="Sep 2022 - Present"
        description="Design and validate aerodynamic and chassis components, contributing to performance and manufacturability of car."
        image="logos/hytech_logo.png"
        xlink="https://hytechracing.gatech.edu/"
      />
      <ExperienceCard
        title="Production Engineering Intern"
        company="Sorvetes Rochinha"
        tags={[
          "Industrial Engineering",
          "Process Mapping and Automation",
          "Quality Assurance",
          "People Management",
          "3D-Modeling",
        ]}
        dates="May 2022 - Aug 2022"
        description="Implemented production line optimization and quality control (ISO9000) for Brazil’s leading ice cream brand."
        image="logos/rochinha_logo.png"
        xlink="https://sorvetesrochinha.com.br/"
      />
    </>
  );
}
