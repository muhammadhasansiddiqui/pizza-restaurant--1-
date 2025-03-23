"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, Search } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Sample data - in a real app, this would come from an API or database
const initialMenuItems = [
  {
    id: 1,
    name: "Margherita",
    category: "pizza",
    description: "Classic tomato sauce, mozzarella, and fresh basil",
    price: 1200,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Pepperoni",
    category: "pizza",
    description: "Tomato sauce, mozzarella, and pepperoni",
    price: 1400,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    category: "pizza",
    description: "BBQ sauce, mozzarella, chicken, red onions, and cilantro",
    price: 1600,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    name: "Vegetarian",
    category: "pizza",
    description: "Tomato sauce, mozzarella, bell peppers, mushrooms, olives, and onions",
    price: 1300,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 5,
    name: "Garlic Bread",
    category: "appetizers",
    description: "Freshly baked bread with garlic butter and herbs",
    price: 400,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 6,
    name: "Mozzarella Sticks",
    category: "appetizers",
    description: "Breaded mozzarella sticks served with marinara sauce",
    price: 600,
    image: "/placeholder.svg?height=50&width=50",
  },
]

const categories = [
  { id: "pizza", name: "Pizzas" },
  { id: "appetizers", name: "Appetizers" },
  { id: "pasta", name: "Pasta" },
  { id: "salads", name: "Salads" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
]

export function MenuManager() {
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<any>(null)
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    description: "",
    price: 0,
    image: "/placeholder.svg?height=50&width=50",
  })

  const filteredItems = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddItem = () => {
    setMenuItems([...menuItems, { ...newItem, id: menuItems.length + 1 }])
    setNewItem({
      name: "",
      category: "",
      description: "",
      price: 0,
      image: "/placeholder.svg?height=50&width=50",
    })
    setIsAddDialogOpen(false)
  }

  const handleEditItem = () => {
    setMenuItems(menuItems.map((item) => (item.id === currentItem.id ? currentItem : item)))
    setIsEditDialogOpen(false)
  }

  const handleDeleteItem = () => {
    setMenuItems(menuItems.filter((item) => item.id !== currentItem.id))
    setIsDeleteDialogOpen(false)
  }

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search menu items..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Menu Item</DialogTitle>
              <DialogDescription>Add a new item to your menu. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select value={newItem.category} onValueChange={(value) => setNewItem({ ...newItem, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price (Rs.)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: Number.parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddItem}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="relative w-10 h-10">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{categories.find((cat) => cat.id === item.category)?.name || item.category}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="line-clamp-1">{item.description}</span>
                </TableCell>
                <TableCell>{formatPrice(item.price)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Dialog
                      open={isEditDialogOpen && currentItem?.id === item.id}
                      onOpenChange={(open) => {
                        setIsEditDialogOpen(open)
                        if (!open) setCurrentItem(null)
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => setCurrentItem(item)}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Menu Item</DialogTitle>
                          <DialogDescription>
                            Make changes to the menu item. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        {currentItem && (
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="edit-name">Name</Label>
                              <Input
                                id="edit-name"
                                value={currentItem.name}
                                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-category">Category</Label>
                              <Select
                                value={currentItem.category}
                                onValueChange={(value) => setCurrentItem({ ...currentItem, category: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id}>
                                      {category.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-description">Description</Label>
                              <Textarea
                                id="edit-description"
                                value={currentItem.description}
                                onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-price">Price (Rs.)</Label>
                              <Input
                                id="edit-price"
                                type="number"
                                value={currentItem.price}
                                onChange={(e) =>
                                  setCurrentItem({ ...currentItem, price: Number.parseInt(e.target.value) || 0 })
                                }
                              />
                            </div>
                          </div>
                        )}
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleEditItem}>Save</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Dialog
                      open={isDeleteDialogOpen && currentItem?.id === item.id}
                      onOpenChange={(open) => {
                        setIsDeleteDialogOpen(open)
                        if (!open) setCurrentItem(null)
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => setCurrentItem(item)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Delete Menu Item</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this menu item? This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        {currentItem && (
                          <div className="py-4">
                            <p className="font-medium">{currentItem.name}</p>
                            <p className="text-sm text-muted-foreground">{currentItem.description}</p>
                          </div>
                        )}
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button variant="destructive" onClick={handleDeleteItem}>
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredItems.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No menu items found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

