"use client";

import { Building2, MapPin, Phone, Search, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const mitraList = [
  {
    nama: "Mitra Jelantah A",
    lokasi: "Kelurahan Sukamaju, Jakarta",
    kontak: "0812-3456-7890",
    deskripsi: "Melayani penjemputan mulai dari 2 liter.",
    rating: 4.5,
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.379529114828!2d106.8234115!3d-6.2115442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d0b12f3aef%3A0xe4bc68dcdfb3908c!2sKelurahan%20Sukamaju%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1668900000000",
  },
  {
    nama: "Mitra Jelantah B",
    lokasi: "Kelurahan Melati, Bandung",
    kontak: "0856-1234-5678",
    deskripsi: "Tersedia drop point dan pembayaran via QRIS.",
    rating: 5,
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3091841684753!2d107.5991225!3d-7.5121685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5c8e45dfbfd%3A0x1a2ab09722e0c92c!2sKelurahan%20Melati%2C%20Bandung!5e0!3m2!1sen!2sid!4v1668900000001",
  },
  {
    nama: "Mitra Jelantah C",
    lokasi: "Kelurahan Mawar, Surabaya",
    kontak: "0821-9876-5432",
    deskripsi: "Melayani setor langsung ke tempat mitra.",
    rating: 3.8,
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5583258339644!2d112.7499475!3d-7.3075032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbe7e45b83a1%3A0x4f617d6e63d4fcd6!2sKelurahan%20Mawar%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1668900000002",
  },
];

export default function MitraPage() {
  const [search, setSearch] = useState("");

  const filteredMitra = mitraList.filter(
    (mitra) =>
      mitra.nama.toLowerCase().includes(search.toLowerCase()) ||
      mitra.lokasi.toLowerCase().includes(search.toLowerCase())
  );

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} size={16} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-8">
      {/* Header Hero Mitra */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-gray-200 rounded-2xl px-6 py-8 shadow-md flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"
      >
        {/* Ikon Besar */}
        <div className="bg-[#FB6B00]/10 p-4 rounded-full">
          <Building2 size={40} className="text-[#FB6B00]" />
        </div>

        {/* Judul & Deskripsi */}
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Temukan Mitra Penampung Jelantah
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Jelajahi mitra resmi Bank Jatah di berbagai wilayah. Cari
            berdasarkan kelurahan atau nama mitra untuk memulai penyetoran
            minyak bekas.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md mt-4">
            <div className="flex items-center border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-[#FB6B00] transition">
              <span className="pl-3 text-gray-400">
                <Search size={20} />
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari berdasarkan nama mitra, kota, atau kelurahan..."
                className="flex-1 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="pr-3 text-gray-400 hover:text-gray-600 transition"
                  title="Bersihkan"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredMitra.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-gray-500 text-sm py-10"
          >
            Mitra tidak ditemukan berdasarkan pencarianmu.
          </motion.div>
        ) : (
          filteredMitra.map((mitra, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all p-5 flex flex-col justify-between"
            >
              {/* Peta */}
              <div className="relative w-full h-44 rounded-xl overflow-hidden shadow-sm mb-3">
                <iframe
                  src={mitra.mapsEmbed}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl border-0"
                />
                <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow">
                  {mitra.status || "Tersedia"}
                </div>
              </div>

              {/* Info Mitra */}
              <div className="flex flex-col gap-2 mb-2">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#FB6B00]">
                  <Building2 size={20} /> {mitra.nama}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} /> {mitra.lokasi}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} /> {mitra.kontak}
                </div>
                <p className="text-sm text-gray-500 truncate">
                  {mitra.deskripsi}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {renderStars(mitra.rating)}
                <span className="text-xs text-gray-400 ml-1">
                  ({mitra.rating})
                </span>
              </div>

              {/* Tombol WA */}
              <a
                href={`https://wa.me/62${mitra.kontak
                  .replace(/[^0-9]/g, "")
                  .slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition"
              >
                {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326a7.94 7.94 0 0 0-11.264 0 7.94 7.94 0 0 0 0 11.264l-.465 1.708 1.758-.465a7.94 7.94 0 0 0 11.264-11.264zm-1.336 8.663c-.203.57-1.175 1.102-1.612 1.166-.437.064-.846.097-1.234-.064-.388-.162-1.305-.479-2.467-1.277-1.51-1.123-2.513-2.51-2.806-2.889-.292-.38-.247-.587-.247-.987 0-.399.197-.73.27-.814.073-.085.161-.128.27-.128.11 0 .253.008.385.006.13-.002.304-.05.47.36.165.41.567 1.417.617 1.518.05.101.085.224.017.361-.068.138-.103.22-.21.34-.107.121-.228.27-.326.363-.097.094-.198.197-.128.394.07.197.31.652.66 1.047.454.52.836.69 1.024.773.188.084.297.07.406-.041.107-.108.46-.532.58-.718.122-.186.243-.155.406-.094.163.062 1.028.484 1.205.57.177.085.296.128.34.197.043.07.043.41-.16.98z" />
          </svg> */}
                Hubungi via WA
              </a>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}
