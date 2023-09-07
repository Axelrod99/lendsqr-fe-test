import React, { useState } from "react";
import LoginImage from "../../assets/logout-image.svg";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const LoginPages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleLogin = () => {
    if (email === "lendsqr@gmail.com" && password === "lendsqr") {
      setError("");
      navigate('/Dashboard')
    } else {
      setError("Invalid username or password");
    }
  };
  

  return (
    <div className="flex h-screen w-screen">
      <div className="hidden md:flex flex-col gap-24 w-full">
        <div className="mt-[40px] ml-[30px]">
          <img alt='/' src={Logo} />
        </div>

        <div className="flex justify-center mt-20 lg:mt-[58px] xl:mt-10">
          <img alt='/' src={LoginImage} />
        </div>
      </div>

      <div className="flex flex-col w-full mt-10 md:mt-0 md:justify-center md:items-center">
        <div className="ml-7 md:ml-0 flex md:hidden">
          <img alt='/' src={Logo} />
        </div>

        <div className="w-full flex flex-col items-center mt-16 md:mt-0">
          <div className="flex flex-col gap-[10px] w-[85%] md:w-[75%]">
            <p className="text-[#213F7D] text-[40px] font-bold">Welcome!</p>
            <p className="text-[#545F7D]">Enter details to login.</p>
          </div>

          {error && 
          <div className="flex flex-col items-center">
          <p className="text-red-400 font-semibold">{error}</p>
          <p className="text-[10px]">Email: lendsqr@gmail.com</p>
          <p className="text-[10px]">Password: lendsqr</p>
          </div>}

          <div className="flex flex-col gap-[24px] w-[85%] md:w-[75%] mt-[60px]">
            <input
              className="border border-[#545F7D26] h-[50px] text-[#545F7D] rounded-[8px] p-[10px]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <p className="absolute font-thin cursor-pointer right-2 top-[18px] text-[#39CDCC] text-[12px]">
                SHOW
              </p>
              <input
                className="border border-[#545F7D26] h-[50px] text-[#545F7D] w-full rounded-[8px] p-[10px]"
                placeholder="Password"
                value={password}
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="w-[85%] md:w-[75%] flex flex-col mt-6 gap-[30px]">
            <p className="cursor-pointer w-32 text-[12px] text-[#39CDCC]">
              FORGOT PASSWORD?
            </p>

            <button
            onClick={handleLogin}
              className="text-xs text-white bg-[#39CDCC] h-[48px] flex justify-center items-center font-bold rounded-[8px]"
            >
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
