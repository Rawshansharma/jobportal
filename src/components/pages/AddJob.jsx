import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJob = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    location: '',
    description: '',
    salary: '',
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: '',
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Handling nested object fields (for company fields)
    if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setFormData((prevFormData) => ({
        ...prevFormData,
        company: {
          ...prevFormData.company,
          [field]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    toast.success('Job Added success')
    navigate('/jobs')
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium">Job Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Enter job title"
          required
        />
      </div>

      {/* Job Type */}
      <div>
        <label className="block text-sm font-medium">Job Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        >
          <option value="">Select type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Enter job location"
          required
        />
      </div>

      {/* Job Description */}
      <div>
        <label className="block text-sm font-medium">Job Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Enter job description"
          rows="3"
          required
        />
      </div>

      {/* Salary */}
      <div>
        <label className="block text-sm font-medium">Salary</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Enter salary"
          required
        />
      </div>

      {/* Company Name */}
      <div>
        <label className="block text-sm font-medium">Company Name</label>
        <input
          type="text"
          name="company.name"
          value={formData.company.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Enter company name"
          required
        />
      </div>

      {/* Company Description */}
      <div>
        <label className="block text-sm font-medium">Company Description</label>
        <textarea
          name="company.description"
          value={formData.company.description}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Enter company description"
          rows="3"
        />
      </div>

      {/* Company Email */}
      <div>
        <label className="block text-sm font-medium">Company Email</label>
        <input
          type="email"
          name="company.contactEmail"
          value={formData.company.contactEmail}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Enter company email"
          required
        />
      </div>

      {/* Company Phone */}
      <div>
        <label className="block text-sm font-medium">Company Phone</label>
        <input
          type="tel"
          name="company.contactPhone"
          value={formData.company.contactPhone}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Enter company phone"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white p-2 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default AddJob;
