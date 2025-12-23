"use client";
import Footer from '@/components/common/Footer'
import HeaderTop from '@/components/common/HeaderTop'
import Sidebar from '@/components/common/Sidebar'
import { checkAuth, getUserDetails } from '@/helper/api/auth/auth';
import { UserTypes } from '@/types/AuthTypes';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProtectedLayoutClient = ({ children }: { children: React.ReactNode }) => {

    const [isActiveSidebar, setIsActiveSidebar] = useState(true);
    const [userDetails, setUserDetails] = useState<UserTypes | null>();

    const router = useRouter();

    //------Check user Session---------
    useEffect(() => {

        const verifyAuth = async () => {
            const session = await checkAuth()

            if (!session) {
                router.push('/auth/login');
            }

            const loginUser = await getUserDetails();
            setUserDetails(loginUser);
        }

        verifyAuth()

    }, [router]);

    const handleToggleSidebar = () => {
        setIsActiveSidebar((prev) => !prev);
    }

    return (
        <div className={`sa-app sa-app--mobile-sidebar-hidden 
            sa-app--toolbar-fixed ${isActiveSidebar ? 'sa-app--desktop-sidebar-shown' : 'sa-app--desktop-sidebar-hidden'} `}>
            <Sidebar />
            <div className="sa-app__content">
                <HeaderTop userData={userDetails || null} onClick={handleToggleSidebar} />
                <div id="top" className="sa-app__body px-2 px-lg-4">
                    {children}
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default ProtectedLayoutClient