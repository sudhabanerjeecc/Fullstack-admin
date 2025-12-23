"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/helper/api/auth/auth';
import LoaderCustom from '../common/Loader';

const LoginForm = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
    });

    const router = useRouter();

    //--------Event Handler----------------//
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }
    //------------Login ----------------//
    const handleLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await loginUser({
                email: formData.email,
                password: formData.password,
            });

            console.log(data);
            toast.success('Login Successfull!', {
                style: {
                    background: 'green',
                    color: "#fff",
                    fontSize: '16px',
                }
            })
            router.push('/dashboard');
        } catch (error: any) {
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
        <form onSubmit={handleLogin} className="card w-25x grow flex-sm-grow-0 m-sm-auto">
            <div className="card-body p-sm-5 m-sm-3 grow-0">
                <h1 className="mb-0 fs-3">Sign In</h1>
                <div className="fs-exact-14 text-muted mt-2 pt-1 mb-5 pb-2">Log in to your account to continue.</div>
                <div className="mb-4">
                    <Label className="form-label" htmlFor="email">Email Address</Label>
                    <Input
                        onChange={handleChangeInput}
                        value={formData.email}
                        type="email"
                        id='email'
                        name='email'
                        className="form-control form-control-lg"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-4">
                    <Label className="form-label" htmlFor="password">Password</Label>
                    <Input
                        onChange={handleChangeInput}
                        value={formData.password}
                        type="password"
                        id='password'
                        name='password'
                        className="form-control form-control-lg"
                        placeholder="Password"
                    />
                </div>
                <div className="mb-4 row py-2 flex-wrap">
                    {/* <div className="col-auto me-auto">
                        <Label className="form-check mb-0">
                            <Input
                                id='rememberMe'
                                onChange={handleChangeInput}
                                checked={formData.rememberMe}
                                name='rememberMe'
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span className="form-check-label">Remember me</span>
                        </Label>
                    </div> */}
                    <div className="col-auto d-flex align-items-center">
                        <Link href="/auth/forgot-password">Forgot password?</Link>
                    </div>
                </div>
                <div>
                    <Button type="submit" className="btn btn-primary btn-lg w-100">Sign In</Button>
                </div>
            </div>
            <div className="sa-divider sa-divider--has-text">
                <div className="sa-divider__text">Or continue with</div>
            </div>
            <div className="card-body p-sm-5 m-sm-3 grow-0">
                <div className="d-flex flex-wrap me-n3 mt-n3">
                    <button type="button" className="btn btn-secondary grow me-3 mt-3">Google</button>
                    <button type="button" className="btn btn-secondary grow me-3 mt-3">Facebook</button>
                    <button type="button" className="btn btn-secondary grow me-3 mt-3">Twitter</button>
                </div>
                <div className="form-group mb-0 mt-4 pt-2 text-center text-muted">Don&#x27;t have an account?
                    <Link href="/auth/signup">Sign up</Link></div>
            </div>
        </form>
    )
}

export default LoginForm