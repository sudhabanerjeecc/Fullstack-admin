import React from 'react'

export default function IncomeStatistics() {
    return (
        <div className="col-12 col-lg-8 col-xxl-9 d-flex">
            <div className="card flex-grow-1 saw-chart"
                data-sa-data="[{&quot;label&quot;:&quot;Jan&quot;,&quot;value&quot;:50},{&quot;label&quot;:&quot;Feb&quot;,&quot;value&quot;:130},{&quot;label&quot;:&quot;Mar&quot;,&quot;value&quot;:525},{&quot;label&quot;:&quot;Apr&quot;,&quot;value&quot;:285},{&quot;label&quot;:&quot;May&quot;,&quot;value&quot;:470},{&quot;label&quot;:&quot;Jun&quot;,&quot;value&quot;:130},{&quot;label&quot;:&quot;Jul&quot;,&quot;value&quot;:285},{&quot;label&quot;:&quot;Aug&quot;,&quot;value&quot;:240},{&quot;label&quot;:&quot;Sep&quot;,&quot;value&quot;:710},{&quot;label&quot;:&quot;Oct&quot;,&quot;value&quot;:470},{&quot;label&quot;:&quot;Nov&quot;,&quot;value&quot;:640},{&quot;label&quot;:&quot;Dec&quot;,&quot;value&quot;:1110}]">
                <div className="sa-widget-header saw-chart__header">
                    <h2 className="sa-widget-header__title">Income statistics</h2>
                    <div className="sa-widget-header__actions">
                        <div className="dropdown">
                            <button type="button" className="btn btn-sm btn-sa-muted d-block"
                                id="widget-context-menu-5" data-bs-toggle="dropdown"
                                aria-expanded="false" aria-label="More">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13"
                                    fill="currentColor">
                                    <path
                                        d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                    </path>
                                </svg>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="widget-context-menu-5">
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
                <div className="saw-chart__body">
                    <div className="saw-chart__container">
                        <canvas></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}
