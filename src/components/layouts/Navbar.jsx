import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLandingSection, setIsLandingSection] = useState(false);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Tentang', href: '/tentang' },
        { name: 'Layanan', href: '#services' },
        { name: 'Kontak', href: '#contact' },
    ];


    useEffect(() => {
        const landingSection = document.getElementById('landing');
        if (!landingSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsLandingSection(entry.isIntersecting),
            { threshold: 0.5 }
        );
        observer.observe(landingSection);
        return () => observer.disconnect();
    }, []);


    const isDarkNavbar = !isLandingSection;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${isDarkNavbar ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}
            `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a href="#home" className="flex items-center space-x-2 group">
                        <img
                            src="/logo.webp"
                            alt="Logo"
                            className="h-8 w-8 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        />
                        <span className={`text-xl font-bold transition-colors duration-300 ${isDarkNavbar
                                ? 'text-white'
                                : 'bg-linear-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent'
                            }`}>
                            Averant Team
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors duration-300 ${isDarkNavbar
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-gray-300 hover:text-blue-400'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <button
                        className={`md:hidden p-2 transition-colors ${isDarkNavbar ? 'text-white' : 'text-gray-300'
                            }`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className={`px-4 pt-2 pb-4 backdrop-blur-md border-t space-y-1 ${isDarkNavbar ? 'bg-black/95 border-gray-800' : 'bg-white/95 border-gray-100'
                    }`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`block px-3 py-2 rounded-lg font-medium transition-colors ${isDarkNavbar
                                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}