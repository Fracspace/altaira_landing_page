import React, { useMemo, useState, useRef } from "react";
import AltairaVideo from "../../videos/AltairaVideo.mp4";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import countryList from "react-select-country-list";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// import ReCAPTCHA from "react-google-recaptcha";

// const investmentLocations = [
//   "Hyderabad",
//   "Kabini (Karnataka)",
//   "Colombo (Srilanka)",
//   // "Varanasi",
// ];

const budgetRanges = [
  "₹25,00,000 - ₹50,00,000",
  "₹50,00,000 - ₹10,000,000",
  "Above ₹10,000,000",
];

// const purposeOfInvestment = [
//   "Passive Income",
//   "Vacation Home",
//   "Long Term Investment",
//   "Portfolio Diversification",
// ];

const Hero = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selected) => {
    setValue(selected);
    setFormData((prev) => ({
      ...prev,
      country: selected,
    }));
  };

  // const recaptcha =useRef(null);

  const navigate = useNavigate();
  // const [captchaToken, setCaptchaToken] = useState("");
  // const handleCaptcha = (value) => {
  //   setCaptchaToken(value)
  // }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    // preferredInvestmentLocation: "",
    Budget: "",
    // purposeOfInvestment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleCloseForm = () => setShowForm(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent default form submission

    // if (!captchaToken) {
    //   alert("Please verify the captcha");
    //   return;
    // }
    try {
      const response = await axios.post(
        "https://apitest.fracspace.com/api/v1/webApi/enquiryFormRegardingCoownership",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024",
          },
        },
      );

      // await fetch("https://script.google.com/macros/s/AKfycbywRlGKyS3uAqkFqARQtuteiU0Vtatiw6dvzY4AUMSRkPNLBS2gjWubpci18YebEWTU/exec",
      //   {
      //     method: "POST",
      //     mode: "no-cors",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify(formData)
      //   }
      // );
      console.log("response", response.data);

      console.log("name", formData.name);
      console.log("email", formData.email);
      console.log("phone number", formData.phoneNumber);
      console.log("country", formData.country);
      console.log("budget", formData.Budget);

      console.log("form data", formData);

      alert("Form submitted successfully");
      // console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        country: "",
        // preferredInvestmentLocation: "",
        Budget: "",
        // purposeOfInvestment: ""
      });

      setCaptchaToken("");

      setTimeout(() => navigate("/thank-you"), 1000);
    } catch (error) {
      console.log("error occured while submitting form", error);
    }

    // handleCloseForm();
  };

  return (
    <div
      id="herosection"
      className="custom-div relative h-[120vh] w-full overflow-hidden md:h-[120vh]"
    >
      <video
        src={AltairaVideo}
        className="custom-div absolute h-[120vh] w-full object-cover md:h-[120vh]"
        playsInline
        autoPlay
        muted
        loop
      ></video>
      <div className="custom-div absolute inset-0 flex flex-col items-center justify-center gap-10 bg-black/40 px-4 text-center text-white sm:px-10 lg:flex-row lg:justify-between lg:gap-20 lg:px-20">
        <div className="mt-30 w-full space-y-4 text-left md:mt-0 md:w-full lg:max-w-xl lg:space-y-6">
          <h2 className="font-montserrat font-primary leading-relaxed font-bold text-3xl">
            Welcome to Altaira
          </h2>
          <h1 className="font-poppins font-primary leading-relaxed font-bold text-2xl">
            An extraordinary lifestyle destination nestled in the breathtaking
            landscapes of Sri Lanka.
          </h1>
        </div>
        <div className="w-full rounded-lg p-2 text-black md:w-[60vw] lg:h-auto lg:w-auto">
          <form
            onSubmit={handleSubmit}
            className="flex h-auto flex-col gap-3 space-y-3 bg-white p-4 text-black shadow-lg lg:w-[25vw]"
          >
            <h2 className="font-montserrat text-xl font-bold text-[#c6af83]">
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

            {/* <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Mobile"
              required
              pattern="[0-9]{10}"
              className="w-full border border-gray-200 bg-gray-100 outline-none focus:ring-2 focus:ring-[#c6af83] px-3 py-2 text-sm placeholder-gray-500"
            /> */}

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

            {/* <select
              id="preferredInvestmentLocation"
              name="preferredInvestmentLocation"
              value={formData.preferredInvestmentLocation}
              onChange={handleChange}
              required
              className="w-full text-sm border-b-1 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 px-3 py-2 placeholder:text-[#021265] placeholder-gray-200"
            >
              <option value="" disabled>
                Preffered Investment Location
              </option>
              {investmentLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select> */}

            <select
              id="Budget"
              name="Budget"
              value={formData.Budget}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c6af83]"
            >
              <option value="" disabled>
                Investment Budget range
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>

            {/* <select
              id="purposeOfInvestment"
              name="purposeOfInvestment"
              value={formData.purposeOfInvestment}
              onChange={handleChange}
              required
              className="w-full text-sm border-b-1 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 px-3 py-2 placeholder:text-[#021265] placeholder-gray-200"
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

            {/* <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} onChange={handleCaptcha} /> */}

            <button
              type="submit"
              className="w-full font-montserrat cursor-pointer rounded bg-[#c6af83] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#9c835a]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
