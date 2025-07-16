"use client"
import React from 'react';
function NavItem() {
    return (
        <div>
            <nav>
                <ul className="parent-nav">
                    <li className="parent">
                        <a href="/about">Vacuum Sealers</a>
                    </li>
                    <li className="parent with-megamenu">
                        <a href="#">Vacuum Sealer Bags & Rolls</a>
                        <div className="rts-megamenu">
                            <div className="wrapper">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="megamenu-item-wrapper">
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Vacuum Sealer Bags</p>
                                                <ul>
                                                    <li>
                                                        <a href="/shop">
                                                            All Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-sidebar">
                                                            All Black Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-grid-top-filter">
                                                            Clear Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-top-filter">
                                                            Barrier Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-top-filter">
                                                            Clear & Black Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-top-filter">
                                                            Gusset Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-top-filter">
                                                            Metallic & Clear Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-top-filter">
                                                            Zipper Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-top-filter">
                                                            Custom Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-top-filter">
                                                            SALE
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Vacuum Sealer Rolls</p>
                                                <ul>
                                                    <li>
                                                        <a className="sub-b" href="/shop/firebase-business-makes-your-profit">
                                                            All Clear Rolls
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="sub-b" href="/shop-details-2">
                                                            All Black Rolls
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="sub-b" href="/shop-details-right-sidebar">
                                                            Clear & Black Rolls
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="sub-b" href="/shop-details-4">
                                                            Metallic Rolls
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="sub-b" href="/shop-details-4">
                                                            SALE
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <a
                                            href="/shop"
                                            className="feature-add-megamenu-area"
                                        >
                                            <img
                                                src="assets/images/feature/05.jpg"
                                                alt="feature_product"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="parent has-dropdown">
                        <a className="nav-link" href="#">
                            About
                        </a>
                        <ul className="submenu">
                            <li>
                                <a className="sub-b" href="/about">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="sub-b" href="/contact">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a className="sub-b" href="/faq">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a className="sub-b" href="/404">
                                    How To Maintain Your Vacuum Sealer
                                </a>
                            </li>
                            <li>
                                <a className="sub-b" href="/404">
                                    Storing Food With Your Vacuum Sealer
                                </a>
                            </li>
                            <li>
                                <a className="sub-b" href="/404">
                                    Wholesale
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavItem;