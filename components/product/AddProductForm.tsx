"use client";
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link';
import { Button } from '../ui/button';
import LoaderCustom from '../common/Loader';
import { toast } from 'sonner';
import { addProduct } from '@/helper/api/product/product';

const AddProductForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        productName: '',
        productSlug: '',
        description: '',
        shortDescription: '',
        salePrice: '',
        regularPrice: '',
        sku: '',
        quantity: '',
        productImage: ''

    })
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleAddProduct = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addProduct({
                name: formData.productName,
                sku: formData.sku,
                regular_price: formData.regularPrice,
                sale_price: formData.salePrice,
                stock: formData.quantity,
                description: formData.description,
                short_description: formData.shortDescription

            })
            toast.success('Product Added Successfully!', {
                style: {
                    background: 'green',
                    color: "#fff",
                    fontSize: '16px',
                }
            })
        } catch (error: any) {
            toast.error(error.message, {
                style: {
                    background: "#DC2626",
                    color: "#fff",
                    fontSize: '16px'
                },
            })
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <LoaderCustom />
        )
    }

    return (
        <form className='sa-entity-layout__body flex! justify-between! items-stretch m-0! gap-5' onSubmit={handleAddProduct}>
            <div className="sa-entity-layout__main2 m-0! w-[70%]!">
                <div className="card">
                    <div className="card-body p-5">
                        <div className="mb-5">
                            <h2 className="mb-0 fs-exact-18">Basic information</h2>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="mb-4">
                                <Label htmlFor="form-product/name" className="form-Label">Product Name</Label>
                                <Input
                                    value={formData.productName}
                                    name='productName'
                                    type="text"
                                    className="form-control"
                                    id="form-product/name"
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="form-product/slug" className="form-Label">Slug</Label>
                                <div className="input-group input-group--sa-slug">
                                    <Input
                                        name='productSlug'
                                        type="text"
                                        className="form-control"
                                        id="form-product/slug"
                                        aria-describedby="form-product/slug-addon form-product/slug-help"
                                        value={formData.productSlug}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="mb-4">
                                <Label htmlFor="form-product/description" className="form-Label">Description</Label>
                                <Textarea
                                    id="form-product/description"
                                    className="sa-quill-control form-control"
                                    value={formData.description}
                                    onChange={handleChangeInput}
                                    name='description'
                                />
                            </div>
                            <div>
                                <Label htmlFor="form-product/short-description" className="form-Label">Short description</Label>
                                <Textarea
                                    name='shortDescription'
                                    id="form-product/short-description"
                                    value={formData.shortDescription}
                                    onChange={handleChangeInput}
                                    className="form-control"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-body p-5">
                        <div className="mb-5">
                            <h2 className="mb-0 fs-exact-18">Pricing</h2>
                        </div>
                        <div className="row g-4">
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="col">
                                    <Label htmlFor="form-product/price" className="form-Label">Sale Price</Label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        id="form-product/price"
                                        name='salePrice'
                                        value={formData.salePrice}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col">
                                    <Label htmlFor="form-product/old-price" className="form-Label">Regular price</Label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        id="form-product/old-price"
                                        name='regularPrice'
                                        value={formData.regularPrice}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-body p-5">
                        <h2 className="mb-5"> Inventory</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="mb-4">
                                <Label htmlFor="form-product/sku" className="form-Label">SKU</Label>
                                <Input
                                    type="text"
                                    name='sku'
                                    className="form-control"
                                    id="form-product/sku"
                                    value={formData.sku}
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div>
                                <Label htmlFor="form-product/quantity" className="form-Label">Stock quantity</Label>
                                <Input
                                    name='quantity'
                                    type="number"
                                    className="form-control"
                                    id="form-product/quantity"
                                    value={formData.quantity}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-body p-5">
                        <div className="mb-5">
                            <h2 className="mb-0 fs-exact-18">Images</h2>
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="form-product/productImage" className="form-Label">Upload Product</Label>
                            <Input
                                type="file"
                                name='productImage'
                                className="form-control"
                                id="form-product/productImage"
                                value={formData.productImage}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sa-entity-layout__sidebar2 w-[28%]!">
                <div className="card w-100">
                    <div className="card-body p-5">
                        <div className="mb-5">
                            <h2 className="mb-0 fs-exact-18">Categories</h2>
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Power tools</SelectItem>
                                <SelectItem value="dark">Screwdrivers</SelectItem>
                                <SelectItem value="system">Chainsaws</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="mt-4 mb-n2">
                            <Link href="#">Add new category</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-100 mt-5">
                    <div className="card-body p-5">
                        <div className="mb-5">
                            <h2 className="mb-0 fs-exact-18">Tags</h2>
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Power tools</SelectItem>
                                <SelectItem value="dark">Screwdrivers</SelectItem>
                                <SelectItem value="system">Chainsaws</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className='w-full flex justify-end'>
                            <Button type='submit' className='mt-5 text-black'>Add Product</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddProductForm