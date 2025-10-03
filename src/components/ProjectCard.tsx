import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    color: string;
}

export default function ProjectCard({ title, description, href, color }: ProjectCardProps) {
    return (
        <Link
            href={href}
            className={`flex flex-col justify-between p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform ${color}`}
        >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm opacity-80">{description}</p>
        </Link>
    );
}