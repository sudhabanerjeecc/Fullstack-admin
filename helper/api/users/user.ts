import { createClient } from '@/lib/supabase/client'
import { toast } from "sonner";

export async function profiles() {
    const supabase = await createClient();
    const { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')

    if (error) {
        toast.error(error.message, {
            style: {
                background: "#DC2626",
                color: "#fff",
                fontSize: '16px'
            },
        })
        throw new Error(error.message)
    }

    return profiles;
}