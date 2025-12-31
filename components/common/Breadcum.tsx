import { BreadcumTypes } from '@/types/GeneralTyles'
import Link from 'next/link'
import React from 'react'

const Breadcum = ({
    title,
    items = [],
    actions = null
}: BreadcumTypes) => {
    return (
        <div className="mx-xxl-3 px-4 px-sm-5">
            <div className="py-5">
                <div className="row g-4 align-items-center">
                    <div className="col">
                        <nav className="mb-2" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-sa-simple">
                                {items?.map((item, index) => (
                                    <li key={index} className={`breadcrumb-item ${item.active ? 'active' : ''}`}
                                        aria-current={item.active ? 'page' : undefined}>
                                        {item?.href ? (
                                            <Link href={item.href}>{item.label} &nbsp;/</Link>
                                        ) : (
                                            item.label
                                        )}

                                    </li>
                                ))}
                            </ol>
                        </nav>
                        <h1 className="h3 m-0 capitalize">{title}</h1>
                    </div>
                    {actions && <div className="col-auto d-flex">{actions}</div>}
                </div>
            </div>
        </div>
    )
}

export default Breadcum