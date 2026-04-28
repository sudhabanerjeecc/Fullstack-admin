import { createClient } from "@/lib/supabase/client";
import { BrandProps, CategoryProps, FetchProductParams, FetchProductsResponse, } from "@/types/ProductsTypes";
import { format } from "path";
import { toast } from "sonner";



//-------Get All Category----------
export async function fetchCategories(): Promise<CategoryProps[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('categories')
        .select('*');

    if (error) {
        toast.error(error.message, {
            style: {
                background: "#DC2626",
                color: "#fff",
                fontSize: '16px'
            },
        })
        throw new Error(error.message);
    }

    return data ?? [];
}

//-------Get All Brands----------
export async function fetchBrands(): Promise<BrandProps[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from('brands').select('*');

    if (error) {
        toast.error(error.message, {
            style: {
                background: "#DC2626",
                color: "#fff",
                fontSize: '16px'
            },
        })
        throw new Error(error.message);
    }

    return data ?? [];

}

//-------Get All Products----------
export async function fetchProducts({page = 1, limit = 10}: FetchProductParams): Promise<FetchProductsResponse> {
    const supabase = await createClient()

    const from = (page - 1) * limit;
    const to = from + limit -1;

    const { data, error, count } = await supabase
        .from('products')
        .select("*", { count: "exact" })
        .order("created_at", {ascending: false})
        .range(from, to);
    if (error) {
        toast.error(error.message, {
            style: {
                background: "#DC2626",
                color: "#fff",
                fontSize: '16px'
            },
        })
        throw new Error(error.message);
    }
    return {
        products: data ?? [],
        total: count ?? 0,
        page,
        limit,
        totalPages: Math.ceil((count ?? 0) / limit),
    };
}

//--------Add Product-----------
export async function addProduct(formData: any) {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('products')
        .insert([
            formData
        ])
        .select()
    if (error) {
        toast.error(error.message, {
            style: {
                background: "#DC2626",
                color: "#fff",
                fontSize: '16px'
            },
        })
        throw new Error(error.message);
    }

    return data;
}

//----------file Upload ----------
export async function uploadFile(file: File) {
    if (!file) throw new Error('No file provided');

    const fileExt = file.name.split('.').pop();
    if (!fileExt) throw new Error('Invalid file');

    // ✅ create unique file name
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `products/${fileName}`;

    const supabase = await createClient();
    const { error } = await supabase.storage.from('product-images').upload(filePath, file, {
        upsert: true,
    });
    if (error) {
        toast.error(error.message, {
            style: {
                background: "#DC2626",
                color: "#fff",
                fontSize: '16px'
            },
        })
        throw new Error(error.message);
    }

    const { data } = await supabase.storage.from('product-images').getPublicUrl(filePath)

    return data.publicUrl;
}