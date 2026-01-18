import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

const FeaturedCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, image: hero1, title: 'Ethnic Elegance', subtitle: 'Shop Now' },
        { id: 2, image: hero2, title: 'Wedding Vibes', subtitle: 'Explore' },
        { id: 3, image: hero3, title: 'Festive Ready', subtitle: 'View' },
        { id: 4, image: product1, title: 'Summer Floral', subtitle: 'Grab It' },
        { id: 5, image: product2, title: 'Party Chic', subtitle: 'Discover' },
        { id: 6, image: product3, title: 'Casual Comfy', subtitle: 'Style' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const getVisibleSlideIndex = (offset) => {
        return (currentIndex + offset + slides.length) % slides.length;
    };

    return (
        <section className="py-12 bg-white overflow-hidden w-full relative">
            <div className="container mx-auto px-4 relative h-[400px] flex items-center justify-center">

                {/* Navigation Buttons (Small & Minimal) */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 md:left-20 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all w-8 h-8 flex items-center justify-center text-gray-800"
                >
                    <ChevronLeft size={16} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-20 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all w-8 h-8 flex items-center justify-center text-gray-800"
                >
                    <ChevronRight size={16} />
                </button>


                {/* Visible Slides Container */}
                <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                    {/* Left Slide (Previous) */}
                    <div className="absolute left-0 md:left-10 w-1/3 h-[70%] opacity-50 transform scale-90 transition-all duration-500 ease-in-out z-0 blur-[1px]">
                        <img
                            src={slides[getVisibleSlideIndex(-1)].image}
                            alt="Previous"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                    </div>

                    {/* Center Slide (Active) */}
                    <div className="absolute w-1/2 md:w-[45%] h-full z-10 transform scale-100 transition-all duration-500 ease-in-out shadow-2xl rounded-xl overflow-hidden border-4 border-white">
                        <img
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-center">
                            <h3 className="text-white text-2xl md:text-3xl font-serif italic mb-1">{slides[currentIndex].title}</h3>
                            <button className="text-xs md:text-sm text-white uppercase tracking-widest font-semibold hover:text-[#E72480] transition-colors">{slides[currentIndex].subtitle}</button>
                        </div>
                    </div>

                    {/* Right Slide (Next) */}
                    <div className="absolute right-0 md:right-10 w-1/3 h-[70%] opacity-50 transform scale-90 transition-all duration-500 ease-in-out z-0 blur-[1px]">
                        <img
                            src={slides[getVisibleSlideIndex(1)].image}
                            alt="Next"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedCarousel;
