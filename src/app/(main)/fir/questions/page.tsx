'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

export default function QuestionsPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const firDetails = localStorage.getItem('firDetails');

      if (!firDetails) {
        alert('Please fill out the FIR form first.');
        router.push('/form');
        return;
      }

      setLoading(true);

      try {
        const response = await fetch('/api/generateQuestions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firDetails }),
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        if (data.questions) {
          setQuestions(data.questions);
          setAnswers(Array(data.questions.length).fill(''));
        } else {
          alert('Failed to generate questions.');
        }
      } catch (error) {
        alert('Error generating questions.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getQuestions();
  }, [router]);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const allAnswered = answers.every((a) => a.trim() !== '');
    if (!allAnswered) {
      alert('Please answer all the questions before continuing.');
      return;
    }

    const questionData = questions.map((q, i) => ({
      question: q,
      answer: answers[i],
    }));

    localStorage.setItem('questionAnswers', JSON.stringify(questionData));
    router.push('/fir/doc');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4 py-10">
      <Card className="w-full max-w-3xl shadow-xl rounded-2xl">
        <CardContent className="p-6 md:p-10">
          <h1 className="text-2xl font-semibold mb-6 text-center">Follow-Up Questions</h1>
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
              <span className="ml-2 text-sm">Loading questions...</span>
            </div>
          ) : (
            <>
              <div className="space-y-5">
                {questions.map((q, i) => (
                  <div key={i} className="space-y-2">
                    <Label htmlFor={`question-${i}`} className="font-medium">
                      {q}
                    </Label>
                    <Input
                      id={`question-${i}`}
                      placeholder="Your answer..."
                      value={answers[i]}
                      onChange={(e) => handleAnswerChange(i, e.target.value)}
                      required
                    />
                  </div>
                ))}
              </div>

              {questions.length > 0 && (
                <Button
                  onClick={handleSubmit}
                  className="mt-6 w-full"
                >
                  Submit & Continue
                </Button>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
