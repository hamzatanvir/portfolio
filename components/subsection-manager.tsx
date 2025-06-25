"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Save, X, Edit, ArrowLeft } from "lucide-react"

interface SubsectionManagerProps {
  sectionType: string
  parentItem: any
  onBack: () => void
  onSubmit: (formData: any) => void
  onEdit: (item: any) => void
  onDelete: (itemId: string) => void
  editingItem: any
  formData: any
  setFormData: (data: any) => void
  resetForm: () => void
}

export function SubsectionManager({
  sectionType,
  parentItem,
  onBack,
  onSubmit,
  onEdit,
  onDelete,
  editingItem,
  formData,
  setFormData,
  resetForm,
}: SubsectionManagerProps) {
  const renderSubsectionForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit(formData)
    }

    switch (sectionType) {
      case "loves":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title" className="text-white">
                  Experience Title
                </Label>
                <Input
                  id="title"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Describe this experience"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-white">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date || ""}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                />
              </div>
              <div>
                <Label htmlFor="location" className="text-white">
                  Location
                </Label>
                <Input
                  id="location"
                  value={formData.location || ""}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Where did this happen?"
                />
              </div>
              <div>
                <Label htmlFor="mood" className="text-white">
                  Mood
                </Label>
                <Input
                  id="mood"
                  value={formData.mood || ""}
                  onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="How did you feel?"
                />
              </div>
              <div>
                <Label htmlFor="companions" className="text-white">
                  With Whom
                </Label>
                <Input
                  id="companions"
                  value={formData.companions || ""}
                  onChange={(e) => setFormData({ ...formData, companions: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Who was with you?"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description" className="text-white">
                Description
              </Label>
              <Textarea
                id="description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                placeholder="Tell the story of this moment"
              />
            </div>
            <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
              <Save className="w-4 h-4 mr-2" />
              {editingItem ? "Update" : "Add"} Experience
            </Button>
          </form>
        )

      case "books":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="readingDate" className="text-white">
                  Reading Date
                </Label>
                <Input
                  id="readingDate"
                  type="date"
                  value={formData.readingDate || ""}
                  onChange={(e) => setFormData({ ...formData, readingDate: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                />
              </div>
              <div>
                <Label htmlFor="rating" className="text-white">
                  Rating
                </Label>
                <Input
                  id="rating"
                  value={formData.rating || ""}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="e.g., 5/5"
                />
              </div>
              <div>
                <Label htmlFor="readingLocation" className="text-white">
                  Reading Location
                </Label>
                <Input
                  id="readingLocation"
                  value={formData.readingLocation || ""}
                  onChange={(e) => setFormData({ ...formData, readingLocation: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Where did you read this?"
                />
              </div>
              <div>
                <Label htmlFor="timeToRead" className="text-white">
                  Time to Read
                </Label>
                <Input
                  id="timeToRead"
                  value={formData.timeToRead || ""}
                  onChange={(e) => setFormData({ ...formData, timeToRead: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="How long did it take?"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="favoriteQuote" className="text-white">
                Favorite Quote
              </Label>
              <Textarea
                id="favoriteQuote"
                value={formData.favoriteQuote || ""}
                onChange={(e) => setFormData({ ...formData, favoriteQuote: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                placeholder="A memorable quote from the book"
              />
            </div>
            <div>
              <Label htmlFor="personalNotes" className="text-white">
                Personal Notes
              </Label>
              <Textarea
                id="personalNotes"
                value={formData.personalNotes || ""}
                onChange={(e) => setFormData({ ...formData, personalNotes: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                placeholder="Your thoughts and reflections"
              />
            </div>
            <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
              <Save className="w-4 h-4 mr-2" />
              {editingItem ? "Update" : "Add"} Reading Experience
            </Button>
          </form>
        )

      case "movies":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="watchDate" className="text-white">
                  Watch Date
                </Label>
                <Input
                  id="watchDate"
                  type="date"
                  value={formData.watchDate || ""}
                  onChange={(e) => setFormData({ ...formData, watchDate: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                />
              </div>
              <div>
                <Label htmlFor="rating" className="text-white">
                  Rating
                </Label>
                <Input
                  id="rating"
                  value={formData.rating || ""}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="e.g., 5/5"
                />
              </div>
              <div>
                <Label htmlFor="watchedWith" className="text-white">
                  Watched With
                </Label>
                <Input
                  id="watchedWith"
                  value={formData.watchedWith || ""}
                  onChange={(e) => setFormData({ ...formData, watchedWith: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Who did you watch with?"
                />
              </div>
              <div>
                <Label htmlFor="location" className="text-white">
                  Location
                </Label>
                <Input
                  id="location"
                  value={formData.location || ""}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Where did you watch?"
                />
              </div>
              <div>
                <Label htmlFor="rewatchable" className="text-white">
                  Would Rewatch?
                </Label>
                <select
                  id="rewatchable"
                  value={formData.rewatchable || ""}
                  onChange={(e) => setFormData({ ...formData, rewatchable: e.target.value })}
                  className="w-full mt-1 p-2 rounded-md bg-white/20 border border-white/30 text-white"
                >
                  <option value="" className="text-black">
                    Select...
                  </option>
                  <option value="Yes" className="text-black">
                    Yes
                  </option>
                  <option value="Maybe" className="text-black">
                    Maybe
                  </option>
                  <option value="No" className="text-black">
                    No
                  </option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="favoriteScene" className="text-white">
                Favorite Scene
              </Label>
              <Textarea
                id="favoriteScene"
                value={formData.favoriteScene || ""}
                onChange={(e) => setFormData({ ...formData, favoriteScene: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                placeholder="Describe your favorite scene"
              />
            </div>
            <div>
              <Label htmlFor="personalNotes" className="text-white">
                Personal Notes
              </Label>
              <Textarea
                id="personalNotes"
                value={formData.personalNotes || ""}
                onChange={(e) => setFormData({ ...formData, personalNotes: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                placeholder="Your thoughts about the movie"
              />
            </div>
            <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
              <Save className="w-4 h-4 mr-2" />
              {editingItem ? "Update" : "Add"} Watch Experience
            </Button>
          </form>
        )

      case "gallery":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title" className="text-white">
                  Photo Story Title
                </Label>
                <Input
                  id="title"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Give this photo a title"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-white">
                  Date Taken
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date || ""}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                />
              </div>
              <div>
                <Label htmlFor="location" className="text-white">
                  Location
                </Label>
                <Input
                  id="location"
                  value={formData.location || ""}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Where was this taken?"
                />
              </div>
              <div>
                <Label htmlFor="camera" className="text-white">
                  Camera/Device
                </Label>
                <Input
                  id="camera"
                  value={formData.camera || ""}
                  onChange={(e) => setFormData({ ...formData, camera: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="What did you use to take this?"
                />
              </div>
              <div>
                <Label htmlFor="people" className="text-white">
                  People in Photo
                </Label>
                <Input
                  id="people"
                  value={formData.people || ""}
                  onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Who's in this photo?"
                />
              </div>
              <div>
                <Label htmlFor="mood" className="text-white">
                  Mood/Feeling
                </Label>
                <Input
                  id="mood"
                  value={formData.mood || ""}
                  onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="What was the mood?"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="story" className="text-white">
                Photo Story
              </Label>
              <Textarea
                id="story"
                value={formData.story || ""}
                onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                placeholder="Tell the story behind this photo"
              />
            </div>
            <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
              <Save className="w-4 h-4 mr-2" />
              {editingItem ? "Update" : "Add"} Photo Story
            </Button>
          </form>
        )

      default:
        return null
    }
  }

  const renderSubsectionItems = () => {
    if (!parentItem.items || parentItem.items.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-purple-200">No entries added yet. Use the form above to add your first entry!</p>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-2 gap-4">
        {parentItem.items.map((item: any) => (
          <Card key={item.id} className="bg-white/10 backdrop-blur-sm border-white/20 relative group">
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                onClick={() => onEdit(item)}
                className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                variant="ghost"
              >
                <Edit className="w-4 h-4 text-blue-300" />
              </Button>
              <Button
                onClick={() => onDelete(item.id)}
                className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                variant="ghost"
              >
                <X className="w-4 h-4 text-red-300" />
              </Button>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-lg">
                {item.title || item.readingDate || item.watchDate || "Entry"}
              </CardTitle>
              {item.date && <CardDescription className="text-purple-200">📅 {item.date}</CardDescription>}
              {item.location && <CardDescription className="text-purple-200">📍 {item.location}</CardDescription>}
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                {item.rating && <p className="text-purple-200">Rating: {item.rating}</p>}
                {item.mood && <p className="text-purple-200">Mood: {item.mood}</p>}
                {item.companions && <p className="text-purple-200">With: {item.companions}</p>}
                {item.readingLocation && <p className="text-purple-200">Read at: {item.readingLocation}</p>}
                {item.timeToRead && <p className="text-purple-200">Time: {item.timeToRead}</p>}
                {item.watchedWith && <p className="text-purple-200">Watched with: {item.watchedWith}</p>}
                {item.rewatchable && <p className="text-purple-200">Rewatch: {item.rewatchable}</p>}
                {item.camera && <p className="text-purple-200">Camera: {item.camera}</p>}
                {item.people && <p className="text-purple-200">People: {item.people}</p>}
              </div>
              {item.description && <p className="text-purple-100 mt-2">{item.description}</p>}
              {item.personalNotes && <p className="text-purple-100 mt-2">{item.personalNotes}</p>}
              {item.story && <p className="text-purple-100 mt-2">{item.story}</p>}
              {item.favoriteQuote && (
                <div className="mt-2">
                  <p className="text-purple-200 text-sm font-semibold">Favorite Quote:</p>
                  <p className="text-purple-100 italic text-sm">"{item.favoriteQuote}"</p>
                </div>
              )}
              {item.favoriteScene && (
                <div className="mt-2">
                  <p className="text-purple-200 text-sm font-semibold">Favorite Scene:</p>
                  <p className="text-purple-100 text-sm">{item.favoriteScene}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button onClick={onBack} variant="ghost" className="text-white hover:bg-white/20">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            {parentItem.emoji && <span className="text-2xl">{parentItem.emoji}</span>}
            {parentItem.title}
          </h2>
          <p className="text-purple-100">{parentItem.description || parentItem.caption}</p>
        </div>
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white">{editingItem ? `Edit Entry` : `Add New Entry`}</CardTitle>
          {editingItem && (
            <Button onClick={resetForm} variant="ghost" className="text-purple-200 hover:bg-white/20 w-fit">
              Cancel Edit
            </Button>
          )}
        </CardHeader>
        <CardContent>{renderSubsectionForm()}</CardContent>
      </Card>

      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Your Collection</h3>
        {renderSubsectionItems()}
      </div>
    </div>
  )
}
