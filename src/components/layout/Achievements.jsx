import React from "react";
import Heading from "../Heading";
import CountUp from "react-countup";

const Achievements = () => {
  return (
    <>
      <section id="achievement">
        <div className="py-12 bg-blue-200">
          <Heading
            text={"My Achievements"}
            as={"h4"}
            className="font-semibold text-[40px] text-center bg-gradient-to-r from-secondary to-tirtiary bg-clip-text text-transparent mb-8"
          />
          <div className="flex justify-center items-center gap-x-4">
            <div className="text-center w-[200px] h-[180px] rounded-lg bg-black/10 p-5">
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

              <h5 className="text-2xl font-bold text-center mt-4">
                Year of Experience
              </h5>
            </div>
            <div className="text-center w-[200px] h-[180px] rounded-lg bg-black/10 p-5">
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
              <h5 className="text-2xl font-bold text-center mt-4">
                Project Completed
              </h5>
            </div>
            <div className="text-center w-[200px] h-[180px] rounded-lg bg-black/10 p-5">
              <div className="flex justify-center items-center">
                <CountUp
                  end={5}
                  duration={2}
                  className="text-4xl font-bold text-blue-600"
                />
              </div>
              <h5 className="text-2xl font-bold text-center mt-4">
                Satisfy <br />
                Clients
              </h5>
            </div>
            <div className="text-center w-[200px] h-[180px] rounded-lg bg-black/10 p-5">
              <div className="flex justify-center items-center">
                <CountUp
                  end={2}
                  duration={2}
                  className="text-4xl font-bold text-blue-600"
                />
              </div>
              <h5 className="text-2xl font-bold text-center mt-4">
                Certificate Received
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
