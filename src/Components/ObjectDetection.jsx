import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import { renderPredictions } from "../utils/renderPredictions";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Feedback from "./Feedback";

let detectInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  async function runCoco() {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 10);
  }

  async function runObjectDetection(net) {
    if (
      canvasRef.current &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const detectedObjects = await net.detect(
        webcamRef.current.video,
        undefined,
        0.6
      );

      const context = canvasRef.current.getContext("2d");
      renderPredictions(detectedObjects, context);
    }
  }

  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHeight;
    }
  };

  useEffect(() => {
    runCoco();
    showmyVideo();
  }, []);

  return (
    <div className="flex flex-col pt-20 min-h-screen bg-[#c7f58c]">
      <Navbar />

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white text-center">
        Animal Intrusion
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mx-auto mb-6 w-full md:w-2/3">
        
        <img
          className="h-16 w-16 sm:h-20 sm:w-20"
          src="https://cdn-icons-png.freepik.com/256/4921/4921732.png"
          alt="animal 1"
        />
        <img
          className="h-16 w-16 sm:h-20 sm:w-20"
          src="https://cdn-icons-png.freepik.com/256/3778/3778774.png"
          alt="animal 2"
        />
        <img
          className="h-16 w-16 sm:h-20 sm:w-20"
          src="https://cdn-icons-png.freepik.com/256/7924/7924680.png"
          alt="animal 3"
        />
        <img
          className="h-16 w-16 sm:h-20 sm:w-20"
          src="https://cdn-icons-png.freepik.com/256/4757/4757427.png"
          alt="animal 4"
        />
        <img
          className="h-16 w-16 sm:h-20 sm:w-20"
          src="https://cdn-icons-png.freepik.com/256/6583/6583648.png"
          alt="animal 5"
        />
      </div>

      {isLoading ? (
        <div className="text-center text-lg font-bold">Loading AI Model...</div>
      ) : (
        <div className="relative flex justify-center items-center w-full px-4 lg:w-3/4 mx-auto">
          {/* Webcam */}
          <Webcam
            ref={webcamRef}
            className="rounded-md w-full h-[280px] sm:h-[400px] lg:h-[760px]"
            muted
          />
          {/* Canvas for predictions */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-10 w-full h-[280px] sm:h-[400px] lg:h-[760px]"
          />
        </div>
      )}

      <Feedback />

      <Footer />
    </div>
  );
};

export default ObjectDetection;
