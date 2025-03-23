import { AdminHeader } from "@/components/admin/admin-header"
import { PhotoManager } from "@/components/admin/photo-manager"

export default function AdminPhotosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Photo Management</h1>
        <PhotoManager />
      </main>
    </div>
  )
}

