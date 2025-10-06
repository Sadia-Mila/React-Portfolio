import Image from "../Image";
import Logo from "/src/assets/Sadia1-rb.png";
import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [resNav, setResNav] = useState(false);

  //toggleBtn
  const toggleBtn = () => {
    setResNav(!resNav);
  };

  return (
    <>
      <div className="py-1 bg-gradient-to-r from-blue-200 to-secondary/80">
        <Container className={"w-full"}>
          <Flex className={"justify-between "}>
            <div className="">
              <Image
                className={"w-[180px] h-[80px]"}
                imgSrc={Logo}
                imgAlt={Logo}
              />
            </div>
            <nav>
              {/* Desktop View */}

              <ul className={"lg:flex lg:items-center lg:gap-x-8 hidden"}>
                <Link to="home" smooth={true} duration={500} offset={-70}>
                  <li
                    className={
                      "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                    }
                  >
                    HOME
                  </li>
                </Link>
                <Link to="about" smooth={true} duration={500} offset={-70}>
                  <li
                    className={
                      "font-bold text-white text-base hover:text-tirtiary  transition-all duration-300"
                    }
                  >
                    ABOUT
                  </li>
                </Link>
                <Link to="service" smooth={true} duration={500} offset={-70}>
                  <li
                    className={
                      "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                    }
                  >
                    SERVICE
                  </li>
                </Link>
                <Link to="portfolio" smooth={true} duration={500} offset={-70}>
                  <li
                    className={
                      "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                    }
                  >
                    PORTFOLIO
                  </li>
                </Link>
                <Link to="skills" smooth={true} duration={500} offset={-70}>
                  <li
                    className={
                      "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                    }
                  >
                    SKILLS
                  </li>
                </Link>
                <Link
                  to="achievement"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <li
                    className={
                      "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                    }
                  >
                    ACHIEVEMENT
                  </li>
                </Link>
                <Link to="contact" smooth={true} duration={500} offset={-70}>
                  <li
                    className={
                      "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                    }
                  >
                    CONTACT
                  </li>
                </Link>
              </ul>
              {/* Desktop View */}
              {/* Mobile View */}
              <div className="justify-between">
                <button
                  className={
                    "lg:hidden  mr-10 py-2 px-3 bg-white text-black rounded-lg font-lg cursor-pointer relative"
                  }
                  onClick={toggleBtn}
                >
                  {resNav ? <ImCross size={16} /> : <FaBars size={18} />}
                </button>
              </div>
              {resNav && (
                <ul className={"lg:flex lg:items-center lg:gap-x-8 hidden"}>
                  <Link to="home" smooth={true} duration={500} offset={-70}>
                    <li
                      className={
                        "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      HOME
                    </li>
                  </Link>
                  <Link to="about" smooth={true} duration={500} offset={-70}>
                    <li
                      className={
                        "font-bold text-white text-base hover:text-tirtiary  transition-all duration-300"
                      }
                    >
                      ABOUT
                    </li>
                  </Link>
                  <Link to="service" smooth={true} duration={500} offset={-70}>
                    <li
                      className={
                        "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      SERVICE
                    </li>
                  </Link>
                  <Link
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <li
                      className={
                        "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      PORTFOLIO
                    </li>
                  </Link>
                  <Link to="skills" smooth={true} duration={500} offset={-70}>
                    <li
                      className={
                        "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      SKILLS
                    </li>
                  </Link>
                  <Link
                    to="achievement"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <li
                      className={
                        "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      Achievement
                    </li>
                  </Link>
                  <Link to="contact" smooth={true} duration={500} offset={-70}>
                    <li
                      className={
                        "font-bold text-white text-base hover:text-tirtiary transition-all duration-300"
                      }
                    >
                      CONTACT
                    </li>
                  </Link>
                </ul>
              )}
              {/* Mobile View */}
            </nav>
            <div className="hidden lg:block ">
              <Link to="contact">
                <Button
                  className={
                    "py-1 px-2 bg-gradient-to-r from-secondary to-tirtiary/60 text-sm"
                  }
                  btnText={"Contact Me"}
                />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
