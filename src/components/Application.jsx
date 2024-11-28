import React, { useState } from "react";
import "./Application.css"; // Ensure to import the CSS

function Application() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    essay: "",
    educationLevel: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("essay", formData.essay);
    form.append("educationLevel", formData.educationLevel);
    form.append("age", formData.age);

    fetch("https://formsubmit.co/dorineokowo0@gmail.com", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Thank you, ${formData.name}, your application has been sent!`);
        setFormData({
          name: "",
          email: "",
          phone: "",
          essay: "",
          educationLevel: "",
          age: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="application">
      <div className="Application-page">
        <h4>Apply for the Scholarship</h4>
        <p>Please fill out the form below with all the required details.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label>Phone Number</label>
          </div>

          <div className="form-group">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <label>Age</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Highest level of education</label>
          </div>

          <div className="form-group">
            <textarea
              name="essay"
              value={formData.essay}
              onChange={handleChange}
              rows="5"
              required
            />
            <label>Why do you deserve this scholarship?</label>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Application;
