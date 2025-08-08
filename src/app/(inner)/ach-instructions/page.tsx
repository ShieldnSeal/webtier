
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
                    ACH Instructions Memo
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
                  <div className="section-list mt--40">
                    <p>
                      Dear Valued Customer,<br></br>
                      Please review the following steps in order to pay your Humidi.co and Shield N Seal invoice via ACH payments once you have received your invoice by email:
                    </p>
                  </div>
                  <div className="section-list mt--40">
                    <h2 className="title">
                      Step One:
                    </h2>
                    <p>
                      Once you receive the invoice via email, please scroll down the email until you see the section where you can click “Review and Pay” indicated below with a yellow arrow:
                    </p>
                    <img src="/assets/images/ach/Step1-final.jpg" alt="error" />
                  </div>
                  <div className="section-list mt--40">
                    <h2 className="title">
                      Step Two:
                    </h2>
                    <p>
                      When the next page opens up you will see three options at the top, “Debit Card”; “Bank Transfer”; and “Credit Card”. Please select “Bank transfer” for ACH :
                    </p>
                    <img src="/assets/images/ach/Step-Two-final.jpg" alt="error" />
                  </div>
                  <div className="section-list mt--40">
                    <h2 className="title">
                      Step Three:
                    </h2>
                    <p>
                      Select account type at the top arrow: “Personal Checking”; “Personal Savings”; “Business Checking”; “Business Savings”:
                    </p>
                    <img src="/assets/images/ach/Step-Three-final.jpg" alt="error" />
                  </div>
                  <div className="section-list mt--40">
                    <h2 className="title">
                      Step Four:
                    </h2>
                    <p>
                      Complete the following fields: “Routing Number”; “Account Number”; “Confirm Account Number”; “Account Holder’s Name”; and PRESS “Pay”.
                    </p>
                    <img src="/assets/images/ach/Step-Four-final.jpg" alt="error" />
                  </div>
                  <div className="section-list mt--40">
                    <h2 className="title">
                      Step Five:
                    </h2>
                    <p>
                      Your payment should be complete and we will send you shipping information once the order has fully processed.<br></br>
                      Please contact us at <a href="mailto:Sales@shieldnseal.com">Sales@shieldnseal.com</a> if you have any questions or concerns.
                    </p>
                    <p>
                      Mahalo!<br></br>
                      Larry Heiniemi<br></br>
                      CFO<br></br>
                      ShieldNSeal<br></br>
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
