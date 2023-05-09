import React from "react";
import icon1 from "../assets/imgs/png/Icon1.png";
import icon2 from "../assets/imgs/png/Icon2.png";
import icon3 from "../assets/imgs/png/Icon3.png";
import hero_img from "../assets/imgs/png/hero_img.png";
import shadow_1 from "../assets/imgs/png/big_line_shadow.png";
import Carousel from "react-bootstrap/Carousel";

function Header() {
  return (
    <>
      <section className=" pb-5 overflow-hidden bg_darkblue mt_1">
        <div className=" container position-relative">
          <div className=" d-none d-md-flex position-absolute end_1">
            <img src={shadow_1} alt="shadow_2" />
          </div>
          <div className=" d-none d-md-flex position-absolute bottom-0 end_2">
            <img src={shadow_1} alt="shadow_2" />
          </div>
          <div className="row align-items-center flex-column-reverse flex-lg-row ">
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="blur_shadow gap-3  d-flex align-items-center">
                <p className="white_box text-decoration-none mb-0 ff_rubik fw_500 color_navyblue fs_16">
                  75% SAVE
                </p>
                <p className=" mb-0 ff_rubik fw-normal  fs_16 text-white ps-2">
                  For the Black Friday weekend
                </p>
              </div>
              <h1 className=" fw-bold fs_64 ff_rubik mx_588 text-white my-3">
                Fastest & secure platform to invest in crypto
              </h1>
              <p className=" mw_435 ff_inter color_light_gray fs_16 fw-normal">
                Buy and sell cryptocurrencies, trusted by 10M wallets with over
                $30 billion in transactions.
              </p>
              <article className="d-inline-block mt-4 ">
                <a
                  className=" transition d-flex align-items-center zn_1  text-decoration-none Register_btn "
                  href="#"
                >
                  <p className=" mb-0 me-3 ff_rubik text-white fw_500  fs_18">
                    Try for FREE
                  </p>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="white" />
                    <path
                      d="M14.5 20.9999C14.3684 21.0007 14.2379 20.9755 14.1161 20.9257C13.9943 20.8759 13.8834 20.8026 13.79 20.7099C13.6963 20.617 13.6219 20.5064 13.5711 20.3845C13.5203 20.2626 13.4942 20.1319 13.4942 19.9999C13.4942 19.8679 13.5203 19.7372 13.5711 19.6154C13.6219 19.4935 13.6963 19.3829 13.79 19.2899L17.1 15.9999L13.92 12.6899C13.7337 12.5026 13.6292 12.2491 13.6292 11.9849C13.6292 11.7207 13.7337 11.4673 13.92 11.2799C14.013 11.1862 14.1236 11.1118 14.2454 11.061C14.3673 11.0103 14.498 10.9841 14.63 10.9841C14.762 10.9841 14.8927 11.0103 15.0146 11.061C15.1364 11.1118 15.247 11.1862 15.34 11.2799L19.2 15.2799C19.3832 15.4669 19.4859 15.7182 19.4859 15.9799C19.4859 16.2417 19.3832 16.493 19.2 16.6799L15.2 20.6799C15.1102 20.7769 15.0022 20.855 14.882 20.91C14.7619 20.9649 14.632 20.9955 14.5 20.9999Z"
                      fill="#3671E9"
                    />
                  </svg>
                </a>
              </article>
            </div>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="3000"
              className="col-lg-6 mt-5 col-12"
            >
              <div className="d-flex justify-content-center">
                <img className="hero_img" src={hero_img} alt="hero_img" />
              </div>
            </div>
          </div>
        </div>
        <div className=" container py-5">
          <Carousel className="d-md-none">
            {" "}
            <Carousel.Item>
              {" "}
              <div className="d-flex align-items-center justify-content-center">
                <img className=" img_size" src={icon1} alt="icon1" />
                <article className="ms-3">
                  <p className=" mb-0 ff_rubik fw-bold fs_40 text-white">
                    $30B
                  </p>
                  <p className=" mb-0 ff_rubik fw-normal fs_16 color_light_gray">
                    Digital Currency Exchanged
                  </p>
                </article>
              </div>{" "}
            </Carousel.Item>{" "}
            <Carousel.Item>
              {" "}
              <div className="d-flex align-items-center justify-content-center">
                <img className=" img_size" src={icon2} alt="icon2" />
                <article className="ms-3">
                  <p className=" mb-0 ff_rubik fw-bold fs_40 text-white">
                    10M+
                  </p>
                  <p className=" mb-0 ff_rubik fw-normal fs_16 color_light_gray">
                    Trusted Wallets Investor
                  </p>
                </article>
              </div>
            </Carousel.Item>{" "}
            <Carousel.Item>
              {" "}
              <div className="d-flex align-items-center justify-content-center">
                <img className=" img_size" src={icon3} alt="icon3" />
                <article className="ms-3">
                  <p className=" mb-0 ff_rubik fw-bold fs_40 text-white">195</p>
                  <p className=" mb-0 ff_rubik fw-normal fs_16 color_light_gray">
                    Countries Supported
                  </p>
                </article>
              </div>
            </Carousel.Item>{" "}
          </Carousel>
          <div className="row d-none d-md-flex  justify-content-center">
            <div className=" col-sm-6 col-lg-4">
              <div className=" d-flex align-items-center justify-content-center mt-4">
                <img className=" img_size me-3" src={icon1} alt="icon1" />
                <article>
                  <p className=" ff_rubik fw-bold fs_40 text-white mb-0 ">
                    $30B
                  </p>
                  <p className=" ff_rubik fw-normal fs_16 color_light_gray mb-0">
                    Digital Currency Exchanged
                  </p>
                </article>
              </div>
            </div>
            <div className=" col-sm-6 col-lg-4">
              <div className=" d-flex align-items-center justify-content-center mt-4">
                <img className=" img_size me-3" src={icon2} alt="icon2" />
                <article>
                  <p className=" ff_rubik fw-bold fs_40 text-white mb-0">
                    10M+
                  </p>
                  <p className=" ff_rubik fw-normal fs_16 color_light_gray mb-0">
                    Trusted Wallets Investor
                  </p>
                </article>
              </div>
            </div>
            <div className=" col-sm-6 col-lg-4">
              <div className=" d-flex align-items-center justify-content-center mt-4">
                <img className=" img_size me-3" src={icon3} alt="icon3" />
                <article>
                  <p className=" ff_rubik fw-bold fs_40 text-white mb-0">195</p>
                  <p className=" ff_rubik fw-normal fs_16 color_light_gray mb-0">
                    Countries Supported
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
