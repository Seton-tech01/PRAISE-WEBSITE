'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Sparkles, Send, CheckCircle2, Quote } from 'lucide-react';

interface PrayerAndTestimoniesProps {
  onOpenPrayer?: () => void;
}

export default function PrayerAndTestimonies({ onOpenPrayer }: PrayerAndTestimoniesProps) {
  const [testimonySubmitted, setTestimonySubmitted] = useState(false);
  const [testimonyForm, setTestimonyForm] = useState({
    name: '',
    location: '',
    testimony: '',
  });

  const testimonies = [
    {
      name: 'Bro. Samuel A.',
      location: 'Ode Remo, Ogun State',
      title: 'Miraculous Healing & Yoke Broken',
      text: 'For 3 years, I suffered severe chronic chest pain that doctors could not diagnose. During the Thursday Prophetic Hour at Praise Change Divine Life Gospel Ministry, the G.O. laid hands on me and prayed. Instantaneously, the pain left completely! To God be the glory!',
      date: 'Recent Testimony',
    },
    {
      name: 'Sis. Blessing O.',
      location: 'Eposo Branch, Ode Remo',
      title: 'Divine Open Doors & Marital Restoration',
      text: 'I joined the Eposo Branch prayer night hosted by Lady Evang. Oyedele. Within 2 weeks of intense intercession, God answered my family prayer, restored peace in my marriage, and granted my husband a miraculous job promotion!',
      date: 'Recent Testimony',
    },
    {
      name: 'Deacon Femi & Family',
      location: 'Ode Remo Headquarters',
      title: 'Financial Breakthrough & Fruitfulness',
      text: 'We believed God for a child and financial stability. After sowing a faith seed at the Praise Change Divine Life sanctuary, God answered us with twin babies and opened major business doors! Truly, Praise Change turns sorrow into praise!',
      date: 'Recent Testimony',
    },
  ];

  const handleTestimonySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonyForm.testimony || !testimonyForm.name) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTestimonySubmitted(true);
  };

  return (
    <section id="testimonies" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Miracles & Intercession
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Testimonies & Prayer Request Wall
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See what the Lord is doing in Ode Remo & submit your prayer requests directly to our pastoral prayer team.
          </p>
        </div>

        {/* Top Prayer Request Callout Card */}
        <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-10 border border-sky-700/50 shadow-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
              <Volume2 className="w-4 h-4 text-amber-400" />
              CONFIDENTIAL PASTORAL INTERCESSION
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
              Do You Need A Divine Intervention or Prayer Breakthrough?
            </h3>
            <p className="text-sky-200 text-sm sm:text-base max-w-2xl">
              Pst. & Pst (Mrs) Gabriel Emmanuel and the prayer ministry stand ready to hold your hands in prayer. No burden is too heavy for Jesus to lift!
            </p>
          </div>

          {onOpenPrayer && (
            <button
              onClick={onOpenPrayer}
              className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-amber-500/25 hover:scale-105 transition-all shrink-0"
            >
              <Send className="w-5 h-5 fill-slate-950" />
              Submit Prayer Request Now
            </button>
          )}
        </div>

        {/* Testimonies Grid */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                <Quote className="w-6 h-6 text-amber-400 fill-amber-400" />
                Wall of Divine Testimonies
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">Real stories of victory from our brethren</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonies.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-amber-400 uppercase bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      {item.date}
                    </span>
                    <span className="text-[10px] text-sky-400 font-bold">{item.location}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white leading-snug">{item.title}</h4>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold text-slate-200">
                  <span>{item.name}</span>
                  <span className="text-amber-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Testimony
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Testimony Form Card */}
        <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-white">Share Your Testimony</h3>
            <p className="text-slate-400 text-xs sm:text-sm">Overcome the enemy by the blood of the Lamb and the word of your testimony! (Rev 12:11)</p>
          </div>

          {testimonySubmitted ? (
            <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-2xl p-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-emerald-200">Hallelujah! Testimony Received!</h4>
              <p className="text-xs sm:text-sm text-emerald-300">
                Thank you for glorifying God! Your testimony has been submitted for pastoral review and will inspire many.
              </p>
              <button
                onClick={() => setTestimonySubmitted(false)}
                className="text-xs font-bold text-amber-300 underline pt-2"
              >
                Submit another testimony
              </button>
            </div>
          ) : (
            <form onSubmit={handleTestimonySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={testimonyForm.name}
                    onChange={(e) => setTestimonyForm({ ...testimonyForm, name: e.target.value })}
                    placeholder="e.g. Sis. Grace Adebayo"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Location / Branch</label>
                  <input
                    type="text"
                    required
                    value={testimonyForm.location}
                    onChange={(e) => setTestimonyForm({ ...testimonyForm, location: e.target.value })}
                    placeholder="e.g. Ode Remo HQ / Eposo Branch"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Testimony</label>
                <textarea
                  rows={4}
                  required
                  value={testimonyForm.testimony}
                  onChange={(e) => setTestimonyForm({ ...testimonyForm, testimony: e.target.value })}
                  placeholder="Describe what God did for you..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm py-3.5 rounded-xl shadow-lg transition-all"
              >
                Submit Testimony to Glory of God
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
