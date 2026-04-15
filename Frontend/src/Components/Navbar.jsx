import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import avatar from '../assets/Avatar.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // triggers subtle animation on load
  }, []);

  return (
    <nav
      className={`w-full bg-white shadow-sm px-6 py-3 transition-all duration-700  ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="flex items-center justify-around max-md:justify-between">
        {/* Left - Logo */}
        <div className="flex flex-col">
          <h1 className=" text-xl text-blue-600 font-bold">Vibra</h1>
          <span className="text-xs text-gray-400">Premium Member</span> 
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-semibold text-lg">
          <a className="text-blue-600" href="#">Home</a>
          <a className="text-gray-500 hover:text-black transition" href="#">
            Favorites
          </a>
          <a className="text-gray-500 hover:text-black transition" href="#">
            Settings
          </a>
        </div>

        {/* Right - Profile */}
        <div className="hidden md:flex items-start gap-2 cursor-pointer ">
          <img
            src={avatar}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <button className="text-lg cursor-pointer font-bold text-gray-600 hover:text-black">
            Logout
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-sm font-medium">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#" className="text-gray-600">Favorites</a>
          <a href="#" className="text-gray-600">Settings</a>

          <div className="flex items-center gap-3 pt-3 border-t">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <button className="text-gray-600">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}