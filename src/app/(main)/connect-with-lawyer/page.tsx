'use client';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-900 font-sans mt-9">
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          title="Toggle Dyslexia Font"
          className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          <i className="fas fa-font"></i>
        </button>
        <button
          title="Increase Font Size"
          className="p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700"
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          title="Decrease Font Size"
          className="p-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700"
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>

      {/* Header */}
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            <i className="fas fa-gavel text-yellow-400"></i>
            <span>InstaFIR</span>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#ai-assistant">AI Assistant</a></li>
            <li><a href="https://lex-hack-project.vercel.app/fir/form">FIR Generater</a></li>
            <li><a href="#">Connect With Lawyer</a></li>
          </ul>
          <div className="md:hidden">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Content Placeholder */}
      <main className="flex-grow">
        <section className="py-12 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Legal Consultation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Available Legal Experts</h3>

                {/* Lawyer Cards */}
                {[
                  {
                    name: 'Adv. Aanya Tiwari',
                    desc: 'Criminal Lawyer Specialist, Cyber Crime Specialist',
                    rating: '★★★★★ (89 reviews)',
                    img: 'https://randomuser.me/api/portraits/women/44.jpg',
                  },
                  {
                    name: 'Adv. Rohit Verma',
                    desc: 'Civil Law Expert, Property Dispute Specialist',
                    rating: '★★★★☆ (72 reviews)',
                    img: 'https://randomuser.me/api/portraits/men/52.jpg',
                  },
                  {
                    name: 'Adv. Sneha Kapoor',
                    desc: 'Family & Domestic Violence, Mediation Specialist',
                    rating: '★★★★★ (110 reviews)',
                    img: 'https://randomuser.me/api/portraits/women/68.jpg',
                  },
                ].map((lawyer, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow p-4 mb-4 flex items-center gap-4">
                    <div className="relative">
                      <Image
                        width={64}
                        height={64}
                        src={lawyer.img}
                        alt={lawyer.name}
                        className="w-16 h-16 rounded-full border-2 border-gray-300"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                    <div>
                      <h4 className="font-bold">{lawyer.name}</h4>
                      <p className="text-sm text-gray-600">{lawyer.desc}</p>
                      <p className="text-sm mt-1 text-yellow-500">{lawyer.rating}</p>
                      <button className="mt-2 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Consult Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Request Legal Advice</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="case-type" className="block font-medium">Type of Case</label>
                    <select id="case-type" className="w-full border px-3 py-2 rounded mt-1">
                      <option value="">Select Case Type</option>
                      <option value="criminal">Criminal Case</option>
                      <option value="cyber">Cyber Crime</option>
                      <option value="property">Property Dispute</option>
                      <option value="domestic">Domestic Violence</option>
                      <option value="fraud">Fraud/Scam</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="case-details" className="block font-medium">Case Details</label>
                    <textarea
                      id="case-details"
                      rows={5}
                      className="w-full border px-3 py-2 rounded mt-1"
                      placeholder="Describe your legal issue in detail..."
                    />
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block font-medium">Urgency Level</label>
                    <select id="urgency" className="w-full border px-3 py-2 rounded mt-1">
                      <option value="low">Low - Within a week</option>
                      <option value="medium">Medium - Within 48 hours</option>
                      <option value="high">High - Immediate help needed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium">Consultation Mode</label>
                    <div className="flex gap-4 mt-1">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="mode" value="chat" defaultChecked /> Chat
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="mode" value="call" /> Call
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="mode" value="video" /> Video Call
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                  >
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">InstaFIR</h3>
            <p>Instant F.I.R Generation with AI assistance</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              <li><a href="#legal-terms" className="hover:underline">Legal Terms</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <div className="flex gap-4 text-lg">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-6">&copy; 2023 InstaFIR. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Page;
