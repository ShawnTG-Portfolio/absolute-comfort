import React from 'react';
import MarqueeSlider from '../components/MarqueeSlider';
import Container from 'react-bootstrap/esm/Container';

export default function AboutScreen() {
  return (
    <Container className="mt-5">
      <div className="about-screen">
        <div className="aboutus-one">
          <h2 className="h2-one">
            About Us{' '}
            <span>
              <h5>
                Absolute Comfort, When your comfrot
                counts...
              </h5>
            </span>
          </h2>

          <img
            src="images/techs.png"
            alt="techs"
            className="image-one"
          />
        </div>
        <div className="aboutus-2">
          <p>
            Absolute Comfort is a company established on
            March 1st, 2000. Since that time it has been
            positioning itself to become a leader in the
            industry on the Island of Grand Bahama and
            throughout the Bahama Islands. The company is in
            a unique position on Grand Bahama Island where,
            as a result of the Hawksbill Creek Agreement,
            goods can be imported at lower costs and sold at
            either duty-paid or bonded prices. The company
            is Bahamian owned and operated and its team of
            qualified technicians and support staff (at
            present, a total of 10) are focused on
            delivering 100% customer satisfaction. The
            company continues to evolve by keeping current
            with the latest technologies and is always ready
            to offer consistent, qualified and professional
            service. As a result we have secured a number of
            monthly service contracts for various well
            established and prestigious businesses and
            organizations on Grand Bahama.
          </p>
          {/* <img src="test" alt="test" /> */}
        </div>
        <div className="aboutus-2">
          <p>
            Whether it’s for industrial, commercial or
            residential, Absolute Comfort houses an
            attractive and variety of inventory units and
            parts and we have presently expanded our
            inventory. At present, we can boast of close to
            10,000 items in inventory. We can offer any
            brand and special orders are delivered in a
            timely manner. The name brands we offer are
            prestigious brand such as Comfort Star, Lennox,
            Rheem, Carrier, Trane and Mitsubishi. We are a
            one stop shop for installation supplies and what
            we do not have in stock, we can order.
          </p>
          {/* <img src="test" alt="test" /> */}
        </div>
        <div className="aboutus-2">
          <h4>Our Parts and Products...</h4>
          <p>
            Our parts department has a wide range of
            Original Equipment Manufactured parts, as well
            as generic parts for the more cost conscious.
          </p>
          {/* <img src="test" alt="test" /> */}
        </div>

        <div className="aboutus-2">
          <p>
            In stock, we have a number of products from
            Chemtron, a leading specialty chemical
            manufacturer providing cleaning and odor removal
            solutions to the industrial and hospitality
            markets.
          </p>
        </div>
        <div className="aboutus-2">
          <h4>Our Technicians...</h4>
          <p>
            Our Technicians are all professionally trained
            in installation as well as repair and we have
            all the tools and equipment on hand to make sure
            they are able to provide swift, professional and
            satisfactory service. We are particularly proud
            of our installation department and it is our
            intention to stay on the cutting edge, improving
            our product while reflecting after every job to
            improve our quality of work. Our fleet of
            vehicles helps us to increase customer
            satisfaction by increasing efficiency.
          </p>
        </div>
        <div className="aboutus-2">
          <h4>Preventive Maintenance...</h4>
          <p>
            Our preventative Maintenance program is one
            whereby we offer our clients a tested and proven
            method that eliminates the common problems
            associated with neglected maintenance. We follow
            stringent protocols when it comes to preventive
            maintenance. We provide Assessment of the
            equipment, a detailed checklist specific to the
            customer’s equipment while making sure the unit
            and grilles are clean & preserved. We service
            what we sell to ensure our customer gets the
            maximum performance and full warranty. We also
            service units not purchased from us.
          </p>
        </div>
        <div className="aboutus-2">
          <h4>Because "your comfort counts..."</h4>
        </div>
        <MarqueeSlider />
      </div>
    </Container>
  );
}
