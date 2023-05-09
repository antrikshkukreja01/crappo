import React from "react";
import bitcoin from "../assets/imgs/png/bitcoin2.png";
import graph from "../assets/imgs/png/graph.png";
import uparrow from "../assets/imgs/png/up_arrow.png";
import circle from "../assets/imgs/png/circle_img.png";

function Market() {
  return (
    <>
      <section className=" bg_navyblue position-relative overflow-hidden   py-5">
        <div className=" position-absolute top_0">
          <img className=" w-100" src={circle} alt="circle" />
        </div>
        <div className=" container">
          <div className=" mt-sm-5 text-center d-flex justify-content-center">
            <p className=" zn_1 ff_rubik fw-bold fs_40 text-white mb-0 mx_758">
              Market sentiments, portfolio, and run the infrastructure of your
              choice
            </p>
          </div>
          <div className="row align-items-center mt-lg-5 pt-5">
            <div className="col-lg-5">
              <p className=" ff_rubik fw-bold fs_32 text-white mb-0">
                Invest Smart
              </p>
              <p className=" ff_rubik fw-normal fs_16 color_light_gray my-lg-4 mx_408">
                Get full statistic information about the behaviour of buyers and
                sellers will help you to make the decision.{" "}
              </p>{" "}
              <a
                className=" learn_btn mt_3 ff_rubik fw_500 text-white fs_18 text-decoration-none"
                href="#"
              >
                Learn More
              </a>
            </div>
            <div className=" mt-3 mt-lg-0 col-lg-7">
              <div className="bitcoin_box position-relative ">
                {" "}
                <div className="d-no ne d-sm-flex ">
                  <div className="box1 box1_pos  d-inline-block">
                    <p className=" ff_inter mx_146 fw-semibold fs_20 text-white mb-0">
                      Increase in Trade
                    </p>
                    <div className=" my-sm-3 d-flex align-items-center">
                      <p className=" ff_inter fw-semibold fs_20 text-white mb-0">
                        +75%
                      </p>
                      <img src={uparrow} alt="uparrow" />
                    </div>{" "}
                    <a
                      className=" hover text-decoration-none ff_inter fs_16 fw-normal color_gray_2"
                      href="#"
                    >
                      Sell option
                    </a>
                  </div>
                </div>
                <div className="d-no ne d-sm-flex ">
                  <div className=" box2_pos text-center box2">
                    <p className=" ff_inter fw-bold fs_20 text-white mb-0">
                      $15.32
                    </p>
                    <p className=" ff_inter fw-normal mb-0 fs_16 color_gray_2">
                      Price in dollar
                    </p>
                  </div>
                </div>
                <div className=" d-flex justify-content-between align-items-center">
                  <div className=" d-flex gap-3 align-items-center">
                    <img className=" img_size_2" src={bitcoin} alt="bitcoin" />
                    <article>
                      {" "}
                      <article className="d-flex gap-1 align-items-center ">
                        <p className=" ff_inter text-white fw-bold fs_20 mb-0">
                          Bitcoin
                        </p>
                        <p className="  ff_inter color_gray fw-semibold fs_16 opicity_1 mb-1">
                          BTC
                        </p>
                      </article>
                      <p className=" color_gray_2 ff_inter  fw-normal fs_16 opicity_1 mb-0">
                        0.00080 BTC
                      </p>
                    </article>
                  </div>
                  <p className=" ff_inter fs_16 fw_500 color_light_blue">
                    +125%
                  </p>
                </div>
                <img className=" w-100" src={graph} alt="graph" />
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
