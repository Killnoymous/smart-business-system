import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'New Arrivals', href: '#' },
        { name: 'Suit Sets', href: '#' },
        { name: 'Dresses', href: '#' },
        { name: 'Co-ords', href: '#' },
        { name: 'Jewelry', href: '#' },
        { name: 'Sale', href: '#', isSale: true },
    ];

    return (
        <div className="w-full relative z-50 bg-white font-sans">
            {/* 1. Announcement Bar */}
            <div className="bg-[#E72480] text-white text-center py-2.5 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase">
                Free Shipping on Orders Above ₹999 | WorldWide Shipping
            </div>

            {/* 2. Brand Section (Scrolls Away) */}
            <div className="bg-white py-6 md:py-8 border-b border-gray-50 flex justify-center items-center relative">
                <a href="/" className="block group">
                    <img
                        src={logo}
                        alt="Bhagwati Creations"
                        className="h-16 md:h-28 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </a>
            </div>

            {/* 3. Sticky Navigation Bar */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

                    {/* Mobile: Hamburger */}
                    <button
                        className="md:hidden text-gray-800 p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} strokeWidth={1.5} />
                    </button>

                    {/* Desktop: Navigation Links (Centered) */}
                    <nav className="hidden md:flex flex-1 justify-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium uppercase tracking-widest relative group py-2
                                    ${link.isSale ? 'text-[#E72480]' : 'text-gray-800 hover:text-[#E72480]'}
                                    transition-colors duration-300
                                `}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#E72480] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
                            </a>
                        ))}
                    </nav>

                    {/* Right: Icons (Always Visible) */}
                    <div className="flex items-center space-x-2 md:space-x-6">
                        <button className="p-2 text-gray-800 hover:text-[#E72480] transition-colors rounded-full hover:bg-gray-50">
                            <Search size={22} strokeWidth={1.5} />
                        </button>
                        <button className="hidden md:block p-2 text-gray-800 hover:text-[#E72480] transition-colors rounded-full hover:bg-gray-50">
                            <Heart size={22} strokeWidth={1.5} />
                        </button>
                        <button className="p-2 text-gray-800 hover:text-[#E72480] transition-colors rounded-full hover:bg-gray-50 relative">
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            <span className="absolute top-1 right-0.5 w-4 h-4 bg-[#E72480] text-white text-[10px] flex items-center justify-center rounded-full font-bold">0</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <div
                    className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <span className="text-lg font-serif italic text-[#E72480]">Menu</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-red-500">
                            <X size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                    <div className="flex flex-col p-6 space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-base font-medium uppercase tracking-wide
                                    ${link.isSale ? 'text-[#E72480]' : 'text-gray-800'}
                                `}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-50 border-t border-gray-100">
                        <div className="flex items-center justify-center space-x-6 text-gray-600">
                            <span className="text-xs uppercase tracking-widest">Follow Us</span>
                            {/* Add social icons here if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
