// import React, { useState } from "react";
// import * as tf from "@tensorflow/tfjs";
// import Navbar from "./Navbar";
// import ImageBox from "./ImageBox";
// import Footer from "./Footer";
// import AIGeneratedBox from "./AiGeneratedBox";
// import Loader from "./Loader";
// import Feedback from "./Feedback";

// const PlantDiseasePredictor = () => {
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [filepath, setFilepath] = useState(null);

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     setFilepath(URL.createObjectURL(event.target.files[0]));

//     setLoading(true);

//     try {
//       // Load the TensorFlow.js model from the local server
//       const model = await tf.loadLayersModel(
//         "https://sanskarjain04.github.io/Disease-Prediction/model.json"
//       );

//       // Read and preprocess the image
//       const image = await loadImage(file);
//       const processedImage = preprocessImage(image);

//       // Make the prediction
//       const predictions = model.predict(processedImage);
//       const predictedClass = predictions.argMax(-1).dataSync()[0];

//       setPrediction(predictedClass);
//     } catch (error) {
//       console.error("Error during prediction:", error);
//       alert("An error occurred during prediction. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadImage = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const img = new Image();
//         img.src = reader.result;
//         img.onload = () => resolve(img);
//       };
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   const preprocessImage = (image) => {
//     // Resize the image to the required input size (224x224)
//     const tensor = tf.browser
//       .fromPixels(image)
//       .resizeNearestNeighbor([224, 224])
//       .toFloat()
//       .expandDims();

//     // Normalize the image
//     const offset = tf.scalar(127.5);
//     const normalized = tensor.sub(offset).div(offset);
//     return normalized;
//   };

//   const plantstate = [
//     "Apple___Apple_scab",
//     "Apple___Black_rot",
//     "Apple___Cedar_apple_rust",
//     "Apple___healthy",
//     "Blueberry___healthy",
//     "Cherry_(including_sour)___Powdery_mildew",
//     "Cherry_(including_sour)___healthy",
//     "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
//     "Corn_(maize)___Common_rust_",
//     "Corn_(maize)___Northern_Leaf_Blight",
//     "Corn_(maize)___healthy",
//     "Grape___Black_rot",
//     "Grape___Esca_(Black_Measles)",
//     "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
//     "Grape___healthy",
//     "Orange___Haunglongbing_(Citrus_greening)",
//     "Peach___Bacterial_spot",
//     "Peach___healthy",
//     "Pepper_bell___Bacterial_spot",
//     "Pepper_bell___healthy",
//     "Potato___Early_blight",
//     "Potato___Late_blight",
//     "Potato___healthy",
//     "Raspberry___healthy",
//     "Soybean___healthy",
//     "Squash___Powdery_mildew",
//     "Strawberry___Leaf_scorch",
//     "Strawberry___healthy",
//     "Tomato___Bacterial_spot",
//     "Tomato___Early_blight",
//     "Tomato___Late_blight",
//     "Tomato___Leaf_Mold",
//     "Tomato___Septoria_leaf_spot",
//     "Tomato___Spider_mites Two-spotted_spider_mite",
//     "Tomato___Target_Spot",
//     "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
//     "Tomato___Tomato_mosaic_virus",
//     "Tomato___healthy",
//   ];

//   console.log(prediction);

//   return (
//     <>
//       <div className="w-full h-full bg-[#c7f58c]">
//         <Navbar />
//         <div className=" flex flex-col items-center content-center">
//           <div className=" flex mt-20 w-full flex-col">
//             <div className=" flex w-full h-full justify-center">
//               <h1 className=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//                 Disease Detection
//               </h1>
//               <img
//                 className=" h-16 w-16"
//                 src="https://cdn-icons-png.freepik.com/256/5775/5775149.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid"
//               />
//             </div>
//             <div className=" flex flex-col">
//               <div className=" w-full p-4 flex flex-row justify-between">
//                 <div className="flex flex-col bg-[#73e864] ml-28 p-6 rounded-lg justify-center align-middle">
//                   <img
//                     className=" h-72 rounded w-full object-cover object-center mb-6"
//                     src={
//                       filepath
//                         ? filepath
//                         : "https://i.imghippo.com/files/qzm571724859258.webp"
//                     }
//                     alt="content"
//                   />

//                   <input
//                     className="block w-full  text-sm text-white border border-gray-300 cursor-pointer rounded-full bg-gradient-to-r from-green-800 via-green-600 to-green-900 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//                     aria-describedby="file_input_help"
//                     id="file_input"
//                     type="file"
//                     onChange={handleImageUpload}
//                   ></input>
//                   <h1 className="">Upload Your Crop Image Here</h1>
//                 </div>
//                 <div className=" flex justify-center align-middle items-center">
//                   {loading ? (
//                     <Loader />
//                   ) : (
//                     <div>

//                       <h1 className=" mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
//                         Crop Status: {plantstate[prediction]}

//                       </h1>
//                     </div>

//                   )}

//                 </div>
//                 <div className="bg-[#73e864] mr-28 p-6 rounded-lg">
//                   <AIGeneratedBox CropStatus={plantstate[prediction]} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Feedback />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default PlantDiseasePredictor;

import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Navbar from "./Navbar";
import ImageBox from "./ImageBox";
import Footer from "./Footer";
// import AIGeneratedBox from "./AiGeneratedBox";
import Loader from "./Loader";
import Feedback from "./Feedback";
import { Link } from "react-router-dom";

const PlantDiseasePredictor = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filepath, setFilepath] = useState(null);

  // Load saved prediction from localStorage on component mount
  useEffect(() => {
    const savedPrediction = localStorage.getItem("plantPrediction");
    const savedFilepath = localStorage.getItem("plantImage");

    if (savedPrediction) {
      setPrediction(JSON.parse(savedPrediction));
    }

    if (savedFilepath) {
      setFilepath(savedFilepath);
    }
  }, []);

  // Function to handle image upload and prediction
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(event.target.files[0]);
    setFilepath(fileURL);
    localStorage.setItem("plantImage", fileURL); // Save image filepath in localStorage

    setLoading(true);

    try {
      // Load the TensorFlow.js model from the local server
      const model = await tf.loadLayersModel(
        "https://sanskarjain04.github.io/Disease-Prediction/model.json"
      );

      // Read and preprocess the image
      const image = await loadImage(file);
      const processedImage = preprocessImage(image);

      // Make the prediction
      const predictions = model.predict(processedImage);
      const predictedClass = predictions.argMax(-1).dataSync()[0];

      setPrediction(predictedClass);
      localStorage.setItem("plantPrediction", JSON.stringify(predictedClass)); // Save prediction in localStorage
    } catch (error) {
      console.error("Error during prediction:", error);
      alert("An error occurred during prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => resolve(img);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const preprocessImage = (image) => {
    const tensor = tf.browser
      .fromPixels(image)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .expandDims();

    const offset = tf.scalar(127.5);
    const normalized = tensor.sub(offset).div(offset);
    return normalized;
  };

  const plantstate = [
    "Apple___Apple_scab",
    "Apple___Black_rot",
    "Apple___Cedar_apple_rust",
    "Apple___healthy",
    "Blueberry___healthy",
    "Cherry_(including_sour)___Powdery_mildew",
    "Cherry_(including_sour)___healthy",
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
    "Corn_(maize)___Common_rust_",
    "Corn_(maize)___Northern_Leaf_Blight",
    "Corn_(maize)___healthy",
    "Grape___Black_rot",
    "Grape___Esca_(Black_Measles)",
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    "Grape___healthy",
    "Orange___Haunglongbing_(Citrus_greening)",
    "Peach___Bacterial_spot",
    "Peach___healthy",
    "Pepper_bell___Bacterial_spot",
    "Pepper_bell___healthy",
    "Potato___Early_blight",
    "Potato___Late_blight",
    "Potato___healthy",
    "Raspberry___healthy",
    "Soybean___healthy",
    "Squash___Powdery_mildew",
    "Strawberry___Leaf_scorch",
    "Strawberry___healthy",
    "Tomato___Bacterial_spot",
    "Tomato___Early_blight",
    "Tomato___Late_blight",
    "Tomato___Leaf_Mold",
    "Tomato___Septoria_leaf_spot",
    "Tomato___Spider_mites Two-spotted_spider_mite",
    "Tomato___Target_Spot",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato___Tomato_mosaic_virus",
    "Tomato___healthy",
  ];

  return (
    <>
      <div className="w-full h-full bg-[#c7f58c]">
        <Navbar />

        <div className="flex flex-col items-center content-center mt-6">

          <div className="flex mt-10 w-full flex-col font-bold ">

            <div className="w-full flex justify-end font-bold text-4xl">
              <Link to="/Monitoring" className="text-right">
                Intrusion Monitoring
              </Link>
            </div>
            <div className="flex w-full h-full justify-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                Disease Detection
              </h1>
              <img
                className="ml-4 h-12 w-12 sm:h-16 sm:w-16"
                src="https://cdn-icons-png.freepik.com/256/5775/5775149.png"
                alt="Plant"
              />
            </div>
            {/* Responsive Flexbox for Small Screens */}
            <div className="w-full px-4 flex flex-col md:flex-row justify-between">
              {/* Image Section */}
              <div className="flex flex-col bg-[#73e864] p-4 rounded-lg items-center md:w-1/3">


                <img
                  className="h-48 sm:h-72 w-3/4 object-cover rounded mb-4"
                  src="https://i.imghippo.com/files/qzm571724859258.webp"
                  alt="content"
                />

                <input
                  className="block w-full text-sm text-white border border-gray-300 cursor-pointer rounded-full bg-gradient-to-r from-green-800 via-green-600 to-green-900 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                  type="file"
                  onChange={handleImageUpload}
                />
                <h1 className="text-center mt-2 text-gray-900">
                  Upload Your Crop Image Here
                </h1>
              </div>

              {/* Prediction Section */}
              <div className="flex flex-col items-center justify-center mt-6 md:mt-0 md:w-1/3">
                {loading ? (
                  <Loader />
                ) : (
                  <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                    Crop Status: {plantstate[prediction]}
                  </h1>
                )}
              </div>

              {/* AI Generated Box */}
              <div className="bg-[#73e864] p-4 mt-6 md:mt-0 rounded-lg md:w-1/3">
                {/* <AIGeneratedBox CropStatus={plantstate[prediction]} /> */}
              </div>
            </div>
          </div>
        </div>
        {/* Feedback and Footer */}
        <Feedback />
        <Footer />
      </div>
    </>
  );
};

export default PlantDiseasePredictor;
