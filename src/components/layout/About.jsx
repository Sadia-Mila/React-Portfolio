import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Image from "../Image";
import profilePictre from "/src/assets/profilePicture.png";
import Flex from "../Flex";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="py-12 bg-blue-50">
          <Container>
            <Flex className={"justify-between gap-x-3 items-center"}>
           
              <div className="hidden lg:block w-[35%] relative" data-aos="fade-right" data-aos-duration="2000">
                {/* Your image */}
                <Image
                  className={"w-full h-full border-4 border-black/70 "}
                  imgSrc={profilePictre}
                  imgAlt={profilePictre}
                />

                {/* Corner angles */}
                <span className="absolute top-0 left-0 -translate-x-3 -translate-y-3 w-12 h-12 border-t-4 border-l-4 border-secondary"></span>
                <span className=" absolute bottom-0 right-0 translate-x-3 translate-y-3 w-12 h-12 border-b-4 border-r-4 border-secondary"></span>
              </div>

              <div className="w-full lg:w-[65%]">
                <Heading
                  className={
                    "text-[40px] font-bold text-black/70 text-center mb-8"
                  }
                  text={"About Me"}
                  as={"h2"}
                />
                <div className="w-[80%] m-auto" data-aos="fade-left" data-aos-duration="1500">
                  <Heading
                    className={"text-lg text-black text-justify mb-6"}
                    text={
                      "Hi, I’m Sadia Haque, my journey has been a little different from most developers. I completed my Honors and Master’s in Economics, which gave me a strong base in analysis, problem-solving, and critical thinking. After that, I began my career at Green Trust, a sister concern of Green Bank, founded by Nobel Laureate Professor Muhammad Yunus. That experience helped me grow professionally, learning how to work with teams and contribute to meaningful projects. Over time, my interest in technology grew stronger, and I decided to shift my career into the tech field. To make that happen, I joined the MERN Stack Development course at Creative IT Institute. As part of the course, I have already completed Frontend Development with React, where I learned to build modern, responsive, and user-friendly websites. Now, I am continuing my journey by learning Backend Development with Node.js, Express.js, and MongoDB to become a complete MERN Stack Developer."
                    }
                    as={"p"}
                  />

                  <Heading
                    className={"text-lg font-bold mb-3"}
                    text={"What I Can Do"}
                    as={"h2"}
                  />
                  <div className="">
                    <ul className="ml-6">
                      <li className={"list-disc text-lg mb-1"}>
                        Build responsive, modern websites with HTML, CSS,
                        JavaScript, jQuery, React.js, Bootstrap, and Tailwind
                        CSS
                      </li>
                      <li className={"list-disc text-lg mb-1"}>
                        Work with Node.js, Express.js, and MongoDB (currently
                        learning)
                      </li>
                      <li className={"list-disc text-lg mb-1"}>
                        Create clean designs and user-friendly interfaces
                      </li>
                      <li className={"list-disc text-lg mb-1"}>
                        Think critically, solve problems, and adapt to
                        challenges
                      </li>
                    </ul>
                  </div>

                  <Heading
                    className={"text-lg font-bold mt-6 mb-3"}
                    text={"My Goal"}
                    as={"h2"}
                  />

                  <Heading
                    className={"text-lg text-black text-justify mb-3"}
                    text={
                      "I want to become a professional Full Stack MERN Developer and build complete applications from the ground up. With my background in Economics and my growing technical expertise, I bring both analytical thinking and creative problem-solving to my work."
                    }
                    as={"p"}
                  />
                </div>
                <div className=""></div>
              </div>
            </Flex>
          </Container>
        </div>
      </section>
    </>
  );
};

export default About;
