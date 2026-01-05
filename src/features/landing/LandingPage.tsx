"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, Shield, Award,
  CheckCircle, Instagram, Facebook,
  Mail, ArrowRight, Play, MapPin, Phone, ArrowUpRight,
  MessageCircle, Clock, Heart
} from 'lucide-react';
import Navbar from '@/app/layout/navbar';

export default function LandingPage() {

    return (
        <div className="min-h-screen bg-white selection:bg-lime-200 overflow-x-hidden">

        {/* --- HERO & NAVBAR WRAPPER (FULL WIDTH) --- */}
        <div className="w-full bg-[#3fd344] relative">
  
          {/* Decorative Blobs - Absolute Positioned */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-400/50 rounded-full blur-3xl"></div>
  
          {/* --- NAVIGATION --- */}
          <Navbar />
          {/* --- HERO CONTENT (Full Width Container) --- */}
          <section className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-30 md:pt-45 pb-20 md:pb-32 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left z-20"
            >
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black text-white leading-[1.1] md:leading-[1] mb-6 md:mb-8">
                Yayasan <br className="hidden md:block" />
                <span className="relative inline-block">
                  Pendidikan Islam <br /> Madrosatul Qur&apos;an
                  <svg
                    className="absolute -bottom-15 md:-bottom-20 left-0 w-full h-auto"
                    viewBox="0 0 300 20"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path d="M5 15C50 5 150 5 295 15" stroke="#BEF264" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span> <br />
                <span className="text-white">Daar El Muflihin</span>
              </h1>
  
              <p className="text-white/80 text-base md:text-xl max-w-md mx-auto lg:mx-0 mb-8 md:mb-12 leading-relaxed font-medium">
                Membentuk generasi Qur&apos;an Berakhlak Mulia yang menghafal Al-Qur&apos;an, Memahami hadist, dan Meneladani Nabi Muhammad SAW, Menguasai ilmu Fiqh serta unggul dalam akademik untuk kehidupan Dunia Akhirat
              </p>
  
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
                <button className="w-full sm:w-auto bg-white text-[#5D3FD3] px-8 py-4 md:px-10 md:py-5 rounded-full font-extrabold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl">
                  Read more
                  <div className="bg-[#5D3FD3] text-white rounded-full p-1">
                    <ArrowUpRight size={18} />
          </div>
                </button>
                {/* <button className="flex items-center gap-3 text-white font-bold group py-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Play size={18} fill="white" className="ml-1" />
                  </div>
                  Video Profil
                </button> */}
              </div>
            </motion.div>
  
            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
            >
              {/* Lingkaran Lime di belakang */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[90%] aspect-square bg-lime-400 rounded-full transition-all"></div>
  
              <img
                src="/jumbotron.jpg"
                alt="Siswa Islami"
                className="relative z-10 w-[80%] md:w-[90%] h-auto object-cover rounded-b-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />
  
              {/* Floating Stats Card - Optimized for Mobile */}
              <div className="absolute -bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 lg:left-[-10%] lg:translate-x-0 bg-white p-4 md:p-8 rounded-[2rem] shadow-2xl z-20 flex items-center gap-4 md:gap-6 border border-slate-100 min-w-[260px] md:min-w-[320px]">
                <div className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                  850+
                </div>
                <div className="text-slate-500 text-[10px] md:text-sm font-bold leading-tight uppercase tracking-wider">
                  Santri <br className="hidden md:block" /> Terdaftar
                </div>
                <div className="flex -space-x-2 md:-space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?img=${i + 15}`} alt="alumni" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>
  
          {/* --- FEATURES (Bottom Bar) --- */}
          <div className="w-full bg-black/20 backdrop-blur-md border-t border-white/10">
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: 'Tahfidz Al-Qur\'an', desc: 'Tahsin dan Tartil', icon: <Heart size={24} /> },
                { label: 'Bilingual Class', desc: 'Arab & Inggris', icon: <MessageCircle size={24} /> },
                { label: 'Leadership', desc: 'Kepemimpinan & Public Speaking', icon: <Shield size={24} /> },
                { label: 'Adab & Akhlak', desc: 'Kurikulum Karakter', icon: <Award size={24} /> }
              ].map((item, idx) => (
                <div key={idx} className="text-white group cursor-default">
                  <div className="text-lime-400 mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="font-extrabold text-xl mb-1 tracking-tight">{item.label}</div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">{item.desc}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
  
        {/* --- CONTENT BELOW HERO (Dengan Padding & Max-Width) --- */}
  
        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto py-32 px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="bg-[#5D3FD3] w-full aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl relative">
                <img src="/gedung.jpeg" className="w-full h-full object-cover mix-blend-overlay opacity-50" alt="About" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#07ef394d] to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-lime-400 p-10 rounded-[3rem] shadow-2xl hidden md:block border-8 border-white">
                <p className="text-[#5D3FD3] font-black text-5xl">20+</p>
                <p className="text-[#2D1B69] font-bold text-sm uppercase tracking-widest">Tahun Pengabdian</p>
              </div>
            </div>
            <div>
              <h2 className="text-[#5D3FD3] text-6xl font-black mb-8 leading-[1.1]">Mencetak Generasi Qur&apos;ani yang berakhlaq mulia</h2>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed font-medium">
                Yayasan Daar El Muflihin berkomitmen menyediakan lingkungan belajar yang inklusif dan islami
              </p>
              <div className="space-y-5">
                {['Tenaga Pendidik Profesional', 'Fasilitas Smart Classroom', 'Kurikulum Berbasis Adab'].map((list, i) => (
                  <div key={i} className="flex items-center gap-4 font-bold text-slate-800 text-lg">
                    <div className="bg-lime-400 rounded-full p-1.5 shadow-md shadow-lime-200">
                      <CheckCircle size={20} className="text-[#5D3FD3]" />
                    </div>
                    {list}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* Unit Pendidikan */}
        <section id="unit" className="max-w-[1400px] mx-auto py-24 px-6 mb-24 bg-slate-50 rounded-[5rem]">
          <div className="text-center mb-20">
            <h2 className="text-[#5D3FD3] text-6xl font-black mb-6">Unit Pendidikan</h2>
            <div className="w-24 h-2 bg-lime-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'RA (Taman Kanak-kanak)', code: 'Preschool', icon: <Heart className="text-pink-500" />, href: "#" },
              { title: 'Madrasah Ibtidai (MI)', code: 'Elementary', icon: <Award className="text-blue-500" />, href: "#" },
              { title: 'SMP IT', code: 'Junior High', icon: <Shield className="text-indigo-600" />, href: "https://smpit.daarelmuflihin.id" }
            ].map((unit, i) => (
              <motion.div key={i} whileHover={{ y: -15 }} className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="bg-slate-50 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-[#5D3FD3] transition-colors">
                  <div className="group-hover:text-white transition-colors">{unit.icon}</div>
                </div>
                <p className="text-[#5D3FD3] font-bold text-sm uppercase tracking-[0.3em] mb-3">{unit.code}</p>
                <h3 className="text-3xl font-black text-slate-900 mb-8">{unit.title}</h3>
                <a href={unit.href} target='_blank' className="flex items-center gap-3 font-extrabold text-[#5D3FD3] group-hover:gap-5 transition-all text-lg">
                  Selengkapnya <ArrowRight size={24} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>
  
        {/* Contact Footer */}
        <footer id="kontak" className="w-full bg-slate-900 py-32 px-6 overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 relative z-10">
            <div>
              <h2 className="text-6xl font-black text-white mb-10 leading-tight">Siap Bergabung Bersama Kami?</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-8 group">
                  <div className="bg-white/5 p-6 rounded-[2rem] group-hover:bg-lime-400 transition-colors">
                    <Phone className="text-white group-hover:text-black" size={32} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">WhatsApp Admin</p>
                    <p className="text-2xl font-black text-white">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="bg-white/5 p-6 rounded-[2rem] group-hover:bg-lime-400 transition-colors">
                    <MapPin className="text-white group-hover:text-black" size={32} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Lokasi Kampus</p>
                    <p className="text-2xl font-black text-white">Cikande, Banten</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white italic mb-10 opacity-80">&quot;Membangun masa depan umat dimulai dari pendidikan yang tepat.&quot;</h3>
                <div className="flex gap-6">
                  {[Instagram, Facebook, Mail].map((Icon, i) => (
                    <div key={i} className="bg-white/10 p-5 rounded-full hover:bg-lime-400 hover:text-black transition-all cursor-pointer text-white">
                      <Icon size={24} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-20 pt-10 border-t border-white/10">
                <p className="text-white/30 text-sm font-medium tracking-wide">© 2026 Yayasan Pendidikan Daar El Muflihin. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
    }