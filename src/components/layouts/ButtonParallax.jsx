import stock1 from "../../assets/stock2.jpg";
export default function ButtonParallax() {
    return (
        <>
            <a href="/kontak" className="select-none block w-full">
                <section className="w-full flex items-center justify-center -mt-8 relative z-10 px-4">
                    <div className="w-full max-w-7xl h-40 md:h-48 relative group cursor-pointer rounded-xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${stock1})`,
                                    backgroundAttachment: 'fixed',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-linear-to-r from-[#5B23FF] to-[#7C3AED] transition-all duration-300 group-hover:opacity-100 opacity-80"></div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                            <div className="absolute w-32 h-32 bg-blue-700 rounded-full opacity-0 group-hover:opacity-40 group-hover:w-200 group-hover:h-200 transition-all duration-1000 ease-out"></div>
                            <div className="absolute w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:w-150 group-hover:h-150 transition-all duration-700 ease-out delay-75"></div>
                            <div className="absolute w-32 h-32 bg-green-200 rounded-full opacity-0 group-hover:opacity-10 group-hover:w-250 group-hover:h-250 transition-all duration-1300 ease-out delay-150"></div>
                        </div>

                        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                            <div className="transform transition-all duration-500 group-hover:scale-105">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                    Siap Memiliki Website Profesional?
                                </h2>
                                <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#5B23FF] rounded-lg text-sm md:text-base font-semibold shadow-lg group-hover:shadow-xl transition-all group-hover:gap-3">
                                    Pesan Sekarang
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </a>
        </>
    );
}