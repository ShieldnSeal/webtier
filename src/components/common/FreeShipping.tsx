'use client';

import React, { useEffect , useState} from 'react';
import FreeShipModal from "@/components/modal/FreeShipModal";

function FreeShipping() {
    const [activeModal, setActiveModal] = useState(false);    
    const handleClose = () => setActiveModal(false);
    return (
        <>
            <button className="free-shipping" onClick={() => setActiveModal(true)}></button>
            <FreeShipModal show={activeModal} handleClose={handleClose} />
        </>
    );
}

export default FreeShipping;
