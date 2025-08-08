"use client"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
interface ModalProps {
    show: boolean;
    handleClose: () => void;
}
const ModalComponent: React.FC<ModalProps> = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            dialogClassName="modal-compare"
        >
            <div className="product-details-popup-wrapper popup">
                <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                    <div className="product-details-popup">
                        <button className="product-details-close-btn" onClick={handleClose}>
                            <i className="fal fa-times" />
                        </button>
                        <div className="details-product-area">
                            <div className="modal-contents">
                                <p className="main-message">
                                    Limited time only!<br></br>
                                    <strong>Get Free Shipping on All Orders</strong>.
                                    <br />
                                    Get exclusive offers, new product offers and other good stuff.
                                </p>

                                <div className="action-section">
                                    <a
                                        href="/login"
                                        className="free-shipping-btn full-width"
                                    >
                                        <span className="btn-text">Join Us</span>
                                    </a>
                                </div>

                                <p className="disclaimer">
                                    <small>
                                        *By submitting, I confirm I have read and accept your <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Statement</a> and I agree to receive marketing and promotional emails from FoodSaver.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>

    );
};

export default ModalComponent;
