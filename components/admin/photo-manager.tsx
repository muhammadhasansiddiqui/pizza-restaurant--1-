"use client"

import { useState } from "react"
import { Plus, Trash2, Upload } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data - in a real app, this would come from an API or database
const initialPhotos = [
  {
    id: 1,
    title: "Restaurant Interior",
    category: "interior",
    url: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Pizza Chef",
    category: "staff",
    url: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Margherita Pizza",
    category: "food",
    url: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Outdoor Seating",
    category: "interior",
    url: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Pepperoni Pizza",
    category: "food",
    url: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Restaurant Team",
    category: "staff",
    url: "/placeholder.svg?height=300&width=400",
  },
]

const categories = [
  { id: "all", name: "All Photos" },
  { id: "food", name: "Food" },
  { id: "interior", name: "Interior" },
  { id: "staff", name: "Staff" },
]

export function PhotoManager() {
  const [photos, setPhotos] = useState(initialPhotos)
  const [activeCategory, setActiveCategory] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState<any>(null)
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    category: "food",
    url: "/placeholder.svg?height=300&width=400",
  })

  const filteredPhotos = activeCategory === "all" ? photos : photos.filter((photo) => photo.category === activeCategory)

  const handleAddPhoto = () => {
    setPhotos([...photos, { ...newPhoto, id: photos.length + 1 }])
    setNewPhoto({
      title: "",
      category: "food",
      url: "/placeholder.svg?height=300&width=400",
    })
    setIsAddDialogOpen(false)
  }

  const handleDeletePhoto = () => {
    setPhotos(photos.filter((photo) => photo.id !== currentPhoto.id))
    setIsDeleteDialogOpen(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="w-full sm:w-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Photo
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Photo</DialogTitle>
              <DialogDescription>Add a new photo to your gallery. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={newPhoto.category}
                  onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
                >
                  {categories.slice(1).map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="upload">Upload Photo</Label>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose File
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Supported formats: JPEG, PNG, WebP. Max size: 5MB.</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddPhoto}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-lg border bg-background">
            <div className="aspect-video relative">
              <Image
                src={photo.url || "/placeholder.svg"}
                alt={photo.title}
                fill
                className="object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Dialog
                  open={isDeleteDialogOpen && currentPhoto?.id === photo.id}
                  onOpenChange={(open) => {
                    setIsDeleteDialogOpen(open)
                    if (!open) setCurrentPhoto(null)
                  }}
                >
                  <DialogTrigger asChild>
                    <Button variant="destructive" size="sm" onClick={() => setCurrentPhoto(photo)}>
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Delete Photo</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this photo? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    {currentPhoto && (
                      <div className="py-4">
                        <div className="aspect-video relative mb-4">
                          <Image
                            src={currentPhoto.url || "/placeholder.svg"}
                            alt={currentPhoto.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <p className="font-medium">{currentPhoto.title}</p>
                        <p className="text-sm text-muted-foreground">
                          Category: {categories.find((cat) => cat.id === currentPhoto.category)?.name}
                        </p>
                      </div>
                    )}
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="destructive" onClick={handleDeletePhoto}>
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">{photo.title}</h3>
              <p className="text-sm text-muted-foreground">
                {categories.find((cat) => cat.id === photo.category)?.name}
              </p>
            </div>
          </div>
        ))}
        {filteredPhotos.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center h-40 border rounded-lg bg-muted/20">
            <p className="text-muted-foreground">No photos found in this category.</p>
            <Button variant="outline" className="mt-4" onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Photo
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

