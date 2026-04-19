import { Scenario } from '../data/scenarios';

const BADGE_STYLES: Record<string, string> = {
  policy: 'bg-purple-100 text-purple-800',
  quality: 'bg-teal-100 text-teal-800',
  equity: 'bg-orange-100 text-orange-800',
  crisis: 'bg-red-100 text-red-800',
  hit: 'bg-blue-100 text-blue-800',
};

interface Props {
  scenario: Scenario;
}

export default function ScenarioCard({ scenario }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${BADGE_STYLES[scenario.badge] ?? 'bg-slate-100 text-slate-700'}`}>
          {scenario.badgeLabel}
        </span>
        {scenario.isQuality && scenario.qualityNote && (
          <span className="text-xs text-teal-600 font-medium">{scenario.qualityNote}</span>
        )}
      </div>
      <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-3 leading-snug">
        {scenario.title}
      </h2>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
        {scenario.scenario}
      </p>
    </div>
  );
}
