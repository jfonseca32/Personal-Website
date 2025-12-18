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
          title="Robotic Backpack to Follow Me to Class"
          description="Currently designing and prototyping a 'robot backpack' that follows user using YOLO-based person tracking and obstacle avoidance on a Raspberry Pi."
          image="projects/RoboBackpack/cover.png"
          tags={["Startup Idea", "DFMA", "3D Modeling", "Hardware", "Software", "Machine Learning"]}
          xlink="https://github.com/jfonseca32/RoboPack/"
        />
        <ProjectCard
          title="Creative Decisions and Design Challenge"
          description="Used a structured design process to design, construct, build and test an automated system for a head-to-head competition with 50+ teams (placed #2 seed)."
          image="projects/ME2110/cover.png"
          tags={["Rapid Prototyping", "Machining", "3D Modelling", "Arduino"]}
          xlink="https://drive.google.com/file/u/0/d/1NChYIQVQt2E1Q0AGluSSGinvtOE8hyNx/view?usp=sharing&usp=embed_facebook&pli=1"
        />
        <ProjectCard
          title="Robotic Arm Inverse Kinematics with Machine Learning"
          description="Machine Learning pipeline for approximating joint angles given coordinates for 6 and 4-DOF redundant robot arms (Best Project Award)."
          image="projects/IK-ML/cover.png"
          tags={["Robotics", "Python", "Scikit-learn", "Machine Learning", "TensorFlow", "PyBullet"]}
          xlink="https://jfonseca32.github.io/Inverse-Kinematics-Approximation-with-ML/"
        />
        <ProjectCard
          title="Racing Catamaran Structural + CFD Analysis (NX)"
          description="Parametric Siemens NX model of an International Tornado–style racing catamaran, with FEA load cases, mesh convergence, composite material selection, and CFD."
          image="projects/Catamaran/cover.jpg"
          tags={["Siemens NX", "FEA", "CFD", "Composites", "Parametric CAD"]}
          xlink="ME4042 - Final Report.pdf"
        />
        <ProjectCard
          title="Click-Me 3D Viewer VW Beetle CAD"
          description="CAD build of a classic VW Beetle using advanced NX surfacing + solid workflows."
          image="projects/Beetle/cover.png"
          tags={["Siemens NX", "Solid Modeling", "Surface Modeling", "Raster"]}
          xlink="/projects/beetle"
        />
        <ProjectCard
          title="Geared Drive: Gear + Bearing Design (AGMA + L10)"
          description="Replaced belt drive with a spur-gear reduction and sized the system end-to-end with an itemized McMaster BOM."
          image="projects/DP3/cover.png"
          tags={["Machine Design", "Gear Design (AGMA)", "Bearing Life (L10)", "Fits & Tolerances"]}
          xlink="ME3180___DP3.pdf"
        />
        <ProjectCard
          title="Compressed-Air IC Engine Characterization"
          description="Built a full work-energy model of a compressed-air IC engine: transducer calibration, friction/flywheel inertia, stroke-resolved air-work/leakage, crank-angle injection timing."
          image="projects/IC-Engine/cover.jpg"
          tags={["Thermo", "Work-Energy", "York Regression", "MATLAB", "DAQ", "Optimization"]}
          xlink="ME4056_ICEngine_Report3.pdf"
        />
        <ProjectCard
          title="DC Motor System ID + PID Control"
          description="Identified DC motor’s dynamics in time + frequency domains, mapped dead-zone and saturation limits, tuned P/PD/PID controllers in a non-linear Simulink model to meet specs."
          image="projects/DC-Motor/cover.jpg"
          tags={["Controls", "PID", "Frequency Response", "Simulink", "Nonlinear Modeling"]}
          xlink="ME4056_SysId.01_Report_10.03.2025_rev0.pdf"
        />
        <ProjectCard
          title="Tensile Test Rig Calibration"
          description="Calibrated custom testing rig by deriving force-transducer and displacement-sensor calibrations, modeling rig compliance, and removing bias/noise. Verified the rig meets specs and proposed upgrades."
          image="projects/Test-Rig/cover.jpg"
          tags={["Calibration", "MATLAB", "Mechanical Testing", "Design Recommendations", "DAQ"]}
          xlink="ME3057_TestRig_Report_A09B3T3_03052025.pdf"
        />
        <ProjectCard
          title="Rotor–Pulley Shaft Design (Fatigue + Deflection)"
          description="Designed a rotor–pulley steel shaft for infinite life using Shigley methods and McMaster-Carr component selection."
          image="projects/DP2/cover.png"
          tags={["Fatigue (Goodman)", "Shaft Design", "Stress Concentration", "MATLAB"]}
          xlink="ME3180___DP2.pdf"
        />
        <ProjectCard
          title="My Very Own Personal Website"
          description="Designed and developed a responsive website using React, Tailwind CSS, and Framer Motion, with animated page transitions, dynamic content rendering, and custom 3D assets."
          image="projects/Website/cover.png"
          tags={["React", "Typescript", "TailwindCSS", "Framer Motion", "Blender"]}
          xlink="https://github.com/jfonseca32/Personal-Website/"
        />
      </div>
    </div>
  );
}
