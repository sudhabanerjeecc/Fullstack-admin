export interface CategoryProps {
    created_at: string;
    id: string;
    name: string;
    slug: string;
}

export interface BrandProps {
    created_at: string;
    id: string;
    name: string;
}
export interface ProductProps {
    id: string;
    name: string;
    sku: string;
    regular_price: number;
    stock: number;
    status: string;
    image_url: string;
    created_at: string;
    category_id: string;
    brand_id: string;
    description: string;
    short_description: string;
    sale_price: string;
}

export interface FetchProductParams {
    page?: number;
    limit?: number;
}
export interface FetchProductsResponse {
    products: ProductProps[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}