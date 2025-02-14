import { ITrack } from "@/lib/music"
import Image from "next/image"
import Link from "next/link"
import { FaSpotify } from "react-icons/fa"
import { Button } from "../ui/button"

export function MusicCard({ id, image, name, author }: ITrack) {
    return (
        <div className="flex gap-x-3">
            <Image className="rounded-md size-16" src={`/music/${image}.jpg`} height={64} width={64} alt={image} unoptimized />
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <span>{name}</span>
                    <span className="text-muted-foreground text-sm">{author}</span>
                </div>

                <div className="flex items-center">
                    <Button variant={"outline"} size={"icon"} asChild>
                        <Link href={`https://open.spotify.com/track/${id}`}>
                            <FaSpotify />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}