import { useState } from "react";
import { Check } from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Order Layanan",
      description:
        "Silahkan order paket jasa pembuatan website yang sesuai dengan kebutuhan bisnis Anda. Jika anda kesulitan untuk memilih paket yang sesuai, silahkan hubungi kami. Kami akan menjadi konsultan terbaik Anda.",
    },
    {
      title: "Perencanaan Desain Website",
      description:
        "Tim kami akan merencanakan desain website yang sesuai dengan kebutuhan dan identitas brand Anda. Mulai dari wireframe, mockup, hingga final design.",
    },
    {
      title: "Pengiriman Konten Website",
      description:
        "Silahkan Anda mengirimkan materi website berupa teks, gambar, maupun video apa saja yang akan dimasukan ke dalam website Anda meliputi profil perusahaan, logo, detail kontak, detail layanan, gambar produk atau fitur-fitur yang Anda miliki.",
    },
    {
      title: "Website Publish",
      description:
        "Setelah semua proses selesai dan Anda menyetujui hasilnya, website akan segera di-publish dan siap diakses oleh pengunjung dari seluruh dunia.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bagaimana Proses Bikin Website di{" "}
            <span className="text-blue-600">Averant Team?</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Illustration */}
          <div>
            <div className="bg-blue-50 rounded-2xl p-8">
              {/* Browser Window Mockup */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Browser Header */}
                <div className="bg-blue-100 px-4 py-3 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
                {/* Browser Content */}
                <div className="p-6 space-y-4 bg-blue-50">
                  {/* Top row */}
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-white rounded-full w-3/4"></div>
                      <div className="h-3 bg-white rounded-full w-1/2"></div>
                      <div className="bg-orange-400 rounded-md h-6 w-20 mt-3"></div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1112 8.4a3.6 3.6 0 010 7.2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Bottom row */}
                  <div className="flex gap-3 items-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-12 h-12 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-2">
                      <div className="bg-blue-100 rounded-lg h-16"></div>
                      <div className="bg-blue-100 rounded-lg h-16"></div>
                      <div className="bg-blue-100 rounded-lg h-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`rounded-xl p-6 transition-all duration-300 cursor-pointer overflow-hidden ${
                  activeStep === index
                    ? "bg-white shadow-lg scale-[1.02]"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeStep === index
                        ? "bg-orange-500 rotate-0"
                        : "bg-gray-400 -rotate-90"
                    }`}
                  >
                    <Check
                      className={`w-3 h-3 text-white transition-all duration-300 ${
                        activeStep === index
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-50"
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base">
                    {step.title}
                  </h3>
                </div>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeStep === index
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-sm leading-relaxed ml-8 animate-slide-down">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}