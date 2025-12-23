import React from 'react'

export default function RecentOrders() {
    return (
        <div className="col-12 col-xxl-9 d-flex">
            <div className="card flex-grow-1 saw-table">
                <div className="sa-widget-header saw-table__header">
                    <h2 className="sa-widget-header__title">Recent orders</h2>
                    <div className="sa-widget-header__actions">
                        <div className="dropdown">
                            <button type="button" className="btn btn-sm btn-sa-muted d-block"
                                id="widget-context-menu-6" data-bs-toggle="dropdown"
                                aria-expanded="false" aria-label="More">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13"
                                    fill="currentColor">
                                    <path
                                        d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                    </path>
                                </svg>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="widget-context-menu-6">
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
                <div className="saw-table__body sa-widget-table text-nowrap">
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Status</th>
                                <th>Co.</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="app-order.html" className="text-reset">#00745</a></td>
                                <td>
                                    <div className="d-flex fs-6">
                                        <div className="badge badge-sa-primary">Pending</div>
                                    </div>
                                </td>
                                <td><img src="vendor/flag-icons/24/IT.png"
                                    className="sa-language-icon d-block" alt="" title="Italy" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="app-customer.html"
                                            className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                            <div className="sa-symbol__text">GB</div>
                                        </a>
                                        <div><a href="app-customer.html" className="text-reset">Giordano
                                            Bruno</a></div>
                                    </div>
                                </td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                            <tr>
                                <td><a href="app-order.html" className="text-reset">#00513</a></td>
                                <td>
                                    <div className="d-flex fs-6">
                                        <div className="badge badge-sa-warning">Hold</div>
                                    </div>
                                </td>
                                <td><img src="vendor/flag-icons/24/DE.png"
                                    className="sa-language-icon d-block" alt="" title="Germany" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="app-customer.html"
                                            className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                            <div className="sa-symbol__text">HW</div>
                                        </a>
                                        <div><a href="app-customer.html" className="text-reset">Hans
                                            Weber</a></div>
                                    </div>
                                </td>
                                <td>2020-09-05</td>
                                <td>$204.00</td>
                            </tr>
                            <tr>
                                <td><a href="app-order.html" className="text-reset">#00507</a></td>
                                <td>
                                    <div className="d-flex fs-6">
                                        <div className="badge badge-sa-primary">Pending</div>
                                    </div>
                                </td>
                                <td><img src="vendor/flag-icons/24/IT.png"
                                    className="sa-language-icon d-block" alt="" title="Italy" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="app-customer.html"
                                            className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                            <div className="sa-symbol__text">AR</div>
                                        </a>
                                        <div><a href="app-customer.html" className="text-reset">Andrea
                                            Rossi</a></div>
                                    </div>
                                </td>
                                <td>2020-08-21</td>
                                <td>$5,039.00</td>
                            </tr>
                            <tr>
                                <td><a href="app-order.html" className="text-reset">#00104</a></td>
                                <td>
                                    <div className="d-flex fs-6">
                                        <div className="badge badge-sa-danger">Canceled</div>
                                    </div>
                                </td>
                                <td><img src="vendor/flag-icons/24/US.png"
                                    className="sa-language-icon d-block" alt="" title="USA" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="app-customer.html"
                                            className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                            <div className="sa-symbol__text">RF</div>
                                        </a>
                                        <div><a href="app-customer.html" className="text-reset">Richard
                                            Feynman</a></div>
                                    </div>
                                </td>
                                <td>2020-06-22</td>
                                <td>$79.00</td>
                            </tr>
                            <tr>
                                <td><a href="app-order.html" className="text-reset">#00097</a></td>
                                <td>
                                    <div className="d-flex fs-6">
                                        <div className="badge badge-sa-success">Completed</div>
                                    </div>
                                </td>
                                <td><img src="vendor/flag-icons/24/CO.png"
                                    className="sa-language-icon d-block" alt="" title="Columbia" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="app-customer.html"
                                            className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                            <div className="sa-symbol__text">LG</div>
                                        </a>
                                        <div><a href="app-customer.html" className="text-reset">Leonardo
                                            Garcia</a></div>
                                    </div>
                                </td>
                                <td>2020-05-09</td>
                                <td>$826.00</td>
                            </tr>
                            <tr>
                                <td><a href="app-order.html" className="text-reset">#00082</a></td>
                                <td>
                                    <div className="d-flex fs-6">
                                        <div className="badge badge-sa-success">Completed</div>
                                    </div>
                                </td>
                                <td><img src="vendor/flag-icons/24/RS.png"
                                    className="sa-language-icon d-block" alt="" title="Srbija" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="app-customer.html"
                                            className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                            <div className="sa-symbol__text">NT</div>
                                        </a>
                                        <div><a href="app-customer.html" className="text-reset">Nikola
                                            Tesla</a></div>
                                    </div>
                                </td>
                                <td>2020-04-27</td>
                                <td>$1,052.00</td>
                            </tr>
                            <tr>
                                <td><a href="app-order.html" className="text-reset">#00063</a></td>
                                <td>
                                    <div className="d-flex fs-6">
                                        <div className="badge badge-sa-primary">Pending</div>
                                    </div>
                                </td>
                                <td><img src="vendor/flag-icons/24/FR.png"
                                    className="sa-language-icon d-block" alt="" title="France" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="app-customer.html"
                                            className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                            <div className="sa-symbol__text">MC</div>
                                        </a>
                                        <div><a href="app-customer.html" className="text-reset">Marie
                                            Curie</a></div>
                                    </div>
                                </td>
                                <td>2020-02-09</td>
                                <td>$441.00</td>
                            </tr>
                            <tr>
                                <td><a href="app-order.html" className="text-reset">#00012</a></td>
                                <td>
                                    <div className="d-flex fs-6">
                                        <div className="badge badge-sa-success">Completed</div>
                                    </div>
                                </td>
                                <td><img src="vendor/flag-icons/24/RU.png"
                                    className="sa-language-icon d-block" alt="" title="Russia" /></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="app-customer.html"
                                            className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                            <div className="sa-symbol__text">KT</div>
                                        </a>
                                        <div><a href="app-customer.html" className="text-reset">Konstantin
                                            Tsiolkovsky</a></div>
                                    </div>
                                </td>
                                <td>2020-01-01</td>
                                <td>$12,961.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
