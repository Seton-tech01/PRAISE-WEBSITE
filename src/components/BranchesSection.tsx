'use client';

import React from 'react';
import { MapPin, Navigation, Phone, Mail, ExternalLink, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export default function BranchesSection() {
  const branches = [
    {
      name: 'International Headquarters',
      tag: 'Main Cathedral Sanctuary',
      address: 'Ode Remo, Remo North Local Government, Ogun State, Nigeria',
      leader: 'Pst. & Pst (Mrs) Gabriel Emmanuel (General Overseer & Wife) & Pst. Balogun Adebayo (A.G.O.)',
      mapUrl: 'https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8',
      features: [
        'Main Celebration Worship Center',
        'Weekly Deliverance & Prophetic Hour',
        'Administrative Secretariat',
        'Counseling & Intercessory Sanctuary',
      ],
      isHQ: true,
    },
    {
      name: 'Ayegbami Branch',
      tag: 'Branch Sanctuary',
      address: 'Ayegbami, Ode Remo, Remo North Local Government, Ogun State, Nigeria',
      leader: 'Pst (Mrs) Gabriel Emmanuel (Resident Pastor)',
      mapUrl: 'https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8',
      features: [
        'Ayegbami Community Evangelism',
        'Sunday Worship & Divine Healing Service',
        'Women & Youth Discipleship',
        'Midweek Miracle Hour',
      ],
      isHQ: false,
    },
    {
      name: 'Eposo Branch',
      tag: 'Branch Sanctuary',
      address: 'Eposo, Ode Remo, Remo North Local Government, Ogun State, Nigeria',
      leader: 'Lady Evang. Oyedele (Resident Pastor)',
      mapUrl: 'https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8',
      features: [
        'Eposo Community Evangelism',
        'Sunday Worship & Miracle Service',
        'Midweek Deliverance Prayers',
        'Family & Youth Fellowship',
      ],
      isHQ: false,
    },
  ];

  return (
    <section id="branches" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            Church Headquarters & Branches
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Church Branches in Ode Remo
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Praise Change Divine Life Gospel Ministry serves the kingdom through our Headquarters and vibrant resident branches in Ayegbami and Eposo.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 shadow-xl transition-all duration-300 border flex flex-col justify-between ${
                branch.isHQ
                  ? 'bg-white border-sky-300 ring-2 ring-sky-500/20'
                  : 'bg-white border-slate-200 hover:border-amber-300'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className={`inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full uppercase ${
                    branch.isHQ ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-sky-100 text-sky-900 border border-sky-300'
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {branch.tag}
                  </span>
                  {branch.isHQ && (
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full">
                      ★ Headquarters
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {branch.name}
                  </h3>
                  <div className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm mt-2">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">Supervising Leadership</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">{branch.leader}</p>
                </div>

                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-3">Branch Highlights</p>
                  <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                    {branch.features.map((ft, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 bg-slate-100/80 px-3 py-1.5 rounded-xl">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-md transition-all hover:scale-105"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-300" />
                  Google Maps Directions
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Map Card */}
        <div id="contact" className="bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                VISIT US IN ODE REMO
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Headquarters & Branch Directions
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Praise Change Divine Life Gospel Ministry is located in Ode Remo, Remo North Local Government, Ogun State, Nigeria with active branches in Ayegbami and Eposo.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase">Address</span>
                    <span className="text-slate-200 font-medium">Ode Remo, Remo North LGA, Ogun State</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase">Pastoral Helpline</span>
                    <span className="text-slate-200 font-medium">+234 802 537 4392</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase">Email Enquiries</span>
                    <span className="text-slate-200 font-medium">info@praisechangedivinelife.org</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-3 rounded-xl transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Open Direct Google Maps Location
                </a>
              </div>
            </div>

            {/* Map Preview Frame */}
            <div className="lg:col-span-7 h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 relative">
              <iframe
                title="Praise Change Divine Life Gospel Ministry Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.000000000002!2d3.61!3d6.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd362095cb607%3A0x67399bf08f1f7d54!2sOde%20Remo%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-slate-950/90 text-amber-300 font-bold text-xs px-3 py-2 rounded-lg border border-slate-700 flex items-center gap-1 shadow-lg"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Tap to Open App
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
