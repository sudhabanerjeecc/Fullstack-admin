"use client"
import { ListFilter } from 'lucide-react';
import React, { useState } from 'react'



export default function ProductFilter() {
    const [expandFilters, setExpandFilters] = useState(true);
    const [filters, setFilters] = useState({
        name: '',
        sku: '',
        priceMin: '',
        priceMax: '',
        stockMin: '',
        stockMax: ''
    });

    const handleFilterChange = (field: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            name: '',
            sku: '',
            priceMin: '',
            priceMax: '',
            stockMin: '',
            stockMax: ''
        });
    }
    
  return (
    <div className="card mb-4 shadow-sm">
        <div 
            className="card-header d-flex justify-content-between align-items-center cursor-pointer p-4"
            onClick={() => setExpandFilters(!expandFilters)}
            style={{ cursor: 'pointer' }}
        >
            <div className="d-flex align-items-center gap-2">
                <ListFilter />
                <h5 className="mb-0 fw-600">Filters</h5>
            </div>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{
                    transform: expandFilters ? 'rotate(0deg)' : 'rotate(-90deg)',
                    transition: 'transform 0.3s ease'
                }}
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>

        {expandFilters && (
            <div className="card-body p-4 border-top">
                <div className="grid grid-cols-4 gap-3">
                    {/* Product Name Filter */}
                    <div className="">
                        <label className="form-label fw-500 text-dark mb-2">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Name, SKU..."
                            value={filters.name}
                            onChange={(e) => handleFilterChange('name', e.target.value)}
                            style={{ borderColor: '#e5e7eb' }}
                        />
                    </div>

                    {/* Price Range Filter */}
                    <div className="">
                        <label className="form-label fw-500 text-dark mb-2">Price Range</label>
                        <div className="d-flex gap-2">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Min"
                                value={filters.priceMin}
                                onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                                style={{ borderColor: '#e5e7eb' }}
                            />
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Max"
                                value={filters.priceMax}
                                onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                                style={{ borderColor: '#e5e7eb' }}
                            />
                        </div>
                    </div>

                    {/* Stock Range Filter */}
                    <div className="">
                        <label className="form-label fw-500 text-dark mb-2">Stock Range</label>
                        <div className="flex gap-2 ">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Min"
                                value={filters.stockMin}
                                onChange={(e) => handleFilterChange('stockMin', e.target.value)}
                                style={{ borderColor: '#e5e7eb' }}
                            />
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Max"
                                value={filters.stockMax}
                                onChange={(e) => handleFilterChange('stockMax', e.target.value)}
                                style={{ borderColor: '#e5e7eb' }}
                            />
                        </div>
                    </div>

                    <div className=" flex justify-end items-end">
                        <label className="form-label fw-500 text-dark mb-2">&nbsp;</label>
                        <div className='gap-2 flex flex-end justify-end'>
                            
                            <button 
                                className="btn btn-primary"
                            >
                                Apply Filters
                            </button>
                            <button 
                                className="btn btn-secondary"
                                onClick={resetFilters}
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                </div>

                {/* Filter Actions */}
                <div className="d-flex gap-2 mt-4 pt-3 border-top">
                    
                </div>
            </div>
        )}
    </div>
  )
}