// 'use client';

// import React, { useEffect, useState } from 'react';
// import jsPDF from 'jspdf';
// import { marked } from 'marked';  // To parse Markdown

// interface Party {
//   name: string;
//   role: string;
// }

// interface ContractData {
//   parties: Party[];
//   contractDetails: string;
// }

// interface QuestionAnswer {
//   question: string;
//   answer: string;
// }

// export default function ContractPage() {
//   const [contractDetails, setContractDetails] = useState<ContractData | null>(null);
//   const [questionAnswers, setQuestionAnswers] = useState<QuestionAnswer[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [pdfUrl, setPdfUrl] = useState<string | null>(null);

//   // Load from localStorage
//   useEffect(() => {
//     const contract = localStorage.getItem('contractDetails');
//     const qa = localStorage.getItem('questionAnswers');

//     if (contract) setContractDetails(JSON.parse(contract));
//     if (qa) setQuestionAnswers(JSON.parse(qa));
//   }, []);

//   // Generate contract and then PDF
//   const generateContract = async () => {
//     if (!contractDetails || questionAnswers.length === 0) return;
//     setLoading(true);

//     try {
//       const res = await fetch('/api/generateContract', {
//         method: 'POST',
//         headers: { 'Content-Type': 'text/plain' },
//         body: JSON.stringify({ contractDetails, questionAnswers }),
//       });

//       const { contractMarkdown } = await res.json();
//       const markdown = contractMarkdown || 'No contract generated.';

//       const plainText = await markdownToPlainText(markdown); // Await the async function

//       // Delay to ensure rendering completion (optional safety)
//       setTimeout(() => {
//         generatePDF(plainText);
//       }, 100);
//     } catch (err) {
//       console.error('Failed to generate contract:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Make the function async to handle potential Promise from marked
//   const markdownToPlainText = async (markdown: string): Promise<string> => {
//     // Await the result of marked if it's async
//     const html = await marked(markdown);
//     // Ensure html is a string before calling replace
//     const text = typeof html === 'string' ? html.replace(/<[^>]*>/g, '') : '';
//     return text.replace(/^\s+/g, '').trim();
//   };

//   const generatePDF = (plainText: string) => {
//     const pdf = new jsPDF();
//     pdf.setFont('times', 'normal');
//     pdf.setFontSize(12);

//     const lines = pdf.splitTextToSize(plainText, 180);
//     let yPosition = 10;

//     lines.forEach((line) => {
//       if (yPosition + 10 > pdf.internal.pageSize.height) {
//         pdf.addPage();
//         yPosition = 10;
//       }
//       pdf.text(line, 10, yPosition);
//       yPosition += 10;
//     });

//     const pdfBlob = pdf.output('blob');
//     if (pdfUrl) URL.revokeObjectURL(pdfUrl);
//     setPdfUrl(URL.createObjectURL(pdfBlob));
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Contract Summary</h1>

//       {contractDetails ? (
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Contract Details</h2>

//           <h3 className="font-medium">Parties</h3>
//           <ul className="list-disc pl-6 space-y-1 mb-4">
//             {contractDetails.parties.map((party, index) => (
//               <li key={index}>
//                 <strong>{party.name}</strong> — {party.role}
//               </li>
//             ))}
//           </ul>

//           <h3 className="font-medium mt-2">Contract Terms</h3>
//           <p className="pl-2">{contractDetails.contractDetails}</p>
//         </section>
//       ) : (
//         <p>No contract details found.</p>
//       )}

//       {questionAnswers.length > 0 ? (
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Follow-Up Questions</h2>
//           <ul className="list-disc pl-6 space-y-1">
//             {questionAnswers.map((qa, i) => (
//               <li key={i}>
//                 <strong>{qa.question}</strong> — {qa.answer}
//               </li>
//             ))}
//           </ul>
//         </section>
//       ) : (
//         <p>No follow-up answers found.</p>
//       )}

//       <div className="flex gap-4 mt-4 flex-wrap">
//         <button
//           onClick={generateContract}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
//           disabled={loading}
//         >
//           {loading ? 'Generating...' : 'Generate Contract'}
//         </button>

//         {pdfUrl && (
//           <a
//             href={pdfUrl}
//             download="Contract_Report.pdf"
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             Download PDF
//           </a>
//         )}
//       </div>

//       {pdfUrl && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-2">PDF Preview</h2>
//           <iframe
//             src={pdfUrl}
//             width="100%"
//             height="800px"
//             className="border rounded"
//             title="Contract PDF Preview"
//           />
//         </div>
//       )}
//     </div>
//   );
// }
