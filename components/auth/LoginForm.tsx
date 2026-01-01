"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { loginUser, loginWithOtp, signInWithGithub, verifyOtp } from '@/helper/api/auth/auth';
import LoaderCustom from '../common/Loader';
import GoogleIcon from '../icons/GoogleIcon';
import GitHubIcon from '../icons/GitHubIcon';
import FacebookIcon from '../icons/FacebookIcon';
import { ProviderTypes } from '@/types/AuthTypes';

const LoginForm = () => {

    const [loading, setLoading] = useState(false);
    const [isOtpLogin, setOtpLogin] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        otp: ''
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
    //------------Login(email and password)----------------//
    const handleLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {

            //-------Phone Login----------
            if (isOtpLogin && !isOtpSent) {
                if (!formData.phone) {
                    toast.error('Phone number is required', {
                        style: {
                            background: "#DC2626",
                            color: "#fff",
                            fontSize: '16px'
                        },
                    })
                }
                await loginWithOtp({ phone: `91${formData.phone}` })
                setIsOtpSent(true);
                toast.success('OTP sent to your phone Successfull!', {
                    style: {
                        background: 'green',
                        color: "#fff",
                        fontSize: '16px',
                    }
                })
                return;
            }

            if (isOtpLogin && isOtpSent) {
                if (!formData.otp) throw new Error('OTP is required');
                await verifyOtp({
                    phone: `91${formData.phone}`,
                    otp: formData.otp,
                });

                toast.success('Login Successfull!', {
                    style: {
                        background: 'green',
                        color: "#fff",
                        fontSize: '16px',
                    }
                })
                router.push('/dashboard');
                return;
            }

            if (!formData.email || !formData.password) {
                throw new Error('Email and password are required');
            }

            //-------Email Login---------
            const data = await loginUser({
                email: formData.email,
                password: formData.password,
            });
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

    //------------Login with Provider(Google, Github, facebook)----------------//
    const handleProviderLogin = async (provider: ProviderTypes): Promise<void> => {
        try {

            await signInWithGithub(provider);

        } catch (error: any) {
            toast.error(error.message, {
                style: {
                    background: "#DC2626",
                    color: "#fff",
                    fontSize: '16px'
                }
            })
        }
    }

    if (loading) {
        return (
            <LoaderCustom />
        )
    }

    return (
        <div className="card w-25x grow flex-sm-grow-0 m-sm-auto">
            <form onSubmit={handleLogin} >
                <div className="card-body p-sm-5 m-sm-3 grow-0">
                    <h1 className="mb-0 fs-3">Sign In {isOtpLogin && 'using OTP'}</h1>
                    <div className="fs-exact-14 text-muted mt-2 pt-1 mb-5 pb-2">Log in to your account to continue.</div>
                    {!isOtpLogin && (
                        <>
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
                        </>
                    )}
                    {isOtpLogin && (
                        <>
                            <div className="mb-4">
                                <Label className="form-label" htmlFor="email">Phone</Label>
                                <div className='flex'>
                                    <Input
                                        className="form-control form-control-lg w-[50px]! border-r-0!"
                                        type='text'
                                        readOnly
                                        name='phone'
                                        value='91'
                                    />
                                    <Input
                                        onChange={handleChangeInput}
                                        value={formData.phone}
                                        type="phone"
                                        id='phone'
                                        name='phone'
                                        className="form-control form-control-lg w-[calc(100%-24px)]"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>
                            {isOtpSent && (
                                <div className="mb-4">
                                    <Label className="form-label" htmlFor="email">OTP</Label>
                                    <Input
                                        onChange={handleChangeInput}
                                        value={formData.otp}
                                        type="text"
                                        name='otp'
                                        className="form-control form-control-lg"
                                        placeholder="Enter OTP"
                                    />
                                </div>
                            )}
                        </>
                    )}
                    <div className='flex flex-col gap-3'>
                        <Button className="btn btn-primary btn-lg w-100" type="submit">
                            {isOtpLogin
                                ? isOtpSent ? 'Verify OTP' : 'Send OTP'
                                : 'Login'}
                        </Button>
                    </div>
                    <div className="mb-4 py-2 w-full">
                        <div className="flex items-center justify-between w-full">
                            <Link href="/auth/forgot-password">Forgot password?</Link>
                            <span onClick={() => setOtpLogin((prev) => !prev)} className='bg-transparent text-black btn-link cursor-pointer'>Login with OTP</span>
                        </div>
                    </div>
                </div>
            </form>
            <div className="sa-divider sa-divider--has-text">
                <div className="sa-divider__text">Or continue with</div>
            </div>
            <div className="card-body p-sm-5 m-sm-3 grow-0">
                <div className="grid grid-cols-2 gap-3">
                    <Button onClick={() => handleProviderLogin('google')} type="button" className="flex justify-center items-center bg-gray-300 hover:bg-gray-400">
                        <GoogleIcon className="w-10 h-10" />
                    </Button>
                    <Button onClick={() => handleProviderLogin('github')} type="button" className="flex justify-center items-center bg-gray-300 hover:bg-gray-400">
                        <GitHubIcon className="w-10 h-10 fill-black" />
                    </Button>
                    {/* <Button onClick={() => handleProviderLogin('facebook')} type="button" className="flex justify-center items-center bg-gray-300 hover:bg-gray-400">
                        <FacebookIcon className="w-10 h-10" />
                    </Button> */}
                </div>
                <div className="form-group mb-0 mt-4 pt-2 text-center text-muted">Don&#x27;t have an account?
                    <Link href="/auth/signup">Sign up</Link></div>
            </div>
        </div>
    )
}

export default LoginForm