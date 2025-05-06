// client/components/LoginForm.js
'use client'; // Mark this as a Client Component

import { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

const LoginForm = () => {
  const [uniqueKey, setUniqueKey] = useState(""); // State for the unique key input
  const [error, setError] = useState(""); // State for error messages
  const [isLoading, setIsLoading] = useState(false); // State to indicate loading during API call

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setIsLoading(true); // Set loading state to true

    try {
      // Send a POST request to the backend API
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        uniqueKey,
      });

      if (response.data.success) {
        // Redirect to the home page after successful login
        window.location.href = "/dashboard";
      }
    } catch (err) {
      // Handle errors from the API
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error Message */}
      <ErrorMessage message={error} />

      {/* Unique Key Input */}
      <InputField
        label="Unique Key"
        type="text"
        id="uniqueKey"
        value={uniqueKey}
        onChange={(e) => setUniqueKey(e.target.value)}
        placeholder="Enter your unique key"
        required
      />

      {/* Submit Button */}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;