"use client"

import Image from "next/image"

interface WelcomeScreenProps {
  onBegin: () => void
}

export function WelcomeScreen({ onBegin }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white font-sans justify-center">

      {/* ── TOP HEADER ── */}
      <header className="w-full bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#d42020" }}
          >
            <span className="text-white font-black text-xl">R</span>
          </div>
          <div className="leading-tight">
            <p className="font-bold text-gray-900 text-base leading-none">Red Pay</p>
            <p className="text-gray-500 text-xs mt-0.5">Communications Ltd</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-xs">Powered by</p>
          <p className="font-bold text-gray-800 text-xs">Flutterwave Technology</p>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section
        className="w-full px-5 pt-6 pb-8 flex items-start gap-3"
        style={{ background: "#d42020" }}
      >
        <div className="flex-1 pt-1">
          <p className="text-white/80 text-sm font-medium mb-1">Tee Global Consult</p>
          <h1 className="text-white font-black leading-none text-balance" style={{ fontSize: "clamp(2.4rem,10vw,3.2rem)" }}>
            Protect<br />Your<br />Brand
          </h1>
          <p className="text-white font-extrabold text-xs mt-3 leading-snug tracking-wide uppercase">
            RED PAY<br />COMMUNICATIONS<br />REGISTRATION
          </p>
        </div>
        <div className="flex-shrink-0 w-44 rounded-2xl overflow-hidden shadow-lg mt-2">
          <Image
            src="/images/redpay-hero-woman.jpg"
            alt="Professional holding a certificate"
            width={176}
            height={220}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </section>

      {/* ── FEATURES CARD ── */}
      <section className="mx-4 -mt-4 bg-white rounded-2xl shadow-md px-5 py-5 z-10 relative">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#d42020" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-gray-900 font-semibold text-base">Acknowledgment Letter</span>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#d42020" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-gray-900 font-semibold text-base">Acceptance Letter</span>
        </div>

        {/* Sign In Now button in place of price pill */}
        <div className="flex justify-center">
          <button
            onClick={onBegin}
            className="w-3/4 py-4 font-black text-lg rounded-xl transition-all active:scale-95 hover:opacity-90 text-white animate-pulse-scale"
            style={{ background: "#d42020" }}
          >
            Sign In Now
          </button>
        </div>
      </section>

      {/* ── BENEFIT ROWS ── */}
      <div className="px-4 mt-4 space-y-3">
        <div
          className="flex items-center gap-4 rounded-2xl px-4 py-4"
          style={{ background: "#c01c1c" }}
        >
          <span className="w-9 h-9 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9L7 13L15 5" stroke="#d42020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-white font-bold text-sm">Secure your brand identity</span>
        </div>
        <div
          className="flex items-center gap-4 rounded-2xl px-4 py-4"
          style={{ background: "#c01c1c" }}
        >
          <span className="w-9 h-9 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9L7 13L15 5" stroke="#d42020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-white font-bold text-sm">Legal protection against infringement</span>
        </div>
      </div>

      {/* ── NOW REGISTER WITH ── */}
      <div className="px-5 mt-6">
        <p className="text-white font-bold text-lg mb-3" style={{ color: "#d42020" }}>Now Register with:</p>
        <div className="flex items-center gap-3 mb-1">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#d42020" }}
          >
            <span className="text-white font-black text-base">R</span>
          </div>
          <span className="font-black text-gray-900 text-2xl">Red Pay</span>
        </div>
        <p className="text-gray-500 text-xs mt-1">(A product of Flutterwave Technology Solutions Limited)</p>
      </div>

      {/* ── CALL TO ACTION ── */}
      <div className="px-4 mt-5 mb-8">
        <div
          className="rounded-2xl px-5 py-5 flex flex-col items-center gap-4"
          style={{ background: "#d42020" }}
        >
          <p className="text-white font-bold text-base self-start">Call or DM now:</p>
          <div
            className="inline-flex items-center justify-center rounded-full px-10 py-3"
            style={{ background: "#a01515" }}
          >
            <span className="text-white font-black text-2xl">&#8358;160K</span>
          </div>
        </div>
      </div>

    </div>
  )
}
