import { supabase } from "@/config/client/supabaseClient";
import { ResetPasswordTypes, SignupUserTypes, UpdatePasswordTypes } from "@/types/AuthTypes";
import { toast } from "sonner";

//--------Signup User--------
export async function signupUser({ full_name, email, password, phone }: SignupUserTypes) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

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

    console.log('created', data);

    if (data?.user && phone && full_name) {
        const { error: profileError } = await supabase
            .from('profiles')
            .insert({
                id: data.user.id,
                phone,
                full_name,
            });

        if (profileError) {
            toast.error(profileError.message, {
                style: {
                    background: "#DC2626",
                    color: "#fff",
                    fontSize: '16px'
                },
            })
            throw new Error(profileError.message);
        }
    }

    return data;
}
//--------Login User--------
export async function loginUser({ email, password }: SignupUserTypes) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

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

    return data;
}
//--------Check Login User Session--------
export async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
}
//--------Logout User--------
export async function logOutUser() {
    const { error } = await supabase.auth.signOut()
    return error;
}

//-------Forgot Password---------------
export async function forgotPassword({ email }: ResetPasswordTypes) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
    })
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
    return data;
}

//---------Reset Password---------------
export async function updateUser({ password }: UpdatePasswordTypes) {
    const { data, error } = await supabase.auth.updateUser({
        password
    })

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

    return data;
}

//------------Get User-----------------
export async function getUserDetails() {
    const { data: { user }, error } = await supabase.auth.getUser()
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

    return user;

}