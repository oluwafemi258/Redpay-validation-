"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  message?: string
  duration?: number
}

export function LoadingScreen({ message = "Processing...", duration = 5000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState("")

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      if (pct >= 100) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [duration])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-xs flex flex-col items-center gap-6">

        {/* RedPay logo */}
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: "#d42020" }}
          >
            <span className="text-white font-black text-2xl">R</span>
          </div>
          <span className="text-sm font-bold" style={{ color: "#d42020" }}>RedPay</span>
        </div>

        {/* Loading text */}
        <p className="text-foreground font-semibold text-lg tracking-wide">
          Loading<span className="inline-block w-6 text-left">{dots}</span>
        </p>

        {/* Progress bar track */}
        <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-none"
            style={{
              width: `${progress}%`,
              background: "white",
              boxShadow: "0 0 10px rgba(255,255,255,0.6)",
            }}
          />
        </div>

        <p className="text-muted-foreground text-sm">Please wait...</p>
      </div>
    </div>
  )
}
