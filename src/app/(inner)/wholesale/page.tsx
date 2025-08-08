
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
                  <a href="/">Home</a>
                  <i className="fa-regular fa-chevron-right" />
                  <a className="current" href="#">
                    Wholesale
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
                  {/* <h1 className="title mb--40">How To Use Your Shield N Seal Vacuum Sealer Maintenance Kit</h1> */}
                  <div className="cart-top-area-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', margin: '20px', flexWrap: 'wrap',textAlign: 'center' }}>
                    <a href="/whole-registration" className="rts-btn btn-secondary radious-sm">
                      <div className="btn-text">Click Here</div>
                    </a>
                    <h2 style={{ margin: 0, textAlign: 'center', color: '#666' }}>
                      New Wholesale Customer Registration
                    </h2>
                  </div>
                  <div className="section-list mt--40">
                    <h2 className="title">
                      Become a ShieldNSeal Distributor
                    </h2>
                    <p>
                      Being a ShieldNSeal Distributor can be a personal and financially rewarding experience. ShieldNSeal captures and thrives on the entrepreneurial spirit, and we invite you to explore the avenues for success that may be available to you as well. ShieldNSeal is one of the most respected brands in the food industry.
                    </p>
                  </div>
                  <div className="section-list mt--40">
                    <h2 className="title">
                      The Secret To Success
                    </h2>
                    <p>
                      As an independent ShieldNSeal distributor, you benefit from the backing and outstanding reputation of ShieldNSeal Bags and Sealers. You also enjoy the independence and satisfaction that only comes from being a self-employed entrepreneur. You will have a defined geographic distribution territory in which to sell our premium bags and rolls to retail stores. You have an opportunity to realize the full sales potential of such products within the territory, which is yours to develop as an independent business.
                    </p>
                  </div>
                  <div className="section-list mt--40">
                    <h2 className="title">
                      Get exclusive rights to sell to retailers in your area, including, but not limited to:
                    </h2>
                    <p>
                      - Hydroponic Garden Shops<br></br>
                      - Hardware Stores<br></br>
                      - Home Goods Stores<br></br>
                      - Restaurant Supply<br></br>
                      - Sporting Goods Stores<br></br>
                      - Hunting and Fishing Stores<br></br>
                      - State Fairs<br></br>
                      - Home, Garden, and Hunting Expos<br></br>
                    </p>
                  </div >
                </div >
              </div >
            </div >
          </div >
        </div >
        {/* faq area end */}
      </>
      <FooterOne />

    </div >
  );
}
