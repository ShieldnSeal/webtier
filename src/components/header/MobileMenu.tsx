'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [openThirdLevelKey, setOpenThirdLevelKey] = useState<string | null>(null);

    const toggleMenu = (index: number) => {
        setOpenMenuIndex(prev => (prev === index ? null : index));
    };

    const toggleThirdMenu = (key: string) => {
        setOpenThirdLevelKey(prev => (prev === key ? null : key));
    };

    return (
        <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">

                {/* shop-vacuum-sealer */}
                <li><Link className="main" href="/shop-vacuum-sealer">Vacuum Sealers</Link></li>

                {/* Pages */}
                <li className={`has-droupdown ${openMenuIndex === 1 ? 'mm-active' : ''}`}>
                    <a href="#" className="main" onClick={() => toggleMenu(1)}>Vacuum Sealer Bags</a>
                    <ul className={`submenu mm-collapse ${openMenuIndex === 1 ? 'mm-show' : ''}`}>
                        <li><Link className="mobile-menu-link" href="/shop">All Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-list-sidebar">All Black Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-grid-top-filter">Clear Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-list-top-filter">Barrier Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-list-top-filter">Clear & Black Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-list-top-filter">Gusset Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-list-top-filter">Metallic & Clear Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-list-top-filter">Zipper Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-list-top-filter">Custom Bags</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-list-top-filter">SALE</Link></li>
                    </ul>
                </li>

                {/* Blog */}
                <li className={`has-droupdown ${openMenuIndex === 3 ? 'mm-active' : ''}`}>
                    <a href="#" className="main" onClick={() => toggleMenu(3)}>Vacuum Sealer Rolls</a>
                    <ul className={`submenu mm-collapse ${openMenuIndex === 3 ? 'mm-show' : ''}`}>
                        <li><Link className="mobile-menu-link" href="/shop/firebase-business-makes-your-profit">All Clear Rolls</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-details-2">All Black Rolls</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-details-right-sidebar">Clear & Black Rolls</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-details-4">Metallic Rolls</Link></li>
                        <li><Link className="mobile-menu-link" href="/shop-details-4">SALE</Link></li>
                    </ul>
                </li>

                {/* About Us */}
                <li className={`has-droupdown ${openMenuIndex === 4 ? 'mm-active' : ''}`}>
                    <a href="#" className="main" onClick={() => toggleMenu(4)}>About</a>
                    <ul className={`submenu mm-collapse ${openMenuIndex === 4 ? 'mm-show' : ''}`}>
                        <li><Link className="mobile-menu-link" href="/about">About Us</Link></li>
                        <li><Link className="mobile-menu-link" href="/contact">Contact</Link></li>
                        <li><Link className="mobile-menu-link" href="/faq">FAQ</Link></li>
                        <li><Link className="mobile-menu-link" href="/maintain-sealer">How To Maintain Your Vacuum Sealer</Link></li>
                        <li><Link className="mobile-menu-link" href="/404">Storing Food With Your Vacuum Sealer</Link></li>
                        <li><Link className="mobile-menu-link" href="/404">Wholesale</Link></li>
                    </ul>
                </li>                

            </ul>
        </nav>
    );
};

export default MobileMenu;
