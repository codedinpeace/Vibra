import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision"; 
 
 
 export const init = async (faceLandmarkerRef, videoRef,setLoading, setMood ) => {
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

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        videoRef.current.srcObject = stream;
        await videoRef.current.play();

        setLoading(false);
      } catch (err) {
        console.error(err);
        setMood("Camera/Model error");
      }
    };


  export  const handleDetect = (videoRef, setMood, faceLandmarkerRef) => {
    if (!videoRef.current || !faceLandmarkerRef.current) return;

    setMood("Detecting...");

    const results = faceLandmarkerRef.current.detectForVideo(
      videoRef.current,
      performance.now()
    );

    if (results.faceLandmarks.length === 0) {
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

    const isHappy = mouthWidth > 0.06 && mouthOpen > 0.02;
    const isSad =
      leftMouth.y > mouthCenterY && rightMouth.y > mouthCenterY;

    if (isHappy) {
      setMood("happy");
    } else if (isSad) {
      setMood("sad");
    } else if (mouthWidth < 0.045) {
      setMood("neutral");
    } else {
      setMood("angry");
    }
  };