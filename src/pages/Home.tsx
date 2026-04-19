import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col">
      <header className="px-6 pt-8 pb-4 text-center">
        <div className="inline-block bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
          Towson University · HLTH 207
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          HealthSys Activity Hub
        </h1>
        <p className="mt-2 text-slate-300 text-base md:text-lg max-w-xl mx-auto">
          Self-guided learning activities for Health Care in the U.S. Complete
          your activity, download your PDF, and submit to Blackboard.
        </p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 gap-6">
        <div className="w-full max-w-md">
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            Available Activities
          </p>

          <button
            onClick={() => navigate('/hit-quality')}
            className="w-full bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                💻
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    Chapter 11
                  </span>
                  <span className="text-xs text-slate-400">20–30 min</span>
                </div>
                <h2 className="text-lg font-bold text-slate-800 leading-snug">
                  HIT and Quality Activity
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  6 scenario-based questions on EHRs, CDSS, HIEs, and healthcare
                  quality. Download your results as a PDF for Blackboard.
                </p>
              </div>
              <div className="flex-shrink-0 text-slate-300 text-xl">›</div>
            </div>
          </button>
        </div>

        <div className="w-full max-w-md">
          <div className="w-full bg-slate-700/50 rounded-2xl p-6 text-center opacity-60 cursor-not-allowed select-none">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-2xl">
                🌍
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-400 bg-slate-600 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-400 leading-snug">
                  U.S. vs. Global Comparison Activity
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Compare U.S. health system performance to other high-income
                  nations. Under construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center pb-6 text-slate-500 text-xs">
        Towson University · Department of Health Sciences · HLTH 207
      </footer>
    </div>
  );
}
