import React, { useMemo, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import aboutImg from "../../assets/About/aboutImg.png";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Select from "react-select";
import countryList from "react-select-country-list";

//import ReCAPTCHA from "react-google-recaptcha";

const About = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  // const recaptcha = useRef(null);

  const changeHandler = (selected) => {
    setValue(selected);
    setFormData((prev) => ({
      ...prev,
      country: selected,
    }));
  };
  const navigate = useNavigate();

  // const [captchaToken,setCaptchaToken]=useState("");
  // const handleCaptcha=(value)=>{
  //   setCaptchaToken(value);
  // }

  const [showForm, setShowForm] = useState(false);

  // const investmentLocations = [
  //   "Hyderabad",
  //   "Kabini (Karnataka)",
  //   "Colombo (Srilanka)",
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    // preferredInvestmentLocation: "",
    Budget: "",
    //purposeOfInvestment: "",
  });

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(!captchaToken){
    //  alert("Please verify the captcha");
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

      console.log("response", response);

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        country: "",
        // preferredInvestmentLocation: "",
        Budget: "",
        // purposeOfInvestment: "",
      });

      //setCaptchaToken("");

      setTimeout(() => navigate("/thank-you"), 1000);
      handleCloseForm();
    } catch (error) {
      console.log("error occurred while submitting form", error);
    }
  };
  return (
    <section
      id="about"
      className="mt-5 w-full bg-[#2A2A2A] px-4 py-12 sm:px-6 lg:px-10"
    >
      <div className="mx-auto flex flex-col items-center gap-8 text-white lg:flex-row lg:items-start lg:gap-20">
        <div className="w-full lg:w-1/2">
          <h2 className="font-montserrat mb-4 text-2xl font-bold md:text-xl lg:text-3xl">
            ALTAIRA By Fracspace
          </h2>

          <h2 className="font-poppins mb-3 text-base leading-relaxed sm:text-lg">
            26 Acres of Elevated Living
          </h2>

          <h2 className="font-poppins mb-3 text-base leading-relaxed sm:text-lg">
            Set across 26 acres of misty highlands, Altaira brings 40 villas, a
            boutique resort, a rainforest spa, waterfalls, cloud walkways and
            tea-estate trails into one rare destination.
          </h2>

          <h2 className="font-poppins mb-6 text-base leading-relaxed sm:text-lg">
            Crafted for those who seek serenity with sophistication, Altaira
            blends untouched nature with elevated hospitality creating a place
            where every moment feels exceptional.
          </h2>

          <h2 className="font-poppins mb-6 text-base leading-relaxed sm:text-lg">
            Altaira. Where luxury rises with the hills.
          </h2>

          {/* <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div>
              <h2 className="mb-2 flex items-center gap-1 text-lg">
                <DollarSign size={20} /> Starting Price
              </h2>
              <p className="text-sm sm:text-base">
                EUR 446K | GBP 349K
              </p>
            </div>

            <div className="hidden h-[50px] w-px bg-gray-300 sm:block" />

            <div>
              <h2 className="mb-2 flex items-center gap-1 text-lg">
                <Bed size={20} /> Commercial Units
              </h2>
              <p className="text-sm sm:text-base">
                Standard, Executive, Premium, Prestige Offices
              </p>
            </div>

            <div className="hidden h-[50px] w-px bg-gray-300 sm:block" />

            <div>
              <h2 className="mb-2 flex items-center gap-1 text-lg">
                <Calendar size={20} /> Completion 2026
              </h2>
            </div>
          </div> */}

          <button
            onClick={handleShowForm}
            className="font-poppins mt-6 cursor-pointer rounded-md bg-[#D4AF37] px-5 py-2 text-sm text-white transition-transform duration-200 hover:scale-105 sm:text-base"
          >
            REGISTER YOUR INTEREST
          </button>
        </div>
        <div className="hidden w-full lg:block lg:w-1/2">
          <img
            src={aboutImg}
            alt="Altara"
            className="h-64 w-full rounded-md object-cover sm:h-80 md:h-[60vh] md:w-[50vw]"
          />
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full bg-white p-6 shadow-lg sm:w-[80%] sm:p-8 md:w-[60%] lg:w-[30vw]">
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
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c6af83]"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c6af83]"
              />

              {/* <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Mobile"
                pattern="[0-9]{10}"
                className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 text-sm"
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

              {/* <select
                name="preferredInvestmentLocation"
                required
                value={formData.preferredInvestmentLocation}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-3 py-2"
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
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
                placeholder="Select Your Country*"
              />

              <select
                id="Budget"
                name="Budget"
                required
                value={formData.Budget}
                onChange={handleChange}
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
                required
                value={formData.purposeOfInvestment}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-3 py-2"
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

              {/* <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY}  onChange={handleCaptcha} ref={recaptcha}/> */}

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
    </section>
  );
};

export default About;
