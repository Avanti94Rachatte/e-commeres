import React, { useState, useEffect } from "react";

const DeliveriForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    state: "",
    postcode: "",
    country: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
      case "address":
      case "state":
      case "country":
        return value.trim() ? "" : "This field is required";
      case "postcode":
        if (!value.trim()) return "This field is required";
        if (!/^\d{5,6}$/.test(value)) return "Invalid postcode";
        return "";
      case "phone":
        if (!value.trim()) return "This field is required";
        if (!/^\d{10}$/.test(value)) return "Invalid phone number";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
      alert("Please fill all delivery fields correctly!");
    }
  };

  return (
    <div className="bg-gray-100 rounded-md p-5 space-y-4">
      <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>

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
            onChange={handleChange}
            className="p-2 rounded-md"
            placeholder={`Enter your ${field.label}`}
          />
          {errors[field.name] && (
            <span className="text-red-500 text-sm">{errors[field.name]}</span>
          )}
        </div>
      ))}

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
