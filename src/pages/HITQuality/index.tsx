import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Scenario, pickSessionScenarios, shuffleOptions } from '../../data/scenarios';
import IdentityEntry from './IdentityEntry';
import ScenarioEngine from './ScenarioEngine';
import ReflectionExport from './ReflectionExport';

export interface StudentInfo {
  firstName: string;
  lastName: string;
  topic: string;
}

export interface ScenarioResult {
  scenario: Scenario;
  selectedIndex: number;
  correct: boolean;
}

type Phase = 'identity' | 'scenario' | 'reflection';

export default function HITQuality() {
  const [phase, setPhase] = useState<Phase>('identity');
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [scenarios] = useState<Scenario[]>(() =>
    pickSessionScenarios().map(shuffleOptions)
  );
  const [results, setResults] = useState<ScenarioResult[]>([]);

  function handleIdentityComplete(info: StudentInfo) {
    setStudent(info);
    setPhase('scenario');
  }

  function handleScenariosComplete(scenarioResults: ScenarioResult[]) {
    setResults(scenarioResults);
    setPhase('reflection');
  }

  if (phase === 'identity') {
    return <IdentityEntry onComplete={handleIdentityComplete} />;
  }

  if (phase === 'scenario' && student) {
    return (
      <ScenarioEngine
        scenarios={scenarios}
        onComplete={handleScenariosComplete}
      />
    );
  }

  if (phase === 'reflection' && student) {
    return (
      <ReflectionExport
        student={student}
        results={results}
      />
    );
  }

  return <Navigate to="/" />;
}
