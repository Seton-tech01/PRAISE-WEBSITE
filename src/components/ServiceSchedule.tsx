'use client';

import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Flame, BookOpen, Sun, Moon, Wine, HeartHandshake } from 'lucide-react';

export default function ServiceSchedule() {
  const weeklyServices = [
    {
      day: 'Every Sunday',
      title: 'Sunday Celebration & Worship Service',
      time: '8:00 AM – 11:00 AM',
      icon: Sun,
      category: 'Main Weekly Worship',
      description: 'Join us for divine praise, fervent worship, yoke-breaking prayers, and the unadulterated word of God.',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      day: 'Every Tuesday',
      title: 'Bible Study Hour',
      time: '5:00 PM – 6:00 PM',
      icon: BookOpen,
      category: 'Word & Discipleship',
      description: 'Systematic study of the Holy Bible to ground believers in truth, righteousness, and spiritual wisdom.',
      badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      day: 'Every Thursday',
      title: 'Solution Hour',
      time: '5:00 PM – 6:00 PM',
      icon: Flame,
      category: 'Prophetic & Deliverance',
      description: 'Anointed hour of prayer, prophetic intervention, deliverance, and divine solutions to every life challenge.',
      badgeColor: 'bg-red-100 text-red-900 border-red-300',
      gradient: 'from-red-500 to-rose-700',
    },
  ];

  const monthlyServices = [
    {
      day: '2nd Friday of Every Month',
      title: 'Monthly Power Night Vigil',
      time: '10:00 PM till Dawn',
      icon: Moon,
      category: 'Monthly Power Vigil',
      description: 'An all-night prayer vigil packed with heavy apostolic fire, warfare intercession, and divine empowerment.',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    },
    {
      day: 'Every First Sunday',
      title: 'Holy Communion & Anointing Service',
      time: '8:00 AM – 11:00 AM',
      icon: Wine,
      category: 'Special Sacrament',
      description: 'Partaking of the Lord’s Table for divine health, covenant renewal, and holy communion blessing.',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
    {
      day: 'Every Last Sunday',
      title: 'Monthly Thanksgiving & Praise Service',
      time: '8:00 AM – 11:00 AM',
      icon: HeartHandshake,
      category: 'Praise & Testimony',
      description: 'A glorious celebration of thanksgiving, testifying of God’s goodness, and offering praise for victories achieved.',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Official Service Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Worship Service Times
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Join us at our International Headquarters in Ode Remo, Ayegbami Branch, or Eposo Branch.
          </p>
        </div>

        {/* Weekly Services Header */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-black text-amber-400 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            Weekly Gathering Times
          </h3>
        </div>

        {/* Weekly Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {weeklyServices.map((svc, idx) => {
            const IconComp = svc.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${svc.gradient}`}></div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-black uppercase px-3 py-1 rounded-full border ${svc.badgeColor}`}>
                      <IconComp className="w-3.5 h-3.5" />
                      {svc.day}
                    </span>
                    <span className="text-[10px] font-extrabold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                      {svc.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-sky-300 transition-colors">
                    {svc.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sky-300 text-sm font-bold bg-slate-900/80 border border-slate-700 px-3.5 py-2 rounded-xl w-fit">
                    <Clock className="w-4 h-4 text-amber-400" />
                    {svc.time}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    HQ, Ayegbami & Eposo
                  </span>
                  <span className="font-bold text-amber-400">All Welcome</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Monthly Special Services Header */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-black text-sky-300 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            Monthly Special Programs
          </h3>
        </div>

        {/* Monthly Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {monthlyServices.map((svc, idx) => {
            const IconComp = svc.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 rounded-3xl p-6 border border-slate-700/60 shadow-lg hover:bg-slate-800/90 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-black uppercase px-3 py-1 rounded-full border ${svc.badgeColor}`}>
                      <IconComp className="w-3.5 h-3.5" />
                      {svc.day}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-white">{svc.title}</h4>

                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold bg-slate-900 px-3 py-1.5 rounded-lg w-fit border border-slate-700">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {svc.time}
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
