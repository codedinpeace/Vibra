import { Link } from "react-router-dom";
import RegisterImg from "../../../assets/RegisterImg.png";
import { useState } from "react";
import {Eye, EyeClosed} from 'lucide-react'

export default function Register() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col justify-between">
      
      {/* Top Navbar */}  
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-semibold text-gray-700">Digital Curator</h1>
        <Link to='/login'><button className="text-sm text-gray-600">Log In</button></Link>
      </div>

      {/* Main Section */}
      <div className="flex flex-1 items-center justify-center px-6">``
        
        <div className="w-full max-w-6xl flex items-center justify-between gap-10">
          
          {/* LEFT SIDE (hidden on mobile) */}
          <div className="hidden md:flex flex-col gap-6 max-w-lg">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Curate your <br />
              <span className="text-indigo-600">auditory world.</span>
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed">
              Join an exclusive community of aesthetic explorers. Experience music discovery
              reimagined as a high-end editorial gallery.
            </p>

            <img
              src={RegisterImg}
              alt="preview"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
            
            <h2 className="text-xl font-semibold text-gray-800">
              Create account
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Step into the gallery of sound.
            </p>

            {/* Inputs */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-sm outline-none"
              />
               <div className="relative">
            <input
              type={showPassword ? "text" : 'password'}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 text-sm outline-none"
              />
              {showPassword ? <EyeClosed className="opacity-60 absolute top-4 right-3 cursor-pointer" onClick={()=>{setShowPassword(false)}}/> : <Eye className="opacity-60 absolute top-4 right-3 cursor-pointer" onClick={()=>{setShowPassword(true)}}/>}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mt-4 text-xs text-gray-500">
              <input type="checkbox" className="mt-1" />
              <p>
                I agree to the{" "}
                <span className="text-indigo-600 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-indigo-600 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Button */}
            <button className="register-button w-full mt-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Get Started
            </button>

            {/* Divider */}
            {/* <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              <span className="text-xs text-gray-400">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div> */}

            {/* Social Buttons */}
            {/* <div className="flex gap-3">
              <button className="flex-1 py-2 rounded-lg bg-gray-100 text-sm">
                Google
              </button>
              <button className="flex-1 py-2 rounded-lg bg-gray-100 text-sm">
                Apple
              </button>
            </div> */}

            {/* Login */}
            <p className="text-xs text-gray-500 text-center mt-5">
              Already have an account?{" "}
              <Link to='/login'> <span className="text-indigo-600 cursor-pointer">
                Log in
              </span></Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="hidden sm:flex justify-between text-xs text-gray-400 px-6 py-4">
        <span>Digital Curator</span>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Help Center</span>
        </div>
        <span>© 2024 Digital Curator.</span>
      </div>
    </div>
  );
}