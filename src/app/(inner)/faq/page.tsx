
import HeaderOne from "@/components/header/HeaderOne";
import AboutBanner from "@/components/banner/AboutBanner";
import CounterOne from "@/components/counterup/CounterOne";
import AboutOne from "@/components/about/AboutOne";
import Team from "@/components/about/Team";
import ServiceOne from "@/components/service/ServiceOne";
import TestimonilsOne from "@/components/testimonials/TestimonilsOne";
import ShortService from "@/components/service/ShortService";

import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
    return (
        <div className="demo-one">
            <HeaderOne />

            <>
  <div className="rts-navigation-area-breadcrumb bg_light-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="navigator-breadcrumb-wrapper">
            <a href="index.html">Home</a>
            <i className="fa-regular fa-chevron-right" />
            <a className="current" href="register.html">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-seperator bg_light-1">
    <div className="container">
      <hr className="section-seperator" />
    </div>
  </div>
{/* faq area start */}
<div className="rts-pricavy-policy-area rts-section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="container-privacy-policy">
            <h1 className="title mb--40">FAQ</h1>
            <div className="section-list mt--40">
              <h2 className="title">
                When will I receive my order?
              </h2>
              <p>
                We ship items on the next available business day from time invoice is paid from our warehouse facility in Sacramento, CA.  Customer will receive shipping tracking information from us regarding shipments through one of our contracted ship agents; i.e. UPS, FED EX, Freight Forwarder or USPS.  In most cases shipments will be delivered within 3 business days unless otherwise stipulated.
              </p>
              <p>
                In the the case that items are out-of-stock we will inform you and you can decide to wait until the items or back-in-stock for shipment–please note that the item may take over 30-days to ship–please note that we will update you regarding your order if this is the case.  We will offer you a full refund on goods that are not in-stock if you prefer.
              </p>
            </div>
            <div className="section-list mt--40">
              <h2 className="title">
                Where do we ship?
              </h2>
              <p>
                We ship globally, however, shipping rates will vary depending on delivery destination.  We will inform you of shipping costs when you arrange your order.  Please note that Savenseal.com Ltd. is not responsible for any Customs Fees.
              </p>
              <p
                className="disc mt--30"
                style={{ color: "#616164", fontWeight: 600 }}
              >
                If you have any additional questions regarding our shipping policies please contact us 
                via telephone at: <a href="tel:15304780238">+1 (530) 478-0238</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* faq area end */}
</>
      <FooterOne />

  </div>
    );
}
