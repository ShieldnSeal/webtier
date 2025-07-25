import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
    return (
        <div className="demo-one">
            <HeaderOne />

            <>
                {/* rts contact main wrapper end */}

                <div className="rts-map-contact-area rts-section-gap2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-left-area-main-wrapper">
                                    <h2 className="title">Retail Store Locations</h2>
                                    <p className="disc">
                                        Find Retail Store Locations near you. Shield N Seal has partnered with the finest garden, home goods, and hydroponic retailers to make sure it’s easy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* rts contact-form area start */}
                <div className="rts-map-contact-area rts-section-gap2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-left-area-main-wrapper">
                                    <h2 className="title">Suggest a Store</h2>
                                    <p className="disc">
                                        Do you know a retailer that might be a perfect fit? Let us know!
                                    </p>
                                    <div className="rts-contact-form-area rts-section-gapBottom">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="bg_light-1 contact-form-wrapper-bg">
                                                        <div className="row">
                                                            <div className="col-lg-12 pr--30 pr_md--10 pr_sm--5">
                                                                <div className="contact-form-wrapper-1">
                                                                    <h3 className="title mb--50">
                                                                        SNS Suggest A Store
                                                                    </h3>
                                                                    <form action="#" className="contact-form-1">
                                                                        <div className="contact-form-wrapper--half-area">
                                                                            <div className="single">
                                                                                <input type="text" placeholder="First name*" />
                                                                            </div>
                                                                            <div className="single">
                                                                                <input type="text" placeholder="Last name*" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="single">
                                                                            <input type="text" placeholder="Store Name*" />
                                                                        </div>
                                                                        <div className="single-select">
                                                                            <select>
                                                                                <option data-display="Subject*">All Categories</option>
                                                                                <option value={1}>Some option</option>
                                                                                <option value={2}>Another option</option>
                                                                                <option value={3}>Potato</option>
                                                                            </select>
                                                                        </div>
                                                                        <textarea
                                                                            name="message"
                                                                            placeholder="Write Message Here"
                                                                            defaultValue={""}
                                                                        />
                                                                        <button className="rts-btn btn-primary mt--20">
                                                                            Send Message
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* rts contact-form area end */}
            </>

            <ShortService />
            <FooterOne />
        </div>
    );
}
