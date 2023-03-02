import React from 'react';
import Container from 'react-bootstrap/esm/Container';

export default function OurWork() {
  return (
    <Container>
      <div>
        {' '}
        <div className="aboutus-one">
          <span>
            <h2>Our Work</h2>
          </span>
        </div>
        <div className="aboutus-2">
          <p>See below some of our splendid jobs.</p>
          {/* <img src="test" alt="test" /> */}
        </div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide position-relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="images/ow1.jpg"
                className="d-block w-100"
                alt="sc1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/ow2.jpg"
                class="d-block w-100"
                alt="sc2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/ow3.jpg"
                class="d-block w-100"
                alt="sc3"
              />
            </div>
            <div class="carousel-item active">
              <img
                src="images/ow4.jpg"
                className="d-block w-100"
                alt="sc1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/ow5.jpg"
                class="d-block w-100"
                alt="sc2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/ow6.jpg"
                class="d-block w-100"
                alt="sc3"
              />
            </div>
            <div class="carousel-item active">
              <img
                src="images/ow7.jpg"
                className="d-block w-100"
                alt="sc1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/ow8.jpg"
                class="d-block w-100"
                alt="sc2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/ow9.jpg"
                class="d-block w-100"
                alt="sc3"
              />
              <div class="carousel-item active">
                <img
                  src="images/ow9.1.jpg"
                  className="d-block w-100"
                  alt="sc1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/ow9.2.jpg"
                  class="d-block w-100"
                  alt="sc2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/ow9.3.jpg"
                  class="d-block w-100"
                  alt="sc3"
                />
              </div>
              <div class="carousel-item active">
                <img
                  src="images/ow9.4.jpg"
                  className="d-block w-100"
                  alt="sc1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/ow9.5.jpg"
                  class="d-block w-100"
                  alt="sc2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/ow9.6.jpg"
                  class="d-block w-100"
                  alt="sc3"
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">
              Previous
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Container>
  );
}
