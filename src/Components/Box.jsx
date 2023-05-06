import React from "react";
import { Dropdown } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

function Box() {
  return (
    <section className=" bg_color ">
      <div className=" container">
        {" "}
        <div className="box ">
          <div className=" bg_skinywhite border_radius_1 px-3 px-md-5 py-5">
            <Row className=" justify-content-between align-items-center">
              <Col md="6" lg="5">
                <input
                  placeholder="Enter your hash rate"
                  className=" ff_rubik fw-normal fs_20 color_navyblue bd_bottom pb-2"
                  type="text"
                />
              </Col>
              <Col md="6" lg="4">
                <div className=" mt_4 bd_bottom  d-flex align-items-center">
                  <Dropdown>
                    {" "}
                    <Dropdown.Toggle
                      className=" d-flex justify-content-between align-items-center w_381 px-0  pb-2 "
                      variant="success"
                      id="dropdown-basic"
                    >
                      <p className=" ff_rubik fw-normal mb-0 fs_20 color_navyblue">
                        {" "}
                        TH/s{" "}
                      </p>

                      <svg
                        className=" d-none d-sm-flex"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1315 0.6875H0.868974C0.561161 0.6875 0.389286 1.0125 0.579911 1.23438L5.71116 7.18437C5.85804 7.35469 6.14085 7.35469 6.28929 7.18437L11.4205 1.23438C11.6112 1.0125 11.4393 0.6875 11.1315 0.6875Z"
                          fill="#BDBDBD"
                        />
                      </svg>
                    </Dropdown.Toggle>{" "}
                    <Dropdown.Menu className=" w_381">
                      {" "}
                      <Dropdown.Item className=" text-center" href="#/action-1">
                        Action{" "}
                      </Dropdown.Item>{" "}
                      <Dropdown.Item className=" text-center" href="#/action-2">
                        Another action{" "}
                      </Dropdown.Item>{" "}
                      <Dropdown.Item className=" text-center" href="#/action-3">
                        Something else{" "}
                      </Dropdown.Item>{" "}
                    </Dropdown.Menu>{" "}
                  </Dropdown>
                </div>
              </Col>
              <Col md="6" lg="2">
                <a
                  className=" calculate_btn mt_3 ff_rubik fw_500 text-white fs_18 text-decoration-none"
                  href="#"
                >
                  Calculate
                </a>
              </Col>
            </Row>
          </div>{" "}
          <div className="  px-3 px-md-5 py-5">
            <p className=" color_blue ff_rubik fs_16 fw_500 text-uppercase mb-3">
              ESTIMATED 24 HOUR REVENUE:
            </p>
            <p className=" ff_rubik fw-bold fs_32 color_navyblue mb-0">
              0.055 130 59 ETH <span className=" color_blue">($1275)</span>
            </p>
            <p className=" ff_rubik fw-normal fs_16 color_gray mb-0">
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Box;
