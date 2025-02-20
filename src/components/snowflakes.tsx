"use client"

import Snowfall from "react-snowfall";

export function Snowflakes() {
    return <Snowfall snowflakeCount={75} changeFrequency={144} radius={[0.5, 2.5]} />
}