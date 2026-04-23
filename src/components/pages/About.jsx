//About
import {
  Sparkles,
  Search,
  Handshake
} from "lucide-react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import BackToTop from "../features/BackToTop";
import stock1 from "../../assets/stock2.jpg";
import ButtonParallaxAbout from "../layouts/ButtonParallaxAbout";

import SEO from "../SEO/SEO";

export default function About3() {
  const whatsappLink = "https://wa.me/6285174116973?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20website";
  return (
    <>
      <SEO
        title="Jasa Pembuatan Website Surabaya | Averant Team"
        description="Averant Team adalah penyedia jasa pembuatan website profesional di Surabaya. Kami membantu bisnis & UMKM go digital dengan solusi web modern, cepat, dan harga terjangkau."
      />
      <Navbar />
      <div className="bg-white select-none">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2 text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                  Tentang <br />
                  <span className="text-[#5B23FF]">Averant Team</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Kami membantu UMKM dan bisnis lokal menghadirkan kehadiran digital melalui website yang fungsional, responsif, dan mudah dikelola.
                </p>
                {/* Button - Sekarang di pojok kiri */}
                <div className="mt-5 flex items-center">
                  <a
                    href={whatsappLink}
                    className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-200 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <span>Hubungi Kami</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={stock1} alt="Averant Team" className="w-full h-100 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Prinsip Kami</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mengutamakan kualitas, transparansi, dan kepuasan klien dalam setiap proyek.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Quality */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br from-blue-500 to-[#5B23FF] flex items-center justify-center text-white">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Kualitas</h3>
                <p className="text-gray-600 text-sm">
                  Setiap kode dan desain kami kerjakan dengan standar terbaik, rapi, dan siap dikembangkan di masa depan.
                </p>
              </div>

              {/* Transparency */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Transparansi</h3>
                <p className="text-gray-600 text-sm">
                  Proses pengerjaan yang terbuka: update berkala, komunikasi jelas, dan tanpa biaya tersembunyi.
                </p>
              </div>

              {/* Client Satisfaction */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white">
                  <Handshake className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Kepuasan Klien</h3>
                <p className="text-gray-600 text-sm">
                  Tujuan kami bukan hanya menyelesaikan proyek, tapi memastikan Anda puas dengan hasilnya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <ButtonParallaxAbout />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}