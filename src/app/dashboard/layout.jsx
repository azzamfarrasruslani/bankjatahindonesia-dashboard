import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar tetap fixed */}
      <Sidebar />

      {/* Main content terdorong oleh sidebar */}
      <main className="pl-64 p-6">{children}</main>
    </div>
  );
}
