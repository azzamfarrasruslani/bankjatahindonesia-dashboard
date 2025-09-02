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
      {/* Header + Search */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-3"
      >
        <h1 className="text-3xl font-bold text-[#FB6B00]">
          Daftar Mitra Penampung Jelantah
        </h1>
        <div className="relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Cari mitra atau kelurahan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FB6B00] focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </motion.div>

      {/* Kartu Mitra */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all space-y-4"
            >
              {/* Peta */}
              <div className="w-full h-44 rounded-md overflow-hidden">
                <iframe
                  src={mitra.mapsEmbed}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md border border-gray-200"
                ></iframe>
              </div>

              {/* Info Mitra */}
              <div className="flex items-center gap-3 text-xl font-semibold text-[#FB6B00]">
                <Building2 size={24} />
                {mitra.nama}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} />
                <span className="truncate">{mitra.lokasi}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} />
                <span>{mitra.kontak}</span>
              </div>
              <p className="text-sm text-gray-500">{mitra.deskripsi}</p>

              <div className="flex items-center gap-1">
                {renderStars(mitra.rating)}
                <span className="text-xs text-gray-400 ml-1">
                  ({mitra.rating})
                </span>
              </div>

              {/* Tombol WA */}
              <div className="flex mt-3">
                <a
                  href={`https://wa.me/62${mitra.kontak.replace(/[^0-9]/g, '').slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 text-sm rounded-md hover:bg-green-600 transition w-full text-center"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}
