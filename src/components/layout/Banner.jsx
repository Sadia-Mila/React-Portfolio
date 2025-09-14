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
            <div className="flex items-center justify-around ">
              <div className="w-[40%]">
                <Heading
                  className={
                    "text-secondary text-base uppercase tracking-widest pb-6"
                  }
                  text={"Hello,"}
                  as={"h6"}
                />
                <div className={"relative"}>
                  <Heading
                    className={" text-secondary text-6xl font-bold mb-3 "}
                    text={"My name is "}
                    as={"h1"}
                  />
                  <Heading
                    className={
                      "bg-gradient-to-r from-secondary to-tirtiary bg-clip-text text-transparent text-6xl font-bold mb-18"
                    }
                    text={"Sadia Haque"}
                    as={"h1"}
                  />
                  <Image
                    className={"w-[60px] h-[50px] absolute top-[67%] left- -translate-y-[67%] "}
                    imgSrc={andImg}
                    imgAlt={andImg}
                  />
                  <Heading
                    className={"text-secondary text-4xl font-bold leading-16 "}
                    text={`I'm a MERN Stack Developer`}
                    as={"h1"}
                  />
                </div>
                <Heading
                  className={"text-lg pr-6"}
                  text={"with 4 years of experience."}
                  as={"p"}
                />
                <div className="flex relative mt-6">
                  <Button
                    onClick={() =>
                      window.open("https://github.com/Sadia-Mila", "_blank")
                    }
                    className={
                      "py-3 px-4 text-sm bg-gradient-to-r from-secondary to-tirtiary mr-5"
                    }
                    btnText={"Visit My Work"}
                  />

                  <Button
                    className={
                      " pl-12 bg-gradient-to-r from-secondary to-tirtiary hover:border-2 hover:border-tirtiary hover:text-black group transition-all duration-300"
                    }
                    btnText={"Download My Resume"}
                    onClick={() => window.open("/CV of Sadia.pdf", "_blank")}
                  />
                  <FiDownload
                    className={
                      "text-2xl text-white absolute top-[50%] right-37 -translate-y-[50%] -translate-x-37 mr-3 hover:text-black transition-all duration-300"
                    }
                  />
                </div>
              </div>

              {/* <div className="">
              <Image
                className={"rounded-full border-4 border-tirtiary"} 
                imgSrc={profilePicture2}
                imgAlt={profilePicture2}
              />
            </div> */}

              <div className="relative inline-block">
                {/* Your image */}
                <Image
                  className={
                    "rounded-full  relative z-10 transition-transform duration-400 hover:scale-110"
                  }
                  imgSrc={profilePicture2}
                  imgAlt={profilePicture2}
                />

                {/* outer border */}
                <div className="absolute -inset-0 -m-2 rounded-full border-none bg-gradient-to-t from-secondary to-white   blur-[0.8px]"></div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
