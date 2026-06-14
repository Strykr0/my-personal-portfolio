import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "idc-robocon",
    companyName: "25th IDC Robocon - Robotics Competition",
    type: "Competition",
    category: ["Robotics","CAD Design","Mechatronics","Mechanical Design", "Competition", "Team Leadership"],
    shortDescription:
      "A 14-days international mobile robot building competition at Shanghai, China. Lead the team Light Blue to the 4th place",
    websiteLink: "http://www.idc-robocon.org/idc2025_eng/team.html#lightblue",
    techStack: [
      "ROS",
      "C/C++",
      "Gazebo",
      "Fusion 360",
      "Raspberry Pi",
      "Arduino",
      "Python",
      "Wireless Communication",
      "Mobile Robots", 
      "Multi-Robot Systems",
    ],
    startDate: new Date("2025-08-04"),
    endDate: new Date("2025-08-16"),
    companyLogoImg: "/projects/idc-robocon/mmexport1756002829383.jpg",
    pagesInfoArr: [
      {
        title: "Lead Design and Development of The Arm Robot",
        description:
          "Designed the robot structure and developed the control system for the arm robot, which was responsible for picking up and delivering objectives.",
        imgArr: ["/projects/idc-robocon/logo.jpg", "/projects/idc-robocon/arm-design.png", "/projects/idc-robocon/143078.jpg"],
      },
      {
        title: "Co-design of The Path Builder Robot",
        description:
          "Overseeing the robot structure and developed the control system for the path builder robot, which was responsible for building a mobile bridge to help the arm robot cross obstacles.",
        imgArr: ["/projects/idc-robocon/IMG20250816175223.jpg", "/projects/idc-robocon/LINE_ALBUM_2025.8.21_260612_3.jpg"],
      },
      {
        title: "Placed 4th Overall and Earned the Royal Award",
        description:
          "Led a multinational engineering team to place 4th overall and earn the prestigious Royal Award from HRH Princess Maha Chakri Sirindhorn back in Thailand",
        imgArr: ["/projects/idc-robocon/143079.jpg","/projects/idc-robocon/IMG20260424094339.jpg", "/projects/idc-robocon/LINE_ALBUM_2025.8.21_260612_1.jpg"],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "Participated in the 25th International Design Contest (IDC) Robocon, a 14-day high-intensity engineering challenge bringing together students from global universities. The objective required designing, simulating, and physical building a multi-robot system capable of navigating complex obstacles and performing precision delivery tasks at varying elevations.",
        "Assumed the role of Team Leader for a 5-member multinational team representing Japan, South Korea, China, Egypt, and Thailand. Spearheaded the technical direction and project lifecycle, overcoming language and communication barriers to successfully transition conceptual sketches into fully functional physical hardware under an aggressive development window.",
      ],
      bullets: [
        "Led a multinational engineering team to place 4th overall and earn the prestigious Royal Award out of global competitors.",
        "Co-designed a dual-robot strategy featuring a path-builder mobile bridge and a separate delivery robot equipped with a custom 2-DOF manipulation arm.",
        "Managed the full engineering lifecycle from initial geometric sketches to final physical assembly, electronic integration, and calibration within a strict 14-day timeline.",
      ],
    },
  },
  {
    id: "teachamon",
    companyName: "Intania Hackathon: \"Teachamon\"",
    websiteLink: "https://github.com/patteeraL/teachamon",
    type: "Competition",
    category: ["Full Stack", "AI", "Competition"],
    shortDescription:
      "An AI-driven 'teach-to-play' web application gamifying high school education. Awarded Popular Vote and Best of Design out of all entries.",
    techStack: ["Next.js", "Typescript", "Node.js", "Python", "Tailwind CSS"],
    startDate: new Date("2025-02-21"),
    endDate: new Date("2025-02-23"),
    companyLogoImg: "/projects/teachamon/143081.jpg",
    pagesInfoArr: [
      {
        title: "Game Mechanics & State Management",
        description:
          "Implemented the core battle mechanics and frontend system logic that dynamically link student learning inputs directly with competitive game outcomes.",
        imgArr: [
          "/projects/teachamon/architecture.png"],
      },
      {
        title: "Full-Stack Development Under Pressure",
        description:
          "Executed a full-stack pivot in the final 24 hours, rapidly bridging the gap between the user interface and backend services to process game logic in real-time.",
        imgArr: [
          "/projects/teachamon/preview.png"
        ],
      },
      {
        title: "User Validation & Product Strategy",
        description:
          "Conducted targeted field advertisement among attendees during the hackathon to optimize our value proposition, successfully driving the community engagement that won the Popular Vote.",
        imgArr: [
          "/projects/teachamon/1743341381282.jpg", 
          "/projects/teachamon/1743342439018.jpg"
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed during an intensive 48-hour sprint at the Intania Hackathon, Teachamon is an AI-driven educational web platform built to gamify learning for high school students. The platform leverages a unique 'teach-to-play' mechanic where users reinforce their own understanding of academic subjects by instructing in-game sprites, which then compete in real-time battles scaled entirely on the quality and depth of the knowledge imparted.",
        "Stepping up as the primary full-stack developer, I self-taught the fundamentals of Next.js within the initial 24 hours to rapidly prototype the core layouts. In the final 24 hours, I executed a technical pivot to link the user interface with backend services while orchestrating product presentation and crowd validation strategy on the floor to maximize audience adoption.",
      ],
      bullets: [
        "Our team secured both the Popular Vote Award (Audience Favorite) and the Best of Design Award for outstanding UI/UX and aesthetic presentation.",
        "Self-taught and deployed a responsive Next.js frontend framework within the first 24 hours of the event.",
        "Engineered complex game state machine logic to seamlessly connect student inputs directly to live battle simulation outcomes.",
        "Spearheaded rapid user research on the hackathon floor, gathering real-time attendee feedback to align product mechanics with user preferences.",
      ],
    },
  },
  {
    id: "final-project",
    companyName: "Surigcal Camera Holder Arm Robot",
    type: "Personal",
    category: ["Mechanical Design", "Robotics", "CAD Design", "Mechatronics", "Team Leadership"],
    shortDescription:
      "Led a 4-member team to design and prototype a 2R1T Remote Center of Motion (RCM) robotic arm assisting surgeons in minimally invasive procedures.",
    techStack: ["Fusion 360", "Raspberry Pi", "Python", "Kinematic Simulation", "Fabrication"],
    startDate: new Date("2025-08-04"),
    endDate: new Date("2026-05-15"),
    companyLogoImg: "/projects/final-project/cad1.png",
    pagesInfoArr: [
      {
        title: "End-Effector & Clamping Design",
        description:
          "Personally designed a spring-loaded, normally closed modular camera clamper and sliding dock mechanism in Fusion 360 to allow safe manual tool insertion prior to robotic engagement.",
        imgArr: [
          "/projects/final-project/camera.png",
          "/projects/final-project/clamper1.png",
          "/projects/final-project/spring-clamper.png"
        ],
      },
      {
        title: "Prototyping & Precision Fabrication Tracking",
        description:
          "Managed the full physical execution, executing proof-of-concept assembly via 3D printing before supervising professional precision metal machining to hit surgical tolerances.",
        imgArr: [
          "/projects/final-project/IMG20260429202107.jpg",
          "/projects/final-project/IMG20260507191552.jpg",
          "/projects/final-project/143094.jpg"
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "In this senior capstone project, I stepped up as the Team Leader to coordinate the timeline and structural workspace compatibility analysis for a 2R1T Remote Center of Motion surgical robot. Beyond high-level management and serving as the primary bridge to our medical advisors, my engineering responsibilities sat squarely at the intersection of critical mechanical assemblies, hands-on fabrication execution, and baseline embedded software architecture.",
        "To ensure patient safety, I focused my mechanical design on the modular docking end-effector, creating a mechanism that isolates structural forces while ensuring quick tool detachment. On the software side, I bypassed complex application layers to write the direct low-level motor array controls, validating communication protocols before the broader kinematic simulation filters were integrated."
      ],
      bullets: [
        "Managed the overall engineering lifecycle timeline and structural workload distribution for a 4-member robotics team.",
        "Personally designed the spring-loaded camera probe holder end-effector and modular sliding docker assembly in Autodesk Fusion 360.",
        "Authored the foundational C/C++ control scripts for the motor array to initialize baseline serial communication and joint movement protocols.",
        "Executed extensive 3D printing runs (FDM/SLA) using PLA/PETG filaments to troubleshoot early kinematic geometry and mechanical play.",
        "Supervised precision metal machining of 6061 aluminum alloy replacements to minimize linkage compliance and address structural leeway tolerances."
      ],
    },
  },
  {
    id: "smart-pet-feeder",
    companyName: "IoT project: Smart Pet Feeder",
    type: "Personal",
    category: ["IoT Systems", "Embedded Systems", "Hardware Integration", "Team Leadership"],
    shortDescription:
      "Led the system integration for a dual-processor automated pet feeder combining STM32 sensor automation with a Raspberry Pi IoT gateway.",
    techStack: [
      "C/C++",
      "Python",
      "STM32",
      "Raspberry Pi",
      "UART/Serial Communication",
      "Cloud Dashboard",
      "Circuit Design"
    ],
    startDate: new Date("2024-09-01"), // Structured for Year 3, Semester 1 timeline
    endDate: new Date("2024-11-01"),
    companyLogoImg: "/projects/smart-pet-feeder/IMG_5550.jpg",
    pagesInfoArr: [
      {
        title: "Dual-Processor Microarchitecture & Networking",
        description:
          "Established a reliable UART serial communication link between an STM32 Nucleo controller and a Raspberry Pi 4B acting as an IoT gateway to route operational telemetry straight to a remote NETPIE cloud dashboard.",
        imgArr: [
          "/projects/smart-pet-feeder/NETPIE.png"
        ],
      },
      {
        title: "Actuator Interfacing & Power Supply Routing",
        description:
          "Engineered exact driver control logic for a continuous servo motor food dispenser and a water pump mechanism, designing the full system power distribution layout and wiring harnesses.",
        imgArr: [
          "/projects/smart-pet-feeder/circuit-diagram.png",
          "/projects/smart-pet-feeder/IMG_5552.jpg"
        ],
      },
      {
        title: "Physical Prototyping & Adaptive Fabrication",
        description:
          "Overcame localized workshop closures during the development lifecycle by fabricating the final physical housing manually inside a personal workshop using custom-cut wood and structural aluminum plates.",
        imgArr: [
          "/projects/smart-pet-feeder/IMG_5550.jpg"
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed over an intensive 2-month period during my third academic year, the Automatic Smart Pet Feeder is an integrated IoT system featuring a dual-processor microarchitecture. The platform couples low-level deterministic sensor polling via an STM32 microchip alongside a high-level Raspberry Pi computer. This structure safely isolates machine learning-based pet identification pipelines and cloud-based logging scripts from core mechanical actuation.",
        "Serving as the Team Leader and Systems Integrator, I was responsible for the end-to-end telemetry loop, power management, and internal structural layout. I focused on making the device resilient to environmental constraints, ensuring that code integration and electrical routing protected against signal line noise or physical component drops during continuous operation."
      ],
      bullets: [
        "Supervised the complete system lifecycle, delegating modular sensor calibration routines to team members while personally owning the main codebase integration.",
        "Programmed the core firmware on an STM32 Nucleo-F411RE platform to manage a diverse sensor suite including Ultrasonic distance metrics, IR levels, and liquid depth data.",
        "Engineered precision PWM and digital interface controls to manage high-draw actuators, specifically an automated water pump and a continuous rotation servo motor.",
        "Architected a robust serial data pipeline via UART between the microcontrollers, configuring continuous data transmission streams to the NETPIE cloud platform for live status reporting.",
        "Designed the full system electrical power supply configuration and executed all wiring, ensuring clean voltage lines to protect sensitive sensor logic from motor inductive spikes.",
        "Hand-built the custom mechanical chassis using wood and aluminum elements within a personal workspace to bypass unexpected laboratory and workshop resource closures."
      ],
    },
  },
  {
    id: "hybrid-nut-sorting-system",
    companyName: "Academic Research: Computer Vision & Machine Learning",
    websiteLink: "https://doi.org/10.1109/ICMCR64890.2025.10962883",
    type: "Personal",
    category: ["Computer Vision", "Human-Machine Interface", "Mechatronics", "Research"],
    shortDescription:
      "Co-authored a research paper accepted by ICMCR for a vision-based industrial sorting system, directly owning the full Human-Machine Interface (HMI) stack.",
    techStack: [
      "Python",
      "Tkinter",
      "OpenCV",
      "Raspberry Pi",
      "CoreXY Kinematics",
      "Technical Research Writing"
    ],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/nut-sorting/logo.gif",
    pagesInfoArr: [
      {
        title: "Human-Machine Interface (HMI) Development",
        description:
          "Engineered a native desktop application using Python's Tkinter framework, building an interactive dashboard that translates downstream computer vision matrices into clean real-time readouts.",
        imgArr: [
          "/projects/nut-sorting/UI_bg.gif"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Executed over a 2-month cycle during my third academic year, this mechatronics project produced an automated, vision-driven industrial classification system designed to inspect, categorize, and physically sort industrial hardware nuts by dimensions. The ultimate verification of this system culminated in a peer-reviewed, co-authored research paper accepted for publication and presentation at the International Conference on Mechatronics, Control, and Robotics (ICMCR).",
        "As the GUI Designer for the project, my primary responsibility was closing the loop between complex classification backends and physical human operators. I focused heavily on building a lightweight, non-blocking interface architecture that allows real-time camera management and deterministic override interventions without introducing tracking latency to the high-speed sorting hardware."
      ],
      bullets: [
        "Engineered a custom standalone Graphical User Interface (GUI) utilizing Python's Tkinter library to enable seamless, real-time human interaction with the machine vision pipelines.",
        "Embedded live, low-latency video capture streams into the layout windows, authoring control modules for frame capture triggers, hardware toggle switches, and size-selection fallbacks.",
        "Contributed to the technical manuscript creation, analyzing and writing the performance logs covering detection tolerances and sorting efficiency variables for the final ICMCR paper submission."
      ],
    },
  },
  {
    id: "gesture-controlled-robot",
    companyName: "ISE & IDCU Joint Project: Mechatronics",
    websiteLink: "https://youtu.be/iyhPu2WVQhs", 
    type: "Personal",
    category: ["Mechatronics", "Mechanical Design", "Interdisciplinary Coordination"],
    shortDescription:
      "Coordinated an interdisciplinary team of Engineering and Industrial Design students to build a mobile robot capable of firing projectiles via hand gestures.",
    techStack: [
      "Fusion 360",
      "3D Printing",
      "Interdisciplinary Workflow Management",
      "Hardware Integration & Troubleshooting"
    ],
    startDate: new Date("2024-01-15"), // Formatted chronologically for your academic milestone order
    endDate: new Date("2024-05-20"),
    companyLogoImg: "/projects/gesture-robot/logo.png",
    pagesInfoArr: [
      {
        title: "Interdisciplinary System Architecture",
        description:
          "Managed the division of labor between technical engineering tracks and aesthetic Industrial Design streams, coordinating how the external cosmetic shell integrated onto the functional core chassis.",
        imgArr: [
          "/projects/gesture-robot/robot-frame.png",
        ],
      },
      {
        title: "Chassis Development Lifecycle",
        description:
          "Led the end-to-end mechanical engineering cycle for the main structural frame, transforming early spatial sketches into a rigid physical chassis layout.",
        imgArr: [
          "/projects/gesture-robot/design.png",
        ],
      },
      {
        title: "Sub-Assembly Hardware Optimization",
        description:
          "Oversaw physical validation sprints for the driving chassis base, launching cannon flywheels, and automated targets to systematically clear mechanical blockages prior to software handoff.",
        imgArr: [
          "/projects/gesture-robot/cannon.png"
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "This project represents a joint capstone initiative between International School of Engineering (ISE) and Industrial Design Chulalongkorn University (IDCU) students. The goal was to build a gesture-driven mobile robot engineered to detect spatial hand triggers and translate commands into precise projectile firing. The development pipeline forced a tight marriage between complex algorithmic recognition loops and highly stable physical launching dynamics.",
        "Serving as the Physical Design Coordinator and Lead Assembler, my job was to bridge the gap between creative form and rigid mechanical function. I orchestrated the physical interface boundaries, ensuring that components like the target sensors, actuation linkages, and power channels aligned perfectly with the visual housing constraints without compromising overall performance."
      ],
      bullets: [
        "Managed the division of labor between Engineering and Industrial Design (ID) students, delegating the cosmetic masking shell to the ID team while focusing engineering assets on core mechanical functionality.",
        "Led the end-to-end structural design and physical assembly of the robot’s load-bearing chassis, transforming conceptual geometry sketches into the final physical machine architecture.",
        "Monitored construction milestones across the tracking chassis, motorized firing cannon, and autonomous target range modules to maintain component synergy.",
        "Implemented mechanical modifications, bearing adjustments, and alignment corrections on the fly to guarantee all physical units were integrated and ready for software deployment."
      ],
    },
  },
  {
    id: "combat-robot-replica",
    companyName: "Academic Project: Engineering Design Process",
    websiteLink: "", 
    type: "Personal",
    category: ["Mechanical Design", "CAD Design", "Robotics"],
    shortDescription:
      "Engineered a high-fidelity, fully articulated 3D assembly model of a heavyweight combat robot replica in CATIA, featuring a custom gear-driven powertrain.",
    techStack: [
      "Dassault Systèmes CATIA",
      "Assembly Design",
      "Gear-Driven Transmission",
      "Kinematic Simulation"
    ],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "/projects/tombstone/final.png",
    pagesInfoArr: [
      {
        title: "Solid Modeling & Chassis Design",
        description:
          "Transformed initial conceptual geometric sketches into a comprehensive, high-fidelity 3D assembly model of the robot's whole structure and internal hardware housing.",
        imgArr: [
          "/projects/tombstone/sketch-design.png",
        ],
      },
      {
        title: "Mechanism Design & Powertrain Kinematics",
        description:
          "Developed a custom gear-driven transmission drivetrain system within CATIA to accurately synchronize high-torque motor outputs directly with high-velocity front blade weapon rotations. (youtube video of the simulation in action: coming soon)",
        imgArr: [
          "/projects/tombstone/blade-mount.png",
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "This mechanical design project focused on recreating a fully articulated 3D replica of a heavyweight combat robot, modeled after the iconic 'Tombstone'. The entire workflow was centered around absolute mechanical realism, utilizing Dassault Systèmes CATIA software to map out complex spatial geometry, verify part interference interfaces, and validate assembly integration profiles.",
        "Delivered under a high-intensity 48-hour execution sprint, my individual engineering focus was pushing past basic visual shapes to ensure complete structural feasibility. I engineered the internal transmission mechanics, selecting tooth distributions and checking clearances to ensure that the virtual prototype could structurally withstand realistic rotational loading conditions without spatial collisions."
      ],
      bullets: [
        "Engineered the combat robot's comprehensive main chassis structure and custom internal housing blocks using advanced solid modeling pipelines inside CATIA.",
        "Hand-drawn geometric concepts and spatial constraints straight into a fully articulated multi-part 3D assembly model.",
        "Developed a custom gear-driven transmission drivetrain system configured to smoothly synchronize automated motor outputs with high-velocity front weapon blade rotation tracking loops.",
        "Conducted assembly dynamic simulations to check joint kinematics and evaluate motion envelopes across moving component sub-assemblies.",
        "Applied agile, real-time geometry modifications during a tight 48-hour development sprint to tune high-stress weapon clearance tolerances.",
        "Validated manufacturing and assembly viability entirely within the digital software environment, eliminating design interference errors prior to physical prototyping layout checks."
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
