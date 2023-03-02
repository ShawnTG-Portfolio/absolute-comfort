import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSlider = () => {
  return (
    <section className="marque-wrapper py-5">
      <div>
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div>
                  <img
                    src="images/comfortstar.png"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="images/lennox.png"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="images/smart-electric.png"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="images/tradepro.png"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="images/chemtron.png"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="images/hercules.png"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="images/cleanair.png"
                    alt="brand"
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSlider;
