import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const { wishlist } = useShop();
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 mb-6 hover:text-[#ed2585]">
                <ArrowLeft size={20} className="mr-2" /> Back
            </button>
            <h1 className="text-3xl font-serif font-medium mb-8">My Wishlist ({wishlist.length})</h1>

            {wishlist.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg mb-4">Your wishlist is empty.</p>
                    <button onClick={() => navigate('/')} className="bg-[#ed2585] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider hover:bg-[#c9186b]">
                        Explore Products
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {wishlist.map((product, index) => (
                        <ProductCard key={`${product.id}-${index}`} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
