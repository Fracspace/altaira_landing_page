import React, { useState, useMemo } from "react";
import AltairaLogo from "../../assets/Logo/AltairaLogo.png";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-scroll";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/Logo/logo2.png";

import Select from "react-select";
import countryList from "react-select-country-list";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const NavBar = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const isMobile = useMediaQuery("(max-width:820px)");
  const [openMenu, setOpenMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (selected) => {
    setValue(selected);
    setFormData((prev) => ({
      ...prev,
      country: selected,
    }));
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // const investmentLocations = [
  //   "Hyderabad",
  //   "Kabini (Karnataka)",
  //   "Colombo (Srilanka)",
  // ];

  const budgetRanges = [
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000 - ₹25,00,000",
    "Above ₹25,00,000",
  ];

  // const purposeOfInvestment = [
  //   "Passive Income",
  //   "Vacation Home",
  //   "Long Term Investment",
  //   "Portfolio Diversification",
  // ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    // preferredInvestmentLocation: "",
    Budget: "",
    // purposeOfInvestment: "",
  });

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://apitest.fracspace.com/api/v1/webApi/enquiryFormRegardingCoownership",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024",
          },
        },
      );

      // await fetch(
      //   "https://script.google.com/macros/s/AKfycbywRlGKyS3uAqkFqARQtuteiU0Vtatiw6dvzY4AUMSRkPNLBS2gjWubpci18YebEWTU/exec",
      //   {
      //     method: "POST",
      //     mode: "no-cors",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   }
      // );

      alert("Form data submitted successfully");

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        //  preferredInvestmentLocation: "",
        Budget: "",
        //  purposeOfInvestment: "",
      });

      setTimeout(() => navigate("/thank-you"), 1000);
      handleCloseForm();
    } catch (error) {
      console.log("error occurred while submitting form", error);
    }
  };

  return (
    <nav className="fixed z-20 h-[15vh] w-full">
      <div className="flex h-[13vh] items-center justify-between bg-black/50 px-3">
        <div className="font-primary flex items-center justify-center">
          <Link to="herosection" smooth={true} duration={500}>
            <img
              alt="Altaira logo"
              className="h-[20vh] w-[30vw] cursor-pointer object-contain md:mt-auto md:h-[10vh] md:w-[30vw] xl:w-[20vw]"
              src={AltairaLogo}
            />
          </Link>
        </div>

        {!isMobile && (
          <ul className="flex md:mt-4">
            <li className="font-poppins cursor-pointer pr-8 text-white">
              <Link to="herosection" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="font-poppins cursor-pointer pr-8 text-white">
              <Link to="about" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li className="font-poppins cursor-pointer pr-8 text-white">
              <Link to="amenities" smooth={true} duration={500}>
                Amenities
              </Link>
            </li>
            <li className="font-poppins cursor-pointer pr-8 text-white">
              <span onClick={handleShowForm}>Enquire Now</span>
            </li>
          </ul>
        )}

        {isMobile && (
          <button onClick={toggleMenu} className="text-white lg:hidden">
            {openMenu ? <X size={32} /> : <Menu size={32} />}
          </button>
        )}
      </div>

      {isMobile && openMenu && (
        <div>
          <ul className="w-full border-t border-white bg-[#c6af83] pb-4">
            <li className="font-poppins cursor-pointer pt-2 pb-2 text-center text-white">
              <Link
                onClick={() => setOpenMenu(false)}
                to="herosection"
                smooth
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="font-poppins cursor-pointer pb-2 text-center text-white">
              <Link
                onClick={() => setOpenMenu(false)}
                to="about"
                smooth
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="font-poppins cursor-pointer pb-2 text-center text-white">
              <Link
                onClick={() => setOpenMenu(false)}
                to="amenities"
                smooth
                duration={500}
              >
                Amenities
              </Link>
            </li>
            <li
              className="font-poppins cursor-pointer pb-2 text-center text-white"
              onClick={() => {
                setOpenMenu(false);
                handleShowForm();
              }}
            >
              Enquire Now
            </li>
          </ul>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full rounded bg-white p-6 shadow-lg sm:w-[80%] sm:p-8 md:w-[60%] lg:w-[30vw]">
            <button
              onClick={handleCloseForm}
              className="absolute top-3 right-3 text-4xl font-bold text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            <form
              className="flex flex-col gap-3 space-y-3"
              onSubmit={handleSubmit}
            >
              <h2 className="font-montserrat flex items-center justify-center text-xl font-bold text-[#c6af83]">
                Enquire Now
              </h2>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c6af83]"
              />

              {/* <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Mobile"
                required
                pattern="[0-9]{10}"
                className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 text-sm"
              /> */}

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
                className="w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c6af83]"
              />
              {/* 
              <select
                name="preferredInvestmentLocation"
                value={formData.preferredInvestmentLocation}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 px-3 py-2 text-sm"
              >
                <option value="" disabled>
                  Preferred Investment Location
                </option>
                {investmentLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select> */}

              <PhoneInput
                country={"in"}
                enableSearch={true}
                value={formData.phoneNumber}
                onChange={(value, data) => {
                  const countryCode = `+${data.dialCode}`;
                  const phoneNumber = value.replace(countryCode, "");
                  setFormData({
                    ...formData,
                    phoneNumber: phoneNumber,
                    countryCode: countryCode,
                  });
                }}
                placeholder="Mobile"
                inputClass="w-full"
                containerClass="w-full"
                buttonClass=""
                dropdownClass="text-sm"
                className="w-full"
              />

              <Select
                options={options}
                name="country"
                id="country"
                value={formData.country}
                onChange={changeHandler}
                className="react-select-container w-full"
                classNamePrefix="react-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "#f3f4f6",
                    borderColor: "#e5e7eb",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    fontSize: "0.875rem",
                    boxShadow: "none",
                    "&:hover": { borderColor: "#e5e7eb" },
                  }),
                  placeholder: (base) => ({
                    ...base,
                    textAlign: "left",
                    marginLeft: "0px",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
                placeholder="Select Your Country*"
              />

              <select
                name="Budget"
                value={formData.Budget}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c6af83]"
              >
                <option value="" disabled>
                  Investment Budget Range
                </option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>

              {/* <select
                name="purposeOfInvestment"
                value={formData.purposeOfInvestment}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 px-3 py-2 text-sm"
              >
                <option value="" disabled>
                  Purpose of Investment
                </option>
                {purposeOfInvestment.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select> */}

              <button
                type="submit"
                className="w-full cursor-pointer rounded bg-[#c6af83] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#9c835a]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
