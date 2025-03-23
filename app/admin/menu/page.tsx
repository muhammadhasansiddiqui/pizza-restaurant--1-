import { AdminHeader } from "@/components/admin/admin-header"
import { MenuManager } from "@/components/admin/menu-manager"

export default function AdminMenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Menu Management</h1>
        <MenuManager />
      </main>
    </div>
  )
}

