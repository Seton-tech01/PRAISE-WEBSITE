'use client';

import React, { useState } from 'react';
import { Play, Pause, Volume2, Download, Video, Radio, Sparkles, Music, Share2, Shield } from 'lucide-react';

export default function SermonsMedia() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const sermons = [
    {
      title: 'Walking in Divine Life & Unstoppable Grace',
      preacher: 'Pst. Gabriel Emmanuel (General Overseer)',
      series: 'Divine Transformation Series',
      date: 'Recent Sunday Message',
      duration: '48 mins',
      audioUrl: '#',
      category: 'Salvation & Grace',
    },
    {
      title: 'Breaking Every Yoke Through Powerful Praise',
      preacher: 'Pst. Balogun Adebayo (Assistant G.O.)',
      series: 'Victory & Dominion',
      date: 'Midweek Teaching',
      duration: '42 mins',
      audioUrl: '#',
      category: 'Praise & Warfare',
    },
    {
      title: 'The Fire of Holiness & Fervent Intercession',
      preacher: 'Lady Evang. Oyedele (Resident Pastor, Eposo)',
      series: 'Eposo Revival Hour',
      date: 'Special Anointing Service',
      duration: '35 mins',
      audioUrl: '#',
      category: 'Holiness & Deliverance',
    },
    {
      title: 'Experiencing Total Supernatural Breakthrough',
      preacher: 'Pst. & Pst (Mrs) Gabriel Emmanuel',
      series: 'Monthly Vigil Anointing',
      date: 'Night of Breakthrough',
      duration: '55 mins',
      audioUrl: '#',
      category: 'Prophetic Miracles',
    },
  ];

  const currentSermon = sermons[currentTrackIndex];

  return (
    <section id="sermons" className="py-20 bg-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-amber-600" />
            Media & Sermons Sanctuary
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Listen to Life-Changing Word of Faith
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Be built up in faith and empowered by the anointed messages from our General Overseer and pastoral team.
          </p>
        </div>

        {/* Featured Audio Player Card */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-sky-800/40 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Player Disc Visual */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-amber-400/60 p-2 bg-slate-900 shadow-2xl flex items-center justify-center">
                <div className={`relative w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '12s' }}>
                  <div className="w-12 h-12 rounded-full bg-amber-400 border-4 border-slate-900 z-10 flex items-center justify-center">
                    <Music className="w-5 h-5 text-slate-950" />
                  </div>
                  <div className="absolute inset-0 border-8 border-slate-700/50 rounded-full"></div>
                </div>
              </div>

              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 bg-sky-500/20 px-3 py-1 rounded-full border border-sky-400/30">
                <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                Featured Sermon Player
              </span>
            </div>

            {/* Right: Audio Control & Meta */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                  {currentSermon.series}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 leading-snug">
                  {currentSermon.title}
                </h3>
                <p className="text-sm font-bold text-sky-300 mt-1">
                  {currentSermon.preacher}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentSermon.date} • Duration: {currentSermon.duration}
                </p>
              </div>

              {/* Fake Audio Waveform */}
              <div className="space-y-2">
                <div className="flex items-center gap-1 h-8 px-2 bg-slate-900/80 rounded-xl border border-slate-800 justify-between">
                  {[40, 65, 30, 85, 90, 45, 70, 100, 60, 40, 80, 50, 95, 30, 75, 55, 85, 40, 60, 90, 50, 70, 35, 80, 100, 65, 45].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlaying ? 'bg-gradient-to-t from-sky-400 to-amber-400' : 'bg-slate-700'
                      }`}
                      style={{ height: isPlaying ? `${h}%` : '20%' }}
                    ></div>
                  ))}
                </div>

                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>{isPlaying ? '04:12' : '00:00'}</span>
                  <span>{currentSermon.duration}</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm px-7 py-3 rounded-full shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 fill-slate-950" />
                      Pause Sermon
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-slate-950" />
                      Play Audio Sermon
                    </>
                  )}
                </button>

                <button
                  onClick={() => alert(`Audio download link for "${currentSermon.title}" copied!`)}
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm px-5 py-3 rounded-full border border-slate-700 transition-colors"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  Download MP3
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Sermon Track List */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Radio className="w-5 h-5 text-sky-600" />
            Recent Message Archive
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sermons.map((track, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentTrackIndex(idx);
                  setIsPlaying(true);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  currentTrackIndex === idx
                    ? 'bg-sky-50 border-sky-400 shadow-md ring-2 ring-sky-500/20'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 ${
                    currentTrackIndex === idx ? 'bg-sky-600' : 'bg-slate-800'
                  }`}>
                    {currentTrackIndex === idx && isPlaying ? (
                      <Pause className="w-5 h-5 fill-white" />
                    ) : (
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{track.title}</h4>
                    <p className="text-xs text-slate-600">{track.preacher}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="block text-xs font-semibold text-sky-700">{track.duration}</span>
                  <span className="block text-[10px] text-slate-400">{track.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
