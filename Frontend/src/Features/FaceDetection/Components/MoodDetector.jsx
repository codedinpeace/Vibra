import { useEffect, useRef, useState } from "react";
import { handleDetect, init } from "../utils/faceDetection";
import loadingImg from "../../../assets/Neutral.svg";
import Happy from "../../../assets/Happy.svg";
import Angry from "../../../assets/Angry.svg";
import Sad from "../../../assets/Sad.svg";
import { useSongStore } from "../hooks/useSongStore";

export default function MoodDetector() {
  const videoRef = useRef(null);
  const faceLandmarkerRef = useRef(null);

  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(true);

  const {handleGetSongs} = useSongStore()

  useEffect(() => {
    init(faceLandmarkerRef, setLoading, setMood);
  }, []);

  const handleDetection = async () => {
    const detectedMood = await handleDetect(videoRef, setMood, faceLandmarkerRef);
    await handleGetSongs(detectedMood)
  };

  return (
    <div className="w-full xl:px-60">
      <div className="p-20 flex flex-wrap gap-10 justify-center pt-30 bg-[#F1F4F5] rounded-b-[5%]">
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <h1 className="text-6xl max-lg:text-center  mb-10  text-[#2D3335] font-bold max-w-150 ">
            How are you <span className="text-[#4456BA]">feeling</span> today?
          </h1>
          <p className=" max-lg:text-center 5A6062 mb-10 text-xl max-w-100">
            Our AI analyzes your current state to curate a sonic journey that
            mirrors your soul.
          </p>
          <button
            onClick={handleDetection}
            disabled={loading}
            className={`px-7 detect-button py-3 max-md:mx-auto text-xl rounded-full hover:opacity-80 cursor-pointer active:scale-90 text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Loading..." : "Detect Mood"}
          </button>
        </div>

        {/* Fake UI instead of webcam */}
        <div className="w-[384px] h-[384px] bg-[#F3F2FD] rounded-[20%] flex flex-col relative items-center justify-center shadow-xl">
          {/* <p className="text-gray-500 text-sm">Camera ready</p> */}
          <img
            src={
              mood === "happy"
                ? Happy
                : mood === "sad"
                  ? Sad
                  : mood === "angry"
                    ? Angry
                    : loadingImg
            }
            className={`w-[140px] ${loading ? "animate-breathe" : ""}  img`}
            alt=""
          />
          <span
            className={` ${mood === "" ? "hidden" : "px-4 py-2 bg-[#DFE1F9] absolute bottom-10 rounded-full"}`}
          >
            <p className=" text-[#4D5165]">{loading ? "Scanning...." : mood}</p>
          </span>
        </div>

        {/* Hidden video (IMPORTANT) */}
        <video ref={videoRef} autoPlay muted className="hidden" />

        {/* Button */}
      </div>
    </div>
  );
}
