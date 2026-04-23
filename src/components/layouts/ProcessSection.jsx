import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const whatsappLink = "https://wa.me/6285174116973?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20website";

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
    <section className="py-16 px-4 bg-white select-none">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Proses Pengerjaan di{" "}
            <span className="text-blue-600">Averant Team</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Simple CTA */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
              Butuh bantuan memilih paket?
            </h3>
            <p className="text-gray-600 text-md mb-4 leading-relaxed">
              Konsultasikan kebutuhan website Anda secara gratis. Kami siap membantu.
            </p>
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

          {/* Right Side - Steps */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  activeStep === index
                    ? "bg-gray-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Step Indicator */}
                  <div className="pt-0.5">
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        activeStep === index ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-md">
                      {step.title}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        activeStep === index
                          ? "max-h-40 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-md leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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