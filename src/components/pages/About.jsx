import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import BackToTop from "../features/BackToTop";
import stock1 from "../../assets/stock2.jpg";
import ButtonParallaxAbout from "../layouts/ButtonParallaxAbout";

export default function About3() {
  return (
    <>
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
                {/* Button */}
                <div className="mt-5 flex flex-col items-center gap-4">
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-200 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <span>Hubungi Kami</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br from-blue-500 to-[#5B23FF] flex items-center justify-center text-white text-2xl">
                  ⭐
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Kualitas</h3>
                <p className="text-gray-600 text-sm">
                  Setiap kode dan desain kami kerjakan dengan standar terbaik, rapi, dan siap dikembangkan di masa depan.
                </p>
              </div>

              {/* Transparency */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl">
                  🔍
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Transparansi</h3>
                <p className="text-gray-600 text-sm">
                  Proses pengerjaan yang terbuka: update berkala, komunikasi jelas, dan tanpa biaya tersembunyi.
                </p>
              </div>

              {/* Client Satisfaction */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl">
                  🤝
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