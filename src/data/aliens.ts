import heatblastImg from '@/assets/aliens/heatblast.jpg';
import fourarmsImg from '@/assets/aliens/fourarms.jpg';
import xlr8Img from '@/assets/aliens/xlr8.jpg';
import diamondheadImg from '@/assets/aliens/diamondhead.jpg';
import greymatterImg from '@/assets/aliens/greymatter.jpg';
import stinkflyImg from '@/assets/aliens/stinkfly.jpg';
import ripjawsImg from '@/assets/aliens/ripjaws.jpg';
import upgradeImg from '@/assets/aliens/upgrade.jpg';
import ghostfreakImg from '@/assets/aliens/ghostfreak.jpg';
import wildmuttImg from '@/assets/aliens/wildmutt.jpg';

export interface Alien {
  id: string;
  name: string;
  species: string;
  description: string;
  powers: string[];
  imageUrl: string;
  color: string;
}

export const aliens: Alien[] = [
  {
    id: "heatblast",
    name: "Heatblast",
    species: "Pyronite",
    description: "A living embodiment of fire, Heatblast can generate and manipulate intense heat and flames. First alien Ben ever transformed into.",
    powers: ["Pyrokinesis", "Fire Immunity", "Flight via Fire Propulsion"],
    imageUrl: heatblastImg,
    color: "#FF4500"
  },
  {
    id: "fourarms",
    name: "Four Arms",
    species: "Tetramand",
    description: "A twelve-foot-tall, four-armed powerhouse with incredible strength. Can create shockwaves by clapping all four hands.",
    powers: ["Super Strength", "Enhanced Durability", "Shockwave Generation"],
    imageUrl: fourarmsImg,
    color: "#DC143C"
  },
  {
    id: "xlr8",
    name: "XLR8",
    species: "Kineceleran",
    description: "The fastest alien in Ben's arsenal, capable of running at speeds exceeding 500 mph with incredible agility.",
    powers: ["Super Speed", "Enhanced Agility", "Sharp Claws"],
    imageUrl: xlr8Img,
    color: "#00BFFF"
  },
  {
    id: "diamondhead",
    name: "Diamondhead",
    species: "Petrosapien",
    description: "A silicon-based lifeform with a body made of extremely durable crystal. Can reshape his limbs into weapons.",
    powers: ["Crystallokinesis", "Crystal Projectiles", "Regeneration"],
    imageUrl: diamondheadImg,
    color: "#00FF7F"
  },
  {
    id: "greymatter",
    name: "Grey Matter",
    species: "Galvan",
    description: "A five-inch-tall genius with intelligence far beyond human capability. Can understand and operate any technology.",
    powers: ["Super Intelligence", "Small Size", "Tech Manipulation"],
    imageUrl: greymatterImg,
    color: "#808080"
  },
  {
    id: "stinkfly",
    name: "Stinkfly",
    species: "Lepidopterran",
    description: "An insectoid alien with four wings capable of high-speed flight and the ability to shoot slime from his eyes.",
    powers: ["Flight", "Slime Projection", "Enhanced Agility"],
    imageUrl: stinkflyImg,
    color: "#9ACD32"
  },
  {
    id: "ripjaws",
    name: "Ripjaws",
    species: "Piscciss Volann",
    description: "An aquatic predator with powerful jaws and the ability to breathe underwater. Perfect for deep-sea missions.",
    powers: ["Underwater Breathing", "Powerful Bite", "Swimming Speed"],
    imageUrl: ripjawsImg,
    color: "#4682B4"
  },
  {
    id: "upgrade",
    name: "Upgrade",
    species: "Mechamorph",
    description: "A living machine that can merge with and enhance any technology, making it significantly more powerful.",
    powers: ["Technopathy", "Technology Enhancement", "Shapeshifting"],
    imageUrl: upgradeImg,
    color: "#32CD32"
  },
  {
    id: "ghostfreak",
    name: "Ghostfreak",
    species: "Ectonurite",
    description: "A spectral alien that can turn invisible, phase through solid matter, and possess other beings.",
    powers: ["Invisibility", "Intangibility", "Possession"],
    imageUrl: ghostfreakImg,
    color: "#9370DB"
  },
  {
    id: "wildmutt",
    name: "Wildmutt",
    species: "Vulpimancer",
    description: "A blind, animalistic alien with enhanced senses of smell and hearing that compensate for lack of sight.",
    powers: ["Enhanced Senses", "Super Agility", "Sharp Claws"],
    imageUrl: wildmuttImg,
    color: "#FF8C00"
  }
];
