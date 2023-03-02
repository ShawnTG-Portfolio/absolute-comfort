import React from 'react';
import MarqueeSlider from '../components/MarqueeSlider';
import Container from 'react-bootstrap/esm/Container';

export default function ShippingPolicyScreen() {
  return (
    <Container className="mt-3">
      <div className="about-screen">
        <div className="aboutus-one">
          <span>
            <h2>Our Delivery / Shipping Policy</h2>
          </span>
        </div>
        <div className="aboutus-2">
          <p>
            All deliveries will be delivered next business
            day or Saturday. Clear, and concise delivery
            address required. Free delivery offered to all
            purchases wihin the Freeport area and over
            $500.00. Any amount under $500.00 and/or outside
            the immediate Freeport area (i.e: Eight Mile
            Rock, West End, or beyond Casurina Bridge) will
            incure an additional $65.00 deliver charge. All
            bonded sales purchased online, will only be
            available for instore pickup only, at this time
            as it will require in store verification by
            management. Any purchase to be shipped to other
            islands other than Grand Bahama wil incure extra
            addtional charges based on shipping
            instructions.
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
