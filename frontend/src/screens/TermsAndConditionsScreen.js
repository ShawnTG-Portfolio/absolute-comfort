import React from 'react';
import MarqueeSlider from '../components/MarqueeSlider';
import Container from 'react-bootstrap/esm/Container';

export default function RefundPolicyScreen() {
  return (
    <Container className="mt-3">
      <div className="about-screen">
        <div className="aboutus-one">
          <span>
            <h2>Terms and Conditions</h2>
          </span>
        </div>
        <div className="aboutus-2">
          <p>
            All information provided during sign-up remains
            confidential. Your data will not be shared with
            any third parties without expressed permission.
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
