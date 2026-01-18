import React, { useState, useEffect } from 'react';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: hero1,
            title: "Ethnic Elegance",
            subtitle: "New Festive Collection",
            // Positioning text to ensure contrast
            textColor: "text-white"
        },
        {
            id: 2,
            image: hero2,
            title: "Royal Vibrance",
            subtitle: "The Wedding Edit",
            textColor: "text-white"
        },
        {
            id: 3,
            image: hero3,
            title: "Summer Breeze",
            subtitle: "Cotton Essentials",
            textColor: "text-gray-900" // Dark text for lighter image if needed, but image is generated "contrasting" so white might still work. Let's stick to white for now as editorial images usually have overlay.
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-gray-100 mt-28 md:mt-32">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Background Image */}
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                        <h2 className="text-white text-md md:text-xl font-medium tracking-[0.2em] uppercase mb-4 slide-up drop-shadow-md">
                            {slide.subtitle}
                        </h2>
                        <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-8 slide-up-delay drop-shadow-lg">
                            {slide.title}
                        </h1>
                        <button className="bg-white text-gray-900 px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-300 slide-up-delay-2 shadow-lg">
                            Shop Now
                        </button>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
