// import { Link } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import MarqueeSlider from '../components/MarqueeSlider';
import Container from 'react-bootstrap/esm/Container';

// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

function HomeScreen() {
  //   const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] =
    useReducer(reducer, {
      products: [],
      loading: true,
      error: '',
    });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: result.data,
        });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: err.message,
        });
      }

      //   setProducts(result.data);
    };
    fetchData();
  }, []);

  const featuredProduct = products.filter((product) => {
    return product.categoryTwo === 'Featured Product';
  });

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="images/sc1.png"
              className="d-block w-100"
              alt="sc1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/sc2.png"
              class="d-block w-100"
              alt="sc2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/sc3.png"
              class="d-block w-100"
              alt="sc3"
            />
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
          <span className="visually-hidden">Previous</span>
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
      <div className="home-div">
        <Helmet>
          <title>Absolute Comfort</title>
        </Helmet>

        <section className="home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="services d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-15">
                    <img
                      src="images/service.png"
                      alt="services"
                    />
                    <div>
                      <h6>Special Delivery Conditions</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <img
                      src="images/service-02.png"
                      alt="services"
                    />
                    <div>
                      <h6>Special Offers</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <img
                      src="images/service-03.png"
                      alt="services"
                    />
                    <div>
                      <h6>Service & Installation</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <img
                      src="images/service-04.png"
                      alt="services"
                    />
                    <div>
                      <h6>Affordble Prices</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <img
                      src="images/service-05.png"
                      alt="services"
                    />
                    <div>
                      <h6>100% Secure Payments</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Container>
          <h2>Featured Products</h2>
          <div className="products">
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">
                {error}
              </MessageBox>
            ) : (
              <Row>
                {featuredProduct.map((product) => (
                  <Col
                    key={product.slug}
                    sm={6}
                    md={4}
                    lg={3}
                    className="mb-3"
                  >
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            )}
          </div>
          <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
              <div className="col-12">
                <h3 className="section-heading">
                  Our Featured Parts
                </h3>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                    <div className="d-flex gap align-items-center">
                      <div>
                        <h6>Smart Electric Capacitors</h6>
                        <p>Fully Stocked!</p>
                      </div>
                      <img
                        src="images/capacitors.png"
                        alt=""
                      />
                    </div>
                    <div className="d-flex gap align-items-center">
                      <div>
                        <h6>Trade Pro HVAC Motors</h6>
                        <p>Come see our selection!</p>
                      </div>
                      <img
                        src="images/hvacmotors.png"
                        alt=""
                      />
                    </div>
                    <div className="d-flex gap align-items-center">
                      <div>
                        <h6>Smart Electric Contactors</h6>
                        <p>Fully Stocked!</p>
                      </div>
                      <img
                        src="images/contactors.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
        <MarqueeSlider />
      </div>
    </>
  );
}
export default HomeScreen;
