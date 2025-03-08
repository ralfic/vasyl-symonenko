import { vasylSymonenkoQuiz } from '@/constants';
import { useState } from 'react';
import { MButton } from '@/components/ui/button';
import { Container } from '@/components/Container';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { titleVariants } from '@/variants';
import { m } from 'framer-motion';
import { PartyPopper } from 'lucide-react';

export const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (
      selectedOption === vasylSymonenkoQuiz[currentQuestionIndex].correctAnswer
    ) {
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
        className="p-6 rounded-lg dark:bg-(--tw-color-blue)/30 bg-(--tw-color-card) shadow-md text-2xl max-w-[600px] w-full"
      >
        {currentQuestionIndex < vasylSymonenkoQuiz.length ? (
          <div className="flex flex-col gap-2">
            <h3>{vasylSymonenkoQuiz[currentQuestionIndex].question}</h3>
            <RadioGroup
              className="flex flex-col gap-4"
              value={selectedOption}
              onValueChange={handleOptionSelect}
            >
              {vasylSymonenkoQuiz[currentQuestionIndex].options.map(
                (option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="cursor-pointer dark:bg-white/20 "
                      value={option}
                      id={option}
                    />
                    <Label className="cursor-pointer" htmlFor={option}>
                      {option}
                    </Label>
                  </div>
                )
              )}
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
              <PartyPopper className="w-10 h-10 scale-x-[-1]" />
            </m.span>
            <div>
              Ваш результат:
              <span className="font-bold">
                {' '}
                {score} / {vasylSymonenkoQuiz.length}
              </span>
            </div>
            <m.span
              variants={{ static: { rotate: [0, 10, -10, 10, 0] } }}
              animate="static"
              transition={{ repeat: Infinity }}
            >
              <PartyPopper className="w-10 h-10" />
            </m.span>
          </m.div>
        )}
      </m.div>
    </Container>
  );
};
