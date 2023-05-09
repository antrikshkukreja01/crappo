import React from "react";
import dimond_img from "../assets/imgs/png/dimond_img.png";
import bit_coin from "../assets/imgs/png/bit_coin.png";

function Mining() {
  return (
    <>
      <section className=" bg_color_gradient py-5">
        <div className=" container">
          <div className="box_2 position-relative">
            <div className=" position-absolute top-0">
              <img src={dimond_img} alt="dimond_img" />
            </div>
            <div className=" position-absolute end-0 me-4 bottom-0">
              <img src={bit_coin} alt="dimond_img" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className=" zn_1 mb-0 ff_rubik fw-bold fs_32 text-white">
                  Start mining now
                </p>
                <p className=" zn_1 mx_348 mt-3 mb-0 ff_rubik fw-normal fs_16 text-white">
                  Join now with CRAPPO to get the latest news and start mining
                  now
                </p>
              </div>
              <div className="col-lg-6">
                <div className=" d-flex flex-column flex-md-row justify-content-center  gap-2 gap-lg-5 mt-4 align-items-center">
                  <input
                    className=" bd_bottom_2 ff_rubik fw-normal fs_16 text-white pb-2"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <a
                    className=" zn_1  ff_rubik fw_500 fs_18 color_navyblue sub_btn text-decoration-none"
                    href="#"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mining;
