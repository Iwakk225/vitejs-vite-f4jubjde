import { 
  Monitor, 
  Building2, 
  Image, 
  Palette, 
  Bot, 
  Check, 
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Globe
} from "lucide-react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const services = [
  {
    id: 1,
    icon: Monitor,
    title: "Landing Pages",
    description: "Halaman promosi tunggal yang konversif untuk campaign, product launch, atau lead generation.",
    features: [
      "1 Halaman Utama",
      "Mobile Friendly",
      "Basic SEO"
    ],
    addOns: 10,
    price: "1.500.000",
    bestFor: ["Startup launching produk", "Campaign iklan", "Webinar promotion"]
  },
  {
    id: 2,
    icon: Building2,
    title: "Company Profile",
    description: "Website multi-halaman untuk menampilkan identitas, visi-misi, dan kredibilitas perusahaan.",
    features: [
      "5 Halaman Standar",
      "Form Kontak",
      "Mobile Responsive"
    ],
    addOns: 12,
    price: "3.500.000",
    bestFor: ["Perusahaan established", "UMKM go digital", "Professional services"]
  },
  {
    id: 3,
    icon: Image,
    title: "Portofolio Website",
    description: "Tampilkan karya terbaik dengan galeri interaktif, ideal untuk kreatif, freelancer, atau agency.",
    features: [
      "Galeri Portfolio",
      "Lightbox Preview",
      "SEO Optimized"
    ],
    addOns: 8,
    price: "2.500.000",
    popular: true,
    bestFor: ["Freelance designers", "Photographers", "Creative agencies"]
  },
  {
    id: 4,
    icon: Palette,
    title: "Custom Website",
    description: "Solusi tailor-made dengan fitur khusus, skalabilitas tinggi, dan integrasi sistem eksternal.",
    features: [
      "Desain Full Custom",
      "Admin Dashboard",
      "Database Integration"
    ],
    addOns: 15,
    price: "7.500.000",
    bestFor: ["E-commerce", "SaaS platforms", "Enterprise solutions"]
  },
  {
    id: 5,
    icon: Bot,
    title: "Chatbot AI",
    description: "Asisten virtual 24/7 yang bisa jawab FAQ, bantu pelanggan, dan terintegrasi website/WhatsApp.",
    features: [
      "AI FAQ Training",
      "Website Chat Widget",
      "Live Chat Handover"
    ],
    addOns: 5,
    price: "2.000.000",
    bestFor: ["Customer service", "E-commerce stores", "High-traffic websites"]
  }
];

export default function Services() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 mt-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Layanan Profesional
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Layanan Kami
          </h1>
          <p className="text-lg text-slate-600">
            Pilih paket dasar yang sesuai, lalu kustomisasi fitur tambahan sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className={`relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl border-2 ${
                  service.popular 
                    ? "border-purple-500 shadow-lg" 
                    : "border-slate-200 hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-6">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      <Star className="w-3 h-3 inline mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  service.popular 
                    ? "bg-purple-100 text-purple-600" 
                    : "bg-slate-100 text-slate-600"
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-3">
                    Fitur Termasuk:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2 flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    Cocok Untuk:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.bestFor.map((item, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-white px-2 py-1 rounded text-slate-600 border border-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-6">
                  +{service.addOns} fitur add-on tersedia
                </p>

                {/* Price & Button */}
                <div className="border-t pt-4">
                  <div className="text-center mb-4">
                    <p className="text-sm text-slate-500 mb-1">Mulai Dari</p>
                    <p className="text-3xl font-bold text-slate-900">
                      Rp {service.price}
                    </p>
                  </div>
                  <button 
                    className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      service.popular 
                        ? "bg-purple-600 hover:bg-purple-700 active:bg-purple-800" 
                        : "bg-slate-900 hover:bg-slate-800 active:bg-slate-950"
                    }`}
                  >
                    Pilih Paket
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recommendation Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
              Rekomendasi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Rekomendasi Sesuai Kebutuhan
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Bingung memilih? Lihat rekomendasi kami berdasarkan tipe bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Untuk Startup & Launching",
                description: "Jika Anda sedang meluncurkan produk baru",
                services: ["Landing Pages", "Company Profile"],
                color: "blue"
              },
              {
                icon: Users,
                title: "Untuk Profesional Kreatif",
                description: "Jika Anda perlu showcase portofolio",
                services: ["Portofolio Website", "Company Profile"],
                color: "purple"
              },
              {
                icon: Zap,
                title: "Untuk Bisnis Skala Besar",
                description: "Jika Anda butuh solusi kompleks",
                services: ["Custom Website", "Chatbot AI"],
                color: "orange"
              },
              {
                icon: Shield,
                title: "Untuk Customer Service",
                description: "Jika Anda ingin layanan 24/7",
                services: ["Chatbot AI", "Company Profile"],
                color: "green"
              }
            ].map((rec, index) => {
              const Icon = rec.icon;
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                purple: "bg-purple-100 text-purple-600",
                orange: "bg-orange-100 text-orange-600",
                green: "bg-green-100 text-green-600"
              };

              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClasses[rec.color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {rec.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {rec.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {rec.services.map((service, idx) => (
                          <span 
                            key={idx}
                            className="text-sm bg-slate-100 px-3 py-1 rounded-full text-slate-700"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Masih Ragu Memilih Layanan?
          </h2>
          <p className="text-lg mb-8 text-purple-100">
            Tim konsultan kami siap membantu Anda memilih solusi terbaik. 
            Konsultasi gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              Jadwalkan Konsultasi Gratis
            </button>
            <button 
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors cursor-pointer"
            >
              Lihat Portofolio
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}