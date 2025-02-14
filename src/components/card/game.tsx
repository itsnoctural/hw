import { IGame } from "@/lib/games";
import Image from "next/image";

export function GameCard({ id, name, description, tags }: IGame) {
    return (
        <div className="flex gap-x-3">
            <Image className="rounded-md" src={`/games/${id}.webp`} height={84} width={72} alt={id} unoptimized />
            <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                    <span>{name}</span>
                    <span className="text-muted-foreground text-sm">{description}</span>
                </div>
                <div className="flex gap-x-2 text-xs text-muted-foreground">
                    {tags.map((tag) => (
                        <span key={tag} className="bg-accent px-1.5 py-0.75 rounded-sm">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}