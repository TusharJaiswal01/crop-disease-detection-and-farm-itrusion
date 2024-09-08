import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PlantDiseasePredictor from './Components/PlantDiseasePrediction.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ObjectDetection from './Components/ObjectDetection.jsx'
import Loader from './Components/Loader.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <PlantDiseasePredictor />
  },
  {
    path: "/Monitoring",
    element: <ObjectDetection />
  },

  {
    path: "/Loader",
    element: <Loader />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
