import { useState } from 'react';
import { Scenario } from '../../data/scenarios';
import { ScenarioResult } from './index';
import ProgressBar from '../../components/ProgressBar';
import ScenarioCard from '../../components/ScenarioCard';
import OptionButton from '../../components/OptionButton';

interface Props {
  scenarios: Scenario[];
  onComplete: (results: ScenarioResult[]) => void;
}

export default function ScenarioEngine({ scenarios, onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [results, setResults] = useState<ScenarioResult[]>([]);

  const current = scenarios[currentIndex];
  const answered = selectedOption !== null;
  const isLast = currentIndex === scenarios.length - 1;

  function handleSelect(optionIndex: number) {
    if (answered) return;
    setSelectedOption(optionIndex);
  }

  function handleNext() {
    if (selectedOption === null) return;
    const correct = current.options[selectedOption].correct;
    const newResult: ScenarioResult = {
      scenario: current,
      selectedIndex: selectedOption,
      correct,
    };
    const newResults = [...results, newResult];

    if (isLast) {
      onComplete(newResults);
    } else {
      setResults(newResults);
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }
  }

  const correctIndex = current.options.findIndex((o) => o.correct);
  const selectedIsWrong = answered && selectedOption !== null && !current.options[selectedOption].correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col">
      <header className="px-6 pt-6 pb-4">
        <ProgressBar current={currentIndex + 1} total={scenarios.length} />
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pb-8 gap-4">
        <div className="w-full max-w-2xl">
          <ScenarioCard scenario={current} />

          <div className="space-y-3 mt-4">
            {current.options.map((option, idx) => {
              let state: 'default' | 'correct' | 'wrong' | 'neutral' = 'default';
              if (answered) {
                if (idx === correctIndex) state = 'correct';
                else if (idx === selectedOption) state = 'wrong';
                else state = 'neutral';
              }
              return (
                <OptionButton
                  key={idx}
                  label={String.fromCharCode(65 + idx)}
                  text={option.text}
                  state={state}
                  disabled={answered}
                  onClick={() => handleSelect(idx)}
                />
              );
            })}
          </div>

          {answered && (
            <div
              className={`mt-4 rounded-xl p-4 text-sm leading-relaxed ${
                selectedIsWrong
                  ? 'bg-red-50 border border-red-200 text-red-900'
                  : 'bg-green-50 border border-green-200 text-green-900'
              }`}
            >
              <p className="font-semibold mb-1">
                {selectedIsWrong ? 'Not quite — here\'s why:' : 'Correct!'}
              </p>
              <p>{selectedIsWrong ? current.feedback.wrong : current.feedback.correct}</p>
            </div>
          )}

          {answered && (
            <button
              onClick={handleNext}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md transition-all duration-150"
            >
              {isLast ? 'See My Results →' : `Next Scenario (${currentIndex + 2} of ${scenarios.length}) →`}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
