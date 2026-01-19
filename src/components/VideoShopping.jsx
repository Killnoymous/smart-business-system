import React from 'react';
import { Phone } from 'lucide-react';

const VideoShopping = () => {
    return (
        <section className="bg-gradient-to-r from-[#ed2585] to-[#c41e6e] py-16 text-white text-center">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 leading-tight">
                        The Ultimate In-Store Experience <br /> Via 24x7 Video Shopping
                    </h2>

                    <div className="w-24 h-1 bg-white mx-auto my-6 rounded-full opacity-50"></div>

                    <p className="text-lg md:text-xl font-light mb-10 tracking-wide">
                        Our Stylists On Call Can Speak: English, Hindi, Gujarati & Marathi
                    </p>

                    <button className="bg-white text-[#ed2585] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 mx-auto">
                        <Phone size={20} />
                        Start Call Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoShopping;
