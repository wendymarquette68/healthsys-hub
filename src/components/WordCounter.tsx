interface Props {
  current: number;
  minimum: number;
}

export default function WordCounter({ current, minimum }: Props) {
  const met = current >= minimum;
  const pct = Math.min(100, Math.round((current / minimum) * 100));

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-600">Total word count</span>
        <span className={`text-xs font-bold ${met ? 'text-green-600' : 'text-slate-500'}`}>
          {current} / {minimum} words {met ? '✓ Ready to download' : `— ${minimum - current} more to unlock`}
        </span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${met ? 'bg-green-500' : 'bg-blue-400'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
