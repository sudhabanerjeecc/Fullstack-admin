import React from 'react'
import { Slider } from '../ui/slider'

const SidebarFilter = () => {
    return (
        <div className="sa-layout__sidebar">
            <div className="sa-layout__sidebar-header">
                <div className="sa-layout__sidebar-title">Filters</div>
                <button type="button" className="sa-close sa-layout__sidebar-close" aria-label="Close" data-sa-layout-sidebar-close=""></button>
            </div>
            <div className="sa-layout__sidebar-body sa-filters">
                {/* <ul className="sa-filters__list">
                    <li className="sa-filters__item">
                        <div className="sa-filters__item-title">Price</div>
                        <div className="sa-filters__item-body">
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                    </li>
                    <li className="sa-filters__item">
                        <div className="sa-filters__item-title">Categories</div>
                        <div className="sa-filters__item-body">
                            <ul className="list-unstyled m-0 mt-n2">
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" checked="" />Power tools</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" />Hand tools</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" checked="" />Machine tools</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" />Power machinery</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" />Measurement</label></li>
                            </ul>
                        </div>
                    </li>
                    <li className="sa-filters__item">
                        <div className="sa-filters__item-title">Product type</div>
                        <div className="sa-filters__item-body">
                            <ul className="list-unstyled m-0 mt-n2">
                                <li><label className="d-flex align-items-center pt-2"><input type="radio" className="form-check-input m-0 me-3 fs-exact-16" name="filter-product_type" checked="" />Simple</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="radio" className="form-check-input m-0 me-3 fs-exact-16" name="filter-product_type" />Variable</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="radio" className="form-check-input m-0 me-3 fs-exact-16" name="filter-product_type" />Digital</label></li>
                            </ul>
                        </div>
                    </li>
                    <li className="sa-filters__item">
                        <div className="sa-filters__item-title">Brands</div>
                        <div className="sa-filters__item-body">
                            <ul className="list-unstyled m-0 mt-n2">
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" />Brandix</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" checked="" />FastWheels</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" checked="" />FuelCorp</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" />RedGate</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" />Specter</label></li>
                                <li><label className="d-flex align-items-center pt-2"><input type="checkbox" className="form-check-input m-0 me-3 fs-exact-16" />TurboElectric</label></li>
                            </ul>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default SidebarFilter