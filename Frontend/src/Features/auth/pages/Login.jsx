import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 flex flex-col justify-between">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-semibold text-gray-700">Digital Curator</h1>
        <button className="text-sm text-gray-500">Back to home</button>
      </div>

      {/* Center Card */}
      <div className="flex flex-1 items-center justify-center px-4">
        
        <div className="w-full max-w-sm bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8">
          
          {/* Heading */}
          <h2 className="text-xl font-semibold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 text-center mt-1 mb-6">
            Continue your synesthetic journey.
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="text-xs text-gray-500 uppercase">
              Email Address
            </label>
            <input
              type="email"
              placeholder="curator@example.com"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 text-sm outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500">
              <span className="uppercase">Password</span>
              <span className="text-indigo-500 cursor-pointer">
                Forgot?
              </span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 text-sm outline-none"
            />
          </div>

          {/* Button */}
          <button className="w-full py-3 mt-2 rounded-lg bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition">
            Log In
          </button>

          {/* Divider */}
          {/* <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-xs text-gray-400">
              OR CONNECT WITH
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

          {/* Footer Text */}
          <p className="text-xs text-gray-500 text-center mt-5">
            New to Digital Curator?{" "}
          <Link to='/register'> <span className="text-indigo-600 cursor-pointer">
              Create an account
            </span></Link> 
          </p>
        </div>
      </div>

      {/* Bottom Spacer (optional alignment) */}
      <div className="h-4"></div>
    </div>
  );
}