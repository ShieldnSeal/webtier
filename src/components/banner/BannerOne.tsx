"use client"
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import CategoryBb from './CategoryBb';
const BannerOne = () => {

    return (
        <div className="background-light-gray-color rts-section-gap pt_sm--20">
            {/* rts banner area start */}
            <div className="rts-banner-area-one mb--30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="category-area-main-wrapper-one">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={1}
                                    slidesPerView={1}
                                    loop={true}
                                    speed={2000}
                                    autoplay={{
                                        delay: 4000,
                                    }}
                                    // navigation={{
                                    //     nextEl: '.swiper-button-next',
                                    //     prevEl: '.swiper-button-prev',
                                    // }}
                                    breakpoints={{
                                        0: { slidesPerView: 1, spaceBetween: 0 },
                                        320: { slidesPerView: 1, spaceBetween: 0 },
                                        480: { slidesPerView: 1, spaceBetween: 0 },
                                        640: { slidesPerView: 1, spaceBetween: 0 },
                                        840: { slidesPerView: 1, spaceBetween: 0 },
                                        1140: { slidesPerView: 1, spaceBetween: 0 },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="banner-bg-image bg_image bg_one-banner ptb--120 ptb_md--80 ptb_sm--60">
                                            <div className="banner-one-inner-content col-8">
                                                <span className="pre">
                                                    Our 11″ x 23″ Super Thick, 5 mil black and clear vacuum seal bags deliver unmatched strength and freshness.                                                    
                                                </span>
                                                <br/>
                                                <h1 className="title text-black">
                                                    Seal Big. Seal Strong. Seal Fresh.<br/>
                                                    Perfect for serious storage. 
                                                </h1>
                                                <a
                                                    href="/shop"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Shop Now</div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner-bg-image bg_image bg_one-banner two ptb--120 ptb_md--80 ptb_sm--60">
                                            <div className="banner-one-inner-content col-8">
                                                <span className="pre">
                                                Clearance savings on ShieldNSeal’s toughest 5mil bags & more.
                                                </span>
                                                <br/>
                                                <h1 className="title">
                                                    Cook it. Store it. Keep it fresh for less.<br />
                                                    Clearance Deals 
                                                </h1>
                                                <a
                                                    href="/shop"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Shop Now</div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner-bg-image bg_image bg_one-banner three ptb--120 ptb_md--80 ptb_sm--60">
                                            <div className="banner-one-inner-content col-8">
                                                <span className="pre">
                                                Professional-grade sealing power for your kitchen.
                                                </span>
                                                <br/>
                                                <h1 className="title">
                                                    Preserve More. Waste Less. Live Better. <br />
                                                    16" Pro Vacuum Sealer
                                                </h1>
                                                <a
                                                    href="/shop"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Shop Now</div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner-bg-image bg_image bg_one-banner four ptb--120 ptb_md--80 ptb_sm--60">
                                            <div className="banner-one-inner-content col-8">
                                                <span className="pre">
                                                Sign Up & Save on Professional-Grade Vacuum Seal Bags & Sealers
                                                </span>
                                                <br/>
                                                <h1 className="title">
                                                Sign Up. Shop Now. Save Today. <br />
                                                Freshness You Can Trust
                                                </h1>
                                                <a
                                                    href="/shop"
                                                    className="rts-btn btn-primary radious-sm with-icon"
                                                >
                                                    <div className="btn-text">Shop Now</div>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts banner area end */}
        </div>
    );
};

export default BannerOne;
