'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, Cross, Heart, Flame, Shield, Users, CheckCircle2, Sparkles, Quote } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Flame,
      title: 'Divine Transformation',
      description: 'Experience the supernatural power of God that breaks yokes, turns sorrow into joy, and restores destinies.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Cross,
      title: 'Salvation & Truth',
      description: 'Rooted in the uncompromised Word of God, leading souls into eternal salvation through faith in Jesus Christ.',
      color: 'from-sky-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Fervent Prayer & Deliverance',
      description: 'Engaging in apostolic prayers, warfare intercession, and prophetic breakthrough for every family and life.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Heart,
      title: 'Love & Community Impact',
      description: 'Fostering genuine Christian fellowship, supporting families, and transforming Ode Remo and beyond.',
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            About Our Ministry
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            A Sanctuary of <span className="text-sky-600">Praise</span>, <span className="text-amber-500">Power</span> & Divine Life
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Praise Change Divine Life Gospel Ministry is a divine light set upon Ode Remo, Remo North Local Government, Ogun State, Nigeria. We are called to herald salvation, nurture righteousness, and demonstrate God's miracle-working power.
          </p>
        </div>

        {/* GO Welcome Message Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: General Overseer Highlight */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-amber-400/80 shadow-2xl mb-4 bg-gradient-to-br from-sky-900 to-indigo-950 flex items-center justify-center p-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                  <Image
                    src="/images/logo.jpg"
                    alt="Pst. & Pst (Mrs) Gabriel Emmanuel Logo Emblem"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black text-slate-900">Pst. & Pst (Mrs) Gabriel Emmanuel</h3>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-wide">General Overseer & Wife</p>
                <p className="text-xs text-slate-500 font-medium">Praise Change Divine Life Gospel Ministry</p>
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm">
                <Quote className="w-5 h-5 fill-amber-500" />
                WELCOME MESSAGE FROM THE GENERAL OVERSEER
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                &ldquo;God Is Ready to Turn Your Story into Praise & Divine Change!&rdquo;
              </h3>

              <p className="text-slate-600 leading-relaxed text-base">
                Dear Beloved in Christ, we welcome you with great joy into Praise Change Divine Life Gospel Ministry. Our Lord Jesus Christ is still in the business of performing wonders, breaking long-standing yokes, and granting total victory to everyone who seeks Him in faith.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                Whether you are seeking spiritual growth, deliverance, divine healing, or a supportive Christian home in Ode Remo, Ogun State, our doors and arms are widely open to welcome you. Come experience the tangible presence of God!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                  Life-Transforming Teaching
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                  Deliverance & Prophetic Prayers
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                  Warm Christian Fellowship
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                  Youth & Family Mentorship
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Core Spiritual Pillars
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Foundational truths guiding our worship and ministry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <Sparkles className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
