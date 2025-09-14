
import Image from "../Image";
import Logo from "/src/assets/Sadia1-rb.png"
import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";
import { FaBars } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
   const [resNav, setResNav] = useState(false);

     //toggleBtn
    const toggleBtn = () => {
    setResNav(!resNav);
  };

  return (
    <>
      <div className="py-1 bg-gradient-to-r from-blue-200 to-secondary">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Image
                className={"w-[200px] h-[80px]"}
                imgSrc={Logo}
                imgAlt={Logo}
              />
            </div>
            <nav >
              {/* Desktop View */}
              
              <ul className={"lg:flex lg:items-center lg:gap-x-8 hidden"}>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#home">Home</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary  transition-all duration-300"}><a href="#about">About Me</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#service">Services</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#portfolio">Portfolio</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#skills">Skills</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#achievement">Achievement</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#contact">Contact</a></li>
              </ul>
               {/* Desktop View */}
               {/* Mobile View */}
               <div className="justify-end">
                <button className={"lg:hidden py-2 px-3 bg-white text-black rounded-lg font-2xl cursor-pointer"} onClick={toggleBtn}>{resNav? "X": <FaBars/>}</button>
               </div>
               {resNav &&
                <ul className={"lg:hidden "}>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#home">Home</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary  transition-all duration-300"}><a href="#about">About Me</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#service">Services</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#portfolio">Portfolio</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#skills">Skills</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#achievement">Achievement</a></li>
                <li className={"font-bold text-white text-base hover:text-tirtiary transition-all duration-300"}><a href="#contact">Contact</a></li>
               
              </ul>}
               {/* Mobile View */}
            </nav>
            <div className="">
              <a href="#contact">
              <Button  className={"hidden lg:inline-block bg-gradient-to-r from-secondary to-tirtiary"} btnText={"Contact Me"}/></a>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
