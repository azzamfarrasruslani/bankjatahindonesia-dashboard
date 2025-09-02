"use client";

import { useState } from "react";
import {
  CheckCheck,
  Clock,
  AlertCircle,
  Info,
  Eye,
  PieChart,
  Droplet,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const dummyValidasi = [
  {
    id: "VLD-001",
    nama: "Andi Saputra",
    status: "menunggu",
    tanggal: "2025-08-30",
    volume: 2.5,
  },
  {
    id: "VLD-002",
    nama: "Rina Dewi",
    status: "disetujui",
    tanggal: "2025-08-29",
    volume: 1.8,
  },
  {
    id: "VLD-003",
    nama: "Budi Hartono",
    status: "ditolak",
    tanggal: "2025-08-28",
    volume: 3.2,
  },
  {
    id: "VLD-004",
    nama: "Siti Aminah",
    status: "disetujui",
    tanggal: "2025-08-27",
    volume: 2.0,
  },
];

export default function ValidasiPage() {
  const [filter, setFilter] = useState("semua");

  const filtered = dummyValidasi.filter((data) =>
    filter === "semua" ? true : data.status === filter
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case "disetujui":
        return (
          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
            <CheckCheck size={14} /> Disetujui
          </span>
        );
      case "menunggu":
        return (
          <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full">
            <Clock size={14} /> Menunggu
          </span>
        );
      case "ditolak":
        return (
          <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">
            <AlertCircle size={14} /> Ditolak
          </span>
        );
      default:
        return null;
    }
  };

  const statusList = ["semua", "menunggu", "disetujui", "ditolak"];

  const totalVolume = dummyValidasi.reduce((sum, item) => sum + item.volume, 0);
  const totalDisetujui = dummyValidasi.filter((d) => d.status === "disetujui").length;
  const totalMenunggu = dummyValidasi.filter((d) => d.status === "menunggu").length;
  const totalDitolak = dummyValidasi.filter((d) => d.status === "ditolak").length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <h1 className="text-3xl font-bold text-[#FB6B00]">
          Validasi Setoran Minyak
        </h1>

        {/* Tabbing */}
        <div className="flex gap-2 flex-wrap">
          {statusList.map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 text-sm font-medium rounded-md border transition ${
                filter === status
                  ? "bg-[#FB6B00] text-white border-[#FB6B00]"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={PieChart} title="Total Validasi" value={dummyValidasi.length} />
        <StatCard icon={Droplet} title="Total Volume (L)" value={totalVolume.toFixed(1)} />
        <StatCard icon={CheckCheck} title="Disetujui" value={totalDisetujui} />
        <StatCard icon={Clock} title="Menunggu" value={totalMenunggu} />
      </div>

      {/* Tabel Validasi */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto rounded-xl shadow-md border border-gray-200"
      >
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-[#FB6B00]/10 text-[#FB6B00] uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Nama</th>
              <th className="px-6 py-4">Volume</th>
              <th className="px-6 py-4">Tanggal</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500">
                  Tidak ada data validasi.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">{item.id}</td>
                  <td className="px-6 py-4">{item.nama}</td>
                  <td className="px-6 py-4">{item.volume} L</td>
                  <td className="px-6 py-4">{item.tanggal}</td>
                  <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="flex items-center gap-1 text-sm text-[#FB6B00] hover:underline">
                      <Eye size={16} /> Lihat Detail
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white p-4 border border-gray-100 rounded-lg shadow flex items-center gap-4">
      <div className="p-2 bg-[#FB6B00]/10 text-[#FB6B00] rounded-full">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}
