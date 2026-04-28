"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CameraOff, Pencil, Trash } from "lucide-react";
import { fetchProducts } from "@/helper/api/product/product";
import { ProductProps } from "@/types/ProductsTypes";
import { toast } from "sonner";
import { getValidImageUrl } from "@/lib/getValidImageUrl";

function ProductListTable() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const limit = 10;

  const fetchAllProduct = async (pageNumber = 1) => {

    try {
      const res = await fetchProducts({
        page: pageNumber,
        limit,
      });

      setProducts(res.products);
      setTotalPages(res.totalPages);
      setTotalProducts(res.total);
      setPage(res.page);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch product";

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProduct(page);
  }, [page]);

  const startItem = totalProducts === 0 ? 0 : (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, totalProducts);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Regular Price</th>
              <th>Sale Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : products.length > 0 ? (
              products.map((item) => (
                <tr key={item.id} className="border-bottom align-middle">
                  <td>
                    <div className="flex justify-start items-center gap-3">
                        {item.image_url ? (
                        <Image
                            width={50}
                            height={50}
                            className="rounded-full w-12 h-12"
                            src={getValidImageUrl(item.image_url)!}
                            alt={item.name}
                            style={{
                            objectFit: "cover",
                            }}
                        />
                        ) : (
                        <span className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                            <CameraOff className="text-gray-400" />
                        </span>
                        )}
                        <span className="fw-500 text-dark">{item.name}</span>
                    </div>
                  </td>

                  <td>
                    <code className="px-2 py-1 bg-light rounded">
                      {item.sku}
                    </code>
                  </td>

                  <td>
                    <span className="text-muted">
                      ${item.regular_price}
                    </span>
                  </td>

                  <td>
                    <span className="fw-600">
                      {item.sale_price ? `$${item.sale_price}` : "-"}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        item.stock > 0 ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {item.stock} in stock
                    </span>
                  </td>

                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        href={`/products/edit/${item.id}`}
                        className="btn btn-primary d-flex gap-2 align-items-center"
                      >
                        <Pencil size={15} />
                        <span>Edit</span>
                      </Link>

                      <button className="btn btn-danger d-flex gap-2 align-items-center">
                        <Trash size={15} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4 text-muted">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="card-footer bg-light p-4 border-top">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-muted small mb-0">
            Showing {startItem} to {endItem} of {totalProducts} results
          </p>

          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  Previous
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <li
                    key={pageNumber}
                    className={`page-item ${
                      page === pageNumber ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                )
              )}

              <li
                className={`page-item ${
                  page === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  disabled={page === totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default ProductListTable;