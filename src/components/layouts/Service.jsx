import {
    Monitor,
    Building2,
    Image,
    Palette,
    Bot,
} from "lucide-react";

export default function Service() {
    return (
        <section id="services" className="select-none py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Layanan Kami
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Pilih paket dasar yang sesuai, lalu kustomisasi fitur tambahan sesuai kebutuhan bisnis Anda.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

                    {/* 🚀 Landing Pages */}
                    <div className="cursor-pointer group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-200 flex flex-col">
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-purple-50 mb-3">
                            <Monitor className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Landing Pages</h3>
                        <p className="text-gray-500 text-xs mb-3 flex-1">
                            Halaman promosi tunggal yang konversif untuk campaign, product launch, atau lead generation.
                        </p>
                        <ul className="space-y-1.5 mb-4">
                            {["1 Halaman Utama", "Mobile Friendly", "Basic SEO"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <span className="text-xs text-gray-400 italic">+10 fitur add-on tersedia</span>
                    </div>

                    {/* 🏢 Company Profile */}
                    <div className="cursor-pointer group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col">
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-50 mb-3">
                            <Building2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Company Profile</h3>
                        <p className="text-gray-500 text-xs mb-3 flex-1">
                            Website multi-halaman untuk menampilkan identitas, visi-misi, dan kredibilitas perusahaan.
                        </p>
                        <ul className="space-y-1.5 mb-4">
                            {["5 Halaman Standar", "Form Kontak", "Mobile Responsive"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <span className="text-xs text-gray-400 italic">+12 fitur add-on tersedia</span>
                    </div>

                    {/* 🎨 Portofolio Website - Popular */}
                    <div className="cursor-pointer group bg-white rounded-xl border border-purple-300 p-5 hover:shadow-lg transition-all duration-200 relative flex flex-col">
                        <span className="absolute top-0 right-0 px-2 py-0.5 bg-purple-600 text-white text-[10px] font-medium rounded-bl-lg rounded-tr-xl">
                            Popular
                        </span>
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-purple-50 mb-3">
                            <Image className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Portofolio Website</h3>
                        <p className="text-gray-500 text-xs mb-3 flex-1">
                            Tampilkan karya terbaik dengan galeri interaktif, ideal untuk kreatif, freelancer, atau agency.
                        </p>
                        <ul className="space-y-1.5 mb-4">
                            {["Galeri Portfolio", "Lightbox Preview", "SEO Optimized"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <span className="text-xs text-gray-400 italic">+8 fitur add-on tersedia</span>
                    </div>

                    {/* ⚙️ Custom Website */}
                    <div className="cursor-pointer group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-amber-300 transition-all duration-200 flex flex-col">
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-amber-50 mb-3">
                            <Palette className="h-5 w-5 text-amber-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Custom Website</h3>
                        <p className="text-gray-500 text-xs mb-3 flex-1">
                            Solusi tailor-made dengan fitur khusus, skalabilitas tinggi, dan integrasi sistem eksternal.
                        </p>
                        <ul className="space-y-1.5 mb-4">
                            {["Desain Full Custom", "Admin Dashboard", "Database Integration"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <span className="text-xs text-gray-400 italic">+15 fitur add-on tersedia</span>
                    </div>

                    {/* 🤖 Chatbot AI */}
                    <div className="cursor-pointer group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-emerald-300 transition-all duration-200 flex flex-col">
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-emerald-50 mb-3">
                            <Bot className="h-5 w-5 text-emerald-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">Chatbot AI</h3>
                        <p className="text-gray-500 text-xs mb-3 flex-1">
                            Asisten virtual 24/7 yang bisa jawab FAQ, bantu pelanggan, dan terintegrasi dengan website/WhatsApp.
                        </p>
                        <ul className="space-y-1.5 mb-4">
                            {["AI FAQ Training", "Website Chat Widget", "Live Chat Handover"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <span className="text-xs text-gray-400 italic">+5 fitur add-on tersedia</span>
                    </div>
                </div>

                {/* Add-on Note */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                        💡 Semua layanan bisa dikustomisasi. Fitur tambahan seperti <span className="font-medium text-gray-700">Integrasi WhatsApp, Speed Optimization, Google Analytics, dll</span> tersedia sebagai add-on. Konsultasikan kebutuhan Anda untuk paket terbaik!
                    </p>
                </div>

                <div className="mt-5 flex flex-col items-center gap-4">
                    <a
                        href="/Services"
                        className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-200 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                        <span>Lihat Selengkapnya</span>
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
                    <span className="text-xs text-gray-400">
                        5 layanan utama &middot; 50+ add-on &middot; Custom request
                    </span>
                </div>

            </div>
        </section>
    );
}