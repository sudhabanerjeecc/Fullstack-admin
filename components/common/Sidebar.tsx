import React, { useState } from 'react'
import Logo from './Logo'
import { sidebarMenu } from '@/data/sidebarMenu'
import Link from 'next/link'

export default function Sidebar() {
    const [isOpenDropdown, setIsOpenDropdown] = useState<number | null>(null);
    const handleToggleSideBar = (index: number) => {
        setIsOpenDropdown((prev) => (prev === index ? null : index));
    }
    return (
        <div className="sa-app__sidebar">
            <div className="sa-sidebar">
                {/* <!-- logo --> */}
                <Logo />
                {/* <!-- logo / end --> */}
                <div className="sa-sidebar__body" data-simplebar="">
                    <ul className="sa-nav sa-nav--sidebar" data-sa-collapse="">
                        {sidebarMenu?.sections.map((parentMenu, sectionIndex: number) => (
                            <li key={sectionIndex} className={`sa-nav__section`}>
                                <div className="sa-nav__section-title"><span>{parentMenu?.title}</span></div>
                                <ul className="sa-nav__menu sa-nav__menu--root">
                                    {parentMenu?.items?.map((subMenu, index: number) => {
                                        const isOpen = isOpenDropdown === index
                                        return (
                                            <li key={index} className={`sa-nav__menu-item sa-nav__menu-item--has-icon ${isOpen ? 'sa-nav__menu-item--open' : ''}`}
                                                data-sa-collapse-item="sa-nav__menu-item--open">
                                                <Link href={subMenu?.href || "#"} className="sa-nav__link" onClick={() => handleToggleSideBar(index)} data-sa-collapse-trigger="">
                                                    <span className="sa-nav__icon"><i className="fas fa-lock"></i></span>
                                                    <span className="sa-nav__title">{subMenu?.title}</span>
                                                    {subMenu?.children &&
                                                        <span className="sa-nav__arrow">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9"
                                                                viewBox="0 0 6 9" fill="currentColor">
                                                                <path
                                                                    d="M5.605,0.213 C6.007,0.613 6.107,1.212 5.706,1.612 L2.696,4.511 L5.706,7.409 C6.107,7.809 6.107,8.509 5.605,8.808 C5.204,9.108 4.702,9.108 4.301,8.709 L-0.013,4.511 L4.401,0.313 C4.702,-0.087 5.304,-0.087 5.605,0.213 Z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    }
                                                </Link>
                                                {subMenu?.children && (
                                                    <ul className="sa-nav__menu sa-nav__menu--sub" data-sa-collapse-content="">
                                                        {subMenu?.children?.map((children, index: number) => (
                                                            <li key={index} className="sa-nav__menu-item">
                                                                <Link href={`${children?.href}`} className="sa-nav__link">
                                                                    <span className="sa-nav__menu-item-padding"></span>
                                                                    <span className="sa-nav__title">{children?.title}</span>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="sa-app__sidebar-shadow"></div>
            <div className="sa-app__sidebar-backdrop" data-sa-close-sidebar=""></div>
        </div>
    )
}
