import { MusicCard } from "@/components/card/music";
import { games } from "@/lib/games";
import { music } from "@/lib/music";
import { ListMusic } from "lucide-react";

export default async function Games() {
    return (
        <main className="flex flex-col max-w-screen-xl mx-auto gap-y-6">
            <div className="flex flex-col gap-y-4 border-2 border-border px-6 py-4 rounded-lg w-full bg-background/80">
                <div className="flex gap-x-1.5 items-center text-muted-foreground">
                    <ListMusic size={16} />
                    <span>music.db | Favorite tracks</span>
                </div>
                {music.map((music, i) => (
                    <>
                        <MusicCard {...music} key={music.id} />
                        {i < games.length - 1 && <hr />}
                    </>
                ))}
            </div>
        </main>
    )
}