"use client";

import Image from "next/image";
import { useState } from "react";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  const handleGoogleLogin = () => {
    // Lakukan login dengan Google
    console.log("Login dengan Google");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Kolom Kiri - Gambar Full & Slogan */}
        <div className="relative w-full h-full min-h-[400px] bg-[#FB6B00]/10 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/login.jpeg" // Ganti sesuai path gambar kamu
              alt="Login Illustration"
              fill
              className="object-cover w-full h-full"
              priority
            />
            {/* Overlay tanpa blur */}
            <div className="absolute inset-0 bg-black/60 rounded-l-2xl" />
          </div>

          <div className="relative z-10 text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
              Tukar Minyak, Selamatkan Bumi!
            </h2>
            <p className="text-base text-white/90 mt-2 max-w-md mx-auto">
              Login untuk mulai menyetor minyak bekas dan bantu menjaga
              lingkungan.
            </p>
          </div>
        </div>

        {/* Kolom Kanan - Form Login */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="space-y-2 mb-6">
            <h1 className="text-3xl font-bold text-[#FB6B00]">
              Masuk ke Akun Anda
            </h1>
            <p className="text-sm text-gray-600">
              Silakan login untuk melanjutkan transaksi minyak jelantah Anda.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 flex items-center gap-2 px-3 py-2 border rounded-md bg-white focus-within:ring-2 focus-within:ring-[#FB6B00]">
                <Mail size={18} className="text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 flex items-center gap-2 px-3 py-2 border rounded-md bg-white focus-within:ring-2 focus-within:ring-[#FB6B00]">
                <Lock size={18} className="text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-sm text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-[#FB6B00] text-white hover:bg-orange-600 font-semibold py-2.5 rounded-lg transition-all"
            >
              Masuk
            </button>
          </form>

          {/* Atau login dengan Google */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="text-sm text-gray-500">atau</span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 hover:bg-gray-100 py-2.5 rounded-lg flex items-center justify-center gap-3 transition"
          >
            <FcGoogle size={20} />
            <span className="text-sm font-medium text-gray-700">
              Masuk dengan Google
            </span>
          </button>

          {/* Daftar Link */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Belum punya akun?{" "}
            <a
              href="/daftar"
              className="text-[#FB6B00] font-medium hover:underline"
            >
              Daftar sekarang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
