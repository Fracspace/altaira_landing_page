import React, { useMemo, useState } from "react";
import AltairaVideo from "../../videos/AltairaVideo.mp4";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import countryList from "react-select-country-list";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import ReCAPTCHA from "react-google-recaptcha";

// const investmentLocations = [
//   "Hyderabad",
//   "Kabini (Karnataka)",
//   "Colombo (Srilanka)",
//   // "Varanasi",
// ];

// const budgetRanges = [
//   "$30,000 - $60,000",
//   "$60,000 - $120,000",
//   "Above $120,000",
// ];

const incomeRanges = [
  "$100,000 - $250,000",
  "$250,001 - $500,000",
  "$500,001+",
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
      country: selected?.label || "",
    }));
  };

  //  const recaptcha =useRef(null);

  const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState("");
  const handleCaptcha = (value) => {
    setCaptchaToken(value);
    setFormData((prev) => ({
      ...prev,
      token: value,
    }));
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    country: "",
    budget: "",
    occupation: "",
    designation: "",
    companyName: "",
    incomeRange: "",
    token: "",
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

    if (!captchaToken) {
      alert("Please verify the captcha");
      return;
    }
    // console.log("formdata:",formData);
    // console.log("consoling formadata")
    try {
      const response = await axios.post(
        "https://apitest.fracspace.com/api/users/altairaPromotionalEnquiryForm",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024",
          },
        },
      );

      alert("Form submitted successfully");
      // console.log("Form submitted:", formData);
      // console.log("Response:", response.data);
      setFormData({
        name: "",
        email: "",
        countryCode: "",
        phoneNumber: "",
        country: "",
        budget: "",
        occupation: "",
        designation: "",
        companyName: "",
        incomeRange: "",
        token: "",
      });

      setCaptchaToken("");

      // setTimeout(() => navigate("/thank-you"), 1000);
    } catch (error) {
      console.log("error occured while submitting form", error);
    }

    // // Log the form data here
    // console.log("FORM DATA:", formData);

    // alert("Form submitted successfully!");

    // // Reset form
    // setFormData({
    //   name: "",
    //   email: "",
    //   countryCode: "",
    //   phoneNumber: "",
    //   country: "",
    //   budget: "",
    //   occupation: "",
    //   designation: "",
    //   companyName: "",
    //   incomeRange: "",
    // });

    // // Navigate to thank-you page (optional)
    // setTimeout(() => navigate("/thank-you"), 1000);

    // // handleCloseForm();
  };

  return (
    <div
      id="herosection"
      className="custom-div ipadProHeroSectionHeight largeScreensHeroSectionHeight relative h-[120vh] w-full overflow-hidden md:h-[120vh]"
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
          <h2 className="font-montserrat ipadProText text-xl leading-relaxed md:text-3xl md:font-bold">
            Invest in Sri Lanka’s First Nature-Integrated Luxury Resort at the
            Adventure Capital of the Island.
          </h2>
          <h1 className="font-poppins ipadProText text-lg leading-relaxed md:text-2xl md:font-normal">
            Limited early-stage investment slots with high projected returns
            driven by booming eco-tourism & post-2025 tourism surge.
          </h1>
        </div>
        <div className="w-full rounded-lg p-2 text-black md:w-[60vw] lg:h-auto lg:w-auto">
          <form
            onSubmit={handleSubmit}
            className="altara-mainForm ipadProStyles flex h-auto flex-col gap-3 space-y-3 rounded-md bg-[#0A0A0A8C] p-4 text-black shadow-lg lg:w-[25vw]"
          >
            <h2 className="font-montserrat text-xl font-bold text-white">
              Enquire Now
            </h2>
            <div className="scrollbar-hide h-[40vh] space-y-3 overflow-y-auto">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="placeholder:font-montserrat font-montserrat w-full rounded-md border border-[#D4AF37] bg-[#0A0A0A8C] px-3 py-2 text-sm text-white placeholder-white outline-none focus:ring-2 focus:ring-[#c6af83]"
              />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
                className="placeholder:font-montserrat font-montserrat w-full rounded-md border border-[#D4AF37] bg-[#0A0A0A8C] px-3 py-2 text-sm text-white placeholder-white outline-none focus:ring-2 focus:ring-[#c6af83]"
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
                value={`${formData.countryCode || "+91"}${formData.phoneNumber}`}
                onChange={(value, data) => {
                  const dial = data?.dialCode || "91";
                  const digitsOnly = value.replace(/\D/g, ""); // remove all non-digits
                  const numberOnly = digitsOnly.startsWith(dial)
                    ? digitsOnly.slice(dial.length)
                    : digitsOnly;
                  setFormData({
                    ...formData,
                    phoneNumber: numberOnly,
                    countryCode: `${dial}`,
                  });
                }}
                placeholder="Mobile"
                inputClass="w-full"
                containerClass="w-full rounded-md text-white font-montserrat placeholder:font-montserrat"
                buttonClass=""
                dropdownClass="text-sm"
                required
                className="w-full"
              />

              <Select
                options={options}
                name="country"
                id="country"
                value={value}
                required
                isSearchable={true}
                onChange={changeHandler}
                className="react-select-container w-full"
                classNamePrefix="react-select"
                menuPortalTarget={
                  typeof document !== "undefined" ? document.body : null
                }
                menuPosition="fixed"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "#0A0A0A8C",
                    borderColor: "#D4AF37",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    fontSize: "0.875rem",
                    boxShadow: "none",
                    "&:hover": { borderColor: "#e5e7eb" },
                  }),

                  input: (base) => ({
                    ...base,
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                  }),
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  menu: (base) => ({ ...base, zIndex: 9999 }),
                  menuList: (base) => ({
                    ...base,
                    fontFamily: "Montserrat, sans-serif",
                    maxHeight: "150px",
                    height: "auto",
                    overflowY: "auto",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    textAlign: "left",
                    marginLeft: "0px",
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
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

              {/* <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="font-montserrat w-full rounded-md border border-[#D4AF37] bg-[#0A0A0A8C] px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-[#c6af83]"
              >
                <option value="" disabled className="bg-[#D4AF37]">
                  Investment Budget Range*
                </option>
                {budgetRanges.map((budgetRange) => (
                  <option
                    key={budgetRange}
                    value={budgetRange}
                    className="bg-[#D4AF37]"
                  >
                    {budgetRange}
                  </option>
                ))}
              </select> */}

              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Occupation*"
                required
                className="placeholder:font-montserrat font-montserrat w-full rounded-md border border-[#D4AF37] bg-[#0A0A0A8C] px-3 py-2 text-sm text-white placeholder-white outline-none focus:ring-2 focus:ring-[#c6af83]"
              />

              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation*"
                required
                className="placeholder:font-montserrat font-montserrat w-full rounded-md border border-[#D4AF37] bg-[#0A0A0A8C] px-3 py-2 text-sm text-white placeholder-white outline-none focus:ring-2 focus:ring-[#c6af83]"
              />

              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name*"
                required
                className="placeholder:font-montserrat font-montserrat w-full rounded-md border border-[#D4AF37] bg-[#0A0A0A8C] px-3 py-2 text-sm text-white placeholder-white outline-none focus:ring-2 focus:ring-[#c6af83]"
              />

              <select
                id="incomeRange"
                name="incomeRange"
                value={formData.incomeRange}
                onChange={handleChange}
                required
                className="font-montserrat w-full rounded-md border border-[#D4AF37] bg-[#0A0A0A8C] px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-[#c6af83]"
              >
                <option value="" disabled className="bg-[#D4AF37]">
                  Income Range*
                </option>
                {incomeRanges.map((range) => (
                  <option key={range} value={range} className="bg-[#D4AF37]">
                    {range}
                  </option>
                ))}
              </select>

              <label
                htmlFor="checkboxField"
                className="flex items-start gap-1 text-white"
              >
                <input
                  id="checkboxField"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border border-[#D4AF37] bg-[#0A0A0A8C]"
                />
                <span className="font-montserrat text-sm">
                  {/* I consent to the Altaira team contacting me using the details
                  I have provided. */}
                  I agree to{" "}
                  <span
                    className="cursor-pointer underline"
                    onClick={() =>
                      window.open("https://altaira.lk/terms-and-conditions/")
                    }
                  >
                    Terms
                  </span>{" "}
                  and{" "}
                  <span
                    className="cursor-pointer underline"
                    onClick={() =>
                      window.open("https://altaira.lk/privacypolicy/")
                    }
                  >
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>

              <ReCAPTCHA
                sitekey="6LeMzSIsAAAAAIpdKV2sEZN1VgnCFcpbCNu3ROl5"
                onChange={handleCaptcha}
              />
            </div>

            <button
              type="submit"
              className="font-montserrat w-full cursor-pointer rounded bg-[#D4AF37] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#9c835a]"
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
