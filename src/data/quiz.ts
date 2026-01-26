export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: 'aliens' | 'episodes' | 'characters' | 'powers';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  // Easy - Aliens
  {
    id: "q1",
    question: "What was the first alien Ben ever transformed into?",
    options: ["Four Arms", "Heatblast", "XLR8", "Diamondhead"],
    correctAnswer: 1,
    category: "aliens",
    difficulty: "easy"
  },
  {
    id: "q2",
    question: "Which alien is known for super speed?",
    options: ["Wildmutt", "XLR8", "Grey Matter", "Upgrade"],
    correctAnswer: 1,
    category: "aliens",
    difficulty: "easy"
  },
  {
    id: "q3",
    question: "What species is Diamondhead?",
    options: ["Pyronite", "Tetramand", "Petrosapien", "Galvan"],
    correctAnswer: 2,
    category: "aliens",
    difficulty: "easy"
  },
  {
    id: "q4",
    question: "Which alien can merge with technology?",
    options: ["Grey Matter", "Upgrade", "XLR8", "Ghostfreak"],
    correctAnswer: 1,
    category: "aliens",
    difficulty: "easy"
  },
  // Medium - Characters
  {
    id: "q5",
    question: "What is Grandpa Max's full name?",
    options: ["Maxwell Tennyson", "Maximilian Tennyson", "Max Turner", "Maxwell Turner"],
    correctAnswer: 0,
    category: "characters",
    difficulty: "medium"
  },
  {
    id: "q6",
    question: "Who is Ben's cousin?",
    options: ["Julie", "Gwen", "Kai", "Elena"],
    correctAnswer: 1,
    category: "characters",
    difficulty: "easy"
  },
  {
    id: "q7",
    question: "What organization did Grandpa Max work for?",
    options: ["The Forever Knights", "The Plumbers", "SACT", "The Null Void Agents"],
    correctAnswer: 1,
    category: "characters",
    difficulty: "medium"
  },
  // Medium - Episodes
  {
    id: "q8",
    question: "In which episode does Ben first meet Kevin 11?",
    options: ["The Alliance", "Kevin 11", "Framed", "Grudge Match"],
    correctAnswer: 1,
    category: "episodes",
    difficulty: "medium"
  },
  {
    id: "q9",
    question: "What creature does Dr. Animo reanimate in 'Washington B.C.'?",
    options: ["A T-Rex", "A Mammoth", "Both dinosaurs and a mammoth", "A Pterodactyl"],
    correctAnswer: 2,
    category: "episodes",
    difficulty: "medium"
  },
  {
    id: "q10",
    question: "Who becomes 'Lucky Girl' in the series?",
    options: ["Ben", "Gwen", "Charmcaster", "Kai"],
    correctAnswer: 1,
    category: "episodes",
    difficulty: "easy"
  },
  // Hard - Powers
  {
    id: "q11",
    question: "What is Ghostfreak's species called?",
    options: ["Phantasm", "Ectonurite", "Spectraal", "Nocturn"],
    correctAnswer: 1,
    category: "powers",
    difficulty: "hard"
  },
  {
    id: "q12",
    question: "How many original aliens does the Omnitrix have?",
    options: ["5", "8", "10", "12"],
    correctAnswer: 2,
    category: "powers",
    difficulty: "easy"
  },
  {
    id: "q13",
    question: "Which alien has no eyes but enhanced smell and hearing?",
    options: ["Ripjaws", "Wildmutt", "Stinkfly", "Ghostfreak"],
    correctAnswer: 1,
    category: "aliens",
    difficulty: "medium"
  },
  {
    id: "q14",
    question: "What is the name of Vilgax's home planet?",
    options: ["Vilgaxia", "Murray", "Null Void", "Petropia"],
    correctAnswer: 1,
    category: "characters",
    difficulty: "hard"
  },
  {
    id: "q15",
    question: "Which alien can shoot slime from their eyes?",
    options: ["Ripjaws", "Grey Matter", "Stinkfly", "Wildmutt"],
    correctAnswer: 2,
    category: "powers",
    difficulty: "medium"
  }
];