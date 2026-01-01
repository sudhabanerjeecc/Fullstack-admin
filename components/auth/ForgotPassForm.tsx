"use client"
import { forgotPassword } from '@/helper/api/auth/auth';
import Link from 'next/link'
import { useState } from 'react';
import { toast } from 'sonner';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const ForgotPassForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await forgotPassword({
                email: formData.email
            })

            toast.success('Email Sent!', {
                style: {
                    background: 'green',
                    color: "#fff",
                    fontSize: '16px',
                }
            })
        } catch (error: any) {
            console.error(error.message);
            toast.error(error.message, {
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
    return (
        <form onSubmit={handleForgotPassword} className="card-body p-sm-5 m-sm-3 grow-0">
            <h1 className="mb-0 fs-3">Forgot password?</h1>
            <div className="fs-exact-14 text-muted mt-2 pt-1 mb-5 pb-2">Enter the email address associated with your account and we will send a link to reset your password.</div>
            <div className="mb-4">
                <Label className="form-label">Email Address</Label>
                <Input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-control-lg" />
            </div>
            <div>
                <Button
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary btn-lg w-100">
                    {loading ? 'Loading' : 'Reset Password'}
                </Button>
            </div>
            <div className="form-group mb-0 mt-4 pt-2 text-center text-muted">Remember your password?
                <Link href="/auth/login">Sign in</Link>
            </div>
        </form>
    )
}

export default ForgotPassForm