'use client';

import { useEffect, useState } from 'react';

interface FirDetails {
  [key: string]: string;
}

interface QuestionAnswer {
  question: string;
  answer: string;
}

export default function FirPage() {
  const [firDetails, setFirDetails] = useState<FirDetails | null>(null);
  const [questionAnswers, setQuestionAnswers] = useState<QuestionAnswer[]>([]);
  const [loading, setLoading] = useState(false);
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string | null>(null);

  useEffect(() => {
    const storedFirDetails = localStorage.getItem('firDetails');
    const storedQuestionAnswers = localStorage.getItem('questionAnswers');

    if (storedFirDetails) {
      setFirDetails(JSON.parse(storedFirDetails));
    }

    if (storedQuestionAnswers) {
      setQuestionAnswers(JSON.parse(storedQuestionAnswers));
    }
  }, []);

  const generateFIR = async () => {
    if (!firDetails || questionAnswers.length === 0) return;

    setLoading(true);
    try {
      const response = await fetch('/api/generateFIR', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firDetails, questionAnswers }),
      });

      const data = await response.json();
      setGeneratedMarkdown(data.firMarkdown || 'No FIR generated.');
    } catch (error) {
      console.error('Error generating FIR:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadFIR = () => {
    if (!generatedMarkdown) return;
    const blob = new Blob([generatedMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'FIR_Report.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">FIR Summary</h1>

      {firDetails ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">FIR Details</h2>
          <ul className="list-disc pl-6 space-y-1">
            {Object.entries(firDetails).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mb-6">No FIR details found.</p>
      )}

      {questionAnswers.length > 0 ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Follow-Up Questions</h2>
          <ul className="list-disc pl-6 space-y-1">
            {questionAnswers.map((qa, i) => (
              <li key={i}>
                <strong>{qa.question}</strong> — {qa.answer}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No follow-up answers found.</p>
      )}

      <div className="flex gap-4 mt-4">
        <button
          onClick={generateFIR}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate FIR'}
        </button>

        {generatedMarkdown && (
          <button
            onClick={downloadFIR}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download FIR
          </button>
        )}
      </div>

      {generatedMarkdown && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Generated FIR Markdown</h2>
          <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
            {generatedMarkdown}
          </pre>
        </div>
      )}
    </div>
  );
}
