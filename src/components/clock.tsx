"use client";

import { useEffect, useState } from "react";

export function Clock({ initial }: { initial: Date }) {
    const [time, setTime] = useState<Date>(initial);

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    })

    return (
        <span className="text-lg">{Intl.DateTimeFormat("en-us", {
            timeStyle: "medium",
            timeZone: "Europe/Kyiv"
        }).format(time)}</span>
    )
}