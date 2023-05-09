import React from "react";
import fan_img from "../assets/imgs/png/fan_img.png";
import left_shadow from "../assets/imgs/png/left_shadow.png";
import d_img from "../assets/imgs/png/d_img.png";
import u_img from "../assets/imgs/png/u_img.png";

function Choose() {
  return (
    <>
      <section className=" bg_darkblue mt_1 position-relative pt-5 pb-lg-5">
        <div className=" d-none d-md-flex position-absolute end-0 top_20">
          <img className=" w-100" src={d_img} alt="left_shadow" />
        </div>
        <div className=" d-none d-md-flex position-absolute end-0 bottom_20">
          <img className=" w-100" src={u_img} alt="left_shadow" />
        </div>
        <div className=" d-none d-md-flex position-absolute start-0 bottom-0">
          <img className=" w-100" src={left_shadow} alt="left_shadow" />
        </div>
        <div className=" container">
          <div className="row  align-items-center">
            <div className="col-lg-6">
              <img className=" w-100" src={fan_img} alt="fan_img" />
            </div>
            <div className="col-lg-6">
              <div className=" ps-lg-5 mt-5 mt-lg-0 ms-lg-5">
                <p className=" ff_rubik fw-bold fs_40 mx_480 text-white">
                  Why you should choose CRAPPO
                </p>
                <p className=" ff_rubik fw-normal fs_16 color_light_gray mx_408">
                  Experience the next generation cryptocurrency platform. No
                  financial borders, extra fees, and fake reviews.
                </p>{" "}
                <a
                  className=" learn_btn mt_3 ff_rubik fw_500 text-white fs_18 text-decoration-none"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Choose;
