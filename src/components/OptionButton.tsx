type OptionState = 'default' | 'correct' | 'wrong' | 'neutral';

interface Props {
  label: string;
  text: string;
  state: OptionState;
  disabled: boolean;
  onClick: () => void;
}

const STATE_STYLES: Record<OptionState, string> = {
  default:
    'bg-white border-slate-300 text-slate-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer',
  correct:
    'bg-green-50 border-green-500 text-green-900 font-semibold',
  wrong:
    'bg-red-50 border-red-500 text-red-900',
  neutral:
    'bg-white border-slate-200 text-slate-400 opacity-60',
};

const LABEL_STYLES: Record<OptionState, string> = {
  default: 'bg-slate-100 text-slate-600',
  correct: 'bg-green-500 text-white',
  wrong: 'bg-red-500 text-white',
  neutral: 'bg-slate-200 text-slate-400',
};

export default function OptionButton({ label, text, state, disabled, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-start gap-3 border-2 rounded-xl px-4 py-3 text-left text-sm transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-blue-400 ${STATE_STYLES[state]}`}
    >
      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${LABEL_STYLES[state]}`}>
        {state === 'correct' ? '✓' : state === 'wrong' ? '✗' : label}
      </span>
      <span className="leading-relaxed">{text}</span>
    </button>
  );
}
