'use client';

import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import { marked } from 'marked';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

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
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const fir = localStorage.getItem('firDetails');
    const qa = localStorage.getItem('questionAnswers');
    if (fir) setFirDetails(JSON.parse(fir));
    if (qa) setQuestionAnswers(JSON.parse(qa));
  }, []);

  const generateFIR = async () => {
    if (!firDetails || questionAnswers.length === 0) return;
    setLoading(true);

    try {
      const res = await fetch('/api/generateFIR', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firDetails, questionAnswers }),
      });

      const { firMarkdown } = await res.json();
      let markdown = firMarkdown || 'No FIR generated.';
      markdown = markdown.replace(/---|\*|#/g, '');

      const plainText = await markdownToPlainText(markdown);

      setTimeout(() => generatePDF(plainText), 100);
    } catch (err) {
      console.error('Failed to generate FIR:', err);
    } finally {
      setLoading(false);
    }
  };

  const markdownToPlainText = async (markdown: string): Promise<string> => {
    const html = await marked(markdown);
    const text = html.replace(/<[^>]*>/g, '');
    return text.replace(/^\s+/g, '').trim();
  };

  const generatePDF = (plainText: string) => {
    const pdf = new jsPDF();
    pdf.setFont('times', 'normal');
    pdf.setFontSize(12);

    const lines = pdf.splitTextToSize(plainText, 180);
    let y = 10;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lines.forEach((line: any) => {
      if (y + 10 > pdf.internal.pageSize.height) {
        pdf.addPage();
        y = 10;
      }
      pdf.text(line, 10, y);
      y += 10;
    });

    const pdfBlob = pdf.output('blob');
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setPdfUrl(URL.createObjectURL(pdfBlob));
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-muted flex justify-center">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl p-6 md:p-10">
        <CardContent>
          <h1 className="text-2xl font-semibold mb-6 text-center">FIR Summary</h1>

          {firDetails ? (
            <section className="mb-8">
              <h2 className="text-xl font-medium mb-3">FIR Details</h2>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                {Object.entries(firDetails).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <p className="text-sm text-muted-foreground mb-4">No FIR details found.</p>
          )}

          {questionAnswers.length > 0 ? (
            <section className="mb-8">
              <h2 className="text-xl font-medium mb-3">Follow-Up Questions</h2>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                {questionAnswers.map((qa, i) => (
                  <li key={i}>
                    <strong>{qa.question}</strong> — {qa.answer}
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <p className="text-sm text-muted-foreground">No follow-up answers found.</p>
          )}

          <div className="flex flex-wrap gap-4 mt-6">
            <Button onClick={generateFIR} disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {loading ? 'Generating...' : 'Generate FIR'}
            </Button>

            {pdfUrl && (
              <a
                href={pdfUrl}
                download="FIR_Report.pdf"
                className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded text-sm"
              >
                Download PDF
              </a>
            )}
          </div>

          {pdfUrl && (
            <div className="mt-10">
              <h2 className="text-xl font-medium mb-3">PDF Preview</h2>
              <iframe
                src={pdfUrl}
                width="100%"
                height="800"
                className="border rounded-lg shadow-md"
                title="FIR PDF Preview"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
