import { vasylSymonenkoQuiz } from '@/constants';
import { useState } from 'react';
import { MButton } from '@/components/ui/button';
import { Container } from '@/components/Container';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { titleVariants } from '@/variants';
import { m } from 'framer-motion';
import { PartyPopper } from 'lucide-react';

const quiz = vasylSymonenkoQuiz.sort(() => Math.random() - 0.5).slice(0, 12);

export const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quiz[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(undefined);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <Container className="flex flex-col  justify-center items-center gap-6">
      <m.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-center"
      >
        Vasyl Symonenko Quiz
      </m.h1>
      <m.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        initial="hidden"
        animate="visible"
        className="p-6 rounded-lg  dark:shadow-[rgba(0,_0,_0,_0.5)] dark:bg-(--tw-color-dark-secondary-background) bg-(--tw-color-card) shadow-md text-2xl max-w-[600px] w-full"
      >
        {currentQuestionIndex < quiz.length ? (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-2">
              <h3>{quiz[currentQuestionIndex].question}</h3>
              <span>
                {currentQuestionIndex + 1}/{quiz.length}
              </span>
            </div>
            <RadioGroup
              className="flex flex-col gap-4"
              value={selectedOption}
              onValueChange={handleOptionSelect}
            >
              {quiz[currentQuestionIndex].options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="cursor-pointer dark:bg-(--tw-color-dark-accent)/20 "
                    value={option}
                    id={option}
                  />
                  <Label className="cursor-pointer" htmlFor={option}>
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <MButton
              className="self-start mt-2"
              size={'sm'}
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next
            </MButton>
          </div>
        ) : (
          <m.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="show"
            className="text-3xl text-center flex justify-between items-center"
          >
            <m.span
              variants={{ static: { rotate: [0, 10, -10, 10, 0] } }}
              animate="static"
              transition={{ repeat: Infinity }}
            >
              <PartyPopper className="w-10 h-10 scale-x-[-1] dark:text-(--tw-color-dark-accent)" />
            </m.span>
            <div>
              Ваш результат:
              <span className="font-bold dark:text-(--tw-color-dark-accent)">
                {' '}
                {score} / {quiz.length}
              </span>
            </div>
            <m.span
              variants={{ static: { rotate: [0, 10, -10, 10, 0] } }}
              animate="static"
              transition={{ repeat: Infinity }}
            >
              <PartyPopper className="w-10 h-10 dark:text-(--tw-color-dark-accent)" />
            </m.span>
          </m.div>
        )}
      </m.div>
    </Container>
  );
};
