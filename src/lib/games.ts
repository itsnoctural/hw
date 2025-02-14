export interface IGame {
    id: string,
    name: string,
    description: string,
    tags: string[],
}

export const games: IGame[] = [
    {
        id: "detroit",
        name: "Detroit: Become Human",
        description: "Quantic Dream · 2018",
        tags: ["Action-adventure", "Interactive movie"]
    },
    {
        id: "resident",
        name: "Resident Evil 4",
        description: "Capcom · 2005/2023",
        tags: ["Survival horror", "Action-Shooter"]
    },
    {
        id: "witcher",
        name: "The Witcher 3: Wild Hunt",
        description: "CD Projekt · 2015",
        tags: ["Action role-playing", "Medieval"]
    },
    {
        id: "lastofus",
        name: "The Last of Us Part I",
        description: "Naughty Dog · 2023",
        tags: ["Survival horror", "Zombies"]
    },
    {
        id: "rdr",
        name: "Red Dead Redemption 2",
        description: "Rockstar Games · 2019",
        tags: ["Western", "Open World"]
    },
    {
        id: "cyberpunk",
        name: "Cyberpunk 2077",
        description: "CD Projekt · 2020",
        tags: ["Action RPG", "Sci-fi"]
    },
    {
        id: "gow",
        name: "God of War",
        description: "Santa Monica Studio · 2022",
        tags: ["Mythology", "Combat"]
    },
    {
        id: "outlast",
        name: "Outlast",
        description: "Red Barrels · 2013",
        tags: ["Horror", "Stealth"]
    },
    {
        id: "uncharted",
        name: "Uncharted 4: A Thief's End",
        description: "Naughty Dog · 2016",
        tags: ["Action", "Third-person shooter"]
    },
    {
        id: "watchdogs",
        name: "Watch Dogs 2",
        description: "Ubisoft · 2016",
        tags: ["Hacking", "Illuminati"]
    },
]