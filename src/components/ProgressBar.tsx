interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
          Scenario {current} of {total}
        </span>
        <span className="text-xs text-slate-400">HIT &amp; Quality Activity</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
              i < current - 1
                ? 'bg-green-400'
                : i === current - 1
                ? 'bg-blue-400'
                : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
