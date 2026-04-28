"use client"
import Breadcum from '@/components/common/Breadcum'
import { fetchProducts } from '@/helper/api/product/product';
import { ProductProps } from '@/types/ProductsTypes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Page() {

    const [product, setProduct] = useState<ProductProps[]>([]);
    const [filteredProduct, setFilteredProduct] = useState<ProductProps[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const handleProduct = async () => {
            const data = await fetchProducts();
            setProduct(data);
            setFilteredProduct(data);
        }
        handleProduct();
    }, []);

    // Handle search
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setCurrentPage(1);

        const filtered = product.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.sku.toLowerCase().includes(term) ||
            p.id.toString().includes(term)
        );
        setFilteredProduct(filtered);
    };

    // Pagination
    const totalPages = Math.ceil(filteredProduct.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProduct.slice(startIndex, endIndex);

    return (
        <>
            <Breadcum
                title={'products'}
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: 'Products', active: true }
                ]}
                actions={
                    <>
                        <Link href="#" className="btn btn-secondary me-3">
                            Import Product
                        </Link>
                        <Link href="/products/add" className="btn btn-primary">
                            New Product
                        </Link>
                    </>
                }
            />
            <div className="mx-xxl-3 px-4 px-sm-5 pb-6">
                <div className="sa-layout">
                    <div className="sa-layout__backdrop" data-sa-layout-sidebar-close=""></div>
                    <div className="sa-layout__content">
                        <div className="card">
                            {/* Search Bar */}
                            <div className="p-4">
                                <div className="row g-4">
                                    <div className="col-auto sa-layout__filters-button">
                                        <button className="btn btn-sa-muted btn-sa-icon fs-exact-16" data-sa-layout-sidebar-open="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                                <path d="M7,14v-2h9v2H7z M14,7h2v2h-2V7z M12.5,6C12.8,6,13,6.2,13,6.5v3c0,0.3-0.2,0.5-0.5,0.5h-2 C10.2,10,10,9.8,10,9.5v-3C10,6.2,10.2,6,10.5,6H12.5z M7,2h9v2H7V2z M5.5,5h-2C3.2,5,3,4.8,3,4.5v-3C3,1.2,3.2,1,3.5,1h2 C5.8,1,6,1.2,6,1.5v3C6,4.8,5.8,5,5.5,5z M0,2h2v2H0V2z M9,9H0V7h9V9z M2,14H0v-2h2V14z M3.5,11h2C5.8,11,6,11.2,6,11.5v3 C6,14.8,5.8,15,5.5,15h-2C3.2,15,3,14.8,3,14.5v-3C3,11.2,3.2,11,3.5,11z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            placeholder="Start typing to search for products"
                                            className="form-control form-control--search mx-auto"
                                            id="table-search"
                                            value={searchTerm}
                                            onChange={handleSearch}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sa-divider"></div>

                            {/* Simple Table */}
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>SKU</th>
                                            <th>Regular Price</th>
                                            <th>Sale Price</th>
                                            <th>Stock</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentProducts.length > 0 ? (
                                            currentProducts.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        {item.image_url ? (
                                                            <Image
                                                                src={item.image_url}
                                                                alt={item.name}
                                                                style={{
                                                                    width: 40,
                                                                    height: 40,
                                                                    objectFit: "cover",
                                                                    borderRadius: 4,
                                                                }}
                                                            />
                                                        ) : (
                                                            <span className="text-muted">-</span>
                                                        )}
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{item.sku}</td>
                                                    <td>${item.regular_price}</td>
                                                    <td>${item.sale_price}</td>
                                                    <td>
                                                        <span className={`badge ${item.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                                                            {item.stock}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <Link
                                                                href={`/products/edit/${item.id}`}
                                                                className="btn btn-sm btn-primary"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button className="btn btn-sm btn-danger">
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={8} className="text-center py-4 text-muted">
                                                    No products found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="d-flex justify-content-between align-items-center p-4">
                                    <div className="text-muted small">
                                        Showing {startIndex + 1} to {Math.min(endIndex, filteredProduct.length)} of {filteredProduct.length} products
                                    </div>
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination mb-0">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button
                                                    className="page-link"
                                                    onClick={() => setCurrentPage(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                >
                                                    Previous
                                                </button>
                                            </li>
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                                    <button
                                                        className="page-link"
                                                        onClick={() => setCurrentPage(page)}
                                                    >
                                                        {page}
                                                    </button>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <button
                                                    className="page-link"
                                                    onClick={() => setCurrentPage(currentPage + 1)}
                                                    disabled={currentPage === totalPages}
                                                >
                                                    Next
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}