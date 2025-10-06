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
      <section id="home" className= "py-[150px] bg-[linear-gradient(296deg,rgba(255,245,230,1)_0%,rgba(255,255,255,0)_28%,rgba(74,115,255,1)_110%)]"
>
        <div>
          <Container>
            <div className="flex flex-wrap items-center justify-center lg:justify-around ">
              <div className="w-[80%] lg:w-[40%] text-center">
                <Heading
                  className={
                    "text-black/60 text-base uppercase tracking-widest pb-6"
                  }
                  text={"Hello,"}
                  as={"h6"}
                />
                <div className={"relative"} data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="3000">
                  <Heading
                    className={"text-lg text-black/70 lg:text-3xl font-bold mb-3 "}
                    text={"My name is "}
                    as={"h1"}
                  />
                  <Heading
                    className={
                      "text-5xl font-bold text-black/70 mb-3 hover:text-secondary transition-colors duration-300"} 
                      text={"Sadia Haque"}
                    as={"h1"}
                  />
            
                  <Heading
                    className={"text:4xl font-bold lg:leading-12 text-black/70"}
                    text={`I'm a MERN Stack Developer`}
                    as={"h1"}
                  />
                </div>
                <Heading
                  className={"text:sm lg:text-lg text-black/50 -mt-4"}
                  text={"with 4 years of experience."}
                  as={"p"}
                />
                <div className="flex justify-center items-center relative mt-6">
                  <Button
                    onClick={() =>
                      window.open("https://github.com/Sadia-Mila", "_blank")
                    }
                    className={
                      "py-2 px-3 text-md font-bold border-2 border-secondary text-black/60 hover:bg-secondary hover:text-white transition-all duration-300 mr-5"
                    }
                    btnText={"Visit My Work"}
                  />

                  <Button
                    className={
                      "py-2 px-3 text-md font-bold border-2 border-secondary text-black/60 hover:bg-secondary hover:text-white transition-all duration-300"
                    }
                    btnText={"Download CV"}
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
