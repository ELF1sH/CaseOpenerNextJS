import fractureCaseItems from "./public/cases/FractureCaseItems/FractureCaseItems";
import clutchCaseItems from "./public/cases/ClutchCaseItems/ClutchCaseItems";

export const articles = [
    {
        id: '1',
        title: 'GitHub introduces dark mode and auto-merge pull request',
        excerpt:
            'GitHub today announced a bunch of new features at its virtual GitHub...',
        body:
            'GitHub today announced a bunch of new features at its virtual GitHub Universe conference including dark mode, auto-merge pull requests, and Enterprise Server 3.0. In the past couple of years, almost all major apps have rolled out a dark theme for its users, so why not GitHub?',
    },
    {
        id: '2',
        title: 'What’s multi-cloud? And why should developers care?',
        excerpt: 'Most developers don’t care about multi-cloud. But they should...',
        body:
            'Most developers don’t care about multi-cloud. But they should. Whether developers know it or not, their companies likely already have a multi-cloud environment.    Multi-cloud is a strategy where a business selects different services from different cloud providers',
    },
    {
        id: '3',
        title: 'Here is how to make your website more accessible',
        excerpt:
            'An accessible website is one that’s optimized for all people, including those with disabilities...',
        body:
            'There are many things to consider when setting up a website, and accessibility is one factor that can sometimes be overlooked. An accessible website is one that’s optimized for all people, including those with impaired vision or hearing, motor difficulties, or learning disabilities',
    },
    {
        id: '4',
        title: 'Why open ecosystems are the future of app development',
        excerpt:
            'When app stores entered the mainstream tech culture, they exposed developers to an audience of millions...',
        body:
            'We can’t get enough of our mobile apps. There were 204 billion apps downloads last year, and that number is rising in 2020.  When app stores entered the mainstream tech culture, they exposed developers to an audience of millions who were keen to adopt the innovative capabilities',
    },
]


export const cases = [
    {
        id: 1,
        name: 'Fracture case',
        quantities: {
            'milSpec': 7,
            'restricted': 5,
            'classified': 3,
            'covert': 2
        },
        items: [
            {
                id: 1,
                name: 'SG 553 | Ol\' Rusty',
                rarity: 'milSpec'
            },
            {
                id: 2,
                name: 'Negev | Ultralight',
                rarity: 'milSpec'
            },
            {
                id: 3,
                name: 'P250 | Cassette',
                rarity: 'milSpec'
            },
            {
                id: 4,
                name: 'P90 | Freight',
                rarity: 'milSpec'
            },
            {
                id: 5,
                name: 'P2000 | Gnarled',
                rarity: 'milSpec'
            },
            {
                id: 6,
                name: 'PP-Bizon | Runic',
                rarity: 'milSpec'
            },
            {
                id: 7,
                name: 'SSG 08 | Mainframe 001',
                rarity: 'milSpec'
            },
            {
                id: 8,
                name: 'MP5-SD | Kitbash',
                rarity: 'restricted'
            },
            {
                id: 9,
                name: 'Galil AR | Connexion',
                rarity: 'restricted'
            },
            {
                id: 10,
                name: 'Tec-9 | Brother',
                rarity: 'restricted'
            },
            {
                id: 11,
                name: 'MAC-10 | Allure',
                rarity: 'restricted'
            },
            {
                id: 12,
                name: 'MAG-7 | Monster Call',
                rarity: 'restricted'
            },
            {
                id: 13,
                name: 'XM1014 | Entombed',
                rarity: 'classified'
            },
            {
                id: 14,
                name: 'M4A4 | Tooth Fairy',
                rarity: 'classified'
            },
            {
                id: 15,
                name: 'Glock-18 | Vogue',
                rarity: 'classified'
            },
            {
                id: 16,
                name: 'AK-47 | Legion of Anubis',
                rarity: 'covert'
            },
            {
                id: 17,
                name: 'Desert Eagle | Printstream',
                rarity: 'covert'
            }
        ]
    },
    {
        id: 2,
        name: 'Clutch case',
        quantities: {
            'milSpec': 7,
            'restricted': 5,
            'classified': 3,
            'covert': 2
        },
        items: [
            {
                id: 1,
                name: 'PP-Bizon | Night Riot',
                rarity: 'milSpec'
            },
            {
                id: 2,
                name: 'Five-SeveN | Flame Test',
                rarity: 'milSpec'
            },
            {
                id: 3,
                name: 'XM1014 | Oxide Blaze',
                rarity: 'milSpec'
            },
            {
                id: 4,
                name: 'SG 553 | Aloha',
                rarity: 'milSpec'
            },
            {
                id: 5,
                name: 'P2000 | Urban Hazard',
                rarity: 'milSpec'
            },
            {
                id: 6,
                name: 'R8 Revolver | Grip',
                rarity: 'milSpec'
            },
            {
                id: 7,
                name: 'MP9 | Black Sand',
                rarity: 'milSpec'
            },
            {
                id: 8,
                name: 'Negev | Lionfish',
                rarity: 'restricted'
            },
            {
                id: 9,
                name: 'Nova | Wild Six',
                rarity: 'restricted'
            },
            {
                id: 10,
                name: 'MAG-7 | SWAG-7',
                rarity: 'restricted'
            },
            {
                id: 11,
                name: 'UMP-45 | Arctic Wolf',
                rarity: 'restricted'
            },
            {
                id: 12,
                name: 'Glock-18 | Moonrise',
                rarity: 'restricted'
            },
            {
                id: 13,
                name: 'AUG | Stymphalian',
                rarity: 'classified'
            },
            {
                id: 14,
                name: 'AWP | Mortis',
                rarity: 'classified'
            },
            {
                id: 15,
                name: 'USP-S | Cortex',
                rarity: 'classified'
            },
            {
                id: 16,
                name: 'MP7 | Bloodsport',
                rarity: 'covert'
            },
            {
                id: 17,
                name: 'M4A4 | Neo-Noir',
                rarity: 'covert'
            }
        ]
    }
]

export const getImages = id => {
    if (id === 1) {
        return fractureCaseItems
    } else if (id === 2) {
        return clutchCaseItems
    } else {
        return clutchCaseItems
    }
}

export const probabilities = {
    'exceedinglyRare': 0.3,
    'covert': 0.83,
    'classified': 2.83,
    'restricted': 15.6,
    'milSpec': 80.44
}

export const getRandomFloat = (start, end) => {
    return (Math.random() * (end - start) + start).toFixed(4)
}

export const getRandomInt = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}