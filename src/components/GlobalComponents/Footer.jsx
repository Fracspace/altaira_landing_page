import React from "react";
import { Mail, Phone, MapPinCheck } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="mr-10 ml-10">
        <div className="mx-auto max-w-7xl">
          <section
            id="footer"
            className="flex flex-col justify-between bg-[#0A0A0A] md:flex-row"
          >
            <div>
              <h2 className="font-montserrat pb-2 text-2xl font-semibold text-white">
                Altaira
              </h2>
              <p className="font-poppins text-white">
                Where luxury villas and resort living come together in the heart
                of Sri Lanka.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
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
                    <ScrollLink
                      to="aboutAltairaProject"
                      smooth={true}
                      duration={500}
                    >
                      About Us
                    </ScrollLink>
                  </li>
                  <li className="font-poppins cursor-pointer text-white">
                    <ScrollLink to="herosection" smooth={true} duration={500}>
                      Enquire Now
                    </ScrollLink>
                  </li>
                  <li className="font-poppins text-white">
                    <a
                      href="https://altaira.lk/terms-and-conditions/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li className="font-poppins text-white">
                    <a
                      href="https://altaira.lk/privacypolicy/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="font-poppins text-white">
                    <a
                      href="https://altaira.lk/refunds/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Refunds & Cancellations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="font-montserrat pb-2 text-2xl font-semibold text-white">
                Contact Us
              </h2>
              <ul className="space-y-1">
                <li className="font-poppins flex text-white">
                  <Mail className="mr-2 text-white" />
                  <a className="cursor-pointer" href="mailto:altaira.lk@fracspace.com">
                    altaira.lk@fracspace.com
                  </a>
                </li>
                <li className="font-poppins mt-3 flex text-white">
                  {" "}
                  <Phone className="mr-2" />
                  <div className="contactDiv">
                    <span className="pr-2">
                      <a href="tel:+94760312345" className="cursor-pointer">
                        +94 76 031 2345{", "}
                      </a>
                    </span>
                    <span className="pr-2">
                      <a href="tel:+919880626111" className="cursor-pointer">
                        +91 98806 26111
                      </a>
                    </span>
                  </div>
                </li>
                <li className="font-poppins mt-3 flex text-white">
                  <MapPinCheck className="mr-2" /> Bulathkohupitiya{",  "} Sri
                  Lanka
                </li>
                <li className="font-poppins mt-3 flex text-white">
                  <Globe className="mr-2" />{" "}
                  <a
                    href="https://altaira.in"
                    rel="noopener noreferrer"
                    className="mr-2"
                    target="_blank"
                  >
                    altaira.in ,
                  </a>{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://altaira.lk"
                    target="_blank"
                  >
                    altaira.lk
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
