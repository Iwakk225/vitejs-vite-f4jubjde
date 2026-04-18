import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import BackToTop from "../features/BackToTop";
import stock1 from "../../assets/stock2.jpg";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="about-hero" className="pt-28 pb-20 bg-gradient-to-br from-[#5B23FF] to-[#362F4F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tentang <span className="text-yellow-300">Averant Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kami adalah tim developer berpengalaman yang berdedikasi menciptakan website profesional dengan harga terjangkau untuk UMKM dan startup Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="group relative px-8 py-3 bg-white text-[#5B23FF] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Mulai Proyek</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kisah Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Dimulai dari passion membangun digital presence untuk bisnis lokal.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#5B23FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">2020</h3>
                  <p className="text-gray-600">Averant Team berdiri dengan misi digitalisasi UMKM.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#5B23FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">2022</h3>
                  <p className="text-gray-600">Luncurkan 100+ website untuk klien lokal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#5B23FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">2024</h3>
                  <p className="text-gray-600">Integrasi AI chatbot & optimasi performa.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <img src={stock1} alt="Team working" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional developer yang passionate dengan teknologi web modern.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rizky Averant", role: "Founder & Lead Developer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80", specialty: "React, Tailwind, Vite" },
              { name: "Sari Indah", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80", specialty: "Figma, Design System" },
              { name: "Budi Santoso", role: "Backend Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80", specialty: "Node.js, Database" }
            ].map((member, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-gray-500">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nilai Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "💻", title: "Quality First", desc: "Setiap kode ditulis dengan standar profesional, scalable dan maintainable." },
              { icon: "⚡", title: "Fast Delivery", desc: "Proyek selesai tepat waktu tanpa mengorbankan kualitas." },
              { icon: "💰", title: "Affordable", desc: "Harga kompetitif tanpa mengurangi value yang diberikan." },
              { icon: "🛡️", title: "Secure", desc: "Website aman dari threat dengan best security practices." },
              { icon: "📱", title: "Mobile First", desc: "Optimasi mobile experience untuk era digital saat ini." },
              { icon: "🎯", title: "Result Oriented", desc: "Fokus pada conversion dan ROI bisnis klien." }
            ].map((value, idx) => (
              <div key={idx} className="text-center group p-8 rounded-xl bg-white hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Averant Team?</h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 text-center">
            {[
              { num: "500+", label: "Proyek Selesai" },
              { num: "250+", label: "Klien Puas" },
              { num: "4.9/5", label: "Rating" },
              { num: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <div key={idx} className="group p-6">
                <div className="text-3xl md:text-4xl font-bold text-[#5B23FF] mb-2 group-hover:scale-110 transition-transform">{stat.num}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <a href="/kontak" className="block w-full">
        <section className="w-full flex items-center justify-center py-20 px-4 relative z-10">
          <div className="w-full max-w-4xl h-48 relative group cursor-pointer rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-[#5B23FF] to-[#7C3AED]">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: `url(${stock1})`}}></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center px-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Siap Memiliki Website Profesional?
                </h2>
                <div className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#5B23FF] rounded-xl font-semibold shadow-lg group-hover:shadow-2xl transition-all">
                  Konsultasi Gratis
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </a>

      <Footer />
      <BackToTop />
    </>
  );
}
