import React from 'react'

export default function ActiveUsers() {
    return (
        <div className="col-12 col-lg-4 col-xxl-3 d-flex">
            <div className="card flex-grow-1 saw-pulse"
                data-sa-container-query="{&quot;560&quot;:&quot;saw-pulse--size--lg&quot;}">
                <div className="sa-widget-header saw-pulse__header">
                    <h2 className="sa-widget-header__title">Active users</h2>
                    <div className="sa-widget-header__actions">
                        <div className="dropdown">
                            <button type="button" className="btn btn-sm btn-sa-muted d-block"
                                id="widget-context-menu-4" data-bs-toggle="dropdown"
                                aria-expanded="false" aria-label="More">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13"
                                    fill="currentColor">
                                    <path
                                        d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                    </path>
                                </svg>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="widget-context-menu-4">
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Move</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item text-danger" href="#">Remove</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="saw-pulse__counter">148</div>
                <div className="sa-widget-table saw-pulse__table">
                    <table>
                        <thead>
                            <tr>
                                <th>Active pages</th>
                                <th className="text-end">Users</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" className="text-reset">/products/brandix-z4</a></td>
                                <td className="text-end">15</td>
                            </tr>
                            <tr>
                                <td><a href="#" className="text-reset">/categories/drivetrain</a></td>
                                <td className="text-end">11</td>
                            </tr>
                            <tr>
                                <td><a href="#" className="text-reset">/categories/monitors</a></td>
                                <td className="text-end">7</td>
                            </tr>
                            <tr>
                                <td><a href="#" className="text-reset">/account/orders</a></td>
                                <td className="text-end">4</td>
                            </tr>
                            <tr>
                                <td><a href="#" className="text-reset">/cart</a></td>
                                <td className="text-end">3</td>
                            </tr>
                            <tr>
                                <td><a href="#" className="text-reset">/checkout</a></td>
                                <td className="text-end">3</td>
                            </tr>
                            <tr>
                                <td><a href="#" className="text-reset">/pages/about-us</a></td>
                                <td className="text-end">1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
