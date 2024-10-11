import { useState, useContext } from 'react'; // useContext is imported here
import { useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext'; // Import your DataContext

// Reusable Input Component
// eslint-disable-next-line react/prop-types
const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      required
    />
  </div>
);

const Register = () => {
  const { signUp } = useContext(DataContext); // Use useContext to get signUp function
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '', // Make sure you include role here as well
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation logic
  const validate = () => {
    let tempErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = 'Valid email is required';
    }

    if (!formData.password || formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await signUp(formData.email, formData.password, formData.role) // Make sure to pass email, password, and role
       
        .then(() => navigate('/')) // Navigate on success
        .catch((err) => {
          console.error("Error during sign up:", err);
          setErrors({ general: err.message });
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <form onSubmit={handleSubmit}>
          {/* Role Input */}
          <InputField
            label="Role"
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter admin or user"
          />
          {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}

          {/* Email Input */}
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

          {/* Password Input */}
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
