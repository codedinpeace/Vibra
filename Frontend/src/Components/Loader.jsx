export default function Loader() {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* Orb + Ring */}
        <div className="relative flex items-center justify-center">
          
          {/* Outer rotating ring */}
          <div className="w-24 h-24 rounded-full border-2 border-[#4456BA]/30 border-t-[#4456BA] animate-spin"></div>

          {/* Inner glowing orb */}
          <div className="absolute w-14 h-14 rounded-full bg-[#4456BA] blur-md opacity-70 animate-pulse"></div>

          {/* Core dot */}
          <div className="absolute w-6 h-6 rounded-full bg-[#4456BA]"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-white text-sm tracking-wide">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}