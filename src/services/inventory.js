import { products as mockProducts } from '../data/products';

// This service handles interaction with the WizApp Inventory system
const InventoryService = {
    /**
     * Fetches all products with real-time stock data.
     * Uses local mock data if no API URL is configured.
     */
    getAllProducts: async () => {
        const apiUrl = import.meta.env.VITE_WIZAPP_API_URL;

        if (apiUrl) {
            try {
                const response = await fetch(`${apiUrl}/products`);
                if (!response.ok) throw new Error('Failed to fetch from WizApp');
                return await response.json();
            } catch (error) {
                console.error("WizApp API Error:", error);
                // Fallback to mock data in case of error, or handle gracefully
                return mockProducts;
            }
        }

        // Simulate API delay for mock data
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockProducts);
            }, 500); // 500ms delay to simulate network
        });
    },

    /**
     * Checks stock for a specific product ID.
     * Returns the available quantity.
     */
    checkStock: async (productId) => {
        const products = await InventoryService.getAllProducts();
        const product = products.find(p => p.id === productId);
        return product ? product.stock : 0;
    }
};

export default InventoryService;
