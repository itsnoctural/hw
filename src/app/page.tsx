import { GameCard } from '@/components/card/game';
import { MusicCard } from '@/components/card/music';
import { Clock } from '@/components/clock';
import { Player } from '@/components/player';
import { games } from '@/lib/games';
import { music } from '@/lib/music';
import { skills } from '@/lib/skills';
import { Brackets, CloudSnow, Cpu, Gamepad, ListMusic, Pyramid } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic'

export default async function Home() {
  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing?market=UA", {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_AUTHORIZATION}`,
    },
  });

  let track

  if (response.ok && response.status != 204) {
    track = await response.json();

    if (!track.is_playing) {
      track = null;
    }
  } else {
    track = null;
  }

  const res = await fetch(`https://api.weatherxu.com/v1/weather?api_key=${process.env.WEATHER_API}&lat=49.2331&lon=28.4682&parts=currently&units=imperial`, {
    next: {
      revalidate: 300,
    }
  });
  const weather = await res.json();

  return (
    <main className="flex flex-col md:flex-row max-w-screen-xl mx-auto w-full gap-4 items-center">
      <div className="flex flex-col gap-y-4 w-full lg:w-4/5">
        <div className="flex gap-x-6">
          <div className="flex flex-col gap-y-1 border-2 border-border px-6 py-4 rounded-lg w-full bg-background/80">
            <div className="flex gap-x-1.5 items-center text-muted-foreground">
              <Brackets size={16} />
              <span>time.ts</span>
            </div>
            <Clock initial={new Date()} />
            <span className="text-muted-foreground text-sm">UTC+2</span>
          </div>

          <div className="flex flex-col gap-y-1 border-2 border-border px-6 py-4 rounded-lg w-full bg-background/80">
            <div className="flex gap-x-1.5 items-center text-muted-foreground">
              <Brackets size={16} />
              <span>date.ts</span>
            </div>
            <span className="text-lg">{Intl.DateTimeFormat("en-us", {
              day: "2-digit",
              month: "long",
              timeZone: "Europe/Kyiv",
            }).format(new Date())}</span>
            <span className="text-muted-foreground text-sm">2025</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 border-2 border-border px-6 py-4 rounded-lg w-full bg-background/80">
          <div className="flex gap-x-1.5 items-center text-muted-foreground">
            <Pyramid size={16} />
            <span>spotify.rs</span>
          </div>

          <div className="flex gap-x-3">
            {track ? <Image className="rounded-lg" height={64} width={64} src={track.item.album.images[1].url} unoptimized alt="album" /> : <div className="bg-accent size-16 rounded-lg" />}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <span>{track ? track.item.name : "Nothing's playing right now"}</span>
                <span className="text-muted-foreground text-xs">{track ? track.item.artists.map((artist: { name: string }) => artist.name).join(" & ") : "There could be a great artist here"}</span>
              </div>
              <div className="flex text-xs items-center text-muted-foreground gap-x-2">
                <Player progress={track?.progress_ms} duration={track?.item.duration_ms} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 border-2 border-border px-6 py-4 rounded-lg w-full bg-background/80">
          <Link href={"/games"} className="flex justify-between items-center text-muted-foreground">
            <div className="flex gap-x-1.5 items-center">
              <Gamepad size={16} />
              <span>games.db</span>
            </div>
            <span className="text-xs text-muted-foreground/20 float-right">click to see more</span>
          </Link>

          <GameCard {...games[0]} />
          <GameCard {...games[1]} />

          <hr />

          <Link href={"/music"} className="flex justify-between items-center text-muted-foreground">
            <div className="flex gap-x-1.5 items-center">
              <ListMusic size={16} />
              <span>music.db</span>
            </div>
            <span className="text-xs text-muted-foreground/20 float-right">click to see more</span>
          </Link>

          <MusicCard {...music[0]} />
          <MusicCard {...music[1]} />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex flex-col gap-y-4 border-2 border-border px-6 py-4 rounded-lg w-full bg-background/80">
          <div className="flex gap-x-1.5 items-center text-muted-foreground">
            <Cpu size={16} />
            <span>skills.cpp</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div className="flex flex-col bg-accent/45 px-5 py-4 rounded-md gap-y-4 hover:scale-103 transition-transform hover:shadow-xl hover:opacity-90" key={skill.id}>
                <div className="flex items-center gap-x-3">
                  <skill.icon />
                  <span className="text-base lg:text-lg">{skill.name}</span>
                </div>

                <div className="flex items-center gap-x-2 rounded-sm">
                  <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <circle r="3" cx="7" cy="7" className={skill.learning ? "fill-cyan-300" : "fill-green-500"}></circle>
                  </svg>
                  <span className={`font-light ${skill.learning ? "text-cyan-300" : "text-green-500"}`}>{skill.learning ? "In progress" : "In active use"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-1 border-2 border-border px-6 py-4 rounded-lg w-full bg-background/80">
          <div className="flex gap-x-1.5 items-center text-muted-foreground">
            <CloudSnow size={16} />
            <span>weather.zig</span>
          </div>

          <span className="text-lg">{weather.data.currently.icon.replace(/_/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}</span>
          <span className="text-muted-foreground text-sm">{weather.data.currently.temperature.toFixed(1)} °F</span>
        </div>
      </div>
    </main>
  );
}