import vilgaxImg from '@/assets/villains/vilgax.jpg';
import kevin11Img from '@/assets/villains/kevin11.jpg';
import drAnimoImg from '@/assets/villains/dranimo.jpg';
import zombozoImg from '@/assets/villains/zombozo.jpg';
import hexImg from '@/assets/villains/hex.jpg';
import charmcasterImg from '@/assets/villains/charmcaster.jpg';

export interface Villain {
  id: string;
  name: string;
  alias?: string;
  description: string;
  abilities: string[];
  firstAppearance: string;
  threatLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
  imageUrl: string;
  color: string;
}

export const villains: Villain[] = [
  {
    id: "vilgax",
    name: "Vilgax",
    alias: "Conqueror of Ten Worlds",
    description: "The most dangerous alien warlord in the galaxy, Vilgax has conquered countless worlds and will stop at nothing to obtain the Omnitrix. His obsession with the device makes him Ben's greatest enemy.",
    abilities: ["Super Strength", "Enhanced Durability", "Laser Vision", "Tentacle Arms"],
    firstAppearance: "And Then There Were 10",
    threatLevel: "Extreme",
    imageUrl: vilgaxImg,
    color: "#8B0000"
  },
  {
    id: "kevin11",
    name: "Kevin Levin",
    alias: "Kevin 11",
    description: "A troubled youth with the ability to absorb energy, Kevin became one of Ben's most persistent foes after absorbing the Omnitrix's power and gaining access to all of Ben's alien forms.",
    abilities: ["Energy Absorption", "Alien Transformation", "Enhanced Strength", "Matter Absorption"],
    firstAppearance: "Kevin 11",
    threatLevel: "High",
    imageUrl: kevin11Img,
    color: "#4A0080"
  },
  {
    id: "dranimo",
    name: "Dr. Animo",
    alias: "The Mad Scientist",
    description: "A deranged scientist obsessed with genetic mutation, Dr. Animo uses his Transmodulator device to create horrific mutant creatures and reanimate prehistoric beasts.",
    abilities: ["Genetic Manipulation", "Animal Control", "Scientific Genius", "Transmodulator Technology"],
    firstAppearance: "Washington B.C.",
    threatLevel: "Medium",
    imageUrl: drAnimoImg,
    color: "#228B22"
  },
  {
    id: "zombozo",
    name: "Zombozo",
    alias: "The Frightful Clown",
    description: "A terrifying clown who feeds on the happiness of others, draining their joy and leaving them as empty husks. His circus of fear is a nightmare come to life.",
    abilities: ["Fear Inducement", "Happiness Absorption", "Circus Weapons", "Hypnosis"],
    firstAppearance: "Last Laugh",
    threatLevel: "Medium",
    imageUrl: zombozoImg,
    color: "#9400D3"
  },
  {
    id: "hex",
    name: "Hex",
    alias: "Master of Dark Magic",
    description: "An ancient sorcerer who wields powerful dark magic through mystical artifacts. He seeks to obtain ultimate magical power and will destroy anyone in his path.",
    abilities: ["Dark Magic", "Spell Casting", "Artifact Mastery", "Teleportation"],
    firstAppearance: "Lucky Girl",
    threatLevel: "High",
    imageUrl: hexImg,
    color: "#4B0082"
  },
  {
    id: "charmcaster",
    name: "Charmcaster",
    alias: "Hope",
    description: "Hex's niece and a powerful sorceress in her own right. Despite her villainous actions, she walks a grey line between good and evil, making her unpredictable.",
    abilities: ["Magic Spells", "Summoning", "Portal Creation", "Energy Manipulation"],
    firstAppearance: "Tough Luck",
    threatLevel: "Medium",
    imageUrl: charmcasterImg,
    color: "#FF69B4"
  }
];