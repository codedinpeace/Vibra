import { useEffect, useRef, useState } from "react";
import { handleDetect, init } from "../api/faceDetection";
import loadingImg from '../../../assets/Neutral.svg'
import Happy from '../../../assets/Happy.svg'
import Angry from '../../../assets/Angry.svg'
import Sad from '../../../assets/Sad.svg'

export default function MoodDetector() {
  const videoRef = useRef(null);
  const faceLandmarkerRef = useRef(null);

  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init(faceLandmarkerRef, setLoading, setMood);
  }, []);

  const handleDetection = () => {
    handleDetect(videoRef, setMood, faceLandmarkerRef);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-4">
      {/* <h1 className="text-2xl font-semibold">Mood Detector</h1> */}

      {/* Fake UI instead of webcam */}
      <div className="w-80 h-60 bg-[#F3F2FD] rounded-xl flex items-center justify-center shadow-md">
        {/* <p className="text-gray-500 text-sm">Camera ready</p> */}
        <img src={mood === "happy"
      ? Happy
      : mood === "sad"
      ? Sad
      : mood === "angry"
      ? Angry
      : loadingImg} className="w-[50%]" alt="" />
      </div>

      {/* Hidden video (IMPORTANT) */}
      <video ref={videoRef} autoPlay muted className="hidden" />

      {/* Mood */}
      <div className={` ${mood === "" ? "hidden" : "text-lg font-medium  px-4 py-2 rounded-lg shadow" } `}>
        {mood}
      </div>  

      {/* Button */}
      <button
        onClick={handleDetection}
        disabled={loading}
        className={`px-5 py-2 rounded-lg text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Loading..." : "Detect Mood"}
      </button>
    </div>
  );
}