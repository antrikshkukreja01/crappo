import React from "react";
import { Container } from "react-bootstrap";

function Check() {
  return (
    <>
      <section className=" bg_darkblue py-5">
        <Container>
          <div className=" text-center mt-lg-5">
            <p className=" ff_rubik fs_40 fw-bold text-white mb-4 ">
              Check how much you can earn
            </p>
            <article className=" d-flex justify-content-center w-100">
              <p className=" mx_622 ff_rubik fw-normal fs_18 color_light_gray mb-0">
                Let’s check your hash rate to see how much you will earn today,
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Check;
