import React from "react";
import Image from "../Image";
import Heading from "../Heading";
import Container from "../Container";
import andImg from "../../assets/andImg.png";
import Button from "../Button";
import { FiDownload } from "react-icons/fi";
import profilePicture2 from "/src/assets/profilePicture2.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section id="home">
        <div className="py-10">
          <Container>
            <div className="flex flex-wrap items-center justify-center lg:justify-around ">
              <div className="w-[80%] lg:w-[40%] text-center">
                <Heading
                  className={
                    "text-secondary text-base uppercase tracking-widest pb-6"
                  }
                  text={"Hello,"}
                  as={"h6"}
                />
                <div className={"relative"}>
                  <Heading
                    className={" text-4xl text-secondary lg:text-6xl font-bold mb-3 "}
                    text={"My name is "}
                    as={"h1"}
                  />
                  <Heading
                    className={
                      "text-3xl bg-gradient-to-r from-secondary to-tirtiary bg-clip-text text-transparent l:text-6xl font-bold mb-18"
                    }
                    text={"Sadia Haque"}
                    as={"h1"}
                  />
                  <Image
                    className={"w-[10%] md:w-[5%] h-auto top-[54%] md:top-[54%] left-1/2 lg:w-[8%] absolute lg:top-[60%] lg:left-[40%] lg:-translate-y-[60%] "}
                    imgSrc={andImg}
                    imgAlt={andImg}
                  />
                  <Heading
                    className={"-mt-5 leading-10 text:3xl text-secondary lg:text-4xl font-bold lg:leading-16 "}
                    text={`I'm a MERN Stack Developer`}
                    as={"h1"}
                  />
                </div>
                <Heading
                  className={"text:sm lg:text-lg pr-6 "}
                  text={"with 4 years of experience."}
                  as={"p"}
                />
                <div className="flex justify-center items-center relative mt-6">
                  <Button
                    onClick={() =>
                      window.open("https://github.com/Sadia-Mila", "_blank")
                    }
                    className={
                      "whitespace-nowrap py-2 px:3 lg:py-3 lg:px-4 text-sm bg-gradient-to-r from-secondary to-tirtiary mr-5"
                    }
                    btnText={"Visit My Work"}
                  />

                  <Button
                    className={
                      " whitespace-nowrap text-sm lg:pl-12 bg-gradient-to-r from-secondary to-tirtiary hover:border-2 hover:border-tirtiary hover:text-black group transition-all duration-300"
                    }
                    btnText={"Download My Resume"}
                    onClick={() => window.open("/CV of Sadia.pdf", "_blank")}
                  />
                  <FiDownload
                    className={
                      "hidden lg:inline-block text-2xl text-white absolute top-[50%] left-[44%] -translate-y-[50%] mr-3 hover:text-black transition-all duration-300"
                    }
                  />
                </div>
              </div>

              <div className="m-auto mt-12 relative inline-block lg:mt-0 ">
                {/* Your image */}
                <Image
                  className={
                    "rounded-full m-auto w-[96%] lg:w-full relative z-10 transition-transform duration-400 hover:scale-105"
                  }
                  imgSrc={profilePicture2}
                  imgAlt={profilePicture2}
                />

                {/* outer border */}
                <div className="hidden md:block absolute -inset-0 -m-2 rounded-full border-none bg-gradient-to-t from-secondary to-white blur-[0.8px]"></div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
