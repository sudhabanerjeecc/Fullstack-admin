import { createClient } from "@/lib/supabase/client";
import { format } from "path";
import { toast } from "sonner";

//-------Get All Category----------
export async function fetchCategories() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('categories')
        .select('*')

    return data;
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