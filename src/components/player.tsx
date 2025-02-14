"use client";

import { useEffect, useState } from "react";

interface PlayerConfig {
    progress?: number,
    duration?: number,
}

function FormatForPlayer(ms: number) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function Player(config: PlayerConfig) {
    const [progress, setProgress] = useState(config.progress);

    useEffect(() => {
        if (progress && config.duration && progress + 1000 <= config.duration) {
            const interval = setInterval(() => setProgress(progress + 1000), 1000);

            return () => {
                clearInterval(interval);
            };
        }
    })

    return <>
        <span>{progress ? FormatForPlayer(progress) : "0:00"}</span>
        <progress className="spotify h-1" value={progress} max={config.duration} />
        <span>{config.duration ? FormatForPlayer(config.duration) : "0:00"}</span>
    </>
}