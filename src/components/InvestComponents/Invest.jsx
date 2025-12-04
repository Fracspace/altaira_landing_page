import React, { useMemo, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HighYield from "../../assets/Invest/HighYield.png";
import HighYield1 from "../../assets/Invest/HighYield1.png";
import invest from "../../assets/Invest/invest.jpeg";
import invest1 from "../../assets/Invest/invest1.png";
import EarlyEntry from "../../assets/Invest/EarlyEntry.png";
import EarlyEntry1 from "../../assets/Invest/EarlyEntry1.png";
import TourismGrowth from "../../assets/Invest/TourismGrowth.png";
import CurrencyAdvantage1 from "../../assets/Invest/CurrencyAdvantage1.png";
import TourismGrowth1 from "../../assets/Invest/TourismGrowth1.png";
import Currency from "../../assets/Invest/Currency.png";
import Returns from "../../assets/Invest/Returns.png";
import RecurringReturns1 from "../../assets/Invest/RecurringReturns1.png";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Select from "react-select";
import countryList from "react-select-country-list";

//import ReCAPTCHA from "react-google-recaptcha";

const Invest = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selected) => {
    setValue(selected);
    setFormData((prev) => ({
      ...prev,
      country: selected,
    }));
  };

  //  const recaptcha = useRef(null);

  const navigate = useNavigate();
  //  const [captchaToken, setCaptchaToken] = useState("");
  const [showForm, setShowForm] = useState(false);

  // const investmentLocations = [
  //     "Hyderabad",
  //     "Kabini (Karnataka)",
  //     "Colombo (Srilanka)",
  // ];

  // const handleCaptcha = (value) => {
  //     setCaptchaToken(value);
  // }

  const budgetRanges = [
    "₹25,00,000 - ₹50,00,000",
    "₹50,00,000 - ₹10,000,000",
    "Above ₹10,000,000",
  ];

  // const purposeOfInvestment = [
  //     "Passive Income",
  //     "Vacation Home",
  //     "Long Term Investment",
  //     "Portfolio Diversification",
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

    // if (!captchaToken) {
    //     alert("Please verify the captcha");
    //     return;
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
      //     "https://script.google.com/macros/s/AKfycbywRlGKyS3uAqkFqARQtuteiU0Vtatiw6dvzY4AUMSRkPNLBS2gjWubpci18YebEWTU/exec",
      //     {
      //         method: "POST",
      //         mode: "no-cors",
      //         headers: {
      //             "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify(formData),
      //     }
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

      // setCaptchaToken("");

      setTimeout(() => navigate("/thank-you"), 1000);
      handleCloseForm();
    } catch (error) {
      console.log("error occurred while submitting form", error);
    }
  };
  return (
    <>
      <div className="p-10 mt-10 bg-[#0A0A0A] text-white">
        <div className="mt-4" id="amenities">
          <h2 className="font-montserrat text-center text-2xl font-bold md:text-3xl">  Why Altaira is a winning Investment</h2>
        </div>
        <div className="pt-10 pl-5 flex flex-col md:flex-row items-center gap-10">
          <img
            src={invest1}
            alt="Why Invest?"
            className="hidden h-[50vh] w-[100vw] rounded-md object-cover md:h-[70vh] md:w-[40vw] lg:block"
          />
          <div className="p-5">
            {/* <h2 className="font-montserrat mb-6 pb-5 text-center text-2xl font-bold md:text-3xl">
          Why Altaira is a winning Investment?
        </h2> */}
            <div className="flex flex-col gap-6 lg:justify-center">
              <div className="mb-2 pb-2">
                <div className="flex items-center justify-left gap-3">
                  <img src={HighYield1} className="h-15 w-15 hidden md:block" alt="High Yield" />

                  <div className="flex flex-col">
                    <h2 className="font-montserrat mb-1 text-lg font-bold">
                      High-Yield Asset Class:
                    </h2>
                    <h2 className="font-poppins text-base">
                      Resort + villa model designed for stronger ROI.
                    </h2>
                  </div> </div>
              </div>
              <div className="mb-2 pb-2">
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={CurrencyAdvantage1}
                    className="h-15 w-15 hidden md:block"
                    alt="Currency Advantage"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-montserrat mb-1 text-lg font-bold">
                      Currency Advantage:
                    </h2>
                    <h2 className="font-poppins text-base">
                      {" "}
                      INR investments gain added appreciation from LKR value rise.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mb-2 pb-2">
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={TourismGrowth1}
                    className="h-15 w-15 hidden md:block"
                    alt="Tourism Growth"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-montserrat mb-1 text-lg font-bold">
                      Tourism Growth:
                    </h2>
                    <h2 className="font-poppins text-base">
                      {" "}
                      Sri Lanka aims for 4M+ arrivals by 2025-26, boosting demand.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mb-2 pb-2">
                <div className="flex items-center justify-left gap-3">
                  <img src={EarlyEntry1} className="h-15 w-15 hidden md:block" alt="Early Entry" />

                  <div className="flex flex-col">
                    <h2 className="font-montserrat mb-1 text-lg font-bold">Early Entry:</h2>
                    <h2 className="font-poppins text-base">
                      {" "}
                      Invest before valuations climb.
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-left gap-3">
                  <img src={RecurringReturns1} className="h-15 w-15 hidden md:block" alt="Returns" />
                  <div className="flex flex-col">
                    <h2 className="font-montserrat mb-1 text-lg font-bold">
                      Recurring Returns:
                    </h2>
                    <h2 className="font-poppins text-base">
                      {" "}
                      Annual payouts, resale flexibility, and lifetime stay benefits.
                    </h2>
                  </div>
                </div>
              </div>
              {/* <div>
                        <div className='flex items-center justify-center'>
                            <img src={world_wide_connectivity} className='w-15 h-15' alt="Fast growing economy" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h2 className='font-bold text-lg md:text-base'>Worldwide Connectivity</h2>
                        </div>
                    </div> */}
            </div>
            {/* <div className="mt-10 flex items-center justify-center">
          <button
            onClick={handleShowForm}
            className="w-full cursor-pointer rounded-md bg-[#c6af83] px-6 py-2 text-white transition-transform duration-200 hover:scale-105"
          >
            REGISTER YOUR INTEREST
          </button>
        </div> */}
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

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className="w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c6af83]"
                  />
                  <PhoneInput
                    country={"in"}
                    enableSearch={true}
                    value={formData.phoneNumber}
                    onChange={(value, data) => {
                      const countryCode = `${data.dialCode}`;
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

                  {/* <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} onChange={handleCaptcha} ref={recaptcha} /> */}
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
        </div>
      </div>
    </>
  );
};

export default Invest;
