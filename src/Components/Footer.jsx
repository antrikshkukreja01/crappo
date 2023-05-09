import React from "react";
import logo from "../assets/imgs/png/Logo.png";
import logo_1 from "../assets/imgs/png/visa_card.png";
import logo_2 from "../assets/imgs/png/master_card.png";
import logo_3 from "../assets/imgs/png/bitcoin_card.png";
import facebook from "../assets/imgs/png/facebook.png";
import insta from "../assets/imgs/png/instagram.png";
import youtube from "../assets/imgs/png/youtube.png";
import twitter from "../assets/imgs/png/twitter.png";
import linkdin from "../assets/imgs/png/linkedin.png";

function Footer() {
  return (
    <>
      {" "}
      <section className=" bg_darkblue py-5">
        <div className=" container">
          <div className="row">
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <a
                className="text-decoration-none d-flex  align-items-center  "
                href="#"
              >
                <img className=" img_size_2" src={logo} alt="logo" />
                <p className="mb-0 ms-2 ff_inter fs_18 fw-semibold text-white">
                  CRAPPO
                </p>
              </a>
            </div>
            <div className="col-12  col-md-8">
              <div className="row">
                <div className="  col-lg-3 col-6">
                  <p className="fw_500 ff_rubik fs_20 text-white mb-4">
                    Quick Link
                  </p>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      Home{" "}
                    </a>
                  </span>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      Products{" "}
                    </a>
                  </span>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      About
                    </a>
                  </span>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      {" "}
                      Features{" "}
                    </a>
                  </span>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      Contact{" "}
                    </a>
                  </span>
                </div>
                <div className="  col-lg-4 col-6">
                  <p className="fw_500 ff_rubik fs_20 text-white mb-4">
                    Resources
                  </p>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      Download Whitepapper{" "}
                    </a>
                  </span>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      {" "}
                      Smart Token{" "}
                    </a>
                  </span>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      Blockchain Explorer
                    </a>
                  </span>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      {" "}
                      Crypto API{" "}
                    </a>
                  </span>
                  <span className=" d-block mt-3">
                    <a
                      className=" text-decoration-none footer_hover position-relative ff_rubik fw-normal fs_16 color_light_gray"
                      href="#"
                    >
                      Interest{" "}
                    </a>
                  </span>
                </div>
                <div className=" col-12 col-lg-5 col-sm-12 mt-5 mt-lg-0">
                  <p className=" fw_500 fs_32 ff_rubik text-white mb-5 ">
                    We accept following payment systems
                  </p>
                  <div className=" d-flex align-items-center gap-4 ">
                    <a className="scale" href="#">
                      <img className="w-100" src={logo_1} alt="logo_1" />
                    </a>
                    <a className="scale" href="#">
                      <img className="w-100" src={logo_2} alt="logo_2" />
                    </a>
                    <a className="scale" href="#">
                      <img className="w-100" src={logo_3} alt="logo_2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex align-items-center flex-column flex-sm-row justify-content-between mt-5">
            <p className="mb-0 ff_rubik fw-normal fs_16 text-white">
              ©2021 CRAPPO. All rights reserved
            </p>
            <div className="d-flex align-items-center gap-3 mt-3 mt-sm-0">
              <a className=" scale" href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a className=" scale" href="#">
                <img src={insta} alt="facebook" />
              </a>
              <a className=" scale" href="#">
                <img src={youtube} alt="facebook" />
              </a>
              <a className=" scale" href="#">
                <img src={twitter} alt="facebook" />
              </a>
              <a className=" scale" href="#">
                <img src={linkdin} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
