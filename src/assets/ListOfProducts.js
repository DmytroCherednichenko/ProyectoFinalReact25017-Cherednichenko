const API_BASE_URL = "https://fakestoreapi.in/api/products";

export async function getProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}`);
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

export async function getPopularProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}?limit=4`);
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
