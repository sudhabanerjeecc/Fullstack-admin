import { Provider } from "@supabase/supabase-js";

export interface SignupUserTypes {
    full_name?: string;
    email: string;
    password: string;
    phone?: string;
}
export interface ResetPasswordTypes {
    email: string;
}
export interface UpdatePasswordTypes {
    password: string;
}
export interface UserTypes {
    id: string;
    email?: string;
    phone?: string;
    full_name?: string;
    avatar?: string;
    avatar_url?: string;
    role?: string;
    created_at?: string;
}
export interface LoginWithOtp {
    phone: string;
    otp: string;
}

// export interface ProviderTypes {
//     provider: string;
// }

export type ProviderTypes = Provider