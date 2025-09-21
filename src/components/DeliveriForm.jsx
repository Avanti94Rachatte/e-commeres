import React, { useState, useEffect } from "react";

const DeliveriForm = ({ onSubmit }) => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    state: "",
    postcode: "",
    country: "",
    phone: "",
  });

  // State to store form validation errors
  const [errors, setErrors] = useState({});

  // Function to validate individual fields
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
      case "address":
      case "state":
      case "country":
        return value.trim() ? "" : "This field is required"; // Required fields
      case "postcode":
        if (!value.trim()) return "This field is required";
        if (!/^\d{5,6}$/.test(value)) return "Invalid postcode"; // Must be 5-6 digits
        return "";
      case "phone":
        if (!value.trim()) return "This field is required";
        if (!/^\d{10}$/.test(value)) return "Invalid phone number"; // Must be 10 digits
        return "";
      default:
        return "";
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data state
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Validate field immediately on change
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const newErrors = {};
    // Validate all fields before submitting
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length === 0) {
      // If no errors, call the onSubmit function passed from parent
      onSubmit(formData);
    } else {
      // If there are errors, show alert and update errors state
      setErrors(newErrors);
      alert("Please fill all delivery fields correctly!");
    }
  };

  return (
    <div className="bg-gray-100 rounded-md p-5 space-y-4">
      <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>

      {/* Loop through each form field */}
      {[
        { label: "Full Name", name: "fullName" },
        { label: "Address", name: "address" },
        { label: "State", name: "state" },
        { label: "Postcode", name: "postcode" },
        { label: "Country", name: "country" },
        { label: "Phone", name: "phone" },
      ].map((field) => (
        <div key={field.name} className="flex flex-col space-y-1">
          <label>{field.label}</label>
          <input
            type="text"
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange} // Update state on change
            className="p-2 rounded-md"
            placeholder={`Enter your ${field.label}`}
          />
          {/* Show error message if present */}
          {errors[field.name] && (
            <span className="text-red-500 text-sm">{errors[field.name]}</span>
          )}
        </div>
      ))}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
      >
        Submit
      </button>
    </div>
  );
};

export default DeliveriForm;
