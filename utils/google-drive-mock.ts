// Mock Google Drive API for demonstration
export interface DriveFile {
  id: string
  name: string
  url: string
  uploadDate: string
  size: number
}

// Simulate Google Drive API calls
export class MockGoogleDriveAPI {
  private static files: DriveFile[] = []

  static async uploadFile(file: File): Promise<DriveFile> {
    // Simulate upload delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create mock file entry
    const driveFile: DriveFile = {
      id: `drive_${Date.now()}`,
      name: file.name,
      url: URL.createObjectURL(file), // In real implementation, this would be the Drive URL
      uploadDate: new Date().toISOString(),
      size: file.size,
    }

    this.files.push(driveFile)
    console.log("Mock: File uploaded to Google Drive:", driveFile)
    return driveFile
  }

  static async getFiles(): Promise<DriveFile[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return [...this.files]
  }

  static async deleteFile(fileId: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const index = this.files.findIndex((f) => f.id === fileId)
    if (index > -1) {
      this.files.splice(index, 1)
      return true
    }
    return false
  }

  static getDirectUrl(fileId: string): string {
    // In real implementation, this would convert Drive file ID to direct URL
    const file = this.files.find((f) => f.id === fileId)
    return file?.url || "/placeholder.svg"
  }
}
