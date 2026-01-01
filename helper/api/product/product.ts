import { createClient } from "@/lib/supabase/client";
import { CategoryProps } from "@/types/ProductsTypes";
import { format } from "path";
import { toast } from "sonner";

//-------Get All Category----------
export async function fetchCategories(): Promise<CategoryProps[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('categories')
        .select('*')

    return data ?? [];
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