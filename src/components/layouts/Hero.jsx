export default function Hero() {
    return (
        <section id="landing" className="select-none pt-28 pb-20 bg-linear-to-br from-[#5B23FF] to-[#362F4F] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Solusi Jasa Pembuatan Website Harga <span className="text-yellow-300">Terjangkau</span>
                </h1>
                <p className="max-w-2xl mx-auto text-white/80 text-lg mb-8">
                    Melayani pembuatan Company Profile, Landing Page, dan Website Portofolio dengan desain modern dan fungsional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/kontak"
                        className="justify-center group relative px-8 py-3 bg-white text-[#5B23FF] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 overflow-hidden"
                    >
                        <span className="relative z-10">Konsultasi Gratis</span>
                        <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a
                        href="#services"
                        className="px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    >
                        Lihat Layanan
                    </a>
                </div>
            </div>
        </section>
    );
}