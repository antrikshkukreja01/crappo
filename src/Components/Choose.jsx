import React from "react";
import fan_img from "../assets/imgs/png/fan_img.png";

function Choose() {
  return (
    <>
      <section className=" bg_darkblue mt_1 pt-5 pb-lg-5">
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
