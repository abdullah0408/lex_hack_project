'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    router.push('/fir/questions');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4 py-10">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl">
        <CardContent className="p-6 md:p-10">
          <h1 className="text-2xl font-semibold mb-6 text-center">FIR Information Form</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Textarea
              placeholder="Describe the incident in detail..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={6}
              required
            />
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
