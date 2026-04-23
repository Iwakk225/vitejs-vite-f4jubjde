import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Berapa lama pembuatan website?",
      answer:
        "Waktu pengerjaan biasanya 7-14 hari untuk landing page dan 10-30 hari untuk website multi-halaman, tergantung kompleksitas fitur."
    },
    {
      question: "Apakah website SEO friendly?",
      answer:
        "Tentu, Website kami sudah dilengkapi dengan SEO supaya website anda mudah muncul di google."
    },
    {
      question: "Apakah bisa request desain custom?",
      answer:
        "Ya, kami menyediakan desain custom sesuai kebutuhan bisnis dan identitas brand Anda."
    },
    {
      question: "Apakah website sudah mobile friendly?",
      answer:
        "Semua website yang kami buat sudah responsive dan optimal di HP, tablet, dan desktop."
    },
    {
      question: "Apakah ada garansi atau support setelah website selesai?",
      answer:
        "Kami menyediakan support teknis setelah website selesai sesuai dengan paket yang dipilih."
    },
    {
      question: "Apakah bisa menambahkan fitur di kemudian hari?",
      answer:
        "Bisa. Website dirancang fleksibel sehingga fitur tambahan dapat ditambahkan kapan saja."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="select-none py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="text-gray-600">
            Temukan jawaban dari pertanyaan yang paling sering diajukan oleh pelanggan kami.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>

                <ChevronDown
                  className={`cursor-pointer transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer with smooth animation */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}