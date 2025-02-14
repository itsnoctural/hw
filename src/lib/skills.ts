import { IconType } from 'react-icons';
import { DiRedis } from 'react-icons/di';
import { FaAws, FaRust } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiDocker, SiPostgresql, SiPrisma, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si';

interface ISkill {
    id: string,
    icon: IconType,
    name: string,
    learning: boolean,
}

export const skills: ISkill[] = [
    {
        id: "ts",
        icon: SiTypescript,
        name: "TypeScript",
        learning: false,
    },
    {
        id: "next",
        icon: RiNextjsFill,
        name: "Next.js",
        learning: false,
    },
    {
        id: "rust",
        icon: FaRust,
        name: "Rust",
        learning: true,
    },
    {
        id: "postgresql",
        icon: SiPostgresql,
        name: "PostgreSQL",
        learning: false,
    },
    {
        id: "sqlite",
        icon: SiSqlite,
        name: "SQLite",
        learning: false,
    },
    {
        id: "redis",
        icon: DiRedis,
        name: "Redis",
        learning: false,
    },
    {
        id: "docker",
        icon: SiDocker,
        name: "Docker",
        learning: false,
    },
    {
        id: "aws",
        icon: FaAws,
        name: "Amazon Web Services",
        learning: true,
    },
    {
        id: "prisma",
        icon: SiPrisma,
        name: "Prisma ORM",
        learning: false,
    },
    {
        id: "tailwind",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
        learning: false,
    },
]