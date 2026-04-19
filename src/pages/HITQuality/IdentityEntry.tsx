import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADVOCACY_TOPICS } from '../../data/scenarios';
import { StudentInfo } from './index';

interface Props {
  onComplete: (info: StudentInfo) => void;
}

export default function IdentityEntry({ onComplete }: Props) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [topic, setTopic] = useState('');
  const [attempted, setAttempted] = useState(false);

  const isValid = firstName.trim() !== '' && lastName.trim() !== '' && topic !== '';

  function handleSubmit() {
    setAttempted(true);
    if (!isValid) return;
    onComplete({ firstName: firstName.trim(), lastName: lastName.trim(), topic });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col">
      <header className="px-6 pt-8 pb-2 text-center">
        <button
          onClick={() => navigate('/')}
          className="text-slate-400 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors"
        >
          ← Back to Hub
        </button>
        <div className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
          Chapter 11 · HIT & Quality
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
          HIT and Quality Activity
        </h1>
        <p className="mt-2 text-slate-300 text-sm max-w-md mx-auto">
          6 scenario questions · Reflection · PDF download · ~20–30 minutes
        </p>
      </header>

      <main className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-800 mb-1">Before we begin</h2>
          <p className="text-sm text-slate-500 mb-6">
            Enter your name and select your advocacy project topic. This
            personalizes your PDF and the reflection questions.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  attempted && !firstName.trim()
                    ? 'border-red-400 bg-red-50'
                    : 'border-slate-300'
                }`}
              />
              {attempted && !firstName.trim() && (
                <p className="text-xs text-red-500 mt-1">First name is required.</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your last name"
                className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  attempted && !lastName.trim()
                    ? 'border-red-400 bg-red-50'
                    : 'border-slate-300'
                }`}
              />
              {attempted && !lastName.trim() && (
                <p className="text-xs text-red-500 mt-1">Last name is required.</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="topic">
                Health Policy Advocacy Project Topic <span className="text-red-500">*</span>
              </label>
              <select
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  attempted && !topic
                    ? 'border-red-400 bg-red-50'
                    : 'border-slate-300'
                }`}
              >
                <option value="">— Select your topic —</option>
                {ADVOCACY_TOPICS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {attempted && !topic && (
                <p className="text-xs text-red-500 mt-1">Please select your advocacy topic.</p>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full mt-6 py-3 rounded-xl font-bold text-sm transition-all duration-150 ${
              isValid
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Begin Activity →
          </button>

          <p className="text-xs text-slate-400 text-center mt-4">
            No account required. Your responses stay in your browser until you download your PDF.
          </p>
        </div>
      </main>

      <footer className="text-center pb-6 text-slate-500 text-xs">
        Department of Health Sciences · HLTH 207
      </footer>
    </div>
  );
}
