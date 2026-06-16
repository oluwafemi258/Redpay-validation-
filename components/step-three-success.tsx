"use client"

import { Check } from "lucide-react"

interface SubmittedDetails {
  bank: string
  rpc: string
  fullName: string
  phone: string
  email: string
}

interface StepThreeSuccessProps {
  details: SubmittedDetails
}

export function StepThreeSuccess({ details }: StepThreeSuccessProps) {
  return (
    <div className="space-y-8">
      {/* Success Icon */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-10 h-10 text-primary-foreground" strokeWidth={3} />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Payment Submitted!</h2>
          <p className="text-muted-foreground max-w-sm">
            Your payment proof has been received. We will verify and activate your account shortly.
          </p>
        </div>
      </div>

      {/* Submitted Details Card */}
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
        <h3 className="font-semibold text-card-foreground">Submitted Details</h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">Bank</span>
            <span className="text-foreground font-medium">{details.bank}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">RPC</span>
            <span className="text-foreground font-medium">{details.rpc || "N/A"}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">Full Name</span>
            <span className="text-foreground font-medium">{details.fullName}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">Phone</span>
            <span className="text-foreground font-medium">{details.phone}</span>
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground">Email</span>
            <span className="text-foreground font-medium text-right break-all">{details.email}</span>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        You will receive a confirmation email once your account is activated.
      </p>
    </div>
  )
}
