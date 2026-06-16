"use client"

import { ArrowLeft } from "lucide-react"
import { ProgressBar } from "./progress-bar"

interface ActivationHeaderProps {
  currentStep: number
  onBack?: () => void
  showBackButton?: boolean
}

export function ActivationHeader({ currentStep, onBack, showBackButton = false }: ActivationHeaderProps) {
  return (
    <div className="space-y-6">
      {showBackButton && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}
      
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-2xl font-bold">R</span>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold text-foreground">RedPay Activation</h1>
          <p className="text-sm text-muted-foreground">Step {currentStep} of 3</p>
        </div>
      </div>
      
      <ProgressBar currentStep={currentStep} totalSteps={3} />
    </div>
  )
}
