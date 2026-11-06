import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = ({ handlecloseicon, signuplink }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let length_character = /[A-Za-z\d@$!%*?&]{8,}$/;

  let navigate = useNavigate();

  let handleLoginBtn = () => {
    if (!email) {
      setEmailError("Enter your email");
    } else if (!emailregex.test(email)) {
      setEmailError("Enter valid email");
    }
    if (!password) {
      setPasswordError("Enter your Password");
    } else if (!length_character.test(password)) {
      setPasswordError("Enter 8.. character");
    }
    if (
      email &&
      password &&
      emailregex.test(email) &&
      length_character.test(password)
    ) {
      handlecloseicon()
      navigate("/deshboard")
    }
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black/70">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[600px] py-6 px-8 relative bg-white rounded-2xl">
          <IoCloseSharp
            onClick={handlecloseicon}
            className="absolute top-3 right-4 text-4xl cursor-pointer hover:text-red-500 duration-150"
          />

          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
            <p className="text-gray-500 mt-0.5">Please login to your account</p>
          </div>

          
            <div>
              <label
                htmlFor="emailid"
                className="block text-sm font-poppins font-semibold text-gray-700 text-start mb-0.5 cursor-pointer"
              >
                Email Address
              </label>

              <input
                type="email"
                id="emailid"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                className="w-full border border-black/30 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
              />
            </div>
            {emailError && (
              <p className="font-roboto font-medium text-ms text-red-500">
                {emailError}
              </p>
            )}

            {/* password */}
            <div className="mt-4">
              <label
                htmlFor="passwordid"
                className="block text-sm font-poppins font-semibold text-gray-700 text-start mb-0.5 cursor-pointer"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="passwordid"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                  className="w-full border border-black/30 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                />
                {/* error message */}
                {passwordError && (
                  <p className="absolute top-11 left-0 font-roboto font-medium text-ms text-red-500">
                    {passwordError}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mt-6 mb-1">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="accent-blue-600 cursor-pointer"
                />
                Remember me
              </label>

              <p className="text-red-500 hover:underline cursor-pointer">
                Forgot password?
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleLoginBtn}
                type="submit"
                className="w-[200px] bg-blue-600 hover:bg-blue-700 text-white text-base font-roboto font-semibold py-2 rounded-xl  transition-all duration-200 cursor-pointer"
              >
                Login
              </button>
            </div>
          

          <p className="text-center text-gray-600 text-sm mt-3">
            Don't have an account?
            <span
              onClick={signuplink}
              className="text-blue-600 font-semibold ml-1 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
