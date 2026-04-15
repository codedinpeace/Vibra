import { useEffect, useRef, useState } from "react";
import { init, handleDetect } from "../api/faceDetection";

export default function MoodDetector() {
  const videoRef = useRef(null);
  const faceLandmarkerRef = useRef(null);

  const [mood, setMood] = useState("Click detect");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init(faceLandmarkerRef, videoRef, setLoading, setMood);
  }, []);

  const handleDetection = () => {
    handleDetect(videoRef, setMood, faceLandmarkerRef);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold">Mood Detector</h1>

      {/* Video */}
      <video
        ref={videoRef}
        className="w-80 rounded-xl shadow-md"
        width="320"
        height="240"
        autoPlay
        muted
      />

      {/* Mood Output */}
      <div className="text-lg font-medium bg-white px-4 py-2 rounded-lg shadow">
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
