import { useState } from 'react';
import { StudentInfo, ScenarioResult } from './index';
import WordCounter from '../../components/WordCounter';
import { generatePDF } from '../../utils/generatePDF';

interface Props {
  student: StudentInfo;
  results: ScenarioResult[];
}

const MIN_WORDS = 300;

function getEncouragement(score: number, total: number): string {
  const pct = score / total;
  if (pct >= 0.83) return 'Outstanding work! Your grasp of HIT and health policy is strong.';
  if (pct >= 0.5) return 'Good effort! Review the feedback on any missed scenarios to sharpen your thinking.';
  return 'Keep going — the reflection section is where the real learning happens. Use the feedback to inform your advocacy work.';
}

function countWords(text: string): number {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

export default function ReflectionExport({ student, results }: Props) {
  const score = results.filter((r) => r.correct).length;
  const total = results.length;
  const percentage = Math.round((score / total) * 100);
  const encouragement = getEncouragement(score, total);

  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const totalWords = countWords(q1) + countWords(q2) + countWords(q3) + countWords(q4);
  const unlocked = totalWords >= MIN_WORDS;

  const reflections = { q1, q2, q3, q4 };

  async function handleDownload() {
    if (!unlocked) return;
    setDownloading(true);
    setDownloadError(false);
    try {
      await generatePDF({ student, results, score, total, percentage, reflections });
    } catch {
      setDownloadError(true);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col">
      <header className="px-6 pt-8 pb-4 text-center">
        <div className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
          Activity Complete
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">Your Results</h1>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pb-10 gap-6">
        <div className="w-full max-w-2xl space-y-6">

          {/* Score card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-4xl font-extrabold text-slate-800">
                  {score} <span className="text-slate-400 text-2xl font-semibold">/ {total}</span>
                </p>
                <p className="text-lg font-bold text-blue-600">{percentage}%</p>
                <p className="text-sm text-slate-500 mt-1 max-w-sm">{encouragement}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 text-center min-w-[120px]">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Your Topic</p>
                <p className="text-xs font-bold text-slate-700 leading-snug">{student.topic}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {results.map((r, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 rounded-lg px-3 py-2 text-sm ${
                    r.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  <span className="font-bold flex-shrink-0">{r.correct ? '✓' : '✗'}</span>
                  <span className="font-semibold flex-shrink-0">{i + 1}.</span>
                  <span className="font-medium">{r.scenario.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-1">Reflection Questions</h2>
            <p className="text-sm text-slate-500 mb-5">
              Answer all four questions. Minimum 300 words total across all responses to unlock your PDF download.
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Question 1
                </label>
                <p className="text-sm text-slate-600 mb-2 bg-blue-50 rounded-lg p-3 leading-relaxed">
                  Your project topic is <strong>{student.topic}</strong>. Identify ONE specific policy
                  change — a law, regulation, or program — that would most directly address the core
                  health equity or quality issue in your topic. Who has the authority to make that
                  change happen (federal, state, or local), and what stakeholders would resist it?
                </p>
                <textarea
                  value={q1}
                  onChange={(e) => setQ1(e.target.value)}
                  rows={5}
                  placeholder="Type your response here..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Question 2
                </label>
                <p className="text-sm text-slate-600 mb-2 bg-blue-50 rounded-lg p-3 leading-relaxed">
                  The activity included a scenario on healthcare quality from Chapter 11. Based on the
                  seven domains of quality (effective, safe, person-centered, timely, equitable,
                  integrated, efficient), which domain is most neglected for the population in your
                  advocacy project? Use a specific example from your research to support your answer.
                </p>
                <textarea
                  value={q2}
                  onChange={(e) => setQ2(e.target.value)}
                  rows={5}
                  placeholder="Type your response here..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Question 3
                </label>
                <p className="text-sm text-slate-600 mb-2 bg-blue-50 rounded-lg p-3 leading-relaxed">
                  Chapter 11 covers EHRs, CDSS, and health information exchanges. Describe one way
                  that health information technology could either help close a gap OR create a new
                  barrier for the population you are advocating for in your topic{' '}
                  <strong>{student.topic}</strong>. Be specific — name the technology and the mechanism.
                </p>
                <textarea
                  value={q3}
                  onChange={(e) => setQ3(e.target.value)}
                  rows={5}
                  placeholder="Type your response here..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Question 4
                </label>
                <p className="text-sm text-slate-600 mb-2 bg-blue-50 rounded-lg p-3 leading-relaxed">
                  Reflect on one scenario you got wrong in the activity, or the one that surprised you
                  most. What did the correct answer teach you about how health systems and policy
                  interact, and how does that lesson apply to your own advocacy argument?
                </p>
                <textarea
                  value={q4}
                  onChange={(e) => setQ4(e.target.value)}
                  rows={5}
                  placeholder="Type your response here..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>
            </div>

            <div className="mt-6">
              <WordCounter current={totalWords} minimum={MIN_WORDS} />

              <button
                onClick={handleDownload}
                disabled={!unlocked || downloading}
                className={`w-full mt-4 py-3.5 rounded-xl font-bold text-sm transition-all duration-150 ${
                  unlocked && !downloading
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {downloading
                  ? 'Generating PDF...'
                  : unlocked
                  ? '⬇ Download PDF for Blackboard'
                  : `${MIN_WORDS - totalWords} more words to unlock download`}
              </button>

              {downloadError && (
                <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800">
                  <p className="font-semibold mb-1">PDF generation failed.</p>
                  <p>
                    Please take a screenshot of this page and email it to your instructor as an
                    alternative. Include your name and today's date in the subject line.
                  </p>
                </div>
              )}

              <p className="text-xs text-slate-400 text-center mt-3">
                Your responses are never sent to a server. The PDF is generated entirely in your browser.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center pb-6 text-slate-500 text-xs">
        Department of Health Sciences · HLTH 207
      </footer>
    </div>
  );
}
