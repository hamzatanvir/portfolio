"use client"

import type React from "react"

import { useState } from "react"
import { Book, Heart, Camera, Film, User, Plus, Save, X, Edit, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface Interest {
  id: string
  title: string
  description: string
  icon: string
  items?: any[]
}

interface Love {
  id: string
  title: string
  description: string
  emoji: string
  items?: LoveItem[]
}

interface BookType {
  id: string
  title: string
  author: string
  description: string
  items?: BookItem[]
}

interface Movie {
  id: string
  title: string
  year: string
  description: string
  items?: MovieItemType[]
}

interface GalleryImage {
  id: string
  url: string
  caption: string
  items?: GalleryItem[]
}

interface LoveItem {
  id: string
  title: string
  date: string
  location: string
  description: string
  mood: string
  companions: string
}

interface BookItem {
  id: string
  readingDate: string
  rating: string
  favoriteQuote: string
  personalNotes: string
  readingLocation: string
  timeToRead: string
}

interface MovieItemType {
  id: string
  watchDate: string
  rating: string
  watchedWith: string
  location: string
  favoriteScene: string
  personalNotes: string
  rewatchable: string
}

interface GalleryItem {
  id: string
  title: string
  date: string
  location: string
  camera: string
  story: string
  people: string
  mood: string
  imageUrl?: string
}

export default function PersonalPortfolio() {
  const [activeTab, setActiveTab] = useState("interests")
  const [editingInterest, setEditingInterest] = useState<string | null>(null)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [editingLoveItem, setEditingLoveItem] = useState<string | null>(null)
  const [editingBookItem, setEditingBookItem] = useState<string | null>(null)
  const [editingMovieItem, setEditingMovieItem] = useState<string | null>(null)
  const [editingGalleryItem, setEditingGalleryItem] = useState<string | null>(null)

  // State for dynamic content
  const [interests, setInterests] = useState<Interest[]>([
    {
      id: "1",
      title: "Reading",
      description: "I love getting lost in stories and exploring different worlds through books.",
      icon: "📚",
      items: [
        {
          id: "r1",
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          genre: "Fantasy",
          rating: "5/5",
          notes: "An amazing adventure that sparked my love for fantasy literature.",
        },
      ],
    },
    {
      id: "2",
      title: "Movies",
      description: "Cinema is my escape - I enjoy both animated adventures and thought-provoking dramas.",
      icon: "🎬",
      items: [
        {
          id: "m1",
          title: "Spirited Away",
          director: "Hayao Miyazaki",
          year: "2001",
          genre: "Animation",
          rating: "5/5",
          notes: "A masterpiece of animation and storytelling.",
        },
      ],
    },
    {
      id: "3",
      title: "Photography",
      description: "Capturing moments and memories that tell beautiful stories.",
      icon: "📸",
      items: [
        {
          id: "p1",
          title: "Golden Hour Portrait",
          location: "Central Park",
          date: "2024-03-15",
          camera: "Canon EOS R5",
          description: "Beautiful natural lighting during sunset.",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "4",
      title: "Creative Writing",
      description: "Expressing thoughts and imagination through the written word.",
      icon: "✍️",
      items: [
        {
          id: "w1",
          title: "The Midnight Garden",
          type: "Short Story",
          wordCount: "2500",
          dateWritten: "2024-02-20",
          description: "A mystical tale about a garden that only appears at midnight.",
          excerpt: "The clock struck twelve, and suddenly the empty lot transformed...",
        },
      ],
    },
  ])

  const [loves, setLoves] = useState<Love[]>([
    {
      id: "1",
      title: "Sunrise Moments",
      description: "The peaceful beauty of early mornings",
      emoji: "🌅",
      items: [
        {
          id: "sm1",
          title: "Beach Sunrise in Malibu",
          date: "2024-03-10",
          location: "Malibu Beach",
          description: "Watched the sun rise over the Pacific Ocean with golden reflections on the water.",
          mood: "Peaceful and inspired",
          companions: "Solo experience",
        },
      ],
    },
    {
      id: "2",
      title: "Cozy Coffee",
      description: "Warm drinks and quiet contemplation",
      emoji: "☕",
      items: [
        {
          id: "cc1",
          title: "Morning Latte at Local Café",
          date: "2024-03-15",
          location: "Corner Café Downtown",
          description: "Perfect foam art and the ideal temperature for a rainy morning.",
          mood: "Cozy and content",
          companions: "Solo coffee time",
        },
      ],
    },
    { id: "3", title: "Music", description: "Melodies that touch the soul", emoji: "🎵", items: [] },
    { id: "4", title: "Nature Walks", description: "Finding peace in natural beauty", emoji: "🌸", items: [] },
    { id: "5", title: "Stargazing", description: "Wonder under the night sky", emoji: "✨", items: [] },
    { id: "6", title: "Quiet Reading", description: "Lost in stories and imagination", emoji: "📚", items: [] },
  ])

  const [books, setBooks] = useState<BookType[]>([
    {
      id: "1",
      title: "The Railway Children",
      author: "E. Nesbit",
      description: "A timeless tale of adventure, family, and the magic of childhood discovery.",
      items: [
        {
          id: "rc1",
          readingDate: "2024-01-15",
          rating: "5/5",
          favoriteQuote:
            "When we are grown up you will understand that some days are good days and some days are bad days.",
          personalNotes: "This book reminded me of the importance of family and resilience during difficult times.",
          readingLocation: "My favorite reading nook by the window",
          timeToRead: "3 days",
        },
      ],
    },
    {
      id: "2",
      title: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
      description: "A unique perspective on life through the eyes of a remarkable young protagonist.",
      items: [
        {
          id: "ci1",
          readingDate: "2024-02-20",
          rating: "4/5",
          favoriteQuote:
            "I think prime numbers are like life. They are very logical but you could never work out the rules.",
          personalNotes: "Gave me a new perspective on how different minds work and process the world.",
          readingLocation: "Coffee shop downtown",
          timeToRead: "5 days",
        },
      ],
    },
  ])

  const [movies, setMovies] = useState<Movie[]>([
    {
      id: "1",
      title: "Damsel",
      year: "2024",
      description: "A captivating fantasy adventure that redefines the classic fairy tale.",
      items: [
        {
          id: "d1",
          watchDate: "2024-03-01",
          rating: "4/5",
          watchedWith: "Friends",
          location: "Home theater",
          favoriteScene: "The dragon revelation scene",
          personalNotes: "Loved the strong female protagonist and the plot twist!",
          rewatchable: "Yes",
        },
      ],
    },
    {
      id: "2",
      title: "The Good Dinosaur",
      year: "2015",
      description: "A heartwarming Pixar film about friendship, courage, and finding your way home.",
      items: [
        {
          id: "gd1",
          watchDate: "2024-01-20",
          rating: "5/5",
          watchedWith: "Family",
          location: "Living room",
          favoriteScene: "Arlo and Spot's friendship moments",
          personalNotes: "Made me cry happy tears. Beautiful animation and touching story.",
          rewatchable: "Definitely",
        },
      ],
    },
    {
      id: "3",
      title: "The Little Prince",
      year: "2015",
      description: "A beautiful adaptation of the beloved story about love, loss, and imagination.",
      items: [],
    },
  ])

  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([
    {
      id: "1",
      url: "/WhatsApp Image 2025-06-25 at 10.08.01_bd0c38ab.jpg",
      caption: "freinds",
      items: [
        {
          id: "bm1",
          title: "friends",
          date: "2024-03-10",
          location: "Santa Monica Pier",
          camera: "iPhone 15 Pro",
          story: "Captured this during a spontaneous evening walk. The colors were absolutely magical.",
          people: "Solo photo",
          mood: "Peaceful and reflective",
          imageUrl: "",
        },
      ],
    },
    {
      id: "2",
      url: "/WhatsApp Image 2025-06-25 at 10.08.01_7d704169.jpg",
      caption: "freinds1",
      items: [
        {
          id: "bm2",
          title: "friends1",
          date: "2024-02-28",
          location: "Local Coffee House",
          camera: "Canon EOS R5",
          story: "Love the cozy atmosphere of this place. Perfect for reading and people watching.",
          people: "Candid shot of strangers",
          mood: "Cozy and warm",
          imageUrl: "",
        },
      ],
    },
    {
      id: "3",
      url: "/WhatsApp Image 2025-06-25 at 10.08.01_fe9e7630.jpg",
      caption: "friends2",
      items: [],
    },
    {
      id: "4",
      url: "/WhatsApp Image 2025-06-25 at 10.08.02_c9e66c9c.jpg",
      caption: "friend3",
      items: [],
    },
     {
      id: "5",
      url: "/WhatsApp Image 2025-06-25 at 10.08.01_bd0c38ab.jpg",
      caption: "friend4",
      items: [],
    },

  ])

  // Form states
  const [formSection, setFormSection] = useState("interests")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    year: "",
    emoji: "",
    icon: "",
    url: "",
    caption: "",
    genre: "",
    rating: "",
    notes: "",
    director: "",
    location: "",
    date: "",
    camera: "",
    imageUrl: "",
    type: "",
    wordCount: "",
    dateWritten: "",
    excerpt: "",
    mood: "",
    companions: "",
    readingDate: "",
    favoriteQuote: "",
    personalNotes: "",
    readingLocation: "",
    timeToRead: "",
    watchDate: "",
    watchedWith: "",
    favoriteScene: "",
    rewatchable: "",
    story: "",
    people: "",
  })

  const [editingItem, setEditingItem] = useState<any>(null)

  const tabs = [
    { id: "interests", label: "My Interests & Hobbies", icon: User },
    { id: "loves", label: "Things I Love & Enjoy", icon: Heart },
    { id: "books", label: "Favourite Books", icon: Book },
    { id: "movies", label: "Favourite Movies", icon: Film },
    { id: "gallery", label: "Gallery", icon: Camera },
    { id: "add-form", label: "Add Content", icon: Plus },
  ]

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      author: "",
      year: "",
      emoji: "",
      icon: "",
      url: "",
      caption: "",
      genre: "",
      rating: "",
      notes: "",
      director: "",
      location: "",
      date: "",
      camera: "",
      imageUrl: "",
      type: "",
      wordCount: "",
      dateWritten: "",
      excerpt: "",
      mood: "",
      companions: "",
      readingDate: "",
      favoriteQuote: "",
      personalNotes: "",
      readingLocation: "",
      timeToRead: "",
      watchDate: "",
      watchedWith: "",
      favoriteScene: "",
      rewatchable: "",
      story: "",
      people: "",
    })
    setEditingItem(null)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newId = Date.now().toString()

    switch (formSection) {
      case "interests":
        setInterests([
          ...interests,
          {
            id: newId,
            title: formData.title,
            description: formData.description,
            icon: formData.icon || "⭐",
            items: [],
          },
        ])
        break
      case "loves":
        setLoves([
          ...loves,
          {
            id: newId,
            title: formData.title,
            description: formData.description,
            emoji: formData.emoji || "💖",
            items: [],
          },
        ])
        break
      case "books":
        setBooks([
          ...books,
          {
            id: newId,
            title: formData.title,
            author: formData.author,
            description: formData.description,
            items: [],
          },
        ])
        break
      case "movies":
        setMovies([
          ...movies,
          {
            id: newId,
            title: formData.title,
            year: formData.year,
            description: formData.description,
            items: [],
          },
        ])
        break
      case "gallery":
        setGalleryImages([
          ...galleryImages,
          {
            id: newId,
            url: formData.url || "/placeholder.svg?height=300&width=400",
            caption: formData.caption,
            items: [],
          },
        ])
        break
    }

    resetForm()
  }

  const handleSectionItemSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newId = Date.now().toString()
    let newItem: any = {}

    switch (editingSection) {
      case "loves":
        newItem = {
          id: editingItem?.id || newId,
          title: formData.title,
          description: formData.description,
          emoji: formData.emoji || "💖",
        }
        if (editingItem) {
          setLoves(loves.map((item) => (item.id === editingItem.id ? newItem : item)))
        } else {
          setLoves([...loves, newItem])
        }
        break
      case "books":
        newItem = {
          id: editingItem?.id || newId,
          title: formData.title,
          author: formData.author,
          description: formData.description,
        }
        if (editingItem) {
          setBooks(books.map((item) => (item.id === editingItem.id ? newItem : item)))
        } else {
          setBooks([...books, newItem])
        }
        break
      case "movies":
        newItem = {
          id: editingItem?.id || newId,
          title: formData.title,
          year: formData.year,
          description: formData.description,
        }
        if (editingItem) {
          setMovies(movies.map((item) => (item.id === editingItem.id ? newItem : item)))
        } else {
          setMovies([...movies, newItem])
        }
        break
      case "gallery":
        newItem = {
          id: editingItem?.id || newId,
          url: formData.url || "/placeholder.svg?height=300&width=400",
          caption: formData.caption,
        }
        if (editingItem) {
          setGalleryImages(galleryImages.map((item) => (item.id === editingItem.id ? newItem : item)))
        } else {
          setGalleryImages([...galleryImages, newItem])
        }
        break
    }

    resetForm()
  }

  const handleInterestItemSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const interestIndex = interests.findIndex((i) => i.id === editingInterest)
    if (interestIndex === -1) return

    const interest = interests[interestIndex]
    const newId = Date.now().toString()
    let newItem: any = {}

    switch (interest.title) {
      case "Reading":
        newItem = {
          id: editingItem?.id || newId,
          title: formData.title,
          author: formData.author,
          genre: formData.genre,
          rating: formData.rating,
          notes: formData.notes,
        }
        break
      case "Movies":
        newItem = {
          id: editingItem?.id || newId,
          title: formData.title,
          director: formData.director,
          year: formData.year,
          genre: formData.genre,
          rating: formData.rating,
          notes: formData.notes,
        }
        break
      case "Photography":
        newItem = {
          id: editingItem?.id || newId,
          title: formData.title,
          location: formData.location,
          date: formData.date,
          camera: formData.camera,
          description: formData.description,
          imageUrl: formData.imageUrl || "/placeholder.svg?height=200&width=300",
        }
        break
      case "Creative Writing":
        newItem = {
          id: editingItem?.id || newId,
          title: formData.title,
          type: formData.type,
          wordCount: formData.wordCount,
          dateWritten: formData.dateWritten,
          description: formData.description,
          excerpt: formData.excerpt,
        }
        break
    }

    const updatedInterests = [...interests]
    if (editingItem) {
      // Edit existing item
      const itemIndex = interest.items?.findIndex((item) => item.id === editingItem.id) ?? -1
      if (itemIndex !== -1 && interest.items) {
        interest.items[itemIndex] = newItem
      }
    } else {
      // Add new item
      if (!interest.items) interest.items = []
      interest.items.push(newItem)
    }

    updatedInterests[interestIndex] = interest
    setInterests(updatedInterests)

    resetForm()
  }

  const handleDelete = (section: string, id: string) => {
    switch (section) {
      case "interests":
        setInterests(interests.filter((item) => item.id !== id))
        break
      case "loves":
        setLoves(loves.filter((item) => item.id !== id))
        break
      case "books":
        setBooks(books.filter((item) => item.id !== id))
        break
      case "movies":
        setMovies(movies.filter((item) => item.id !== id))
        break
      case "gallery":
        setGalleryImages(galleryImages.filter((item) => item.id !== id))
        break
    }
  }

  const handleDeleteInterestItem = (interestId: string, itemId: string) => {
    const interestIndex = interests.findIndex((i) => i.id === interestId)
    if (interestIndex === -1) return

    const updatedInterests = [...interests]
    const interest = updatedInterests[interestIndex]
    if (interest.items) {
      interest.items = interest.items.filter((item) => item.id !== itemId)
    }
    setInterests(updatedInterests)
  }

  const handleEditItem = (section: string, item: any) => {
    setEditingItem(item)
    setFormData({
      ...formData,
      title: item.title || "",
      author: item.author || "",
      description: item.description || "",
      year: item.year || "",
      emoji: item.emoji || "",
      url: item.url || "",
      caption: item.caption || "",
      genre: item.genre || "",
      rating: item.rating || "",
      notes: item.notes || "",
      director: item.director || "",
      location: item.location || "",
      date: item.date || "",
      camera: item.camera || "",
      imageUrl: item.imageUrl || "",
      type: item.type || "",
      wordCount: item.wordCount || "",
      dateWritten: item.dateWritten || "",
      excerpt: item.excerpt || "",
      mood: item.mood || "",
      companions: item.companions || "",
      readingDate: item.readingDate || "",
      favoriteQuote: item.favoriteQuote || "",
      personalNotes: item.personalNotes || "",
      readingLocation: item.readingLocation || "",
      timeToRead: item.timeToRead || "",
      watchDate: item.watchDate || "",
      watchedWith: item.watchedWith || "",
      favoriteScene: item.favoriteScene || "",
      rewatchable: item.rewatchable || "",
      story: item.story || "",
      people: item.people || "",
    })
  }

  const handleEditInterestItem = (item: any) => {
    setEditingItem(item)
    setFormData({
      ...formData,
      title: item.title || "",
      author: item.author || "",
      genre: item.genre || "",
      rating: item.rating || "",
      notes: item.notes || "",
      director: item.director || "",
      year: item.year || "",
      location: item.location || "",
      date: item.date || "",
      camera: item.camera || "",
      description: item.description || "",
      imageUrl: item.imageUrl || "",
      type: item.type || "",
      wordCount: item.wordCount || "",
      dateWritten: item.dateWritten || "",
      excerpt: item.excerpt || "",
    })
  }

  const handleSubsectionItemSubmit = (sectionType: string, parentId: string, itemData: any) => {
    const newId = Date.now().toString()
    const newItem = { id: editingItem?.id || newId, ...itemData }

    switch (sectionType) {
      case "loves":
        const updatedLoves = loves.map((love) => {
          if (love.id === parentId) {
            const items = love.items || []
            if (editingItem) {
              const itemIndex = items.findIndex((item) => item.id === editingItem.id)
              if (itemIndex !== -1) {
                items[itemIndex] = newItem
              }
            } else {
              items.push(newItem)
            }
            return { ...love, items }
          }
          return love
        })
        setLoves(updatedLoves)
        break

      case "books":
        const updatedBooks = books.map((book) => {
          if (book.id === parentId) {
            const items = book.items || []
            if (editingItem) {
              const itemIndex = items.findIndex((item) => item.id === editingItem.id)
              if (itemIndex !== -1) {
                items[itemIndex] = newItem
              }
            } else {
              items.push(newItem)
            }
            return { ...book, items }
          }
          return book
        })
        setBooks(updatedBooks)
        break

      case "movies":
        const updatedMovies = movies.map((movie) => {
          if (movie.id === parentId) {
            const items = movie.items || []
            if (editingItem) {
              const itemIndex = items.findIndex((item) => item.id === editingItem.id)
              if (itemIndex !== -1) {
                items[itemIndex] = newItem
              }
            } else {
              items.push(newItem)
            }
            return { ...movie, items }
          }
          return movie
        })
        setMovies(updatedMovies)
        break

      case "gallery":
        const updatedGallery = galleryImages.map((image) => {
          if (image.id === parentId) {
            const items = image.items || []
            if (editingItem) {
              const itemIndex = items.findIndex((item) => item.id === editingItem.id)
              if (itemIndex !== -1) {
                items[itemIndex] = newItem
              }
            } else {
              items.push(newItem)
            }
            return { ...image, items }
          }
          return image
        })
        setGalleryImages(updatedGallery)
        break
    }

    resetForm()
  }

  const handleSubsectionItemDelete = (sectionType: string, parentId: string, itemId: string) => {
    switch (sectionType) {
      case "loves":
        const updatedLoves = loves.map((love) => {
          if (love.id === parentId && love.items) {
            return { ...love, items: love.items.filter((item) => item.id !== itemId) }
          }
          return love
        })
        setLoves(updatedLoves)
        break

      case "books":
        const updatedBooks = books.map((book) => {
          if (book.id === parentId && book.items) {
            return { ...book, items: book.items.filter((item) => item.id !== itemId) }
          }
          return book
        })
        setBooks(updatedBooks)
        break

      case "movies":
        const updatedMovies = movies.map((movie) => {
          if (movie.id === parentId && movie.items) {
            return { ...movie, items: movie.items.filter((item) => item.id !== itemId) }
          }
          return movie
        })
        setMovies(updatedMovies)
        break

      case "gallery":
        const updatedGallery = galleryImages.map((image) => {
          if (image.id === parentId && image.items) {
            return { ...image, items: image.items.filter((item) => item.id !== itemId) }
          }
          return image
        })
        setGalleryImages(updatedGallery)
        break
    }
  }

  // Subsection Management Component
  const renderSubsectionManager = (sectionType: string, parentItem: any, onBack: () => void) => {
    const renderSubsectionForm = () => {
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        handleSubsectionItemSubmit(sectionType, parentItem.id, formData)
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

              {/* Image Upload Section */}
              <div className="space-y-4">
                <Label className="text-white">Photo Upload</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="imageFile" className="text-white text-sm">
                      Upload from Desktop
                    </Label>
                    <Input
                      id="imageFile"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          const reader = new FileReader()
                          reader.onload = (event) => {
                            const result = event.target?.result as string
                            setFormData({ ...formData, imageUrl: result })
                          }
                          reader.readAsDataURL(file)
                        }
                      }}
                      className="bg-white/20 border-white/30 text-white file:bg-white/20 file:border-0 file:text-white file:rounded file:px-3 file:py-1 file:mr-3 hover:file:bg-white/30"
                    />
                    <p className="text-purple-200 text-xs mt-1">Supported: JPG, PNG, GIF, WebP</p>
                  </div>
                  <div>
                    <Label htmlFor="imageUrl" className="text-white text-sm">
                      Or Enter Image URL
                    </Label>
                    <Input
                      id="imageUrl"
                      value={formData.imageUrl || ""}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                {/* Image Preview */}
                {formData.imageUrl && (
                  <div className="mt-4">
                    <Label className="text-white text-sm">Preview</Label>
                    <div className="mt-2 relative">
                      <img
                        src={formData.imageUrl || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full max-w-md h-48 object-cover rounded-lg border border-white/30"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=200&width=300"
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() => setFormData({ ...formData, imageUrl: "" })}
                        className="absolute top-2 right-2 w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                        variant="ghost"
                      >
                        <X className="w-4 h-4 text-red-300" />
                      </Button>
                    </div>
                  </div>
                )}
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
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Button
                  onClick={() => handleEditItem(sectionType, item)}
                  className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                  variant="ghost"
                >
                  <Edit className="w-4 h-4 text-blue-300" />
                </Button>
                <Button
                  onClick={() => handleSubsectionItemDelete(sectionType, parentItem.id, item.id)}
                  className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                  variant="ghost"
                >
                  <X className="w-4 h-4 text-red-300" />
                </Button>
              </div>

              {/* Show image for gallery items and items with imageUrl */}
              {(sectionType === "gallery" || item.imageUrl) && (
                <div className="relative">
                  <img
                    src={item.imageUrl || parentItem.url || "/placeholder.svg?height=200&width=400"}
                    alt={item.title || parentItem.caption}
                    className="w-full h-32 object-cover rounded-t-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=200&width=400"
                    }}
                  />
                </div>
              )}

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
        {/* Gallery Image Header - Show the main image */}
        {sectionType === "gallery" && parentItem.url && (
          <div className="relative rounded-lg overflow-hidden mb-6">
            <img
              src={parentItem.url || "/placeholder.svg"}
              alt={parentItem.caption}
              className="w-full h-64 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=300&width=600"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">{parentItem.caption}</h2>
              <p className="text-gray-200">{parentItem.items?.length || 0} photo stories</p>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 mb-6">
          <Button onClick={onBack} variant="ghost" className="text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              {parentItem.emoji && <span className="text-2xl">{parentItem.emoji}</span>}
              {parentItem.title || parentItem.caption}
            </h2>
            <p className="text-purple-100">{parentItem.description || "Manage your photo stories"}</p>
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

  // Section Management Components
  const renderSectionManagement = (sectionType: string, sectionTitle: string, sectionIcon: string) => {
    const renderSectionForm = () => {
      switch (sectionType) {
        case "loves":
          return (
            <form onSubmit={handleSectionItemSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="What do you love?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="emoji" className="text-white">
                    Emoji
                  </Label>
                  <Input
                    id="emoji"
                    value={formData.emoji}
                    onChange={(e) => setFormData({ ...formData, emoji: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Choose an emoji (e.g., 💖)"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Describe why you love this"
                  required
                />
              </div>
              <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                {editingItem ? "Update" : "Add"} Item
              </Button>
            </form>
          )

        case "books":
          return (
            <form onSubmit={handleSectionItemSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Book Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter book title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="author" className="text-white">
                    Author
                  </Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter author name"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="What makes this book special?"
                  required
                />
              </div>
              <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                {editingItem ? "Update" : "Add"} Book
              </Button>
            </form>
          )

        case "movies":
          return (
            <form onSubmit={handleSectionItemSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Movie Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter movie title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="year" className="text-white">
                    Release Year
                  </Label>
                  <Input
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter release year"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="What makes this movie special?"
                  required
                />
              </div>
              <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                {editingItem ? "Update" : "Add"} Movie
              </Button>
            </form>
          )

        case "gallery":
          return (
            <form onSubmit={handleSectionItemSubmit} className="space-y-4">
              <div>
                <Label htmlFor="caption" className="text-white">
                  Caption
                </Label>
                <Input
                  id="caption"
                  value={formData.caption}
                  onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Describe this moment"
                  required
                />
              </div>

              {/* Image Upload Section */}
              <div className="space-y-4">
                <Label className="text-white">Photo Upload</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="imageFile" className="text-white text-sm">
                      Upload from Desktop
                    </Label>
                    <Input
                      id="imageFile"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          const reader = new FileReader()
                          reader.onload = (event) => {
                            const result = event.target?.result as string
                            setFormData({ ...formData, url: result })
                          }
                          reader.readAsDataURL(file)
                        }
                      }}
                      className="bg-white/20 border-white/30 text-white file:bg-white/20 file:border-0 file:text-white file:rounded file:px-3 file:py-1 file:mr-3 hover:file:bg-white/30"
                    />
                    <p className="text-purple-200 text-xs mt-1">Supported: JPG, PNG, GIF, WebP</p>
                  </div>
                  <div>
                    <Label htmlFor="imageUrl" className="text-white text-sm">
                      Or Enter Image URL
                    </Label>
                    <Input
                      id="imageUrl"
                      value={formData.url || ""}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                {/* Image Preview */}
                {formData.url && (
                  <div className="mt-4">
                    <Label className="text-white text-sm">Preview</Label>
                    <div className="mt-2 relative">
                      <img
                        src={formData.url || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full max-w-md h-48 object-cover rounded-lg border border-white/30"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=200&width=300"
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() => setFormData({ ...formData, url: "" })}
                        className="absolute top-2 right-2 w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                        variant="ghost"
                      >
                        <X className="w-4 h-4 text-red-300" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                {editingItem ? "Update" : "Add"} Image
              </Button>
            </form>
          )

        default:
          return null
      }
    }

    const renderSectionItems = () => {
      let items: any[] = []
      switch (sectionType) {
        case "loves":
          items = loves
          break
        case "books":
          items = books
          break
        case "movies":
          items = movies
          break
        case "gallery":
          items = galleryImages
          break
      }

      if (items.length === 0) {
        return (
          <div className="text-center py-8">
            <p className="text-purple-200">No items added yet. Use the form above to add your first entry!</p>
          </div>
        )
      }

      return (
        <div className={`grid ${sectionType === "gallery" ? "grid-cols-2 md:grid-cols-3" : "md:grid-cols-2"} gap-4`}>
          {items.map((item: any) => (
            <Card
              key={item.id}
              className={`bg-white/10 backdrop-blur-sm border-white/20 relative group ${
                sectionType === "gallery" ? "aspect-square" : ""
              }`}
            >
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Button
                  onClick={() => {
                    switch (sectionType) {
                      case "loves":
                        setEditingLoveItem(item.id)
                        break
                      case "books":
                        setEditingBookItem(item.id)
                        break
                      case "movies":
                        setEditingMovieItem(item.id)
                        break
                      case "gallery":
                        setEditingGalleryItem(item.id)
                        break
                    }
                  }}
                  className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                  variant="ghost"
                >
                  <Edit className="w-4 h-4 text-blue-300" />
                </Button>
                <Button
                  onClick={() => handleEditItem(sectionType, item)}
                  className="w-8 h-8 p-0 bg-green-500/20 hover:bg-green-500/40"
                  variant="ghost"
                >
                  <Plus className="w-4 h-4 text-green-300" />
                </Button>
                <Button
                  onClick={() => handleDelete(sectionType, item.id)}
                  className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                  variant="ghost"
                >
                  <X className="w-4 h-4 text-red-300" />
                </Button>
              </div>

              {sectionType === "gallery" ? (
                <>
                  <img
                    src={item.url || "/placeholder.svg?height=300&width=300"}
                    alt={item.caption}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=300&width=300"
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-2 text-sm rounded-b-lg">
                    <div className="flex justify-between items-center">
                      <span className="truncate">{item.caption}</span>
                      <span className="text-xs ml-2">{item.items?.length || 0} stories</span>
                    </div>
                  </div>
                </>
              ) : sectionType === "loves" ? (
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-purple-100 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200 text-sm">{item.items?.length || 0} experiences</span>
                    <Button
                      onClick={() => setEditingLoveItem(item.id)}
                      size="sm"
                      className="bg-white/20 text-white hover:bg-white/30"
                    >
                      Manage
                    </Button>
                  </div>
                </CardContent>
              ) : (
                <>
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                    {item.author && <CardDescription className="text-purple-200">by {item.author}</CardDescription>}
                    {item.year && <CardDescription className="text-purple-200">{item.year}</CardDescription>}
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-100 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">
                        {item.items?.length || 0}{" "}
                        {sectionType === "books" ? "reading experiences" : "watch experiences"}
                      </span>
                      <Button
                        onClick={() => {
                          if (sectionType === "books") {
                            setEditingBookItem(item.id)
                          } else if (sectionType === "movies") {
                            setEditingMovieItem(item.id)
                          }
                        }}
                        size="sm"
                        className="bg-white/20 text-white hover:bg-white/30"
                      >
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          ))}
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Button onClick={() => setEditingSection(null)} variant="ghost" className="text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {sectionTitle}
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">{sectionIcon}</span>
              Manage {sectionTitle}
            </h2>
            <p className="text-purple-100">Add, edit, or remove items from this section</p>
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">
              {editingItem ? `Edit ${sectionTitle} Entry` : `Add New ${sectionTitle} Entry`}
            </CardTitle>
            {editingItem && (
              <Button onClick={resetForm} variant="ghost" className="text-purple-200 hover:bg-white/20 w-fit">
                Cancel Edit
              </Button>
            )}
          </CardHeader>
          <CardContent>{renderSectionForm()}</CardContent>
        </Card>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Your {sectionTitle} Collection</h3>
          {renderSectionItems()}
        </div>
      </div>
    )
  }

  const renderInterestDetail = (interest: Interest) => {
    const renderInterestForm = () => {
      switch (interest.title) {
        case "Reading":
          return (
            <form onSubmit={handleInterestItemSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Book Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter book title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="author" className="text-white">
                    Author
                  </Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter author name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="genre" className="text-white">
                    Genre
                  </Label>
                  <Input
                    id="genre"
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter genre"
                  />
                </div>
                <div>
                  <Label htmlFor="rating" className="text-white">
                    Rating
                  </Label>
                  <Input
                    id="rating"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="e.g., 5/5"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="notes" className="text-white">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Your thoughts about this book"
                />
              </div>
              <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                {editingItem ? "Update" : "Add"} Reading
              </Button>
            </form>
          )

        case "Movies":
          return (
            <form onSubmit={handleInterestItemSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Movie Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter movie title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="director" className="text-white">
                    Director
                  </Label>
                  <Input
                    id="director"
                    value={formData.director}
                    onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter director name"
                  />
                </div>
                <div>
                  <Label htmlFor="year" className="text-white">
                    Year
                  </Label>
                  <Input
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Release year"
                  />
                </div>
                <div>
                  <Label htmlFor="genre" className="text-white">
                    Genre
                  </Label>
                  <Input
                    id="genre"
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter genre"
                  />
                </div>
                <div>
                  <Label htmlFor="rating" className="text-white">
                    Rating
                  </Label>
                  <Input
                    id="rating"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="e.g., 5/5"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="notes" className="text-white">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Your thoughts about this movie"
                />
              </div>
              <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                {editingItem ? "Update" : "Add"} Movie
              </Button>
            </form>
          )

        case "Photography":
          return (
            <form onSubmit={handleInterestItemSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Photo Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter photo title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="text-white">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Where was this taken?"
                  />
                </div>
                <div>
                  <Label htmlFor="date" className="text-white">
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  />
                </div>
                <div>
                  <Label htmlFor="camera" className="text-white">
                    Camera/Equipment
                  </Label>
                  <Input
                    id="camera"
                    value={formData.camera}
                    onChange={(e) => setFormData({ ...formData, camera: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Camera model used"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="imageUrl" className="text-white">
                  Image URL
                </Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Enter image URL"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Describe this photo"
                />
              </div>
              <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                {editingItem ? "Update" : "Add"} Photo
              </Button>
            </form>
          )

        case "Creative Writing":
          return (
            <form onSubmit={handleInterestItemSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter writing title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="type" className="text-white">
                    Type
                  </Label>
                  <Input
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="e.g., Short Story, Poem, Essay"
                  />
                </div>
                <div>
                  <Label htmlFor="wordCount" className="text-white">
                    Word Count
                  </Label>
                  <Input
                    id="wordCount"
                    value={formData.wordCount}
                    onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Approximate word count"
                  />
                </div>
                <div>
                  <Label htmlFor="dateWritten" className="text-white">
                    Date Written
                  </Label>
                  <Input
                    id="dateWritten"
                    type="date"
                    value={formData.dateWritten}
                    onChange={(e) => setFormData({ ...formData, dateWritten: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Brief description of the piece"
                />
              </div>
              <div>
                <Label htmlFor="excerpt" className="text-white">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="A short excerpt from your writing"
                />
              </div>
              <Button type="submit" className="bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                {editingItem ? "Update" : "Add"} Writing
              </Button>
            </form>
          )

        default:
          return null
      }
    }

    const renderInterestItems = () => {
      if (!interest.items || interest.items.length === 0) {
        return (
          <div className="text-center py-8">
            <p className="text-purple-200">No items added yet. Use the form above to add your first entry!</p>
          </div>
        )
      }

      return (
        <div className="grid md:grid-cols-2 gap-4">
          {interest.items.map((item: any) => (
            <Card key={item.id} className="bg-white/10 backdrop-blur-sm border-white/20 relative group">
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  onClick={() => handleEditInterestItem(item)}
                  className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                  variant="ghost"
                >
                  <Edit className="w-4 h-4 text-blue-300" />
                </Button>
                <Button
                  onClick={() => handleDeleteInterestItem(interest.id, item.id)}
                  className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                  variant="ghost"
                >
                  <X className="w-4 h-4 text-red-300" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                {item.author && <CardDescription className="text-purple-200">by {item.author}</CardDescription>}
                {item.director && (
                  <CardDescription className="text-purple-200">Directed by {item.director}</CardDescription>
                )}
                {item.location && <CardDescription className="text-purple-200">📍 {item.location}</CardDescription>}
                {item.type && <CardDescription className="text-purple-200">{item.type}</CardDescription>}
              </CardHeader>
              <CardContent>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                )}
                <div className="space-y-1 text-sm">
                  {item.genre && <p className="text-purple-200">Genre: {item.genre}</p>}
                  {item.year && <p className="text-purple-200">Year: {item.year}</p>}
                  {item.rating && <p className="text-purple-200">Rating: {item.rating}</p>}
                  {item.date && <p className="text-purple-200">Date: {item.date}</p>}
                  {item.camera && <p className="text-purple-200">Camera: {item.camera}</p>}
                  {item.wordCount && <p className="text-purple-200">Words: {item.wordCount}</p>}
                  {item.dateWritten && <p className="text-purple-200">Written: {item.dateWritten}</p>}
                </div>
                {item.description && <p className="text-purple-100 mt-2">{item.description}</p>}
                {item.notes && <p className="text-purple-100 mt-2">{item.notes}</p>}
                {item.excerpt && (
                  <div className="mt-2">
                    <p className="text-purple-200 text-sm font-semibold">Excerpt:</p>
                    <p className="text-purple-100 italic text-sm">"{item.excerpt}"</p>
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
          <Button onClick={() => setEditingInterest(null)} variant="ghost" className="text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Interests
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">{interest.icon}</span>
              {interest.title}
            </h2>
            <p className="text-purple-100">{interest.description}</p>
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">
              {editingItem ? `Edit ${interest.title} Entry` : `Add New ${interest.title} Entry`}
            </CardTitle>
            {editingItem && (
              <Button onClick={resetForm} variant="ghost" className="text-purple-200 hover:bg-white/20 w-fit">
                Cancel Edit
              </Button>
            )}
          </CardHeader>
          <CardContent>{renderInterestForm()}</CardContent>
        </Card>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Your {interest.title} Collection</h3>
          {renderInterestItems()}
        </div>
      </div>
    )
  }

  const renderAddForm = () => {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Add New Content</h2>
          <p className="text-purple-100 text-lg">Add information to any section of your portfolio</p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white">Add Content Form</CardTitle>
            <CardDescription className="text-purple-200">
              Select a section and fill in the details to add new content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <Label htmlFor="section" className="text-white">
                  Section
                </Label>
                <select
                  id="section"
                  value={formSection}
                  onChange={(e) => setFormSection(e.target.value)}
                  className="w-full mt-1 p-2 rounded-md bg-white/20 border border-white/30 text-white"
                >
                  <option value="interests" className="text-black">
                    My Interests & Hobbies
                  </option>
                  <option value="loves" className="text-black">
                    Things I Love & Enjoy
                  </option>
                  <option value="books" className="text-black">
                    Favourite Books
                  </option>
                  <option value="movies" className="text-black">
                    Favourite Movies
                  </option>
                  <option value="gallery" className="text-black">
                    Gallery
                  </option>
                </select>
              </div>

              <div>
                <Label htmlFor="title" className="text-white">
                  Title
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Enter title"
                  required
                />
              </div>

              {formSection === "books" && (
                <div>
                  <Label htmlFor="author" className="text-white">
                    Author
                  </Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter author name"
                    required
                  />
                </div>
              )}

              {formSection === "movies" && (
                <div>
                  <Label htmlFor="year" className="text-white">
                    Year
                  </Label>
                  <Input
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter release year"
                    required
                  />
                </div>
              )}

              {formSection === "interests" && (
                <div>
                  <Label htmlFor="icon" className="text-white">
                    Icon (Emoji)
                  </Label>
                  <Input
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter an emoji (e.g., 🎨)"
                  />
                </div>
              )}

              {formSection === "loves" && (
                <div>
                  <Label htmlFor="emoji" className="text-white">
                    Emoji
                  </Label>
                  <Input
                    id="emoji"
                    value={formData.emoji}
                    onChange={(e) => setFormData({ ...formData, emoji: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    placeholder="Enter an emoji (e.g., 💖)"
                  />
                </div>
              )}

              {formSection === "gallery" && (
                <>
                  <div className="space-y-4">
                    <Label className="text-white">Photo Upload</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="imageFile" className="text-white text-sm">
                          Upload from Desktop
                        </Label>
                        <Input
                          id="imageFile"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              const reader = new FileReader()
                              reader.onload = (event) => {
                                const result = event.target?.result as string
                                setFormData({ ...formData, url: result })
                              }
                              reader.readAsDataURL(file)
                            }
                          }}
                          className="bg-white/20 border-white/30 text-white file:bg-white/20 file:border-0 file:text-white file:rounded file:px-3 file:py-1 file:mr-3 hover:file:bg-white/30"
                        />
                        <p className="text-purple-200 text-xs mt-1">Supported: JPG, PNG, GIF, WebP</p>
                      </div>
                      <div>
                        <Label htmlFor="url" className="text-white text-sm">
                          Or Enter Image URL
                        </Label>
                        <Input
                          id="url"
                          value={formData.url}
                          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                          className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </div>

                    {/* Image Preview */}
                    {formData.url && (
                      <div className="mt-4">
                        <Label className="text-white text-sm">Preview</Label>
                        <div className="mt-2 relative">
                          <img
                            src={formData.url || "/placeholder.svg"}
                            alt="Preview"
                            className="w-full max-w-md h-48 object-cover rounded-lg border border-white/30"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg?height=200&width=300"
                            }}
                          />
                          <Button
                            type="button"
                            onClick={() => setFormData({ ...formData, url: "" })}
                            className="absolute top-2 right-2 w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                            variant="ghost"
                          >
                            <X className="w-4 h-4 text-red-300" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="caption" className="text-white">
                      Caption
                    </Label>
                    <Input
                      id="caption"
                      value={formData.caption}
                      onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                      placeholder="Enter image caption"
                      required
                    />
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                  placeholder="Enter description"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-white text-purple-700 hover:bg-white/90">
                <Save className="w-4 h-4 mr-2" />
                Add Content
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderContent = () => {
    // Handle Interest Detail View
    if (editingInterest) {
      const interest = interests.find((i) => i.id === editingInterest)
      if (interest) {
        return renderInterestDetail(interest)
      }
    }

    // Handle Section Management Views
    if (editingSection) {
      switch (editingSection) {
        case "loves":
          return renderSectionManagement("loves", "Things I Love & Enjoy", "💖")
        case "books":
          return renderSectionManagement("books", "Favourite Books", "📚")
        case "movies":
          return renderSectionManagement("movies", "Favourite Movies", "🎬")
        case "gallery":
          return renderSectionManagement("gallery", "Gallery", "📸")
      }
    }

    // Handle Subsection Management Views
    if (editingLoveItem) {
      const love = loves.find((l) => l.id === editingLoveItem)
      if (love) {
        return renderSubsectionManager("loves", love, () => setEditingLoveItem(null))
      }
    }

    if (editingBookItem) {
      const book = books.find((b) => b.id === editingBookItem)
      if (book) {
        return renderSubsectionManager("books", book, () => setEditingBookItem(null))
      }
    }

    if (editingMovieItem) {
      const movie = movies.find((m) => m.id === editingMovieItem)
      if (movie) {
        return renderSubsectionManager("movies", movie, () => setEditingMovieItem(null))
      }
    }

    if (editingGalleryItem) {
      const galleryItem = galleryImages.find((g) => g.id === editingGalleryItem)
      if (galleryItem) {
        return renderSubsectionManager("gallery", galleryItem, () => setEditingGalleryItem(null))
      }
    }

    switch (activeTab) {
      case "add-form":
        return renderAddForm()

      case "interests":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">My Interests & Hobbies</h2>
              <p className="text-purple-100 text-lg">The things that spark my curiosity and bring joy to my life</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest) => (
                <Card key={interest.id} className="bg-white/10 backdrop-blur-sm border-white/20 relative group">
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      onClick={() => setEditingInterest(interest.id)}
                      className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                      variant="ghost"
                    >
                      <Edit className="w-4 h-4 text-blue-300" />
                    </Button>
                    <Button
                      onClick={() => handleDelete("interests", interest.id)}
                      className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                      variant="ghost"
                    >
                      <X className="w-4 h-4 text-red-300" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <span className="text-xl">{interest.icon}</span>
                      {interest.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-100 mb-3">{interest.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">{interest.items?.length || 0} items</span>
                      <Button
                        onClick={() => setEditingInterest(interest.id)}
                        size="sm"
                        className="bg-white/20 text-white hover:bg-white/30"
                      >
                        Manage Items
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "loves":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Things I Love & Enjoy</h2>
              <p className="text-purple-100 text-lg">The simple pleasures that make life beautiful</p>
              <Button
                onClick={() => setEditingSection("loves")}
                className="mt-4 bg-white/20 text-white hover:bg-white/30"
              >
                <Edit className="w-4 h-4 mr-2" />
                Manage Items
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {loves.map((love) => (
                <Card key={love.id} className="bg-white/10 backdrop-blur-sm border-white/20 relative group">
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      onClick={() => setEditingLoveItem(love.id)}
                      className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                      variant="ghost"
                    >
                      <Edit className="w-4 h-4 text-blue-300" />
                    </Button>
                    <Button
                      onClick={() => handleDelete("loves", love.id)}
                      className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                      variant="ghost"
                    >
                      <X className="w-4 h-4 text-red-300" />
                    </Button>
                  </div>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{love.emoji}</div>
                    <h3 className="text-white font-semibold mb-2">{love.title}</h3>
                    <p className="text-purple-100 text-sm mb-3">{love.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">{love.items?.length || 0} experiences</span>
                      <Button
                        onClick={() => setEditingLoveItem(love.id)}
                        size="sm"
                        className="bg-white/20 text-white hover:bg-white/30"
                      >
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "books":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Favourite Books</h2>
              <p className="text-purple-100 text-lg">Stories that have touched my heart and mind</p>
              <Button
                onClick={() => setEditingSection("books")}
                className="mt-4 bg-white/20 text-white hover:bg-white/30"
              >
                <Edit className="w-4 h-4 mr-2" />
                Manage Books
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {books.map((book) => (
                <Card key={book.id} className="bg-white/10 backdrop-blur-sm border-white/20 relative group">
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      onClick={() => setEditingBookItem(book.id)}
                      className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                      variant="ghost"
                    >
                      <Edit className="w-4 h-4 text-blue-300" />
                    </Button>
                    <Button
                      onClick={() => handleDelete("books", book.id)}
                      className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                      variant="ghost"
                    >
                      <X className="w-4 h-4 text-red-300" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{book.title}</CardTitle>
                    <CardDescription className="text-purple-200">by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-100 mb-3">{book.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">{book.items?.length || 0} reading experiences</span>
                      <Button
                        onClick={() => setEditingBookItem(book.id)}
                        size="sm"
                        className="bg-white/20 text-white hover:bg-white/30"
                      >
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "movies":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Favourite Movies</h2>
              <p className="text-purple-100 text-lg">Films that have inspired and entertained me</p>
              <Button
                onClick={() => setEditingSection("movies")}
                className="mt-4 bg-white/20 text-white hover:bg-white/30"
              >
                <Edit className="w-4 h-4 mr-2" />
                Manage Movies
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {movies.map((movie) => (
                <Card key={movie.id} className="bg-white/10 backdrop-blur-sm border-white/20 relative group">
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      onClick={() => setEditingMovieItem(movie.id)}
                      className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                      variant="ghost"
                    >
                      <Edit className="w-4 h-4 text-blue-300" />
                    </Button>
                    <Button
                      onClick={() => handleDelete("movies", movie.id)}
                      className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                      variant="ghost"
                    >
                      <X className="w-4 h-4 text-red-300" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{movie.title}</CardTitle>
                    <CardDescription className="text-purple-200">{movie.year}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-100 text-sm mb-3">{movie.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">{movie.items?.length || 0} watch experiences</span>
                      <Button
                        onClick={() => setEditingMovieItem(movie.id)}
                        size="sm"
                        className="bg-white/20 text-white hover:bg-white/30"
                      >
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "gallery":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Moments I Cherish and Enjoyed</h2>
              <p className="text-purple-100 text-lg">A collection of memories that bring me joy</p>
              <Button
                onClick={() => setEditingSection("gallery")}
                className="mt-4 bg-white/20 text-white hover:bg-white/30"
              >
                <Edit className="w-4 h-4 mr-2" />
                Manage Gallery
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="aspect-square rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 relative group cursor-pointer"
                  onClick={() => setEditingGalleryItem(image.id)}
                >
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        setEditingGalleryItem(image.id)
                      }}
                      className="w-8 h-8 p-0 bg-blue-500/20 hover:bg-blue-500/40"
                      variant="ghost"
                    >
                      <Edit className="w-4 h-4 text-blue-300" />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDelete("gallery", image.id)
                      }}
                      className="w-8 h-8 p-0 bg-red-500/20 hover:bg-red-500/40"
                      variant="ghost"
                    >
                      <X className="w-4 h-4 text-red-300" />
                    </Button>
                  </div>
                  <img
                    src={image.url || "/public\WhatsApp Image 2025-06-25 at 10.08.01_7d704169.jpg?height=300&width=300"}
                    alt={image.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=300&width=300"
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-3">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-medium text-sm truncate">{image.caption}</p>
                        <p className="text-xs text-gray-300">{image.items?.length || 0} stories</p>
                      </div>
                      <div className="text-xs text-gray-300">Click to view</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
      {/* Header */}
      <header className="p-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
          <span className="text-2xl font-bold text-white">DI</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Welcome to My World</h1>
        <p className="text-purple-100">Discover the things that make me who I am</p>
      </header>

      {/* Navigation */}
      <nav className="px-6 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => {
                  setActiveTab(tab.id)
                  setEditingInterest(null)
                  setEditingSection(null)
                  setEditingLoveItem(null)
                  setEditingBookItem(null)
                  setEditingMovieItem(null)
                  setEditingGalleryItem(null)
                }}
                className={`${
                  activeTab === tab.id ? "bg-white text-purple-700 hover:bg-white/90" : "text-white hover:bg-white/20"
                } transition-all duration-200`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            )
          })}
        </div>
      </nav>

      {/* Content */}
      <main className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  )
}
