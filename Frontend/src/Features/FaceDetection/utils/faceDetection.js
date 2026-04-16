import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";
import { useSongStore } from "../hooks/useSongStore";

// INIT → only load model

export const init = async (faceLandmarkerRef, setLoading, setMood) => {
  try {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    faceLandmarkerRef.current =
      await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        },
        runningMode: "VIDEO",
        numFaces: 1,
      });

    setLoading(false);
  } catch (err) {
    console.error(err);
    setMood("Camera/Model error");
  }
};

// DETECT → start camera if needed + detect
export const handleDetect = async (
  videoRef,
  setMood,
  faceLandmarkerRef
) => {
  if (!faceLandmarkerRef.current) return;

  setMood("Detecting...");

  // 🔥 Start camera ONLY if not started
  if (!videoRef.current.srcObject) {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    videoRef.current.srcObject = stream;
    await videoRef.current.play();

    // small delay for camera warm-up (important)
    await new Promise((res) => setTimeout(res, 300));
  }

  const results = faceLandmarkerRef.current.detectForVideo(
    videoRef.current,
    performance.now()
  );

  if (!results.faceLandmarks.length) {
    setMood("No face detected");
    return;
  }

  const landmarks = results.faceLandmarks[0];

  const leftMouth = landmarks[61];
  const rightMouth = landmarks[291];
  const topLip = landmarks[13];
  const bottomLip = landmarks[14];

  const mouthWidth = Math.abs(leftMouth.x - rightMouth.x);
  const mouthOpen = Math.abs(topLip.y - bottomLip.y);
  const mouthCenterY = (topLip.y + bottomLip.y) / 2;

  // Eyebrows
  const leftBrow = landmarks[70];
  const rightBrow = landmarks[300];
  const leftEye = landmarks[33];
  const rightEye = landmarks[263];

  const leftBrowEyeDist = Math.abs(leftBrow.y - leftEye.y);
  const rightBrowEyeDist = Math.abs(rightBrow.y - rightEye.y);

  const isHappy = mouthWidth > 0.04 && mouthOpen > 0.005;

  const isSad =
    leftMouth.y > mouthCenterY && rightMouth.y > mouthCenterY;

  const isNeutral =
    mouthWidth < 0.03 && mouthOpen < 0.015;

  const isAngry =
    mouthWidth < 0.035 &&
    mouthOpen < 0.02 &&
    leftBrowEyeDist < 0.04 &&
    rightBrowEyeDist < 0.04;

    let detectedMood;

  if (isHappy) {
    detectedMood = "happy";
  } else if (isSad) {
    detectedMood = "sad";
  } else if (isNeutral) {
    detectedMood = "neutral";
  } else if (isAngry) {
    detectedMood = "angry";
  } else {
    detectedMood = "neutral";
  }

  setMood(detectedMood)
  return detectedMood

};