import { useEffect } from "react";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import profilePicture2 from "/src/assets/profilePicture2.png";
import AOS from 'aos'

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
                <div className={"relative"} data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="3000">
                  <Heading
                    className={" text-4xl text-secondary lg:text-6xl font-bold mb-3 "}
                    text={"My name is "}
                    as={"h1"}
                  />
                  <Heading
                    className={
                      "text-3xl bg-gradient-to-r from-secondary to-tirtiary bg-clip-text text-transparent l:text-6xl font-bold mb-3"} 
                      text={"Sadia Haque"}
                    as={"h1"}
                  />
            
                  <Heading
                    className={"text:3xl text-secondary lg:text-4xl font-bold lg:leading-16 "}
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
                      "py-2 px-3 text-sm bg-gradient-to-r from-secondary to-tirtiary/60 mr-5"
                    }
                    btnText={"Visit My Work"}
                  />

                  <Button
                    className={
                      " py-2 px-2 bg-gradient-to-r from-secondary to-tirtiary/60 hover:border-1 hover:border-secondary/80 group transition-all duration-300"
                    }
                    btnText={"Download My Resume"}
                    onClick={() => window.open("/CV of Sadia.pdf", "_blank")}
                  />
                </div>
              </div>

              <div className="m-auto mt-12 relative inline-block lg:mt-0  " data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
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
