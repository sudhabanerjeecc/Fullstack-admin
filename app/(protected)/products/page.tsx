
import Breadcum from '@/components/common/Breadcum'
import Link from 'next/link';

import ProductListTable from '@/components/product/ProductListTable';
import ProductFilter from '@/components/product/ProductFilter';

export default function Page() {
    
    

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
                        
                        {/* Filter Card */}
                        <ProductFilter/>

                        {/* Table Card */}
                        <div className="card shadow-sm bg-white">
                            {/* Table */}
                            <ProductListTable/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}