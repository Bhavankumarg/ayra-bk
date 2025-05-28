"use client";
import { useEffect, useState } from "react";
import ContactPanel from "./ContactPanel";
import { HoverButton5 } from "../../utils/HoverButton.js";
import { Country, State } from "country-state-city";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    city: "",
    state: "",
    phone: "",
    interest: "",
    program: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "nationality") {
      const selectedCountry = countries.find(
        (country) => country.name === value
      );
      if (selectedCountry) {
        const stateList = State.getStatesOfCountry(selectedCountry.isoCode);
        setStates(stateList);
      } else {
        setStates([]);
      }
      setFormData({ ...formData, [name]: value, state: "" });
    }

    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required.";
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.nationality) errors.nationality = "Nationality is required.";
    if (!formData.city) errors.city = "City is required.";
    if (!formData.state) errors.state = "State is required.";
    if (!formData.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.interest) errors.interest = "Area of interest is required.";
    if (!formData.program) errors.program = "Program is required.";

    setFormErrors(errors); // Update the state with errors
    console.log("Validation Errors:", errors); // Debugging
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data Before Validation:", formData); // Debugging
    if (!validateForm()) {
      setStatus("Please fix the errors in the form.");
      console.log("Form Validation Failed"); // Debugging
      return;
    }

    setStatus("Submitting...");
    console.log("Form Validation Passed"); // Debugging

    const form = new FormData();
    form.append("title", formData.title);
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("nationality", formData.nationality);
    form.append("city", formData.city);
    form.append("state", formData.state);
    form.append("phone", formData.phone);
    form.append("interest", formData.interest);
    form.append("program", formData.program);

    try {
      const response = await fetch(
        "https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/894/feedback",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await response.json();
      console.log("API Response:", result); // Debugging

      if (result.status === "mail_sent") {
        setStatus("Form submitted successfully!");
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          nationality: "",
          city: "",
          state: "",
          phone: "",
          interest: "",
          program: "",
        });
        setFormErrors({});
      } else {
        setStatus("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error); // Debugging
      setStatus("An error occurred. Please try again.");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row bg-white text-[#0D2556]">
      <div className="w-full lg:w-2/3 p-5 lg:p-10">
        <h2 className="text-3xl mb-6 font-bold">ENQUIRY FORM</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name fields */}
          <div>
            <label className="block font-bold uppercase mb-2">Name</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
                />
                <span className="text-sm text-gray-500">Title</span>
                {formErrors.title && (
                  <p className="text-red-500 text-sm">{formErrors.title}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
                />
                <span className="text-sm text-gray-500">First Name</span>
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
                />
                <span className="text-sm text-gray-500">Last Name</span>
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm">{formErrors.lastName}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-bold uppercase mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>

          {/* City / State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold uppercase mb-2">
                Nationality
              </label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {formErrors.nationality && (
                <p className="text-red-500 text-sm">{formErrors.nationality}</p>
              )}
            </div>

            <div>
              <label className="block font-bold uppercase mb-2">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
                disabled={!states.length}
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              {formErrors.state && (
                <p className="text-red-500 text-sm">{formErrors.state}</p>
              )}
            </div>
          </div>

          {/* Phone / Area of Interest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold uppercase mb-2">
                City/Town
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
              />
              {formErrors.city && (
                <p className="text-red-500 text-sm">{formErrors.city}</p>
              )}
            </div>
            <div>
              <label className="block font-bold uppercase mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm">{formErrors.phone}</p>
              )}
            </div>
            <div>
              <label className="block font-bold uppercase mb-2">
                Area of Interest
              </label>
              <input
                type="text"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
              />
              {formErrors.interest && (
                <p className="text-red-500 text-sm">{formErrors.interest}</p>
              )}
            </div>
          </div>

          {/* Program */}
          <div>
            <label className="block font-bold uppercase mb-2">
              Program{" "}
              <span className="font-normal">(Bachelors or Masters)</span>
            </label>
            <input
              type="text"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
            />
            {formErrors.program && (
              <p className="text-red-500 text-sm">{formErrors.program}</p>
            )}
          </div>

          <div>
            <p className="text-[#002561] text-sm lg:w-2/3 ">
              Whether you want to learn more about our programs, admissions
              process, campus facilities, or student life, our team is ready to
              guide you. Reach out, and let’s start a conversation about your
              future at AYRA.
            </p>
          </div>
          {/* Submit Button */}
          <div>
            <button
              // className="relative text-white font-bold px-5 py-1 w-60 bg-[#66A4F9] transition-all cursor-pointer group hover:shadow-inner border-dashed"
              type="submit"
            >
              <HoverButton5 text="Submit" />
              {/* <span className="absolute top-0 right-0 w-0 h-0 border-solid border-transparent group-hover:border-r-[15px] group-hover:border-b-[15px] transition-all duration-75 ease-out border-r-white border-b-[#3B76CB]"></span> */}
            </button>
          </div>

          {/* Status Message */}
          {status && <p className="text-sm text-[#4b5563] pt-2">{status}</p>}
        </form>
      </div>

      {/* Right: Contact Panel */}
      <ContactPanel />
    </div>
  );
}
