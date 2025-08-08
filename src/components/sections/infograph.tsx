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
        Hey, glad you’re here! My name is JP and I am a Senior at&nbsp;
        <a
          className="font-medium text-slate-200 hover:text-red-500 focus-visible:text-red-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.stanford.edu/"
        >
          Georgia Tech&nbsp;
        </a>
        studying Mechanical Engineering and Computer Science. Broadly speaking,
        I am interested in mechanical design, robotics, machine learning, and sustainable
        tech.
      </p>
    </>
  );
}

function Experience() {
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
        description="squid-inspired soft nozzle to improve underwater vehicle efficiency (η > 80%)"
        image="logos/bhamla_lab_logo.png"
        xlink="assets/Bhamla Lab Squid Project June Presentation.pdf"
      />
      <ExperienceCard
        title="Inverse Kinematics Approximation with Machine Learning"
        company="Georgia Tech"
        tags={[
          "Robotic Manipulation",
          "Python",
          "Machine Learning",
          "Git",
          "Teamwork",
        ]}
        dates="May 2025 - Sep 2025"
        description="Machine Learning pipeline for approximating joint angles of redundant robot arms"
        image="logos/IK_ML_logo.png"
        xlink="https://jfonseca32.github.io/Inverse-Kinematics-Approximation-with-ML/"
      />
      <ExperienceCard
        title="Equipment Engineering Intern (2 Rotations"
        company="The Coca-Cola Company"
        tags={[
          "Mechanical Engineering",
          "Quality Assurance",
          "Rapid Prototyping",
          "Experimental Design",
          "Global Impact",
        ]}
        dates="May 2023 - Aug 2023, Jan 2024 - May 2024"
        description="Improvement and validation of new vending technologies and methods"
        image="logos/coca_cola_logo.jpeg"
        xlink="https://www.coca-cola.com/us/en"
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
        description="Design and validation of chassis and aerodynamic components of the car"
        image="logos/hytech_racing_logo.png"
        xlink="https://hytechracing.gatech.edu/"
      />
      <ExperienceCard
        title="Production Engineering Intern"
        company="Sorvetes Rochinha (Ice-Cream Company)"
        tags={[
          "Industrial Engineering",
          "Process Mapping and Automation",
          "Quality Assurance",
          "People Management",
          "3D-Modeling",
        ]}
        dates="May 2022 - Aug 2022"
        description="Implemented ISO9000 standards and automated processes to increase production"
        image="logos/rochinha_logo.png"
        xlink="https://sorvetesrochinha.com.br/"
      />
    </>
  );
}
