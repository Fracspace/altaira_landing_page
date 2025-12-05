import React, { useState, useMemo } from "react";
import altairaImg from "../../assets/altaira.webp";
import villaImg from "../../assets/Villa2.webp";
import restaurantImg from "../../assets/restaurant.webp";
import altairaResortImg from "../../assets/resort2.jpg";
import { ArrowRight } from "lucide-react";
import axios from "axios";

import Select from "react-select";
import countryList from "react-select-country-list";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function AltairaProject() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  // const isMobile = useMediaQuery("(max-width:820px)");
  const [openMenu, setOpenMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const changeHandler = (selected) => {
    setValue(selected);
    setFormData((prev) => ({
      ...prev,
      country: selected,
    }));
  };

  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // };

  const budgetRanges = [
    "$30,000 - $60,000",
    "$60,000 - $120,000",
    "Above $120,000",
  ];

  const incomeRanges = [
    "$100,000 - $250,000",
    "$250,001 - $500,000",
    "$500,001+",
  ];

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
  });

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://apitest.fracspace.com/api/users/altairaPromotionalEnquiryForm",
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
        countryCode: "",
        phoneNumber: "",
        country: "",
        budget: "",
        occupation: "",
        designation: "",
        companyName: "",
        incomeRange: "",
      });

      setTimeout(() => navigate("/thank-you"), 1000);
      handleCloseForm();
    } catch (error) {
      console.log("error occurred while submitting form", error);
    }
  };

  return (
    <div>
      <div
        id="aboutAltairaProject"
        className="ipadProPadding altairaProjectHeight largeScreensAltairaProjectSectionHeight bg-black px-4 py-13 pb-15 sm:px-6 md:h-[110vh] lg:px-8 xl:min-h-screen"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <h1 className="font-montserrat mb-16 text-center text-2xl font-semibold text-white md:text-3xl">
            The Altaira Project
          </h1>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-montserrat mb-6 text-xl font-semibold text-[#D4AF37] md:text-2xl">
                  26 Acres of Elevated Living - Key Highlights:
                </h2>

                <ul className="font-poppins space-y-10 font-normal">
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 text-xl text-white">•</span>
                    <span className="text-lg text-white">
                      <strong>26-acre luxury highland escape</strong> surrounded
                      by mist and nature.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mt-1 mr-3">•</span>
                    <span className="text-lg">
                      <strong>40 private villas</strong> with boutique resort
                      amenities.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mt-1 mr-3">•</span>
                    <span className="text-lg">
                      <strong>Rainforest spa</strong>, waterfalls & cloud
                      walkways within the property.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mt-1 mr-3">•</span>
                    <span className="text-lg">
                      <strong>Tea-estate trails</strong> and curated nature
                      experiences.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mt-1 mr-3">•</span>
                    <span className="text-lg">
                      A blend of serenity, sophistication and elevated
                      hospitality.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    {/* <span className="mr-3 text-lg">•</span> */}
                    <span className="text-lg text-[#D4AF37]">
                      Access by application only. Limited to 200 invitations.
                    </span>
                  </li>
                </ul>
                <button
                  onClick={handleShowForm}
                  className="font-montserrat mt-4 flex scale-100 cursor-pointer items-center gap-1 rounded-md bg-[#D4AF37] px-5 py-2 text-white transition hover:scale-105 hover:bg-[#9c835a]"
                >
                  Register Now <ArrowRight />
                </button>
              </div>
            </div>

            {/* Right Column - Circular Images */}
            <div className="relative h-[300px] md:h-[600px]">
              {/* Top Left Circle */}
              <div className="absolute top-0 left-0 h-56 w-56 overflow-hidden rounded-full shadow-2xl">
                <img
                  src={villaImg}
                  alt="Altaira Resort"
                  className="hidden h-full w-full object-cover lg:block"
                />
              </div>

              {/* Middle Left Circle */}
              <div className="absolute top-70 left-0 hidden h-52 w-52 overflow-hidden rounded-b-full shadow-2xl lg:block">
                <img
                  src={altairaImg}
                  alt="Altaira Restaurant"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small screen image */}
              <div className="absolute block overflow-hidden shadow-2xl lg:hidden">
                <img
                  src={altairaImg}
                  alt="Altaira Restaurant"
                  className="h-[40vh] w-full rounded-md object-cover"
                />
              </div>

              {/* Right Large Oval */}
              <div className="absolute top-12 right-0 h-[450px] w-72 overflow-hidden rounded-full shadow-2xl">
                <img
                  src={restaurantImg}
                  alt="Altaira Resort aerial view"
                  className="hidden h-full w-full object-cover lg:block"
                />
              </div>
            </div>
          </div>

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
                  <h2 className="font-montserrat flex items-center justify-center text-xl font-bold text-[#D4AF37]">
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
                      className="placeholder:font-montserrat w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500"
                    />

                    {/* outline-none focus:ring-2 focus:ring-[#c6af83] */}

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
                      className="placeholder:font-montserrat w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500"
                    />

                    {/* outline-none focus:ring-2 focus:ring-[#c6af83] */}
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

                    {/* <PhoneInput
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
                      containerClass="w-full rounded-md text-white placeholder:font-montserrat"
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
                          fontFamily: "Montserrat, sans-serif",
                        }),
                        input: (base) => ({
                          ...base,
                          fontFamily: "Montserrat, sans-serif",
                        }),
                        menuList: (base) => ({
                          ...base,
                          fontFamily: "Montserrat, sans-serif",
                        }),
                        menu: (base) => ({
                          ...base,
                          zIndex: 9999,
                        }),
                      }}
                      placeholder="Select Your Country*"
                    />

                    <select
                      name="budget"
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className={`font-montserrat w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm ${formData.budget === "" ? "text-gray-500" : "text-black"}`}
                    >
                      <option value="" disabled>
                        Investment Budget Range*
                      </option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Occupation*"
                      required
                      className="placeholder:font-montserrat w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500"
                    />

                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Designation*"
                      required
                      className="placeholder:font-montserrat w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500"
                    />

                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company Name*"
                      required
                      className="placeholder:font-montserrat w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-500"
                    />

                    <select
                      id="incomeRange"
                      name="incomeRange"
                      value={formData.incomeRange}
                      onChange={handleChange}
                      required
                      className={`font-montserrat w-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm ${formData.incomeRange === "" ? "text-gray-500" : "text-black"}`}
                    >
                      <option value="" disabled className="bg-[#D4AF37]">
                        Income Range*
                      </option>
                      {incomeRanges.map((range) => (
                        <option
                          key={range}
                          value={range}
                          className="bg-[#D4AF37]"
                        >
                          {range}
                        </option>
                      ))}
                    </select>

                    <label
                      htmlFor="checkboxField"
                      className="flex items-start gap-1"
                    >
                      <input
                        id="checkboxField"
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border border-[#D4AF37] bg-[#0A0A0A8C]"
                      />
                      <span className="font-montserrat text-sm">
                        I consent to the Altaira team contacting me using the
                        details I have provided.
                      </span>
                    </label>

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
                      className="w-full cursor-pointer rounded bg-[#D4AF37] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#9c835a]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AltairaProject;
