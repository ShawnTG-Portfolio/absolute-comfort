// import data from './data';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import Footer from './components/Footer/Footer';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import RefundPolicyScreen from './screens/RefundPolicyScreen';
import ShippingPolicyScreen from './screens/ShippingPolicyScreen';
import TermsAndConditionsScreen from './screens/TermsAndConditionsScreen';
import RequestService from './screens/RequestService';
import OurWork from './screens/OurWork';

function App() {
  const { state, dispatch: ctxDispatch } =
    useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/categories`
        );
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div>
        <ToastContainer
          position="bottom-center"
          limit={1}
        />
        <header className="header-top-strip py-3 w-100">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <p className="text-black mb-0">
                  "When your comfort counts..."
                </p>
              </div>
              <div className="col-6">
                <p className="text-end text-black mb-0">
                  Need a service call? Contact us @
                  <a
                    className="text-white"
                    href="tel:1-242-602-1029"
                  >
                    1-242-602-1029
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>
        <header>
          <Navbar expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="logo">
                  Absolute Comfort
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100  justify-content-end">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                  <Link to="/our-work" className="nav-link">
                    Our Work
                  </Link>
                  <Link
                    to="/request-service"
                    className="nav-link"
                  >
                    Request Service
                  </Link>
                  {userInfo ? (
                    <NavDropdown
                      title={userInfo.name}
                      id="basic-nav-dropdown"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>
                          User Profile
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>
                          Order History
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown
                      title="Admin"
                      id="admin-nav-dropdown"
                    >
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>
                          Dashboard
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>
                          Products
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>
                          Orders
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>
                          Users
                        </NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
              <Link to="/cart" className="nav-link">
                <img
                  src="images/cart.svg"
                  alt="cart"
                  className="cart"
                />
                {cart.cartItems.length > 0 && (
                  <Badge bg="danger" className="badge">
                    {cart.cartItems.reduce(
                      (a, c) => a + c.quantity,
                      0
                    )}
                  </Badge>
                )}
              </Link>
            </Container>
          </Navbar>
        </header>
        <header className="bottom-nav">
          <div class="dropdown-center">
            <button
              class="cat-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="menu"
                src="images/menu.svg"
                alt="cats"
              />
              SHOP{' '}
            </button>
            <ul class="dropdown-menu dropdown-ul">
              {categories.map((category) => (
                <Nav.Item key={category}>
                  <LinkContainer
                    // to={`/search/category=${category}`}
                    to={{
                      pathname: '/search',
                      search: `category=${category}`,
                    }}
                  >
                    <Nav.Link className="dropdown-cats">
                      {category}
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              ))}
            </ul>
          </div>
          <Navbar expand="lg">
            <Container>
              <SearchBox />
            </Container>
          </Navbar>
        </header>

        <main>
          <div>
            <Routes>
              <Route
                path="/product/:slug"
                element={<ProductScreen />}
              />
              <Route
                path="/cart"
                element={<CartScreen />}
              />
              <Route
                path="/search"
                element={<SearchScreen />}
              />
              <Route
                path="/signin"
                element={<SigninScreen />}
              />
              <Route
                path="/signup"
                element={<SignupScreen />}
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/placeorder"
                element={<PlaceOrderScreen />}
              />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route
                path="/payment"
                element={<PaymentMethodScreen />}
              ></Route>
              <Route
                path="/about"
                element={<AboutScreen />}
              ></Route>
              <Route
                path="/our-work"
                element={<OurWork />}
              ></Route>
              <Route
                path="/contact"
                element={<ContactScreen />}
              ></Route>
              <Route
                path="/refund-policy"
                element={<RefundPolicyScreen />}
              ></Route>
              <Route
                path="/shipping-policy"
                element={<ShippingPolicyScreen />}
              ></Route>
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditionsScreen />}
              ></Route>
              <Route
                path="/request-service"
                element={<RequestService />}
              ></Route>
              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </div>
        </main>

        <footer>
          <div className="text-center">
            <Footer />
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
