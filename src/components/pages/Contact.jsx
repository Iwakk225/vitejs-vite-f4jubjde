//Contact
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import BackToTop from "../features/BackToTop";

export default function Contact() {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const services = [
        'Konsultasi Desain',
        'Pemesanan Produk',
        'Layanan Custom',
        'Pertanyaan Umum',
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');


        const TEMPLATE_ID = 'template_6pcc8yx';
        const SERVICE_ID = 'service_l8yan5m';
        const PUBLIC_KEY = 'geeibRupqOHjeR76K';
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent:', result.text);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });

                if (formRef.current) formRef.current.reset();
            }, (error) => {
                console.error('Failed to send:', error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <Navbar />

            <div className="select-none min-h-screen bg-white text-black py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-black via-gray-900 to-black bg-clip-text text-transparent leading-tight">
                                Hubungi Kami
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                            Punya pertanyaan tentang konsultasi, pemesanan, atau layanan kami?
                            Isi form di bawah ini dan tim kami akan segera menghubungi Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Kirim Pesan</h2>
                                <p className="text-gray-600 mb-6">Kami akan merespon secepatnya</p>
                            </div>

                            {/* 6. Tambahkan ref={formRef} pada tag form */}
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Nama Lengkap *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black placeholder-gray-400"
                                            placeholder="Masukkan nama lengkap Anda"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black placeholder-gray-400"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black placeholder-gray-400"
                                        placeholder="08xx-xxxx-xxxx"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Jenis Layanan *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black bg-white"
                                    >
                                        <option value="">Pilih layanan yang Anda butuhkan</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Pesan *</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black placeholder-gray-400 resize-vertical"
                                        placeholder="Ceritakan detail konsultasi atau pesanan Anda..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-black text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-800 focus:ring-4 focus:ring-black/20 focus:outline-none transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>Mengirim...</span>
                                        </>
                                    ) : (
                                        'Kirim Pesan'
                                    )}
                                </button>
                            </form>
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-800 font-medium">✅ Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-800 font-medium">❌ Terjadi kesalahan. Silakan coba lagi.</p>
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Informasi Kontak</h2>
                                <p className="text-gray-600 mb-8">Ada pertanyaan? Hubungi kami melalui berbagai cara berikut:</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                                        <a href="mailto:hello@company.com" className="text-black hover:text-gray-600 transition-colors">averanteam44@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Telepon</h3>
                                        <div className="space-y-1">
                                            <a href="tel:085174116973" className="block text-black hover:text-gray-600 transition-colors">
                                                0851-7411-6973
                                            </a>
                                            <a href="tel:081359001002" className="block text-black hover:text-gray-600 transition-colors">
                                                0813-5900-1002
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Alamat</h3>
                                        <p className="text-black">Surabaya, Jawa Timur, Indonesia </p>
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="p-6 border border-gray-200 rounded-xl">
                                <h3 className="font-semibold text-lg mb-4">Jam Kerja</h3>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-medium">Senin - Sabtu:</span> 08:00 - 20:00 WIB</p>
                                    <p><span className="font-medium">Minggu:</span> Libur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </>
    );
};