import { LoginWithOtp, ProviderTypes, ResetPasswordTypes, SignupUserTypes, UpdatePasswordTypes } from "@/types/AuthTypes";
import { toast } from "sonner";
import { createClient } from '@/lib/supabase/client'
import { Provider } from "@supabase/supabase-js";

// const supabase = createClient(supabase_url, anon_key)

//--------Signup User--------
export async function signupUser({ full_name, email, password, phone }: SignupUserTypes) {
    const supabase = await createClient();
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
    const supabase = await createClient();
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
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();
    return session;
}
//--------Logout User--------
export async function logOutUser() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut()
    return error;
}

//-------Forgot Password---------------
export async function forgotPassword({ email }: ResetPasswordTypes) {
    const supabase = await createClient();
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
    const supabase = await createClient();
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
    const supabase = await createClient();
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

//-------------Login using OTP------------------
export async function loginWithOtp({ phone }: { phone: string }) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOtp({ phone })

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

//----------Verify Login with OTP-----------------
export async function verifyOtp({ phone, otp }: LoginWithOtp) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.verifyOtp({
        phone: phone,
        token: otp,
        type: 'sms'
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

//----------Login Using (Github, google, facebook)-----------
export async function signInWithGithub(provider: Provider) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${location.origin}/auth/callback`,
        },
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