import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import login from "./../assets/images/login.png";
import Header from "../Shared/Header/Header.js";
import Footer from "../Shared/Footer/Footer.js";
const Login = () => {
  const { allContext } = useAuth();
  const history = useHistory();

  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  const {
    getEmail,
    getPassword,
    signInWithEmail,
    error,
    setUser,
    setError,
    signInWithGoogle,
  } = allContext;

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="m-0 mt-3 row">
          <div className="mt-4 col-lg-6 col-sm-12 ">
            <img src={login} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="p-4 my-5 text-center shadow-lg">
              <h2 style={{ color: "#895E40" }}>Please Login</h2>
              <p className="mt-2 mb-4 ">Login with Email & Password</p>
              <p className="text-center text-danger">{error}</p>
              <div className="mx-auto w-75">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signInWithEmail()
                      .then((result) => {
                        setUser(result.user);
                        history.push(redirect);
                      })
                      .catch((err) => {
                        setError(err.message);
                      });
                  }}
                >
                  <Row>
                    <Col className="text-start">
                      <Form.Label htmlFor="email" visuallyHidden>
                        Your Email Address
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: "#895E40" }}
                          ></FontAwesomeIcon>
                        </InputGroup.Text>
                        <FormControl
                          onBlur={getEmail}
                          type="email"
                          autoComplete="current-email"
                          id="email"
                          placeholder="Enter your email address"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="text-start">
                      <Form.Label htmlFor="password" visuallyHidden>
                        Your Password
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={faLock}
                            style={{ color: "#895E40" }}
                          ></FontAwesomeIcon>
                        </InputGroup.Text>
                        <FormControl
                          onBlur={getPassword}
                          type="password"
                          autoComplete="current-password"
                          id="password"
                          placeholder="Enter your password"
                        />
                      </InputGroup>
                    </Col>
                  </Row>

                  <button
                    type="submit"
                    className="mt-2 border-0 btn btn-primary w-100"
                    style={{ backgroundColor: "#895E40" }}
                  >
                    Login
                  </button>
                </Form>
              </div>
              <p className="mt-2" style={{ color: "#895E40" }}>
                <NavLink className="text-decoration-none" to="/signup">
                  Need an Account? Please Sign up!
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
