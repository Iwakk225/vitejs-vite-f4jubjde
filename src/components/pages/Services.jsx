import {
  Monitor,
  Building2,
  Image,
  Palette,
  Bot,
  Check,
  ArrowRight,
  Users,
  Globe
} from "lucide-react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import stock1 from "../../assets/stock2.jpg"; 
import BackToTop from "../features/BackToTop";

const services = [
  {
    id: 1,
    icon: Monitor,
    title: "Landing Pages",
    description: "Halaman promosi tunggal yang konversif untuk campaign, product launch, atau lead generation.",
    features: ["1 Halaman Utama", "Mobile Friendly", "Basic SEO"],
    addOns: 10,
    price: "1.500.000",
    bestFor: ["Startup launching produk", "Campaign iklan", "Webinar promotion"]
  },
  {
    id: 2,
    icon: Building2,
    title: "Company Profile",
    description: "Website multi-halaman untuk menampilkan identitas, visi-misi, dan kredibilitas perusahaan.",
    features: ["5 Halaman Standar", "Form Kontak", "Mobile Responsive"],
    addOns: 12,
    price: "3.500.000",
    bestFor: ["Perusahaan established", "UMKM go digital", "Professional services"]
  },
  {
    id: 3,
    icon: Image,
    title: "Portofolio Website",
    description: "Tampilkan karya terbaik dengan galeri interaktif, ideal untuk kreatif, freelancer, atau agency.",
    features: ["Galeri Portfolio", "Lightbox Preview", "SEO Optimized"],
    addOns: 8,
    price: "2.500.000",
    bestFor: ["Freelance designers", "Photographers", "Creative agencies"]
  },
  {
    id: 4,
    icon: Palette,
    title: "Custom Website",
    description: "Solusi tailor-made dengan fitur khusus, skalabilitas tinggi, dan integrasi sistem eksternal.",
    features: ["Desain Full Custom", "Admin Dashboard", "Database Integration"],
    addOns: 15,
    price: "7.500.000",
    bestFor: ["E-commerce", "SaaS platforms", "Enterprise solutions"]
  },
  {
    id: 5,
    icon: Bot,
    title: "Chatbot AI",
    description: "Asisten virtual 24/7 yang bisa jawab FAQ, bantu pelanggan, dan terintegrasi website/WhatsApp.",
    features: ["AI FAQ Training", "Website Chat Widget", "Live Chat Handover"],
    addOns: 5,
    price: "2.000.000",
    bestFor: ["Customer service", "E-commerce stores", "High-traffic websites"]
  }
];

export default function Services() {
  const whatsappLink = "https://wa.me/6285174116973?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20website"; 

  return (
    <>
      <Navbar />
      <section className="py-20 px-4 bg-gray-50 mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih paket dasar yang sesuai, lalu kustomisasi fitur tambahan sesuai kebutuhan bisnis Anda.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-20">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 p-5 hover:shadow-lg transition-all duration-200 flex flex-col"
                >
                  {/* Icon Container */}
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg mb-3 bg-slate-100 text-slate-600">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-2">
                      Fitur Termasuk:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <h4 className="font-semibold text-gray-900 text-xs mb-2 flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      Cocok Untuk:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.map((item, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white px-2 py-1 rounded-md text-gray-600 border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 italic mb-4">
                    +{service.addOns} fitur add-on tersedia
                  </p>

                  {/* Price & Button */}
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-500 mb-1">Mulai Dari</p>
                      <p className="text-2xl font-bold text-gray-900">
                        Rp {service.price}
                      </p>
                    </div>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-3 rounded-lg text-base font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer bg-slate-900 hover:bg-slate-800 active:bg-slate-950"
                    >
                      Pilih Paket
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="select-none block w-full pb-5"
          >
            <section className="w-full flex items-center justify-center relative z-10 px-4">
              <div className="w-full max-w-7xl h-40 md:h-48 relative group cursor-pointer rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${stock1})`,
                      backgroundAttachment: 'fixed',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:opacity-100 opacity-80"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  <div className="absolute w-32 h-32 bg-purple-700 rounded-full opacity-0 group-hover:opacity-40 group-hover:w-200 group-hover:h-200 transition-all duration-1000 ease-out"></div>
                  <div className="absolute w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:w-150 group-hover:h-150 transition-all duration-700 ease-out delay-75"></div>
                  <div className="absolute w-32 h-32 bg-blue-200 rounded-full opacity-0 group-hover:opacity-10 group-hover:w-250 group-hover:h-250 transition-all duration-1300 ease-out delay-150"></div>
                </div>

                <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                  <div className="transform transition-all duration-500 group-hover:scale-105">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                      Masih Bingung Memilih?
                    </h2>
                    <p className="text-white/90 mb-6 text-sm md:text-base">
                      Tidak perlu ragu! Tim konsultan kami siap membantu Anda.
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-purple-600 rounded-lg text-sm md:text-base font-semibold shadow-lg group-hover:shadow-xl transition-all group-hover:gap-3">
                      Konsultasi Gratis via WhatsApp
                      <Users className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </a>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
}