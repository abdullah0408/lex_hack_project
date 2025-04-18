// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function QuestionsPage() {
//   const router = useRouter();
//   const [questions, setQuestions] = useState<string[]>([]);
//   const [answers, setAnswers] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getQuestions = async () => {
//       const contractDetails = localStorage.getItem('contractDetails');

//       if (!contractDetails) {
//         alert('Please fill out the contract form contractst.');
//         router.push('/contract/form');
//         return;
//       }

//       setLoading(true);

//       try {
//         const response = await fetch('/api/generateContractQuestions', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ contractDetails }),
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();

//         if (data.questions) {
//           setQuestions(data.questions);
//           setAnswers(Array(data.questions.length).fill(''));
//         } else {
//           alert('Failed to generate questions.');
//         }
//       } catch (error) {
//         alert('Error generating questions.');
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getQuestions();
//   }, [router]);

//   const handleAnswerChange = (index: number, value: string) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = value;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = () => {
//     const allAnswered = answers.every((a) => a.trim() !== '');
//     if (!allAnswered) {
//       alert('Please answer all the questions before continuing.');
//       return;
//     }

//     const questionData = questions.map((q, i) => ({
//       question: q,
//       answer: answers[i],
//     }));

//     localStorage.setItem('questionAnswers', JSON.stringify(questionData));
//     router.push('/contract/doc');
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-xl font-bold mb-4">Follow-Up Questions</h1>
//       {loading ? (
//         <p>Loading questions...</p>
//       ) : (
//         <>
//           {questions.map((q, i) => (
//             <div key={i} className="mb-4">
//               <label className="block mb-1 font-medium">{q}</label>
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 value={answers[i]}
//                 onChange={(e) => handleAnswerChange(i, e.target.value)}
//               />
//             </div>
//           ))}
//           {questions.length > 0 && (
//             <button
//               onClick={handleSubmit}
//               className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//             >
//               Submit & Continue
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
