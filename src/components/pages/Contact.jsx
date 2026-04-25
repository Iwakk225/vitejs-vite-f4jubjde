import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; 
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

        const TEMPLATE_ID = 'template_6pcc8yx';
        const SERVICE_ID = 'service_l8yan5m';
        const PUBLIC_KEY = 'geeibRupqOHjeR76K';
        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent:', result.text);
                
                // SweetAlert Success
                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.',
                    icon: 'success',
                    confirmButtonColor: '#5B23FF',
                    confirmButtonText: 'OK',
                    timer: 3000,
                    timerProgressBar: true,
                });
                
                // Reset form
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                if (formRef.current) formRef.current.reset();
            }, (error) => {
                console.error('Failed to send:', error.text);
                
                // SweetAlert Error
                Swal.fire({
                    title: 'Gagal!',
                    text: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
                    icon: 'error',
                    confirmButtonColor: '#5B23FF',
                    confirmButtonText: 'Coba Lagi',
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <Navbar />
            <div className="mt-16 select-none min-h-screen bg-white text-gray-900 py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                            Hubungi Kami
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Punya pertanyaan tentang konsultasi, pemesanan, atau layanan kami?
                            Isi form di bawah ini dan tim kami akan segera menghubungi Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Form Section */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-gray-900">Kirim Pesan</h2>
                                <p className="text-gray-600">Kami akan merespon secepatnya</p>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Nama Lengkap *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B23FF]/20 focus:border-[#5B23FF] transition-all duration-200 text-gray-900 placeholder-gray-400"
                                            placeholder="Masukkan nama lengkap Anda"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B23FF]/20 focus:border-[#5B23FF] transition-all duration-200 text-gray-900 placeholder-gray-400"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Nomor Telepon</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B23FF]/20 focus:border-[#5B23FF] transition-all duration-200 text-gray-900 placeholder-gray-400"
                                        placeholder="08xx-xxxx-xxxx"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Jenis Layanan *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B23FF]/20 focus:border-[#5B23FF] transition-all duration-200 text-gray-900 bg-white"
                                    >
                                        <option value="">Pilih layanan yang Anda butuhkan</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Pesan *</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B23FF]/20 focus:border-[#5B23FF] transition-all duration-200 text-gray-900 placeholder-gray-400 resize-vertical"
                                        placeholder="Ceritakan detail konsultasi atau pesanan Anda..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#5B23FF] text-white py-3.5 px-8 rounded-lg font-semibold text-base hover:bg-[#4a1ce6] focus:ring-4 focus:ring-[#5B23FF]/20 focus:outline-none transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
                        </div>

                        {/* Contact Info Section */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-gray-900">Informasi Kontak</h2>
                                <p className="text-gray-600">Ada pertanyaan? Hubungi kami melalui berbagai cara berikut:</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-5 border border-gray-200 rounded-lg hover:border-[#5B23FF]/30 hover:shadow-md transition-all duration-200">
                                    <div className="w-10 h-10 bg-[#5B23FF]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#5B23FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:averanteam44@gmail.com" className="text-gray-600 hover:text-[#5B23FF] transition-colors">averanteam44@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-5 border border-gray-200 rounded-lg hover:border-[#5B23FF]/30 hover:shadow-md transition-all duration-200">
                                    <div className="w-10 h-10 bg-[#5B23FF]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#5B23FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                                        <div className="space-y-1">
                                            <a href="tel:085174116973" className="block text-gray-600 hover:text-[#5B23FF] transition-colors">
                                                0851-7411-6973
                                            </a>
                                            <a href="tel:081359001002" className="block text-gray-600 hover:text-[#5B23FF] transition-colors">
                                                0813-5900-1002
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-5 border border-gray-200 rounded-lg hover:border-[#5B23FF]/30 hover:shadow-md transition-all duration-200">
                                    <div className="w-10 h-10 bg-[#5B23FF]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#5B23FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                                        <p className="text-gray-600">Surabaya, Jawa Timur, Indonesia</p>
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="p-5 border border-gray-200 rounded-lg bg-gray-50">
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#5B23FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Jam Kerja
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-700">Senin - Sabtu:</span>
                                        <span className="text-gray-600">08:00 - 20:00 WIB</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-700">Minggu:</span>
                                        <span className="text-gray-600">Libur</span>
                                    </div>
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
}