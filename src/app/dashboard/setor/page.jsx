"use client";

import { useState } from "react";
import {
  UploadCloud,
  Droplet,
  CheckCircle,
  Info,
  Flame,
} from "lucide-react";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SetorMinyakPage() {
  const [volume, setVolume] = useState("");
  const [jenisMinyak, setJenisMinyak] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ volume, jenisMinyak });
    setVolume("");
    setJenisMinyak("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4 md:px-6">
      {/* Informasi & Ilustrasi */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl p-8 flex flex-col justify-between border border-orange-100"
      >
        <div className="space-y-5">
          <h1 className="text-3xl font-extrabold text-[#FB6B00] flex items-center gap-3">
            <UploadCloud size={30} />
            Setor Minyak Jelantah
          </h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Tukarkan minyak jelantah bekas Anda menjadi **saldo digital**. Pastikan minyak tidak tercampur bahan lain, dan disimpan dalam wadah bersih.
          </p>
          <div className="flex items-start gap-3 bg-orange-100/40 border-l-4 border-[#FB6B00] p-4 rounded-lg shadow-sm">
            <Info size={20} className="text-[#FB6B00] mt-1" />
            <span className="text-sm text-[#FB6B00]">
              Minimal setor: <strong>0.1 Liter</strong> | Jenis diterima: <strong>Goreng, Sawit</strong>
            </span>
          </div>
        </div>

        <div className="mt-8">
          <Image
            src="/images/setor.png"
            alt="Ilustrasi Setor Minyak"
            width={500}
            height={300}
            className="w-full object-contain"
          />
        </div>
      </motion.div>

      {/* Form Setor */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Droplet size={22} className="text-[#FB6B00]" />
          Formulir Penyetoran
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Volume Minyak (liter)
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              min="0.1"
              required
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6B00] transition"
              placeholder="Contoh: 2.5"
            />
         <Flame className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Jenis Minyak
          </label>
          <div className="relative">
            <select
              required
              value={jenisMinyak}
              onChange={(e) => setJenisMinyak(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6B00] transition"
            >
              <option value="">Pilih Jenis Minyak</option>
              <option value="minyak-goreng">Minyak Goreng</option>
              <option value="minyak-sawit">Minyak Sawit</option>
              <option value="lainnya">Lainnya</option>
            </select>
          <Flame className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#FB6B00] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all w-full font-semibold shadow-md"
        >
          Kirim Setoran
        </button>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-600 mt-2"
          >
            <CheckCircle size={20} />
            <span>Setoran berhasil dikirim. Terima kasih!</span>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}
