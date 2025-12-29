"use client";
import Footer from '@/components/common/Footer'
import HeaderTop from '@/components/common/HeaderTop'
import Sidebar from '@/components/common/Sidebar'
import { checkAuth, getUserDetails } from '@/helper/api/auth/auth';
import { profiles } from '@/helper/api/users/user';
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

            const authUser = await getUserDetails();
            if (!authUser) {
                router.replace('/auth/login');
                return;
            }

            console.log('loginUser=====', authUser);

            const profile = await profiles();
            const profileData = profile?.[0] ?? profile?.['0'] ?? {};
            setUserDetails({
                id: authUser?.id,
                email: authUser?.email,
                avatar: authUser?.user_metadata?.avatar_url,
                phone: authUser.phone || profileData.phone,
                full_name: profileData.full_name,
                created_at: profileData.created_at,
            })
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