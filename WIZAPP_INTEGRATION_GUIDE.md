# WizApp Integration Guide

Your website is now ready to connect with WizApp for real-time inventory updates.

## How it Works
Currently, the website uses a **Mock Inventory Service** (`src/services/inventory.js`). This service simulates a connection. When you provide a real API URL, it will automatically switch to fetching live data.

## Steps to Connect

### 1. Get the API Endpoint from WizApp
Contact WizApp support (Softinfo Systems) and ask for their **E-commerce / POS API**. You need to ask for:
- The **Base URL** for product data (e.g., `https://api.wizapp.in/v1/client-id/products`).
- An **API Key** or **Access Token** if authentication is required.

### 2. Configure the Website
1.  Open the `.env` file in your project root (create one if it doesn't exist).
2.  Add the following line:
    ```env
    VITE_WIZAPP_API_URL=https://your-wizapp-api-url.com
    ```
3.  Restart your development server (`npm run dev`).

The `InventoryService` detects this variable and will try to fetch from that URL instead of using the local file.

### 3. Data Format
The website expects the API to return a JSON array of products in this format:
```json
[
  {
    "id": 101,
    "name": "Product Name",
    "category": "Suit Set",
    "price": "₹2,499",
    "image": "url_to_image",
    "stock": 10,
    "description": "..."
  }
]
```

## Out of Stock Handling
If `stock` is `0` or less:
- The "Add to Cart" button will be disabled.
- An "Out of Stock" badge will appear on the product image.
- The status text will change to "Currently Unavailable".
