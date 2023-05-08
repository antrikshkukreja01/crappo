import React from "react";
import logo1 from "../assets/imgs/png/logo1.png";
import logo2 from "../assets/imgs/png/logo2.png";
import logo3 from "../assets/imgs/png/logo3.png";
import up_arrow from "../assets/imgs/png/profit.png";
import down_arrow from "../assets/imgs/png/loss.png";

function Grow() {
  return (
    <>
      <section className=" bg_navyblue position-relative overflow-hidden py-5">
        <div className=" container">
          <div className="row">
            <div className="col-lg-6 mb-5 mt-2  ">
              <p className=" ff_rubik fw_500 fs_32 text-white">
                Grow your profit and track your investments
              </p>
              <p className=" ff_rubik fw-normal fs_16 color_light_gray  mx_408">
                Use advanced analytical tools. Clear TradingView charts let you
                track current and historical profit investments.
              </p>
              <a
                className=" learn_btn mt_3 ff_rubik fw_500 text-white fs_18 text-decoration-none"
                href="#"
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-6">
              <div
                data-aos="fade-down-left"
                data-aos-duration="3000"
                className="box_slide "
              >
                <div className="d-flex justify-content-end align-items-center gap-3 gap-sm-5 pe-sm-5">
                  <p className=" ff_inter fw-semibold fs_16 text-white ">
                    Price
                  </p>
                  <p className=" ff_inter fw-semibold fs_16 text-white">
                    Change
                  </p>
                  <p className=" ff_inter fw-semibold fs_16 text-white">
                    Volume (24h)
                  </p>
                </div>
                <div>
                  <div className="slide_box d-flex align-items-center justify-content-between ">
                    <div className="d-flex align-items-center pe-2 pe-sm-3">
                      <img src={logo1} alt="logo1" />
                      <span className="ms-1 ms-sm-4">
                        <p className="mb-0 ff_inter fw-bold fs_20 text-white">
                          BTC
                        </p>
                        <p className="mb-0 ff_inter fw-normal fs_16 color_gray_2">
                          Bitcoin
                        </p>
                      </span>
                    </div>
                    <p className=" mb-0 ff_inter fw-normal fs_16 color_gray_2 pe-2 pe-sm-3">
                      $6750
                    </p>
                    <div className="d-flex align-items-center pe-2 pe-sm-3">
                      <img src={up_arrow} alt="up_arrow" />
                      <p className="mb-0 ff_inter fw-normal fs_16 color_light_green">
                        +7.3%
                      </p>
                    </div>
                    <p className=" mb-0 ff_inter fw-normal fs_16 color_gray_2 pe-1 pe-sm-3 ">
                      $3420214
                    </p>
                  </div>
                  <div className="slide_box d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center pe-2 pe-sm-3">
                      <img src={logo2} alt="logo1" />
                      <span className="ms-1 ms-sm-4">
                        <p className="mb-0 ff_inter fw-bold fs_20 text-white">
                          ETH
                        </p>
                        <p className="mb-0 ff_inter fw-normal fs_16 color_gray_2">
                          Ethereum
                        </p>
                      </span>
                    </div>
                    <p className=" mb-0 ff_inter fw-normal fs_16 color_gray_2 pe-2 pe-sm-3">
                      $156.83
                    </p>
                    <div className="d-flex align-items-center pe-1 pe-sm-3">
                      <img src={down_arrow} alt="down_arrow" />
                      <p className="mb-0 ff_inter fw-normal fs_16 color_light_red">
                        -0.9%
                      </p>
                    </div>
                    <p className=" mb-0 ff_inter fw-normal fs_16 color_gray_2 pe-1 pe-sm-3 ">
                      $1812350
                    </p>
                  </div>
                  <div className="slide_box d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center pe-2 pe-sm-3">
                      <img src={logo3} alt="logo1" />
                      <span className=" ms-1 ms-sm-4">
                        <p className="mb-0 ff_inter fw-bold fs_20 text-white">
                          LTC
                        </p>
                        <p className="mb-0 ff_inter fw-normal fs_16 color_gray_2">
                          Litecoin
                        </p>
                      </span>
                    </div>
                    <p className=" mb-0 ff_inter fw-normal fs_16 color_gray_2 pe-2 pe-sm-3">
                      $8535
                    </p>
                    <div className="d-flex align-items-center pe-2 pe-sm-3">
                      <img src={up_arrow} alt="up_arrow" />
                      <p className="mb-0 ff_inter fw-normal fs_16 color_light_green">
                        +8.2%
                      </p>
                    </div>
                    <p className=" mb-0 ff_inter fw-normal fs_16 color_gray_2 pe-1 pe-ms-3 ">
                      $5820399
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}

export default Grow;
