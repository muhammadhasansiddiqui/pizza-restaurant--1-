import { redirect } from "next/navigation"
import { AdminHeader } from "@/components/admin/admin-header"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

// This is a placeholder for authentication
// In a real application, you would use a proper auth solution
const isAuthenticated = true

export default function AdminPage() {
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <AdminDashboard />
      </main>
    </div>
  )
}

