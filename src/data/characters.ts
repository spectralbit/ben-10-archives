export interface KeyMoment {
  episode: string;
  title: string;
  description: string;
}

export interface Character {
  id: string;
  name: string;
  fullName: string;
  role: string;
  age: number;
  description: string;
  backstory: string;
  personality: string[];
  skills: string[];
  keyMoments: KeyMoment[];
  relationships: { name: string; relation: string }[];
  quote: string;
}

export const characters: Character[] = [
  {
    id: 'ben',
    name: 'Ben Tennyson',
    fullName: 'Benjamin Kirby Tennyson',
    role: 'Hero / Omnitrix Wielder',
    age: 10,
    description: 'A 10-year-old boy who discovers the Omnitrix, an alien device that allows him to transform into 10 different alien heroes.',
    backstory: 'Ben was just an ordinary kid looking forward to a boring summer road trip with his Grandpa Max and cousin Gwen. Everything changed when a mysterious meteorite crashed near their campsite, containing the Omnitrix—a powerful alien device that attached itself to Ben\'s wrist. Now wielding the power to transform into alien heroes, Ben must learn to use his new abilities responsibly while facing threats from across the galaxy.',
    personality: ['Brave', 'Impulsive', 'Heroic', 'Cocky', 'Good-hearted'],
    skills: [
      'Omnitrix transformation abilities',
      'Quick thinking in battle',
      'Natural leadership',
      'Growing strategic mind',
      'Determination and willpower'
    ],
    keyMoments: [
      {
        episode: 'And Then There Were 10',
        title: 'Discovery of the Omnitrix',
        description: 'Ben finds the Omnitrix in a crashed meteor and it permanently attaches to his wrist, beginning his hero journey.'
      },
      {
        episode: 'Kevin 11',
        title: 'First Major Rival',
        description: 'Ben encounters Kevin Levin, a troubled kid with energy absorption powers, leading to an intense rivalry.'
      },
      {
        episode: 'Secrets',
        title: 'Vilgax Returns',
        description: 'Ben faces Vilgax for the first time in person, learning the true danger of being the Omnitrix wielder.'
      },
      {
        episode: 'Back with a Vengeance',
        title: 'Ultimate Showdown',
        description: 'Ben must face both Vilgax and Kevin 11 working together, pushing him to his limits.'
      }
    ],
    relationships: [
      { name: 'Gwen Tennyson', relation: 'Cousin' },
      { name: 'Max Tennyson', relation: 'Grandfather' },
      { name: 'Vilgax', relation: 'Arch-nemesis' },
      { name: 'Kevin Levin', relation: 'Rival' }
    ],
    quote: '"It\'s hero time!"'
  },
  {
    id: 'gwen',
    name: 'Gwen Tennyson',
    fullName: 'Gwendolyn Tennyson',
    role: 'Support / Magic User',
    age: 10,
    description: 'Ben\'s intelligent and resourceful cousin who discovers her own magical abilities during their summer adventure.',
    backstory: 'Gwen initially dreaded spending her summer vacation stuck with her immature cousin Ben. However, as their adventures unfolded, she discovered hidden magical abilities inherited from her grandmother Verdona, an Anodite. Throughout the summer, Gwen evolved from a skeptical bystander to an essential team member, using her intelligence, martial arts training, and growing magical powers to help save the day.',
    personality: ['Intelligent', 'Responsible', 'Sarcastic', 'Caring', 'Determined'],
    skills: [
      'Magical energy manipulation',
      'Martial arts (Tae Kwon Do)',
      'Computer hacking',
      'Research and investigation',
      'Quick problem-solving'
    ],
    keyMoments: [
      {
        episode: 'Lucky Girl',
        title: 'Discovers Magic',
        description: 'Gwen finds the Charm of Bezel, awakening her latent magical abilities and becoming the hero Lucky Girl.'
      },
      {
        episode: 'Tough Luck',
        title: 'Destroys the Charms',
        description: 'Gwen makes the difficult choice to destroy the Charms of Bezel rather than let them fall into Hex\'s hands.'
      },
      {
        episode: 'A Change of Face',
        title: 'Facing Charmcaster',
        description: 'Gwen battles Charmcaster who has switched bodies with her, proving her worth beyond just the charms.'
      },
      {
        episode: 'Gwen 10',
        title: 'Alternate Reality',
        description: 'In an alternate timeline, Gwen finds the Omnitrix, showing what kind of hero she would have become.'
      }
    ],
    relationships: [
      { name: 'Ben Tennyson', relation: 'Cousin' },
      { name: 'Max Tennyson', relation: 'Grandfather' },
      { name: 'Hex', relation: 'Enemy' },
      { name: 'Charmcaster', relation: 'Rival' }
    ],
    quote: '"Someone has to keep Ben out of trouble."'
  },
  {
    id: 'max',
    name: 'Grandpa Max',
    fullName: 'Maxwell Tennyson',
    role: 'Mentor / Former Plumber',
    age: 60,
    description: 'Ben and Gwen\'s grandfather, a retired secret agent from an intergalactic peacekeeping organization called the Plumbers.',
    backstory: 'Max Tennyson served as a Plumber—an elite intergalactic law enforcement agent—for decades before retiring. His experience fighting alien threats across the galaxy makes him an invaluable mentor to Ben and Gwen. Though he initially tried to give his grandchildren a normal summer vacation, the arrival of the Omnitrix pulled him back into action. Max uses his vast knowledge of alien species, combat training, and old Plumber connections to guide and protect his grandchildren.',
    personality: ['Wise', 'Protective', 'Adventurous', 'Mysterious', 'Nurturing'],
    skills: [
      'Expert combat training',
      'Vast alien knowledge',
      'Plumber technology expertise',
      'Survival skills',
      'Strategic planning'
    ],
    keyMoments: [
      {
        episode: 'Truth',
        title: 'Plumber Secret Revealed',
        description: 'Ben and Gwen learn about Max\'s past as a Plumber and his history with Vilgax.'
      },
      {
        episode: 'The Visitor',
        title: 'Old Flame Returns',
        description: 'Max reunites with Xylene, an alien Plumber he once had a relationship with, revealing more of his past.'
      },
      {
        episode: 'Perfect Day',
        title: 'Trapped by Enoch',
        description: 'Max is captured by the Forever Knights, forcing Ben and Gwen to rescue him.'
      },
      {
        episode: 'Ben 10,000',
        title: 'Future Revealed',
        description: 'In a future timeline, Max is shown as an active hero still fighting alongside his now-adult grandchildren.'
      }
    ],
    relationships: [
      { name: 'Ben Tennyson', relation: 'Grandson' },
      { name: 'Gwen Tennyson', relation: 'Granddaughter' },
      { name: 'Xylene', relation: 'Former Partner' },
      { name: 'Phil Billings', relation: 'Former Partner' }
    ],
    quote: '"Trust me, I\'ve seen things that would make your head spin."'
  }
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find(char => char.id === id);
};
