import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Check for WebGL support
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch (e) {
    return false
  }
}

const WebGLCheck = () => {
  const [webGLAvailable, setWebGLAvailable] = useState(true)
  
  useEffect(() => {
    setWebGLAvailable(isWebGLAvailable())
    
    // Handle cases where WebGL might be lost
    const handleWebGLContextLost = (event) => {
      console.error('WebGL context lost', event)
      setWebGLAvailable(false)
      event.preventDefault()
    }
    
    window.addEventListener('webglcontextlost', handleWebGLContextLost, false)
    
    return () => {
      window.removeEventListener('webglcontextlost', handleWebGLContextLost, false)
    }
  }, [])
  
  if (!webGLAvailable) {
    return (
      <div className="webgl-error">
        <h2>WebGL Not Supported</h2>
        <p>Your device or browser doesn't support WebGL, which is required for the 3D content in this portfolio.</p>
        <p>Please try opening this page in a modern browser like Chrome, Firefox, or Edge.</p>
        <p>If you're on a mobile device, try enabling "Desktop Site" in your browser settings.</p>
      </div>
    )
  }
  
  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<WebGLCheck />)
