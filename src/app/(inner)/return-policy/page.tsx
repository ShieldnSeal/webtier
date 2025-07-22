
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
                          Return Policy
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
              {/* Return Policy area start */}
              <div className="rts-pricavy-policy-area rts-section-gap">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="container-privacy-policy">
                        <div className="section-list mt--40">
                          <h2 className="title">
                            Return Policy
                          </h2>
                          <p>
                            1. If not completely satisfied with your order you can within 30 days of receipt of your order return it for exchange or a full refund less shipping and handling charges. Prior to return it is necessary to obtain a Return Authorization Code from Shield N Seal. 20% restocking fee for all returned vacuum sealers.  (restocking fee does not apply to warranty returns.) Email: Sales@shieldnseal.com. Please include “RA Request” and your order number in the email subject line, along with a brief description of what you would like to return in the body of the email.
                          </p>
                          <p>
                            2. If the product arrives at its destination damaged or damaged in transit, Shield N Seal will bear the cost of return and, at your choice, will resend the order at no additional cost or will refund the full amount of the order.
                          </p>
                          <p>
                            3. The day the returned order is received at Shield N Seal’s office at 4201 Sierra Point Dr. #103, Sacramento CA, 95834 will be the date used to calculate the return period.
                          </p>
                          <p>
                            4. You are responsible for the cost of return shipping as well as risk of loss or damage to the product prior to the receipt of the product by Shield N Seal except as in #2 above.
                          </p>
                        </div>
                        <div className="section-list mt--40">
                          <h2 className="title">
                            Privacy Policy
                          </h2>
                          <p>
                            Your privacy is respected here. We will keep your personal information completely confidential. The personal information you share on this website will not be sold to or shared with anyone else. It will be used solely to answer the question for which it has been provided. If, at any time, you wish to discontinue communication that you have initiated, simply Email or phone your request and it will be honored immediately. We do not sell or share customer information with outside marketers who may want to offer you their products or services.
                          </p>
                          <p>
                            If you have questions about any of these matters please call our office 9AM–5PM West Coast Time weekdays. If it is necessary for you to leave a message your call will be returned as soon as possible.
                          </p>
                          <p>
                            P: 1+ (530) 478-0238
                          </p>
                          <p>
                            Applewood Lane Nevada City, CA 95959
                          </p>              
                        </div>
                        <div className="section-list mt--40">
                          <h2 className="title">
                            Shield N Seal Machine Warranty
                          </h2>
                          <p>
                            To claim your one year parts and labor warranty on all Shield N Seal sealing machines please follow the below link to register you product.
                          </p>
                          <p>
                            Warranty cards must be completed within 30 days of initial purchase.
                          </p>
                          <p>
                            <a href="/warranty-card">Warranty Card Submission</a>
                          </p>
                          <p>
                            If you have questions about any of these matters please call our office 9AM–5PM West Coast Time weekdays. If it is necessary for you to leave a message your call will be returned as soon as possible.
                          </p>
                          <p>
                            P: 1+ (530) 478-0238
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* return policy area end */}
            </>
            <ShortService/>
            <FooterOne />
        </div>
    );
}
