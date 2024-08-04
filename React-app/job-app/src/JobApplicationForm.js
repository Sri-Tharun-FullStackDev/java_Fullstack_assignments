import React, { useState } from 'react';
import './JobApplicationForm.css';

function JobApplicationForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Simulate form submission success
    setIsSubmitted(true);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });

    // Here, you could also add the logic to send formData to a backend server
    // For example, using fetch() or axios to POST formData
  };

  return (
    <div>
      <h1>Job Application Form</h1>
      {isSubmitted && <p>Thank you! Your application has been submitted successfully.</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default JobApplicationForm;
