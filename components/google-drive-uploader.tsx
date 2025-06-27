/*"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Cloud, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { MockGoogleDriveAPI, type DriveFile } from "../utils/google-drive-mock"

interface GoogleDriveUploaderProps {
  onUploadComplete: (fileUrl: string, fileName: string) => void
  className?: string
}

export function GoogleDriveUploader({ onUploadComplete, className }: GoogleDriveUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [uploadedFile, setUploadedFile] = useState<DriveFile | null>(null)
  const [error, setError] = useState<string>("")

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file")
      setUploadStatus("error")
      return
    }

    // Validate file size (max 10MB for demo)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB")
      setUploadStatus("error")
      return
    }

    setUploading(true)
    setUploadStatus("uploading")
    setError("")

    try {
      // Mock Google Drive upload
      const driveFile = await MockGoogleDriveAPI.uploadFile(file)

      setUploadedFile(driveFile)
      setUploadStatus("success")

      // Notify parent component
      onUploadComplete(driveFile.url, driveFile.name)
    } catch (err) {
      setError("Failed to upload to Google Drive")
      setUploadStatus("error")
    } finally {
      setUploading(false)
    }
  }

  const getStatusIcon = () => {
    switch (uploadStatus) {
      case "uploading":
        return <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <Cloud className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusMessage = () => {
    switch (uploadStatus) {
      case "uploading":
        return "Uploading to Google Drive..."
      case "success":
        return `Successfully uploaded: ${uploadedFile?.name}`
      case "error":
        return error
      default:
        return "Ready to upload to Google Drive"
    }
  }

  return (
    <Card className={`bg-white/10 backdrop-blur-sm border-white/20 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Cloud className="w-5 h-5" />
          Google Drive Upload
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="driveUpload" className="text-white text-sm">
            Upload to Google Drive
          </Label>
          <div className="mt-2 flex items-center gap-2">
            <Input
              id="driveUpload"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={uploading}
              className="bg-white/20 border-white/30 text-white file:bg-white/20 file:border-0 file:text-white file:rounded file:px-3 file:py-1 file:mr-3 hover:file:bg-white/30"
            />
            <Button type="button" disabled={uploading} className="bg-blue-600 hover:bg-blue-700 text-white">
              {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Status Display }
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5">
          {getStatusIcon()}
          <span
            className={`text-sm ${
              uploadStatus === "error"
                ? "text-red-300"
                : uploadStatus === "success"
                  ? "text-green-300"
                  : "text-purple-200"
            }`}
          >
            {getStatusMessage()}
          </span>
        </div>

        {/* Upload Progress Simulation }
        {uploading && (
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
          </div>
        )}

        {/* Success Preview }
        {uploadStatus === "success" && uploadedFile && (
          <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30">
            <p className="text-green-300 text-sm font-medium">✅ File uploaded successfully!</p>
            <p className="text-green-200 text-xs mt-1">Drive ID: {uploadedFile.id}</p>
            <p className="text-green-200 text-xs">Size: {(uploadedFile.size / 1024).toFixed(1)} KB</p>
          </div>
        )}

        <div className="text-xs text-purple-300 space-y-1">
    
          <p>🔗 Drive Link: https://drive.google.com/drive/folders/1OwXAiM7qEFmBnKibfO3WjF-WiU_b9j5u?usp=sharing</p>
          <p>⚠️ Note: This is a mock implementation for demonstration</p>
        </div>
      </CardContent>
    </Card>
  )
}*/
