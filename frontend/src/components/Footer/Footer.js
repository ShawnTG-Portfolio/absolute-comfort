import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="">
            <h5 className="footer-heading">Contact Us</h5>
            <div>
              <address className="address">
                Bonded Warehouse #4 Bay 4A, <br /> P.O.Box
                F-60492, <br />
                Freeport, Grand Bahama, Bahamas.
                {/* <br />
                  E-mail: absolutecomfort242@gmail.com
                  <br />
                  Tel: 1-242-602-1029 <br /> Cell:
                  1-242-809-9178 */}
              </address>
              <a
                className="numbers"
                href="tel:1-242-602-1029"
              >
                Tel: 1-242-602-1029
              </a>
              <br />
              <a
                className="numbers"
                href="tel:1-242-602-1029"
              >
                Cell: 1-242-809-9178
              </a>
              <br />
              <a
                className="numbers"
                href="mailto:absolutecomfort@gmail.com"
              >
                Email: absolutecomfort@gmail.com
              </a>
              <div>
                <a href="/">
                  <BsFacebook className="text-white fs-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4>Our Company</h4>
            <a className="anchor-tag" href="/about">
              <p>About</p>
            </a>
            <a className="anchor-tag" href="/contact">
              <p>Contact</p>
            </a>
            {/* <a className="anchor-tag" href="/">
              <p>FAQ</p>
            </a> */}
          </div>
          <div className="sb_footer-links_div">
            <h4>Information</h4>
            <a className="anchor-tag" href="/refund-policy">
              <p>Refund Policy</p>
            </a>
            <a
              className="anchor-tag"
              href="/shipping-policy"
            >
              <p>Delivery/Shipping Policy</p>
            </a>
            <a
              className="anchor-tag"
              href="/terms-and-conditions"
            >
              <p>Terms and Conditions</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Quick Links</h4>
            <a
              className="anchor-tag"
              href="/request-service"
            >
              <p>Request Service</p>
            </a>
            <a className="anchor-tag" href="/">
              <p>A/C Units</p>
            </a>
            <a className="anchor-tag" href="/">
              <p>Brackets</p>
            </a>
            <a className="anchor-tag" href="/">
              <p>Filters</p>
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} Powered by SG
              Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
