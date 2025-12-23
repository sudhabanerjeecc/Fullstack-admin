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
    name?: string;
}