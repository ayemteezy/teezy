"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { miniGameQuestions } from "@/consts";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";

const getRandomQuestions = (num: number) => {
	const shuffled = [...miniGameQuestions].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
};

export const MiniGame = () => {
	const [questions, setQuestions] = useState(() => getRandomQuestions(5));
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleAnswerClick = (optionIndex: number) => {
		setSelectedOption(optionIndex);
		if (optionIndex === questions[currentQuestion].correctAnswer) {
			setScore(score + 1);
		}
		setTimeout(() => {
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions.length) {
				setCurrentQuestion(nextQuestion);
				setSelectedOption(null);
			} else {
				setShowScore(true);
			}
		}, 1000);
	};

	const resetQuiz = () => {
		setQuestions(getRandomQuestions(5));
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
		setSelectedOption(null);
	};

	useEffect(() => {
		if (!isOpen) {
			resetQuiz();
		}
	}, [isOpen]);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" className="flex items-center gap-2">
					<Gamepad2 className="h-4 w-4" />
					<span>Test Your Knowledge</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>
						{showScore ? "Quiz Results" : "How Well Do You Know Me?"}
					</DialogTitle>
					<DialogDescription>
						{showScore
							? "Let's see how well you know me!"
							: "Take this quick quiz to test your knowledge about me."}
					</DialogDescription>
				</DialogHeader>

				<div className="py-4">
					{showScore ? (
						<div className="text-center">
							<div className="text-4xl font-bold mb-4">
								{score} / {questions.length}
							</div>
							<p className="mb-6 text-sm text-muted-foreground">
								{score === questions.length
									? "Perfect score! You really know me well!"
									: score >= questions.length / 2
										? "Good job! You know quite a bit about me."
										: "Thanks for playing! Now you know more about me."}
							</p>
							<Button onClick={resetQuiz}>Play Again</Button>
						</div>
					) : (
						<div>
							<div className="mb-6">
								<div className="text-sm text-muted-foreground mb-1">
									Question {currentQuestion + 1} of {questions.length}
								</div>
								<Progress value={(currentQuestion / questions.length) * 100} />
								<h3 className="text-lg font-medium my-4">
									{questions[currentQuestion].question}
								</h3>
								<div className="space-y-3">
									{questions[currentQuestion].options.map((option, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 }}
										>
											<Button
												variant="outline"
												className={`w-full justify-start text-left h-auto py-3 px-4 ${
													selectedOption === index
														? selectedOption ===
															questions[currentQuestion].correctAnswer
															? "border-green-500 bg-green-500/10"
															: "border-red-500 bg-red-500/10"
														: ""
												}`}
												onClick={() =>
													selectedOption === null && handleAnswerClick(index)
												}
												disabled={selectedOption !== null}
											>
												{option}
											</Button>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};
