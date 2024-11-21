import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "../Redux/Slice/authSlice";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  // Auto-hide error after 1 second
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(registerUser(userData)).then((action) => {
      if (registerUser.fulfilled.match(action)) {
        // If the registration is successful, clear the form
        resetForm();
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full sm:w-1/3 transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Register
        </h2>
        {error && (
          <p className="text-red-500 text-center mb-4 text-sm font-medium">
            {error}
          </p>
        )}

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <div className="mb-6">
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-6">
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="relative mb-6">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full p-4 border border-gray-300 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-6 h-6 text-gray-500" />
                  ) : (
                    <EyeIcon className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="relative mb-6">
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full p-4 border border-gray-300 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="w-6 h-6 text-gray-500" />
                  ) : (
                    <EyeIcon className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full p-4 bg-blue-500 text-white rounded-2xl transition-all hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
              
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
