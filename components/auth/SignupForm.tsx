"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { signupUser } from '@/helper/api/auth/auth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import LoaderCustom from '../common/Loader';
import { Spinner } from '../ui/spinner';

const SignupForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,

        }))
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await signupUser({
                full_name: formData.fullName,
                email: formData.email,
                password: formData.password,
                phone: formData.phone,
            })

            toast.success('User register Successfully!', {
                style: {
                    background: 'green',
                    color: "#fff",
                    fontSize: '16px',
                }
            })
            router.push('/auth/login');
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

    if (loading) {
        return (
            <LoaderCustom />
        )
    }

    return (
        <form onSubmit={handleRegister} className="card w-25x grow flex-sm-grow-0 m-sm-auto">
            <div className="card-body p-sm-5 m-sm-3 grow-0">
                <h1 className="mb-0 fs-3">Sign Up</h1>
                <div className="fs-exact-14 text-muted mt-2 pt-1 mb-5 pb-2">Fill out the form to create a new account.</div>
                <div className="mb-4">
                    <Label className="form-label">Full Name</Label>
                    <Input
                        onChange={handleChange}
                        value={formData.fullName}
                        name='fullName'
                        type="text"
                        className="form-control form-control-lg" />
                </div>
                <div className="mb-4">
                    <Label className="form-label">Email Address</Label>
                    <Input
                        onChange={handleChange}
                        value={formData.email}
                        name='email'
                        type="email"
                        className="form-control form-control-lg" />
                </div>
                <div className="mb-4">
                    <Label className="form-label">Phone Number</Label>
                    <Input
                        onChange={handleChange}
                        value={formData.phone}
                        name='phone'
                        type="text"
                        className="form-control form-control-lg" />
                </div>
                <div className="mb-4">
                    <Label className="form-label">Password</Label>
                    <Input
                        onChange={handleChange}
                        value={formData.password}
                        name='password'
                        type="password"
                        className="form-control form-control-lg" />
                </div>
                <div>
                    <Button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                    >
                        {loading ? <Spinner className='w-8 h-8 mx-auto' /> : 'Sign Up'}

                    </Button>
                </div>
            </div>
            <div className="sa-divider sa-divider--has-text">
                <div className="sa-divider__text">Or continue with</div>
            </div>
            <div className="card-body p-sm-5 m-sm-3 grow-0">
                <div className="d-flex flex-wrap me-n3 mt-n3"><button type="button" className="btn btn-secondary flex-grow-1 me-3 mt-3">Google</button><button type="button" className="btn btn-secondary flex-grow-1 me-3 mt-3">Facebook</button><button type="button" className="btn btn-secondary flex-grow-1 me-3 mt-3">Twitter</button></div>
                <div className="form-group mb-0 mt-4 pt-2 text-center text-muted">Already have an account?
                    <Link href="/auth/login">Sign in</Link></div>
            </div>
        </form>
    )
}

export default SignupForm