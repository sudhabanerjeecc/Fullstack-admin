import Link from 'next/link'
import React from 'react'

const Breadcum = () => {
    return (
        <div className="mx-xxl-3 px-4 px-sm-5">
            <div className="py-5">
                <div className="row g-4 align-items-center">
                    <div className="col">
                        <nav className="mb-2" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-sa-simple">
                                <li className="breadcrumb-item"><Link href="index.html">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                        <h1 className="h3 m-0">Products</h1>
                    </div>
                    <div className="col-auto d-flex">
                        <Link href="#" className="btn btn-secondary me-3">Import</Link>
                        <Link href="app-product.html" className="btn btn-primary">New product</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcum