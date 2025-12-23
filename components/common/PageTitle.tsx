import { PageTitleProps } from '@/types/PageTitleTypes'
import Link from 'next/link'
import React from 'react'

export default function PageTitle({ title }: PageTitleProps) {
    return (
        <div className="py-5">
            <div className="row g-4 align-items-center">
                <div className="col">
                    <h1 className="h3 m-0">{title}</h1>
                </div>
                <div className="col-auto d-flex">
                    <Link href="#" className="btn btn-primary">Export</Link>
                </div>
            </div>
        </div>
    )
}
