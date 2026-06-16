"use client"

import React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface StepOneFormProps {
  onSubmit: (data: FormData) => void
}

interface FormData {
  bank: string
  rpc: string
  fullName: string
  phone: string
  email: string
}

const banks = [
  "Access Bank",
  "Zenith Bank",
  "GTBank",
  "First Bank",
  "UBA",
  "Fidelity Bank",
  "Union Bank",
  "Sterling Bank",
  "Wema Bank",
  "Polaris Bank",
  "Stanbic IBTC",
  "Ecobank",
  "FCMB",
  "Keystone Bank",
  "Unity Bank",
  "Heritage Bank",
  "Jaiz Bank",
  "OPAY",
  "Kuda Bank",
  "Moniepoint",
  "PalmPay",
  "9PSB (9 Payment Service Bank)",
  "Carbon (One Finance)",
  "Paga",
  "Fairmoney",
  "VFD Microfinance Bank",
  "Rubies Bank",
  "Sparkle Microfinance Bank",
  "Eyowo",
  "Fincra",
  "Chipper Cash",
  "Raven Bank",
  "Brass",
  "Fundall",
  "Umba",
  "Bankly",
]

export function StepOneForm({ onSubmit }: StepOneFormProps) {
  const [formData, setFormData] = useState<FormData>({
    bank: "",
    rpc: "",
    fullName: "",
    phone: "",
    email: "",
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const isFormValid =
    formData.bank.trim() !== "" &&
    formData.rpc.trim() !== "" &&
    formData.fullName.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== ""

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return
    onSubmit(formData)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-card-foreground">Account Details</h2>
        <p className="text-sm text-muted-foreground">Enter your banking information</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Bank Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 py-3.5 bg-input border border-border rounded-xl text-left flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <span className={formData.bank ? "text-foreground" : "text-muted-foreground"}>
              {formData.bank || "Select your bank"}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-full bg-card border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto">
              {banks.map((bank) => (
                <button
                  key={bank}
                  type="button"
                  onClick={() => {
                    handleChange("bank", bank)
                    setIsDropdownOpen(false)
                  }}
                  className="w-full px-4 py-3 text-left text-foreground hover:bg-muted transition-colors first:rounded-t-xl last:rounded-b-xl"
                >
                  {bank}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RPC Input */}
        <input
          type="text"
          placeholder="Enter RPC"
          value={formData.rpc}
          onChange={(e) => handleChange("rpc", e.target.value)}
          className="w-full px-4 py-3.5 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        />

        {/* Full Name Input */}
        <input
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="w-full px-4 py-3.5 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        />

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full px-4 py-3.5 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full px-4 py-3.5 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        />

        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  )
}
