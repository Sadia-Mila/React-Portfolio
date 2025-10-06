import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import webDesign from "/src/assets/webDesign.jpg";
import mobile from "/src/assets/mobile.jpg";
import service4 from "/src/assets/service4.png";
import service5 from "/src/assets/service5.png";
import service6 from "/src/assets/service6.png";
import service7 from "/src/assets/service7.png";

const Service = () => {
  return (
    <>
      <section id="service">
        <div className="py-10 bg-gray-50">
          <Heading
            text={"SERVICES"}
            as={"h5"}
            className={
              "text-base font-medium text-secondary flex justify-center items-center tracking-[1.5px]"
            }
          />
          <Heading
            text={"What I Do For My Customer"}
            as={"h4"}
            className="text-[25px] md:text-[30px] lg:text-[40px] font-semibold leading-18 tracking-wide text-center bg-gradient-to-r from-secondary to-tirtiary/80 bg-clip-text text-transparent"
          />
          <p className="w-[70% ] md:w-[58%] text-base leading-6 lg:tracking-wider lg:w-[60%] m-auto text-center text-[#121212] mt-3">
            I build responsive, user-friendly, and scalable web applications
            with a focus on performance, interactivity, and great UI/UX. I can
            also convert Figma designs into fully functional React.js
            applications, bridging design and development seamlessly.
          </p>
          <div className="pt-10 pb-6 md:pt-10 md:pb-6">
            <Container>
              <div className="-mx-4">
                <Flex
                  className={
                    "flex-wrap item-center justify-center md:gap-x-4 gap-y-4 lg:flex lg:gap-x-4 "
                  }
                >
                  <div
                    className="w-[90%] md:w-[40%] lg:w-[28%] h-auto rounded-lg border-2 border-gray-300 shadow-xl "
                    data-aos="fade-right"
                  >
                    <div className="relative group">
                      <Image
                        imgSrc={webDesign}
                        imgAlt={webDesign}
                        className={"group-hover:opacity-20 rounded-t-lg"}
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                      <p className="text-black font-semibold text-xl text-center absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        Customs Website Development
                      </p>
                    </div>

                    <div className=" px-8 py-5 text-md text-justify ">
                      <ul>
                        <li className="list-disc [&::marker]:text-secondary leading-4 mb-3">
                          Build modern, responsive, and scalable websites using
                          React, Tailwind CSS, and Bootstrap
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-4 mb-3 ">
                          Create landing pages, portfolios, business sites,
                          blogs and e-commerce frontends
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-4 mb-3 ">
                          Sliders, carousels, navigation menus and other UI
                          components
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="w-[90%] md:w-[40%] lg:w-[28%] h-auto rounded-lg border-2 border-gray-300 shadow-2xl "
                    data-aos="fade-down"
                  >
                    <div className="relative group">
                      <Image
                        imgSrc={mobile}
                        imgAlt={mobile}
                        className={"group-hover:opacity-20 rounded-t-lg"}
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>

                      <p className="text-black font-semibold text-xl text-center absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        Responsive in all Devises
                      </p>
                    </div>

                    <div className="px-8 py-5 text-md text-justify">
                      <ul>
                        <li className="list-disc [&::marker]:text-secondary leading-4 mb-3 ">
                          Convert Figma / PSD / XD designs into pixel-perfect
                          React applications
                        </li>
                      </ul>
                      <li className="list-disc [&::marker]:text-secondary leading-5 mb-3 ">
                        Bring your design to life while maintaining clean code
                        and great performance
                      </li>
                      <li className="list-disc [&::marker]:text-secondary  leading-5 mb-3 ">
                        Ensure cross-browser compatibility and mobile
                        responsiveness
                      </li>
                    </div>
                  </div>
                  <div
                    className="w-[90%] md:w-[40%] lg:w-[28%] h-auto rounded-lg border-2 border-gray-300 shadow-2xl"
                    data-aos="fade-left"
                  >
                    <div className="relative group">
                      <Image
                        imgSrc={service4}
                        imgAlt={service4}
                        className={"group-hover:opacity-20 rounded-t-lg"}
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                      <p className="text-black font-semibold text-xl text-center absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        Component-Based Development
                      </p>
                    </div>

                    <div className="px-8 py-5 text-md text-justify">
                      <ul>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3">
                          Develop reusable and modular React components
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-4 mb-3 ">
                          Implement state management with React-Redux or Context
                          API
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3 ">
                          Structure projects for scalability and maintainability
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="w-[90%] md:w-[40%] lg:w-[28%] h-auto rounded-lg border-2 border-gray-300 shadow-2xl"
                    data-aos="fade-right"
                  >
                    <div className="relative group">
                      <Image
                        imgSrc={service5}
                        imgAlt={service5}
                        className={"group-hover:opacity-20 rounded-t-lg"}
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                      <p className="text-black font-semibold text-xl text-center absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        API Integration & Dynamic Content
                      </p>
                    </div>

                    <div className="px-8 py-5 text-md text-justify">
                      <ul>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3">
                          Connect frontend with REST APIs or mock/dummy data
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3 ">
                          Handle loading states, data fetching, and dynamic
                          rendering
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3 ">
                          Handle loading states, data fetching, and dynamic
                          rendering
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="w-[90%] md:w-[40%] lg:w-[28%] h-auto rounded-lg border-2 border-gray-300 shadow-2xl "
                    data-aos="fade-up"
                  >
                    <div className="relative group">
                      <Image
                        imgSrc={service6}
                        imgAlt={service6}
                        className={"group-hover:opacity-20 rounded-t-lg"}
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                      <p className="text-black font-semibold text-xl text-center absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        Performance & SEO Optimization
                      </p>
                    </div>

                    <div className="px-8 py-5 text-md text-justify">
                      <ul>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3">
                          Improve website performance and load speed
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3 ">
                          Implement basic on-page SEO (semantic HTML, meta tags,
                          accessibility)
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3 ">
                          Form handling and validation with modern React
                          practices
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="w-[90%] md:w-[40%] lg:w-[28%] h-auto rounded-lg border-2 border-gray-300 shadow-2xl"
                    data-aos="fade-left"
                  >
                    <div className="relative group">
                      <Image
                        imgSrc={service7}
                        imgAlt={service7}
                        className={
                          "transition-opacity duration-300 group-hover:opacity-20 rounded-t-lg"
                        }
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                      <p className="text-black font-semibold text-xl text-center absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        Interactive animations
                      </p>
                    </div>

                    <div className="px-8 py-5 text-md text-justify">
                      <ul>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3">
                          Fix layout or design issues in existing projects
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3 ">
                          Refactor and clean up old codebases for better
                          readability and efficiency
                        </li>
                        <li className="list-disc [&::marker]:text-secondary leading-5 mb-3 ">
                          Interactive animations and transitions with Framer
                          Motion
                        </li>
                      </ul>
                    </div>
                  </div>
                </Flex>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
