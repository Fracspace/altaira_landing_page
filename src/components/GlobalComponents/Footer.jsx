import React from "react";
import { Mail, Phone, MapPinCheck } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Globe } from "lucide-react";
import { Link as NavigationLink } from "react-router-dom";

const Footer = () => {
  return (
    <section
      id="footer"
      className="mt-10 flex flex-col justify-between bg-[#0A0A0A] pt-8 pr-5 pb-8 pl-10 md:flex-row"
    >
      <div className="w-[80vw] md:w-[30vw]">
        <h2 className="font-montserrat pb-2 text-2xl font-semibold text-white">
          Altaira
        </h2>
        <p className="font-poppins font-primary text-white">
          Where luxury villas and resort living come together in the heart of
          Sri Lanka.
        </p>
      </div>
      <div className="mt-4 w-[80vw] md:mt-0 md:w-[20vw]">
        <h2 className="font-montserrat pb-2 text-2xl font-semibold text-white">
          Quick Links
        </h2>
        <div>
          <ul className="space-y-1">
            <li className="font-poppins cursor-pointer text-white">
              <ScrollLink to="herosection" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li className="font-poppins cursor-pointer text-white">
              <ScrollLink to="amenities" smooth={true} duration={500}>
                Highlights
              </ScrollLink>
            </li>
            <li className="font-poppins cursor-pointer text-white">
              <ScrollLink to="aboutAltairaProject" smooth={true} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li className="font-poppins cursor-pointer text-white">
              <ScrollLink to="herosection" smooth={true} duration={500}>
                Enquire Now
              </ScrollLink>
            </li>
            <li className="font-poppins cursor-pointer text-white">
              <NavigationLink
                to="https://altaira.lk/terms-and-conditions/"
                target="_blank"
              >
                Terms of Service
              </NavigationLink>
            </li>
            <li className="font-poppins cursor-pointer text-white">
              <NavigationLink
                to="https://altaira.lk/privacypolicy/"
                target="_blank"
              >
                Privacy Policy
              </NavigationLink>
            </li>
            <li className="font-poppins cursor-pointer text-white">
              <NavigationLink to="https://altaira.lk/refunds/" target="_blank">
                Refunds & Cancellations
              </NavigationLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 w-[80vw] md:mt-0 md:w-[30vw]">
        <h2 className="font-montserrat pb-2 text-2xl font-semibold text-white">
          Contact Us
        </h2>
        <ul className="space-y-1">
          <li className="font-poppins flex text-white">
            <Mail className="mr-2 text-white" />
            <span
              className="cursor-pointer"
              onClick={() => window.open("mailto:altaira.lk@fracspace.com")}
            >
              altaira.lk@fracspace.com
            </span>
          </li>
          <li className="font-poppins mt-3 flex text-white">
            {" "}
            <Phone className="mr-2" />
            <div className="contactDiv">
              <span
                onClick={() => (window.location.href = "tel:+94760312345")}
                className="cursor-pointer pr-2"
              >
                +94 76 031 2345{", "}
              </span>
              <span
                onClick={() => (window.location.href = "tel:+91-9880626111")}
                className="cursor-pointer pr-2"
              >
                +91-98806 26111
              </span>
            </div>
          </li>
          <li className="font-poppins mt-3 flex text-white">
            <MapPinCheck className="mr-2" /> Bulathkohupitiya{",  "} Sri Lanka
          </li>
          <li className="font-poppins mt-3 flex text-white">
            <Globe className="mr-2" />{" "}
            <NavigationLink
              to="https://altaira.in"
              target="_blank"
              className="mr-2 cursor-pointer"
            >
              altaira.in ,
            </NavigationLink>{" "}
            <NavigationLink
              className="cursor-pointer"
              target="_blank"
              to="https://altaira.lk"
            >
              altaira.lk
            </NavigationLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
