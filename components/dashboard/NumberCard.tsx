import React from 'react'

export default function NumberCard() {
    return (
        <div className="col-12 col-md-4 d-flex">
            <div className="card saw-indicator flex-grow-1"
                data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                <div className="sa-widget-header saw-indicator__header">
                    <h2 className="sa-widget-header__title">Total sells</h2>
                    <div className="sa-widget-header__actions">
                        <div className="dropdown">
                            <button type="button" className="btn btn-sm btn-sa-muted d-block"
                                id="widget-context-menu-1" data-bs-toggle="dropdown"
                                aria-expanded="false" aria-label="More">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13"
                                    fill="currentColor">
                                    <path
                                        d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                    </path>
                                </svg>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="widget-context-menu-1">
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
                <div className="saw-indicator__body">
                    <div className="saw-indicator__value">$3799.00</div>
                    <div className="saw-indicator__delta saw-indicator__delta--rise">
                        <div className="saw-indicator__delta-direction">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                viewBox="0 0 9 9" fill="currentColor">
                                <path d="M9,0L8,6.1L2.8,1L9,0z"></path>
                                <circle cx="1" cy="8" r="1"></circle>
                                <rect x="0" y="4.5"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.864 4.0858)"
                                    width="7.1" height="2"></rect>
                            </svg>
                        </div>
                        <div className="saw-indicator__delta-value">34.7%</div>
                    </div>
                    <div className="saw-indicator__caption">Compared to April 2021</div>
                </div>
            </div>
        </div>
    )
}
