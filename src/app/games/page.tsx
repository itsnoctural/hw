import { GameCard } from "@/components/card/game";
import { games } from "@/lib/games";
import { Gamepad } from "lucide-react";
import { Fragment } from "react";

export default async function Games() {
    return (
        <main className="flex flex-col max-w-screen-xl mx-auto gap-y-6">
            <div className="flex flex-col gap-y-4 border-2 border-border px-6 py-4 rounded-lg w-full bg-background/80">
                <div className="flex gap-x-1.5 items-center text-muted-foreground">
                    <Gamepad size={16} />
                    <span>games.db | Favorite games</span>
                </div>
                {games.map((game, i) => (
                    <Fragment key={game.id}>
                        <GameCard {...game} />
                        {i < games.length - 1 && <hr />}
                    </Fragment>
                ))}
            </div>
        </main>
    )
}