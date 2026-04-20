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
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

                    {/* 🚀 Landing Pages */}
                    <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-200 flex flex-col">
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-purple-50 mb-3">
                            <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>
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
                    <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col">
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-50 mb-3">
                            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>
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
                    <div className="group bg-white rounded-xl border border-purple-300 p-5 hover:shadow-lg transition-all duration-200 relative flex flex-col">
                        <span className="absolute top-0 right-0 px-2 py-0.5 bg-purple-600 text-white text-[10px] font-medium rounded-bl-lg rounded-tr-xl">
                            Popular
                        </span>
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-purple-50 mb-3">
                            <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" />
                            </svg>
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
                    <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-amber-300 transition-all duration-200 flex flex-col">
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-amber-50 mb-3">
                            <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
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
                    <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-emerald-300 transition-all duration-200 flex flex-col">
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-emerald-50 mb-3">
                            <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                            </svg>
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