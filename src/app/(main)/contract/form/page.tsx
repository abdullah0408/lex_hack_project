// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function ContractForm() {
//   const [parties, setParties] = useState([{ name: '', role: '' }]); // Start with one party
//   const [contractDetails, setContractDetails] = useState('');
//   const router = useRouter();

//   const handlePartyChange = (index: number, key: string, value: string) => {
//     const newParties = [...parties];
//     newParties[index][key] = value;
//     setParties(newParties);
//   };

//   const addParty = () => {
//     setParties([...parties, { name: '', role: '' }]);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const contractData = {
//       parties,
//       contractDetails,
//     };

//     localStorage.setItem('contractDetails', JSON.stringify(contractData));
//     router.push('/contract/questions');
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-xl font-bold mb-4">Contract Information Form</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {parties.map((party, index) => (
//           <div key={index} className="space-y-2">
//             <h2 className="text-lg font-semibold">Party {index + 1}</h2>
//             <input
//               type="text"
//               className="w-full border p-2 rounded"
//               placeholder="Party Name"
//               value={party.name}
//               onChange={(e) => handlePartyChange(index, 'name', e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               className="w-full border p-2 rounded"
//               placeholder="Role (e.g., Seller, Buyer)"
//               value={party.role}
//               onChange={(e) => handlePartyChange(index, 'role', e.target.value)}
//               required
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addParty} className="mt-2 text-blue-500">
//           Add Another Party
//         </button>
        
//         <textarea
//           className="w-full border p-2 rounded"
//           rows={6}
//           placeholder="Describe the contract terms..."
//           value={contractDetails}
//           onChange={(e) => setContractDetails(e.target.value)}
//           required
//         />
//         <button className="w-full bg-blue-500 text-white px-4 py-2 rounded" type="submit">
//           Continue
//         </button>
//       </form>
//     </div>
//   );
// }
