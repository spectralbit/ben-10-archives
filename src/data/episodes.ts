import ep01Img from '@/assets/episodes/ep01.jpg';
import ep02Img from '@/assets/episodes/ep02.jpg';
import ep03Img from '@/assets/episodes/ep03.jpg';
import ep04Img from '@/assets/episodes/ep04.jpg';
import ep05Img from '@/assets/episodes/ep05.jpg';
import ep06Img from '@/assets/episodes/ep06.jpg';
import ep07Img from '@/assets/episodes/ep07.jpg';
import ep08Img from '@/assets/episodes/ep08.jpg';
import ep09Img from '@/assets/episodes/ep09.jpg';
import ep10Img from '@/assets/episodes/ep10.jpg';

export interface Episode {
  id: string;
  number: number;
  season: number;
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
  airDate: string;
}

export const episodes: Episode[] = [
  {
    id: "s1e1",
    number: 1,
    season: 1,
    title: "And Then There Were 10",
    description: "Ten-year-old Ben Tennyson discovers a mysterious watch called the Omnitrix that allows him to transform into ten different alien heroes.",
    duration: "22 min",
    imageUrl: ep01Img,
    airDate: "December 27, 2005"
  },
  {
    id: "s1e2",
    number: 2,
    season: 1,
    title: "Washington B.C.",
    description: "Ben must stop Dr. Animo from using his Transmodulator to reanimate dinosaur fossils and wreak havoc on Washington D.C.",
    duration: "22 min",
    imageUrl: ep02Img,
    airDate: "January 3, 2006"
  },
  {
    id: "s1e3",
    number: 3,
    season: 1,
    title: "The Krakken",
    description: "While on vacation, Ben encounters a legendary sea monster and must protect it from poachers who want to capture it.",
    duration: "22 min",
    imageUrl: ep03Img,
    airDate: "January 10, 2006"
  },
  {
    id: "s1e4",
    number: 4,
    season: 1,
    title: "Permanent Retirement",
    description: "Ben visits his Aunt Vera at a retirement community, only to discover that the elderly residents are being replaced by alien impostors.",
    duration: "22 min",
    imageUrl: ep04Img,
    airDate: "January 17, 2006"
  },
  {
    id: "s1e5",
    number: 5,
    season: 1,
    title: "Hunted",
    description: "Three alien bounty hunters arrive on Earth to capture the Omnitrix, forcing Ben to use all his alien forms to survive.",
    duration: "22 min",
    imageUrl: ep05Img,
    airDate: "January 24, 2006"
  },
  {
    id: "s1e6",
    number: 6,
    season: 1,
    title: "Tourist Trap",
    description: "At a roadside attraction, Ben accidentally releases Megawhatts - mischievous electrical aliens that start causing chaos.",
    duration: "22 min",
    imageUrl: ep06Img,
    airDate: "January 31, 2006"
  },
  {
    id: "s1e7",
    number: 7,
    season: 1,
    title: "Kevin 11",
    description: "Ben befriends Kevin Levin, a troubled kid with energy absorption powers, but Kevin's villainous nature soon reveals itself.",
    duration: "22 min",
    imageUrl: ep07Img,
    airDate: "February 7, 2006"
  },
  {
    id: "s1e8",
    number: 8,
    season: 1,
    title: "The Alliance",
    description: "Vilgax sends his robotic drones to Earth while recruiting local villains to help him obtain the Omnitrix from Ben.",
    duration: "22 min",
    imageUrl: ep08Img,
    airDate: "February 14, 2006"
  },
  {
    id: "s1e9",
    number: 9,
    season: 1,
    title: "Last Laugh",
    description: "A creepy clown named Zombozo drains happiness from people at a traveling circus, and Ben must overcome his fear to stop him.",
    duration: "22 min",
    imageUrl: ep09Img,
    airDate: "February 21, 2006"
  },
  {
    id: "s1e10",
    number: 10,
    season: 1,
    title: "Lucky Girl",
    description: "Gwen discovers a magical charm that gives her incredible luck, turning her into a superhero called Lucky Girl.",
    duration: "22 min",
    imageUrl: ep10Img,
    airDate: "February 28, 2006"
  }
];
