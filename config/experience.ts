import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "botnoi-2024",
    position: "AI Engineer Intern",
    company: "BOTNOI Limited Company",
    location: "Bangkok, Thailand",
    startDate: new Date("2025-05-19"),
    endDate: new Date("2025-07-25"),
    description: [
      "Worked on mostly backend development tasks, including data processing and API integration from AI models."
    ],
    achievements: [
      "Studied PyTorch and implemented basic neural network models for self-study purposes.",
      "Utilized Ghidra for reverse engineering tasks, analyzing software binaries to understand their structure and functionality.",
      "Participated in the internal hackathon, and Bolt Hackathon 2025, where I applied my skills in Web Development and AI to develop innovative solutions."
    ],
    skills: ["Python", "Ghidra"],
    companyUrl: "https://botnoigroup.com",
    logo: "/experience/botnoi-logo.png",
  },
];
