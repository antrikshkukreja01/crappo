import React from "react";
import img from "../assets/imgs/png/Statistic_img.png";

function Detailed() {
  return (
    <section className="py-5 mt_1 overflow-hidden bg_navyblue ">
      <div className=" container">
        <div className="row mt-sm-5 flex-column-reverse flex-md-row  align-items-center">
          <div
            data-aos="fade-down-right"
            data-aos-duration="3000"
            className="col-12 col-md-6 "
          >
            <div className=" mt-4 mt-md-0 img_overflow">
              <img className="  w-100" src={img} alt="img" />
            </div>
          </div>

          <div className="col-12 col-md-6 mt-5 mt-md-0 ">
            <p className=" ff_rubik fw-bold fs_32 text-white">
              Detailed Statistics
            </p>
            <p className=" ff_rubik fw-normal mx_408 fs_16 color_light_gray">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <a
              className=" learn_btn mt_3 ff_rubik fw_500 text-white fs_18 text-decoration-none"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detailed;
