'use client';

import React from 'react';
import Image from 'next/image';
import { UserCheck, MapPin, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Pst. & Pst (Mrs) Gabriel Emmanuel',
      title: 'General Overseer & Wife',
      branch: 'International Headquarters, Ode Remo',
      badge: 'Spiritual Father & Mother',
      description: 'Visionary leaders chosen by God to spearhead Praise Change Divine Life Gospel Ministry, nurturing souls, breaking demonic yokes, and raising righteous champions for Christ worldwide.',
      gradient: 'from-amber-500 via-orange-500 to-red-600',
      borderColor: 'border-amber-400',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      name: 'Pst. Balogun Adebayo',
      title: 'Assistant General Overseer',
      branch: 'International Headquarters, Ode Remo',
      badge: 'Executive Pastoral Leader',
      description: 'Anointed minister of God assisting the General Overseer in administration, doctrinal integrity, discipleship training, and pastoral care across all church departments.',
      gradient: 'from-sky-500 via-blue-600 to-indigo-700',
      borderColor: 'border-sky-400',
      badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
    },
    {
      name: 'Pst (Mrs) Gabriel Emmanuel',
      title: 'Resident Pastor',
      branch: 'Ayegbami Branch, Ode Remo',
      badge: 'Ayegbami Branch Shepherd',
      description: 'Anointed mother in Israel and resident pastor overseeing the Ayegbami Branch, leading women ministry, family counseling, and powerful evangelism in Ayegbami.',
      gradient: 'from-purple-500 via-pink-600 to-rose-700',
      borderColor: 'border-purple-400',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
    },
    {
      name: 'Lady Evang. Oyedele',
      title: 'Resident Pastor',
      branch: 'Eposo Branch, Ode Remo',
      badge: 'Eposo Branch Shepherd',
      description: 'Dynamic evangelist and resident pastor serving the Eposo Branch, passionately ministering the word of God, leading intercessory prayer, and expanding kingdom reach.',
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      borderColor: 'border-emerald-400',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-amber-600" />
            Our Pastoral Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Anointed Shepherds Leading God&apos;s Flock
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Meet the consecrated servants of God leading Praise Change Divine Life Gospel Ministry across Headquarters, Ayegbami, and Eposo in Ode Remo, Ogun State.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Card Header Color Ribbon */}
              <div className={`absolute top-0 left-0 right-0 h-3 bg-gradient-to-r ${leader.gradient}`}></div>

              <div className="space-y-5 pt-2">
                {/* Leader Emblem / Avatar Frame */}
                <div className="flex flex-col items-center">
                  <div className={`relative w-32 h-32 rounded-full border-4 ${leader.borderColor} p-1 shadow-xl bg-white mb-3 group-hover:scale-105 transition-transform duration-300`}>
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                      <Image
                        src="/images/logo.jpg"
                        alt={leader.name}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${leader.badgeBg}`}>
                    <ShieldCheck className="w-3 h-3" />
                    {leader.badge}
                  </span>
                </div>

                {/* Leader Details */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-extrabold text-amber-600 uppercase tracking-wide">
                    {leader.title}
                  </p>
                  
                  <div className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-semibold bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-sm">
                    <MapPin className="w-3 h-3 text-sky-600" />
                    {leader.branch}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {leader.description}
                  </p>
                </div>
              </div>

              {/* Bottom Quote Badge */}
              <div className="mt-5 pt-3 border-t border-slate-200 text-center">
                <span className="text-[11px] font-bold text-slate-700 inline-flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-sky-600" />
                  Serving with Love & Anointing
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
