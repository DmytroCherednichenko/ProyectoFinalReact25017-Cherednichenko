const API_BASE_URL = "https://api.escuelajs.co/api/v1";

export async function getProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getLimitedProducts(num="8") {
    try {
        const response = await fetch(`${API_BASE_URL}/products?offset=1&limit=${num}`);
        if (!response.ok) {
            throw new Error("Failed to fetch Popular Products");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getCategoryProducts(id="1") {
    try {
        const response = await fetch(`${API_BASE_URL}/categories/${id}/products`);
        if (!response.ok) {
            throw new Error("Failed to fetch specified category");
        }
        const data = await response.json();
        return data;

    } catch (e) {
        console.error(e);
        return [];
    }
}