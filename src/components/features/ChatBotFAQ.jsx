import { useState } from "react";

export default function ChatBotFAQ() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Halo 👋 Selamat datang di Averant Team!\nSilakan pilih pertanyaan di bawah ini.",
            sender: "AverantBot",
        },
    ]);

    const whatsappNumber = "6281234567890";

    const faqs = [
        {
            question: "Apa saja layanan Averant Team?",
            answer:
                "Kami menyediakan Landing Page, Company Profile, Portfolio Website, Custom Website, dan Chatbot AI.",
        },
        {
            question: "Berapa lama pengerjaan website?",
            answer: "Estimasi pengerjaan 7-30 hari tergantung kompleksitas fitur.",
        },
        {
            question: "Apakah website mobile friendly?",
            answer:
                "Ya, semua website yang kami buat sudah mobile responsive dan SEO basic.",
        },
        {
            question: "Apakah bisa custom fitur?",
            answer:
                "Ya, semua layanan bisa dikustom sesuai kebutuhan bisnis Anda.",
        },
    ];

    const sendFAQ = (faq) => {
        setMessages((prev) => [
            ...prev,
            { text: faq.question, sender: "user" },
            { text: faq.answer, sender: "bot" },
        ]);
    };

    const openWhatsApp = () => {
        const text = encodeURIComponent(
            "Halo Averant Team, saya ingin konsultasi tentang pembuatan website."
        );

        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    };

    return (
        <>
            {open && (
                <div className="fixed bottom-40 right-12 w-82.5 h-115 bg-[#0f0f0f] rounded-2xl flex flex-col overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.5)] z-99999 max-sm:w-[90%] max-sm:right-[5%] max-sm:h-[70%] max-sm:bottom-45">

                    {/* Header */}
                    <div className="bg-linear-to-br from-purple-600 to-purple-900 text-white p-3.5 font-bold text-center">
                        Averant Team Assistant
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-2.5 overflow-y-auto">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2.5 mb-2 rounded-lg max-w-[80%] text-sm whitespace-pre-line ${msg.sender === "user"
                                        ? "bg-purple-600 text-white ml-auto"
                                        : "bg-[#1f1f1f] text-white"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* FAQ Buttons */}
                    <div className="p-2.5 flex flex-col gap-1.5">
                        {faqs.map((faq, index) => (
                            <button
                                key={index}
                                onClick={() => sendFAQ(faq)}
                                className="bg-[#1f1f1f] text-white border border-purple-600 p-2 rounded-lg text-left text-xs transition hover:bg-purple-600"
                            >
                                {faq.question}
                            </button>
                        ))}
                    </div>

                    {/* WhatsApp */}
                    <div className="p-2.5">
                        <button
                            onClick={openWhatsApp}
                            className="w-full bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-lg font-bold transition"
                        >
                            Hubungi via WhatsApp
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-27.5 right-5 bg-purple-600 text-white w-15 h-15 rounded-full text-xl shadow-[0_0_10px_rgba(124,58,237,0.6)] z-99999 max-sm:bottom-30"
            >
                💬
            </button>
        </>
    );
}