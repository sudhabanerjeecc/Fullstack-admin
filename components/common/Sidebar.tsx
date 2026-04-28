import React, { useState } from 'react'
import Logo from './Logo'
import { sidebarMenu } from '@/data/sidebarMenu'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react';

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
                                        const Icon = subMenu?.icon;
                                        return (
                                            <li key={index} className={`sa-nav__menu-item sa-nav__menu-item--has-icon ${isOpen ? 'sa-nav__menu-item--open' : ''}`}
                                                data-sa-collapse-item="sa-nav__menu-item--open">
                                                <Link href={subMenu?.href || "#"} className="sa-nav__link" onClick={() => handleToggleSideBar(index)} data-sa-collapse-trigger="">
                                                    <span className="sa-nav__icon">
                                                        {Icon && typeof Icon !== "string" ? <Icon size={20} /> : null}
                                                    </span>
                                                    <span className="sa-nav__title">{subMenu?.title}</span>
                                                    {subMenu?.children &&
                                                        <span className="sa-nav__arrow">
                                                            <ChevronRight />
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
