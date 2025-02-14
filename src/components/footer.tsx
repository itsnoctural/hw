"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { FaDiscord } from "react-icons/fa"
import { Button } from "./ui/button"

export function Footer() {
    const { theme, setTheme } = useTheme()

    return (
        <footer className="flex max-w-screen-xl mx-auto mt-2 justify-between">
            <span className="text-muted-foreground/50">Built with love by itsnoctural on high-performance framework</span>

            <div className="flex gap-x-1.5">
                <Button variant="outline" size="icon" asChild>
                    <Link href={"https://discord.gg/CPJz5Byp"}>
                        <FaDiscord />
                    </Link>
                </Button>

                <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </footer>
    )
}