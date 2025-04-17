'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FirForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const firData = {
      name,
      address,
      phone,
      details,
    };

    localStorage.setItem('firDetails', JSON.stringify(firData));
    router.push('/questions');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">FIR Information Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="tel"
          className="w-full border p-2 rounded"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-2 rounded"
          rows={6}
          placeholder="Describe the incident in detail..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}
