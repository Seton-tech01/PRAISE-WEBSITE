'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MapPin } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What time are your worship services?',
      answer: 'Our Sunday Celebration Service holds every Sunday from 8:00 AM to 11:00 AM. Every First Sunday is our Holy Communion & Anointing Service, and every Last Sunday is our Monthly Thanksgiving Service.',
    },
    {
      question: 'What are your midweek service hours?',
      answer: 'Midweek services are held every Tuesday for Bible Study from 5:00 PM to 6:00 PM, and every Thursday for Solution Hour from 5:00 PM to 6:00 PM.',
    },
    {
      question: 'When is the Monthly Power Night Vigil?',
      answer: 'Our Monthly Power Night Vigil takes place on the 2nd Friday of every month from 10:00 PM till dawn.',
    },
    {
      question: 'Where is Praise Change Divine Life Gospel Ministry located?',
      answer: 'Our International Headquarters sanctuary is located in Ode Remo, Remo North Local Government, Ogun State, Nigeria. We also have active branches in Ayegbami (headed by Pst (Mrs) Gabriel Emmanuel) and Eposo (headed by Lady Evang. Oyedele).',
      linkText: 'Open Google Maps Location',
      linkUrl: 'https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8',
    },
    {
      question: 'Who leads the Ministry?',
      answer: 'The Ministry is headed by General Overseer Pst. & Pst (Mrs) Gabriel Emmanuel, supported by Assistant General Overseer Pst. Balogun Adebayo, Ayegbami Resident Pastor Pst (Mrs) Gabriel Emmanuel, and Eposo Resident Pastor Lady Evang. Oyedele.',
    },
    {
      question: 'How do I pay my Tithe or Seed Offering online?',
      answer: 'Online giving can be done directly to our official Moniepoint Microfinance Bank account: 8025374392 (Account Name: EMMANUEL GABRIEL).',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="text-slate-600 text-base">
            Answers to common questions about our services, leadership, location, and fellowship.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-sky-50/50 border-sky-300 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-sky-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 font-bold text-slate-900 text-base sm:text-lg"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-sky-100">
                    <p>{faq.answer}</p>
                    {faq.linkUrl && (
                      <div className="mt-3">
                        <a
                          href={faq.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-100 hover:bg-sky-200 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5 text-sky-600" />
                          {faq.linkText}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
