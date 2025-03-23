"use client"

import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function CartSummary() {
  const { items, total, clearCart } = useCart()
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false)
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const handleCheckout = () => {
    // Simulate order placement
    setTimeout(() => {
      setIsOrderPlaced(true)
      clearCart()
    }, 1500)
  }

  // Calculate tax and delivery fee
  const tax = total * 0.13 // 13% tax
  const deliveryFee = total > 0 ? 150 : 0 // Rs. 150 delivery fee if cart is not empty
  const grandTotal = total + tax + deliveryFee

  if (items.length === 0) {
    return null
  }

  return (
    <div className="border-t pt-4">
      <div className="space-y-1.5">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>Rs. {total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (13%)</span>
          <span>Rs. {tax.toFixed(0)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Delivery Fee</span>
          <span>Rs. {deliveryFee}</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-medium text-lg">
          <span>Total</span>
          <span>Rs. {grandTotal.toFixed(0)}</span>
        </div>
      </div>
      <Button className="w-full mt-4" onClick={() => setIsCheckoutDialogOpen(true)}>
        Checkout
      </Button>

      <Dialog open={isCheckoutDialogOpen} onOpenChange={setIsCheckoutDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isOrderPlaced ? "Order Placed!" : "Checkout"}</DialogTitle>
            <DialogDescription>
              {isOrderPlaced
                ? "Your order has been placed successfully. You will receive a confirmation shortly."
                : "Review your order before placing it."}
            </DialogDescription>
          </DialogHeader>

          {!isOrderPlaced ? (
            <>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Order Summary</h4>
                  <div className="rounded-md border p-4 space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {item.quantity} × {item.name}
                        </span>
                        <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                    <Separator />
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>Rs. {total.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax (13%)</span>
                        <span>Rs. {tax.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>Rs. {deliveryFee}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-1">
                        <span>Total</span>
                        <span>Rs. {grandTotal.toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCheckoutDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCheckout}>Place Order</Button>
              </DialogFooter>
            </>
          ) : (
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="rounded-full bg-primary/10 p-3 text-primary mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Thank you for your order!</h3>
              <p className="text-center text-muted-foreground mb-4">
                Your order has been placed and will be delivered in 30-45 minutes.
              </p>
              <Button onClick={() => setIsCheckoutDialogOpen(false)}>Continue Shopping</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

