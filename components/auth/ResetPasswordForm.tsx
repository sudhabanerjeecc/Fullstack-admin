'use client';

import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { updateUser } from "@/helper/api/auth/auth";
import { toast } from "sonner";
import LoaderCustom from "../common/Loader";
import { useRouter } from "next/navigation";

const ResetPasswordForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match', {
                style: {
                    background: "#DC2626",
                    color: "#fff",
                    fontSize: '16px'
                },
            })
        }
        setLoading(true);
        try {

            const updatedPass = await updateUser({
                password: formData.password
            })

            toast.success('Password updated successfully!', {
                style: {
                    background: 'green',
                    color: "#fff",
                    fontSize: '16px',
                }
            })

            router.push("/auth/login");

        } catch (error: any) {
            toast.error(error, {
                style: {
                    background: "#DC2626",
                    color: "#fff",
                    fontSize: '16px'
                },
            })
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        <LoaderCustom />
    }

    return (
        <form onSubmit={handleResetPassword} className="card-body p-sm-5 m-sm-3 grow-0">
            <h1 className="mb-0 fs-3">Reset password?</h1>
            <div className="fs-exact-14 text-muted mt-2 pt-1 mb-5 pb-2">Enter the email address associated with your account and we will send a link to reset your password.</div>
            <div className="mb-4">
                <Label className="form-label">Password</Label>
                <Input
                    type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control form-control-lg" />
            </div>
            <div className="mb-4">
                <Label className="form-label">Confirm Password</Label>
                <Input
                    type="password"
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-control form-control-lg" />
            </div>
            <div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary btn-lg w-100">
                    {loading ? 'Loading' : 'Update Password'}
                </Button>
            </div>
            <div className="form-group mb-0 mt-4 pt-2 text-center text-muted">Remember your password?
                <Link href="/auth/login">Sign in</Link>
            </div>
        </form>
    )
}

export default ResetPasswordForm