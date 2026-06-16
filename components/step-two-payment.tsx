"use client"

import React from "react"

import { useState, useRef } from "react"
import { Copy, Upload, Check, X } from "lucide-react"

interface StepTwoPaymentProps {
  onSubmit: (file: File) => void
}

export function StepTwoPayment({ onSubmit }: StepTwoPaymentProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const accountDetails = {
    accountNumber: "6715392521",
    bankName: "Moniepoint MFB",
    accountName: "OLUWAFEMI SATURDAY ARUWAYO",
  }

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = () => {
    if (selectedFile) {
      onSubmit(selectedFile)
    }
  }

  return (
    <div className="space-y-6">
      {/* Amount Display */}
      <div className="text-center space-y-2">
        <p className="text-muted-foreground">Amount to Pay</p>
        <p className="text-4xl font-bold text-primary">₦15,550</p>
      </div>

      {/* Transfer Details Card */}
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
        <h3 className="font-semibold text-card-foreground">Transfer to this account</h3>

        <div className="space-y-3">
          {/* Account Number */}
          <div className="flex items-center justify-between bg-input rounded-xl p-4">
            <div>
              <p className="text-xs text-muted-foreground">Account Number</p>
              <p className="text-foreground font-medium">{accountDetails.accountNumber}</p>
            </div>
            <button
              onClick={() => copyToClipboard(accountDetails.accountNumber, "accountNumber")}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Copy account number"
            >
              {copiedField === "accountNumber" ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Bank Name */}
          <div className="flex items-center justify-between bg-input rounded-xl p-4">
            <div>
              <p className="text-xs text-muted-foreground">Bank Name</p>
              <p className="text-foreground font-medium">{accountDetails.bankName}</p>
            </div>
            <button
              onClick={() => copyToClipboard(accountDetails.bankName, "bankName")}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Copy bank name"
            >
              {copiedField === "bankName" ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Account Name */}
          <div className="flex items-center justify-between bg-input rounded-xl p-4">
            <div>
              <p className="text-xs text-muted-foreground">Account Name</p>
              <p className="text-foreground font-medium">{accountDetails.accountName}</p>
            </div>
            <button
              onClick={() => copyToClipboard(accountDetails.accountName, "accountName")}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Copy account name"
            >
              {copiedField === "accountName" ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-foreground">Upload Payment Proof</h3>
          <p className="text-sm text-muted-foreground">
            Please upload a screenshot of your transfer confirmation
          </p>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />

        {!selectedFile ? (
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center gap-3 p-8 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-muted-foreground transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Upload className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="text-foreground font-medium">Click to upload screenshot</p>
              <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
            </div>
          </label>
        ) : (
          <div className="relative bg-input rounded-xl p-4">
            <button
              onClick={handleRemoveFile}
              className="absolute top-2 right-2 p-1 bg-card rounded-full hover:bg-muted transition-colors"
              aria-label="Remove file"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            {previewUrl && (
              <img
                src={previewUrl || "/placeholder.svg"}
                alt="Payment proof preview"
                className="w-full h-48 object-contain rounded-lg"
              />
            )}
            <p className="text-sm text-muted-foreground mt-2 truncate">{selectedFile.name}</p>
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedFile}
        className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        I have made the payment
      </button>
    </div>
  )
}
