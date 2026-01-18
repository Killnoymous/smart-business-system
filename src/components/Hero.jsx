import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Placeholder slides since real images are not available
    const slides = [
        {
            id: 1,
            color: "bg-[#e8dcd5]", // Muted Beige
            title: "Ethnic Elegance",
            subtitle: "New Festive Collection"
        },
        {
            id: 2,
            color: "bg-[#d5b0b0]", // Muted Rose
            title: "Floral Dreams",
            subtitle: "Shop the latest prints"
        },
        {
            id: 3,
            color: "bg-[#c5d5d5]", // Muted Blue/Green
            title: "Summer Breeze",
            subtitle: "Cotton essentials for you"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-gray-100">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        } ${slide.color}`}
                >
                    {/* Placeholder Visual Indicator */}
                    <div className="w-full h-full flex flex-col justify-center items-center p-4">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/30 flex items-center justify-center mb-6">
                            <span className="text-white/50 text-sm">Image Placeholder</span>
                        </div>
                        <h2 className="text-white text-md md:text-xl font-medium tracking-[0.2em] uppercase mb-4 slide-up">
                            {slide.subtitle}
                        </h2>
                        <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-8 slide-up-delay">
                            {slide.title}
                        </h1>
                        <button className="bg-white text-gray-900 px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-300 slide-up-delay-2">
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
