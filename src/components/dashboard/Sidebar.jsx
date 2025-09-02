"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  UploadCloud,
  Wallet,
  Users,
  ShieldCheck,
  BookOpen,
  LogOut,
  HelpCircle,
} from "lucide-react";

import Logo from "@/components/Logo";

const menuItems = [
  { label: "Beranda", icon: Home, href: "/dashboard", exact: true },
  { label: "Setor Minyak", icon: UploadCloud, href: "/dashboard/setor" },
  { label: "Wallet", icon: Wallet, href: "/dashboard/wallet" },
  { label: "Mitra", icon: Users, href: "/dashboard/mitra" },
  { label: "Validasi", icon: ShieldCheck, href: "/dashboard/validasi" },
  { label: "Bantuan", icon: HelpCircle, href: "/dashboard/bantuan" },
    { label: "Keluar", icon: LogOut, href: "/logout" },

];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200 shadow-md">
      {/* Header Logo */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-center">
        <Logo size={120} />
      </div>

      {/* Menu Navigasi */}
      <nav className="flex-1 px-4 py-4 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all group ${
                isActive
                  ? "bg-[#FB6B00]/10 text-[#FB6B00] font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div
                className={`p-2 rounded-md ${
                  isActive ? "bg-[#FB6B00]/20" : "group-hover:bg-gray-200"
                }`}
              >
                <Icon size={18} />
              </div>
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
