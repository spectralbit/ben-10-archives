export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'origin' | 'alien' | 'battle' | 'character';
  episodeRef?: string;
  color: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    date: "Summer Start",
    title: "The Omnitrix Discovery",
    description: "During a camping trip with Grandpa Max and cousin Gwen, 10-year-old Ben Tennyson discovers a mysterious alien device called the Omnitrix that attaches to his wrist.",
    category: "origin",
    episodeRef: "And Then There Were 10",
    color: "#00FF00"
  },
  {
    id: "t2",
    date: "Day 1",
    title: "First Transformation: Heatblast",
    description: "Ben accidentally activates the Omnitrix and transforms into Heatblast for the first time, using his fire powers to save campers from a forest fire.",
    category: "alien",
    episodeRef: "And Then There Were 10",
    color: "#FF4500"
  },
  {
    id: "t3",
    date: "Week 1",
    title: "Dr. Animo's Rampage",
    description: "Ben encounters his first recurring villain, Dr. Animo, who uses his Transmodulator to reanimate dinosaur fossils in Washington D.C.",
    category: "battle",
    episodeRef: "Washington B.C.",
    color: "#228B22"
  },
  {
    id: "t4",
    date: "Week 2",
    title: "The Krakken Encounter",
    description: "Ben discovers a legendary sea creature and must protect it from poachers, learning that not all monsters are evil.",
    category: "battle",
    episodeRef: "The Krakken",
    color: "#4682B4"
  },
  {
    id: "t5",
    date: "Week 3",
    title: "Bounty Hunters Arrive",
    description: "Three alien bounty hunters—Kraab, Sixsix, and Tetrax—are sent to Earth to retrieve the Omnitrix, forcing Ben to use multiple alien forms to survive.",
    category: "battle",
    episodeRef: "Hunted",
    color: "#DC143C"
  },
  {
    id: "t6",
    date: "Week 4",
    title: "Kevin 11 Appears",
    description: "Ben meets Kevin Levin, a troubled kid with energy absorption powers. Their friendship quickly turns to rivalry when Kevin's true nature is revealed.",
    category: "character",
    episodeRef: "Kevin 11",
    color: "#4A0080"
  },
  {
    id: "t7",
    date: "Week 5",
    title: "Vilgax's First Strike",
    description: "The alien warlord Vilgax sends his drones to Earth, marking the beginning of his obsessive quest to obtain the Omnitrix from Ben.",
    category: "battle",
    episodeRef: "The Alliance",
    color: "#8B0000"
  },
  {
    id: "t8",
    date: "Week 6",
    title: "Zombozo's Circus of Fear",
    description: "Ben must overcome his fear of clowns to stop Zombozo, a terrifying clown who drains happiness from his victims.",
    category: "battle",
    episodeRef: "Last Laugh",
    color: "#9400D3"
  },
  {
    id: "t9",
    date: "Week 7",
    title: "Lucky Girl Emerges",
    description: "Gwen discovers a magical charm that gives her incredible luck, temporarily becoming the superhero 'Lucky Girl' and fighting alongside Ben.",
    category: "character",
    episodeRef: "Lucky Girl",
    color: "#FF69B4"
  },
  {
    id: "t10",
    date: "Mid-Summer",
    title: "Kevin 11 Mutation",
    description: "After absorbing the Omnitrix's power, Kevin mutates into a horrific amalgamation of all ten aliens, becoming Kevin 11 and one of Ben's most dangerous foes.",
    category: "character",
    episodeRef: "Framed",
    color: "#4A0080"
  },
  {
    id: "t11",
    date: "Late Summer",
    title: "Vilgax Confrontation",
    description: "Ben finally faces Vilgax in direct combat. Despite the warlord's overwhelming power, Ben manages to defeat him and send him into the Null Void.",
    category: "battle",
    episodeRef: "Secrets",
    color: "#8B0000"
  },
  {
    id: "t12",
    date: "Summer's End",
    title: "Ghostfreak Escapes",
    description: "The consciousness within Ghostfreak's DNA escapes the Omnitrix, becoming an independent threat and one of Ben's most terrifying enemies.",
    category: "alien",
    episodeRef: "Ghostfreaked Out",
    color: "#9370DB"
  }
];