import React from 'react';
import MarqueeSlider from '../components/MarqueeSlider';
import Container from 'react-bootstrap/esm/Container';

export default function RefundPolicyScreen() {
  return (
    <Container className="mt-3">
      <div className="about-screen">
        <div className="aboutus-one">
          <span>
            <h2>Our Refund & Return Policy</h2>
          </span>
        </div>
        <div className="aboutus-2">
          <p>
            All internet and in store sales are final.
            Should you need to return a purchased item, it
            must be approved by management for either an "in
            store" credit or exchange for an item of the
            same value. If exchange is less than refund
            amount, the remaining balance will be applied
            for an "in store" credit to be use for a future
            purchase. We do not offer cash refunds as an
            option. If purchasing via bonded pricing, which
            requires instore verification, note if unbale to
            verify, you will require to pay the balance
            after duty paid prices have been calculated and
            added to paid amount, should you reques a refund
            under these circumstances ONLY, will charge back
            to debit/credit card will be granted.
          </p>
          {/* <img src="test" alt="test" /> */}
        </div>
        <div className="aboutus-2">
          <p>
            We strive to provide the best cusomer experience
            for all your air conditioning installation,
            sales, service, and repair needs simply because
            "your comfort counts"...thank you for
            understand.
          </p>
          {/* <img src="test" alt="test" /> */}
        </div>
        <div className="aboutus-2">
          <h4>Visit us today.</h4>
        </div>

        <MarqueeSlider />
      </div>
    </Container>
  );
}
