import React from "react";
import Container from "../Container";
import Image from "../Image";
import logo from "/src/assets/Sadia1-rb.png";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section id="contact">
        <div className="pt-10 bg-gradient-to-r from-blue-200 to-secondary">
          <Container>
            <h2 className="w-[80%] m-auto lg:w-full text-lg lg:text-2xl font-semibold text-black/60 text-center hover:text-tirtiary transition-all duration-300">
              Are you interested working with me? Lets start .........
            </h2>

            <div className="mt-14 ">
              <div className="grid grid-row mx-16 lg:grid-cols-[2fr_2fr_2fr] md:grid-cols-[2fr_1fr_1fr]">
                <div className="relative pr-4">
                  <Image
                    imgSrc={logo}
                    imgAlt={logo}
                    className={
                      "absolute -top-8 w-[200px] h-[120px]"
                    }
                  />
                  <div className="mt-20">
                    <p className="text-lg text-black/60 leading-6 text-let">
                      “Hi, I am Sadia, a Frontend Developer turning ideas into
                      interactive digital experiences. Let us build something
                      amazing together, bringing visions to life with clean code
                      and creative design.”
                    </p>
                  </div>
                </div>
                <div className="">
                  <h4 className="mt-6 lg:mt-0 m-auto text-bold text-xl text-black text-center hover:text-tirtiary transition-all duration-300">
                    Menu
                  </h4>

                  <ul
                    className={"flex flex-col items-center gap-x-8 mt-[30px]"}
                  >
                    <li
                      className={
                        "text-black/60 text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      Home
                    </li>
                    <li
                      className={
                        "text-black/60 text-base hover:text-tirtiary  transition-all duration-300"
                      }
                    >
                      About Me
                    </li>
                    <li
                      className={
                        " text-black/60 text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      Services
                    </li>
                    <li
                      className={
                        "text-black/60 text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      Portfolio
                    </li>
                    <li
                      className={
                        "text-black/60 text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      Contact
                    </li>
                  </ul>
                </div>
                <div className="text-center m-auto">
                  <h4 className="mt-12 md:-mt-8 lg:mt-0 text-bold text-xl text-black hover:text-tirtiary transition-all duration-300 ">Support</h4>
                  <div className="flex items-center gap-x-4 mt-[30px]">
                    <FaLocationDot className="text-lg text-black/60 hover:text-tirtiary transition-all duration-300" />
                    <p className=" text-lg text-black/60">
                      House-2, Road-2, Block-C, Mirpur-2, Dhaka-1216
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <FaEnvelope className="text-lg text-black/60 hover:text-tirtiary transition-all duration-300" />
                    <p className=" text-lg text-black/60">
                      sadiahaque2017@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <FaPhone className="text-lg text-black/60 hover:text-tirtiary transition-all duration-300"/>
                    <p className=" text-lg text-black/60">
                      sadiahaque2017@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <hr className="mt-6 text-black/40" />

          <p className="w-[90%] m-auto text-sm lg:text-lg text-black/50 py-6 text-center">
            "Thanks for visiting my portfolio!{" "}
            <span className="text-tirtiary font-bold">&copy; </span>2025 which
            is crafted with passion and creativity"
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
