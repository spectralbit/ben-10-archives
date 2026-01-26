import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, QuizQuestion } from '@/data/quiz';
import { CheckCircle, XCircle, Trophy, RotateCcw, ArrowRight, Brain } from 'lucide-react';

interface QuizGameProps {
  questionsCount?: number;
}

export const QuizGame = ({ questionsCount = 10 }: QuizGameProps) => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'finished'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  // Shuffle and select questions
  const questions = useMemo(() => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(questionsCount, shuffled.length));
  }, [questionsCount, gameState]);

  const currentQuestion = questions[currentIndex];

  const handleStartGame = () => {
    setGameState('playing');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
  };

  const handleAnswer = useCallback((answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, isCorrect]);
  }, [showResult, currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameState('finished');
    }
  }, [currentIndex, questions.length]);

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect! You're a true Omnitrix Master!";
    if (percentage >= 80) return "Excellent! Ben would be proud!";
    if (percentage >= 60) return "Good job! You know your aliens!";
    if (percentage >= 40) return "Not bad, but keep watching!";
    return "Time to rewatch the series!";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-primary';
    }
  };

  // Intro Screen
  if (gameState === 'intro') {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="alien-card rounded-2xl p-8 md:p-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-orbitron font-bold text-3xl text-foreground mb-4">
            Ben 10 Trivia Challenge
          </h2>
          <p className="font-exo text-muted-foreground mb-8">
            Test your knowledge of aliens, episodes, and characters from the 
            Ben 10 Classic series. Answer {questionsCount} questions and prove 
            you're an Omnitrix expert!
          </p>
          <button
            onClick={handleStartGame}
            className="btn-omnitrix px-8 py-4 rounded-xl text-lg"
          >
            Start Quiz
          </button>
        </motion.div>
      </div>
    );
  }

  // Results Screen
  if (gameState === 'finished') {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="alien-card rounded-2xl p-8 md:p-12"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
          <h2 className="font-orbitron font-bold text-3xl text-foreground mb-2">
            Quiz Complete!
          </h2>
          <p className="font-exo text-xl text-primary mb-4">
            {score} / {questions.length} correct
          </p>
          <p className="font-exo text-muted-foreground mb-8">
            {getScoreMessage()}
          </p>
          
          {/* Answer Summary */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  correct ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}
              >
                {correct ? <CheckCircle size={16} /> : <XCircle size={16} />}
              </div>
            ))}
          </div>

          <button
            onClick={handleStartGame}
            className="btn-omnitrix px-8 py-4 rounded-xl flex items-center gap-2 mx-auto"
          >
            <RotateCcw size={20} />
            Play Again
          </button>
        </motion.div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm font-exo text-muted-foreground mb-2">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span className="text-primary">{score} correct</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="alien-card rounded-2xl p-6 md:p-8"
        >
          {/* Category & Difficulty */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-exo uppercase tracking-wider text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
              {currentQuestion.category}
            </span>
            <span className={`text-xs font-exo uppercase tracking-wider ${getDifficultyColor(currentQuestion.difficulty)}`}>
              {currentQuestion.difficulty}
            </span>
          </div>

          {/* Question */}
          <h3 className="font-orbitron font-semibold text-xl md:text-2xl text-foreground mb-6">
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl font-exo text-left transition-all border ${
                    showCorrect
                      ? 'bg-green-500/20 border-green-500 text-green-400'
                      : showWrong
                        ? 'bg-red-500/20 border-red-500 text-red-400'
                        : isSelected
                          ? 'bg-primary/20 border-primary text-primary'
                          : 'bg-muted/50 border-border/50 text-foreground hover:border-primary/50 hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      showCorrect
                        ? 'bg-green-500/30'
                        : showWrong
                          ? 'bg-red-500/30'
                          : 'bg-muted'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showCorrect && <CheckCircle size={20} className="text-green-400" />}
                    {showWrong && <XCircle size={20} className="text-red-400" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex justify-end"
            >
              <button
                onClick={handleNext}
                className="btn-omnitrix px-6 py-3 rounded-lg flex items-center gap-2"
              >
                {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};