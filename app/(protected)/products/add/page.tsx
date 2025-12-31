import Breadcum from '@/components/common/Breadcum'
import AddProductForm from '@/components/product/AddProductForm'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import React from 'react'

export default function page() {
    return (
        <>
            <Breadcum
                title='Add Product'
                items={[
                    { label: 'Dashboard', href: '/dashbaord' },
                    { label: 'Products', href: '/products' },
                    { label: 'Add', active: true }
                ]}
            />
            <div className="mx-xxl-3 px-4 px-sm-5 pb-6">
                <div className="container2">
                    <div className="sa-entity-layout">
                        <div className="">
                            <AddProductForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
