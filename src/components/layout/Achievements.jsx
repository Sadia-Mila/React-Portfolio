import React from "react";
import Heading from "../Heading";
import CountUp from "react-countup";
import Container from "../Container";
import Flex from "../Flex";

const Achievements = () => {
  return (
    <>
      <section id="achievement">
        <div className="hidden lg:block py-16 bg-blue-100">
          <Heading
            text={"Achievements"}
            as={"h4"}
            className=" text-[40px] lg:text-[35px] font-bold text-center text-black/80 mb-8"
          />
          <Container>
            <Flex className={"flex items-center justify-center gap-x-4 "}>
              <div
                className="text-center w-[20%] h-auto rounded-lg bg-black/10 p-5"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2500"
              >
                <div className="flex justify-center items-center">
                  <CountUp
                    end={4}
                    duration={2}
                    className="text-4xl font-bold text-blue-600"
                  />
                  <p className="text-xl text-blue-black/40 font-bold text-blue-600">
                    +
                  </p>
                </div>

                <h5 className="text-lg lg:text-2xl font-bold text-center text-black/60 mt-4">
                  Year of Experience
                </h5>
              </div>
              <div className="text-center w-[20%] h-auto rounded-lg bg-black/10 p-5">
                <div className="flex justify-center items-center">
                  <CountUp
                    end={40}
                    duration={2}
                    className="text-4xl font-bold text-blue-600"
                  />

                  <p className="text-xl text-blue-black/40 font-bold text-blue-600">
                    +
                  </p>
                </div>
                <h5 className="text-lg lg:text-2xl font-bold text-center text-black/60 mt-4">
                  Project Completed
                </h5>
              </div>
              <div className="text-center w-[20%] h-auto rounded-lg bg-black/10 p-5">
                <div className="flex justify-center items-center">
                  <CountUp
                    end={5}
                    duration={2}
                    className="text-4xl font-bold text-blue-600"
                  />
                </div>
                <h5 className="text-lg lg:text-2xl font-bold text-center text-black/60 mt-4">
                  <span className="lg:inline block">Satisfy</span>
                  <span className="lg:inline block">Clients</span>
                </h5>
              </div>
              <div
                className="text-center w-[20%] h-auto rounded-lg bg-black/10 p-5"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
              >
                <div className="flex justify-center items-center">
                  <CountUp
                    end={2}
                    duration={2}
                    className="text-4xl font-bold text-blue-600"
                  />
                </div>
                <h5 className="text-lg lg:text-2xl font-bold text-center text-black/60 mt-4">
                  Certificate Received
                </h5>
              </div>
            </Flex>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Achievements;
