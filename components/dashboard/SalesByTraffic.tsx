import React from 'react'

export default function SalesByTraffic() {
    return (
        <div className="col-12 col-xxl-3 d-flex">
            <div className="card flex-grow-1 saw-chart-circle"
                data-sa-data="[{&quot;label&quot;:&quot;Yandex&quot;,&quot;value&quot;:2742,&quot;color&quot;:&quot;#ffd333&quot;,&quot;orders&quot;:12},{&quot;label&quot;:&quot;YouTube&quot;,&quot;value&quot;:3272,&quot;color&quot;:&quot;#e62e2e&quot;,&quot;orders&quot;:51},{&quot;label&quot;:&quot;Google&quot;,&quot;value&quot;:2303,&quot;color&quot;:&quot;#3377ff&quot;,&quot;orders&quot;:4},{&quot;label&quot;:&quot;Facebook&quot;,&quot;value&quot;:1434,&quot;color&quot;:&quot;#29cccc&quot;,&quot;orders&quot;:10},{&quot;label&quot;:&quot;Instagram&quot;,&quot;value&quot;:799,&quot;color&quot;:&quot;#5dc728&quot;,&quot;orders&quot;:1}]"
                data-sa-container-query="{&quot;600&quot;:&quot;saw-chart-circle--size--lg&quot;}">
                <div className="sa-widget-header saw-chart-circle__header">
                    <h2 className="sa-widget-header__title">Sales by traffic source</h2>
                    <div className="sa-widget-header__actions">
                        <div className="dropdown">
                            <button type="button" className="btn btn-sm btn-sa-muted d-block"
                                id="widget-context-menu-7" data-bs-toggle="dropdown"
                                aria-expanded="false" aria-label="More">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13"
                                    fill="currentColor">
                                    <path
                                        d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                    </path>
                                </svg>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="widget-context-menu-7">
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
                <div className="saw-chart-circle__body">
                    <div className="saw-chart-circle__container">
                        <canvas></canvas>
                    </div>
                </div>
                <div className="sa-widget-table saw-chart-circle__table">
                    <table>
                        <thead>
                            <tr>
                                <th>Source</th>
                                <th className="text-center">Orders</th>
                                <th className="text-end">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="saw-chart-circle__symbol"></div>
                                        <div className="ps-2">Yandex</div>
                                    </div>
                                </td>
                                <td className="text-center">12</td>
                                <td className="text-end">
                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                        className="sa-price__integer">2,742</span><span
                                            className="sa-price__decimal">.00</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="saw-chart-circle__symbol"></div>
                                        <div className="ps-2">YouTube</div>
                                    </div>
                                </td>
                                <td className="text-center">51</td>
                                <td className="text-end">
                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                        className="sa-price__integer">3,272</span><span
                                            className="sa-price__decimal">.00</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="saw-chart-circle__symbol"></div>
                                        <div className="ps-2">Google</div>
                                    </div>
                                </td>
                                <td className="text-center">4</td>
                                <td className="text-end">
                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                        className="sa-price__integer">2,303</span><span
                                            className="sa-price__decimal">.00</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="saw-chart-circle__symbol"></div>
                                        <div className="ps-2">Facebook</div>
                                    </div>
                                </td>
                                <td className="text-center">10</td>
                                <td className="text-end">
                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                        className="sa-price__integer">1,434</span><span
                                            className="sa-price__decimal">.00</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="saw-chart-circle__symbol"></div>
                                        <div className="ps-2">Instagram</div>
                                    </div>
                                </td>
                                <td className="text-center">1</td>
                                <td className="text-end">
                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                        className="sa-price__integer">799</span><span
                                            className="sa-price__decimal">.00</span></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
