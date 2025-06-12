// src/data/skills.ts
import { IconType } from "react-icons";
import { FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
} from "react-icons/si";

export interface SkillItem {
  label: string;
  icon: IconType;
}

export interface Skill {
  title: string;
  items: SkillItem[];
}

export const skills: Skill[] = [
  {
    title: "Languages",
    items: [
      { label: "JavaScript", icon: SiJavascript },
      { label: "PHP", icon: FaPhp },
      { label: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "SQL", icon: FaDatabase },
      { label: "Firebase", icon: SiFirebase },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Prisma", icon: SiPrisma },
      { label: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "React", icon: FaReact },
    ],
  },
];
