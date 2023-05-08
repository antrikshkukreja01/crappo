import React, { useState } from "react";
import logo from "../assets/imgs/png/Logo.png";
import cross from "../assets/imgs/png/cancle.png";

function Nav() {
  const [name, setname] = useState(false);
  if (name) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className=" bg_darkblue py-4">
        <div className=" container ">
          {/* nav bar */}
          <nav className=" pt-3">
            <article>
              <div className="d-md-flex align-items-center justify-content-between">
                <a
                  className="text-decoration-none d-md-flex d-none align-items-center  "
                  href="#"
                >
                  <img className=" img_size_2" src={logo} alt="logo" />
                  <p className="mb-0 ms-2 ff_inter fs_18 fw-semibold text-white">
                    CRAPPO
                  </p>
                </a>
                <div className=" d-flex justify-content-end">
                  <div className="d-flex align-items-center  d-md-flex d-none">
                    <a
                      className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw-normal nav_hover  position-relative fs_16 text-white   "
                      href="#Tickets"
                    >
                      Products
                    </a>
                    <a
                      className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw-normal nav_hover  position-relative fs_16 text-white   "
                      href="#Memories"
                    >
                      Features
                    </a>
                    <a
                      className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw-normal nav_hover  position-relative fs_16 text-white   "
                      href="#Passenger"
                    >
                      About
                    </a>
                    <a
                      className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw-normal nav_hover  position-relative fs_16 text-white   "
                      href="#feedback"
                    >
                      Contact
                    </a>
                    <a
                      className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw_500 nav_hover    position-relative fs_16 text-white   "
                      href="#"
                    >
                      Login
                    </a>
                    <article className="position-relative">
                      <a
                        className=" d-inline-block transition  text-decoration-none ms-4 Register_btn ff_rubik fw_500 fs_16"
                        href="#"
                      >
                        Register
                      </a>
                      <span className="line"></span>
                    </article>
                  </div>
                </div>
              </div>
              <article className="d-flex justify-content-between  ">
                <a
                  className="text-decoration-none mt-2 d-flex align-items-center d-md-none "
                  href="#"
                >
                  <img className=" img_size_2" src={logo} alt="logo" />
                  <p className="mb-0 ms-2 ff_inter fs_18 fw-semibold text-white">
                    CRAPPO
                  </p>
                </a>

                <a
                  href="#"
                  className="d-md-none d-flex mt-1 justify-content-end zn_3    align-items-center  d-inline-block  ms-2  ps-3 "
                  onClick={() => setname(true)}
                >
                  <label className="navBtn position-relative" htmlFor="line">
                    <input type="checkbox" id="line" className="menubar" />
                    <span className="span1 rounded-3"></span>
                    <span className="span2 rounded-3"></span>
                    <span className="span3 rounded-3"></span>
                  </label>
                </a>
              </article>
              <div className={`${name ? "box_my" : " box_hide  "}`}>
                <div className="d-flex align-items-center justify-content-center">
                  <a
                    className="text-decoration-none pos_logo d-flex align-items-center  "
                    href="#"
                  >
                    <img className=" img_size_2" src={logo} alt="logo" />
                    <p className="mb-0 ms-2 ff_inter fs_18 fw-semibold text-white">
                      CRAPPO
                    </p>
                  </a>
                  <a
                    href="#"
                    className="d-md-none zn d-flex mt-1 justify-content-center hoverhn   align-items-center  d-inline-block  mx-2 py-2 px-3 "
                    onClick={() => setname(false)}
                  >
                    <img className=" w_40 pos_cross" src={cross} alt="cross" />
                  </a>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center     d-md-none gap-3">
                  <a
                    className=" text-decoration-none mx-2 mx-lg-3 ff_rubik fw-normal nav_hover  position-relative fs_16 text-white   "
                    href="#"
                  >
                    Products
                  </a>
                  <a
                    className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw-normal nav_hover  position-relative fs_16 text-white   "
                    href="#"
                  >
                    Features
                  </a>
                  <a
                    className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw-normal nav_hover  position-relative fs_16 text-white   "
                    href="#"
                  >
                    About
                  </a>
                  <a
                    className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw-normal nav_hover  position-relative fs_16 text-white   "
                    href="#"
                  >
                    Contact
                  </a>
                  <a
                    className="text-decoration-none mx-2 mx-lg-3 ff_rubik fw_500   my-3 nav_hover position-relative fs_16 text-white   "
                    href="#"
                  >
                    Login
                  </a>
                  <a
                    className=" transition text-decoration-none Register_btn ff_rubik fw_500 fs_16"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>
            </article>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Nav;
