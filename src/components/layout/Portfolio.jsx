import React from "react";
import Heading from "../Heading";
import Image from "../Image";
import selectedWorks from "/src/assets/selectedWorks.png";
import Container from "../Container";
import Flex from "../Flex";
import selectedWorks2 from "/src/assets/selectedWorks2.png";
import selectedWorks3 from "/src/assets/selectedWorks3.png";
import selectedWorks4 from "/src/assets/selectedWorks4.png";
import selectedWorks5 from "/src/assets/selectedWorks5.png";
import selectedWorks6 from "/src/assets/selectedWorks6.png";
import selectedWorks7 from "/src/assets/selectedWorks7.png";
import selectedWorks8 from "/src/assets/selectedWorks8.png";
import selectedWorks9 from "/src/assets/selectedWorks9.png";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <div className="py-12 bg-blue-50">
          <Heading
            text={"Portfolio"}
            as={"h5"}
            className={
              "text-medium text-base text-secondary flex justify-center items-center tracking-[1.5px]"
            }
          />
          <Heading
            text={"Some of my Works"}
            as={"h4"}
            className="text-[36px] font-semibold lg:text-[44px] leading-18 tracking-wide text-center bg-gradient-to-r from-secondary from 0-95% to-tirtiary to-95%-100% bg-clip-text text-transparent"
          />
          <p className="w-[90%] mt-0 leading-5 text-sm lg:text-base lg:leading-6 lg:tracking-wider lg:w-[70%] m-auto text-center text-[#121212] lg:mt-3">
            I build responsive, user-friendly, and scalable web applications
            with a focus on performance, interactivity, and great UI/UX. I can
            also convert Figma designs into fully functional React.js
            applications, bridging design and development seamlessly.
          </p>

          <div className="pt-12">
            <Container>
              <Flex className={"lg:flex lg:justify-between gap-x-3 gap-y-8 flex-wrap justify-center items-center"}>
                <div className="w-30% h-[400px]">
                  <Image imgSrc={selectedWorks} imgAlt={selectedWorks} />
                </div>
                <div className="w-30% h-[400px]">
                  <Image imgSrc={selectedWorks2} imgAlt={selectedWorks2} />
                </div>
                <div className="w-30% h-[400px]">
                  <Image imgSrc={selectedWorks4} imgAlt={selectedWorks4} />
                </div>
                <div className="w-30% h-[400px]">
                  <Image imgSrc={selectedWorks5} imgAlt={selectedWorks5} />
                </div>
                <div className="w-30% h-[400px]">
                  <Image imgSrc={selectedWorks7} imgAlt={selectedWorks7} />
                </div>
                <div className="w-30% h-[400px]">
                  <Image imgSrc={selectedWorks6} imgAlt={selectedWorks6} />
                </div>
                <div className="w-30% h-[400px]">
                  <Image imgSrc={selectedWorks8} imgAlt={selectedWorks8} />
                </div>
                <div className="w-30% h-[400px]">
                  <Image imgSrc={selectedWorks9} imgAlt={selectedWorks9} />
                </div>
              </Flex>
            </Container>
          </div>
          {/* <div className="pt-12">
            <Container>
              <Heading
                text={"Tech stack I use"}
                as={"h4"}
                className="font-semibold text-[44px] leading-18 tracking-wide text-center bg-gradient-to-r from-secondary from 0-95% to-tirtiary to-95%-100% bg-clip-text text-transparent"
              />

              {/* <ul className="sm:w-[90%] sm:grid sm:grid-cols-5 lg:w-[70%] m-auto lg:flex justify-center items-center gap-x-12 ">
                <li className="list-disc [&::marker]:text-secondary [&::marker]:text-2xl [&::marker]:items-center text-lg text-bold text-[#121212] opacity-70 ">
                  HTML
                </li>
                <li className="list-disc [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70 ">
                  CSS
                </li>
                <li className="list-disc [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70 ">
                  Bootstrap
                </li>
                <li className="list-disc [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70 ">
                  JavaScript
                </li>
                <li className="list-disc [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70 ">
                  jQuery
                </li>
                <li className="list-disc whitespace-nowrap [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70 ">
                  Tailwind-CSS
                </li>
                <li className="list-disc [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70 ">
                  React
                </li>
                <li className="list-disc whitespace-nowrap [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70">
                  React-Redux
                </li>
                <li className="list-disc [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70 ">
                  DaisyUI
                </li>
                <li className="list-disc whitespace-nowrap [&::marker]:text-secondary [&::marker]:text-2xl text-lg text-bold text-[#121212] opacity-70 ">
                  React-Router
                </li>
              </ul>
            </Container>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
