"use client"

import { useEffect } from "react"

import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress,
  Html,
  ContactShadows,
} from "@react-three/drei"
import { motion } from "framer-motion"
import { Loader2, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react"

function ModelLoader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-800" />
        <p className="mt-2 text-sm font-medium text-gray-800">{Math.round(progress)}% loaded</p>
      </div>
    </Html>
  )
}

function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const ref = useRef()
  const { scene } = useGLTF(url)

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone()

  // Auto-rotate the model
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003
    }
  })

  return <primitive ref={ref} object={clonedScene} scale={scale} position={position} rotation={rotation} />
}

function DuckModel({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return <Model url="/assets/3d/duck.glb" scale={scale} position={position} rotation={rotation} />
}

function CharacterModel({ scale = 2, position = [0, -1, 0], rotation = [0, 0, 0] }) {
  // This is a placeholder - in a real implementation, you would use the actual model URL
  return <Model url="/assets/3d/duck.glb" scale={scale} position={position} rotation={rotation} />
}

function PicoloModel({ scale = 2, position = [0, -1, 0], rotation = [0, 0, 0] }) {
  // This is a placeholder - in a real implementation, you would use the actual model URL
  return <Model url="/assets/3d/duck.glb" scale={scale} position={position} rotation={rotation} />
}

function EnvironmentModel({ scale = 0.5, position = [0, -1, 0], rotation = [0, 0, 0] }) {
  // This is a placeholder - in a real implementation, you would use the actual model URL
  return <Model url="/assets/3d/duck.glb" scale={scale} position={position} rotation={rotation} />
}

function CameraController() {
  const { camera, gl } = useThree()
  useFrame(() => {
    camera.updateProjectionMatrix()
  })
  return <OrbitControls enableDamping dampingFactor={0.1} rotateSpeed={0.5} args={[camera, gl.domElement]} />
}

export function ModelViewer({
  modelType = "duck",
  height = "500px",
  environmentPreset = "city",
  showControls = true,
  autoRotate = true,
}) {
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5))
  }

  const handleReset = () => {
    setZoom(1)
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen()
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("msfullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
      document.removeEventListener("msfullscreenchange", handleFullscreenChange)
    }
  }, [])

  const renderModel = () => {
    switch (modelType) {
      case "character":
        return <CharacterModel scale={2 * zoom} />
      case "picolo":
        return <PicoloModel scale={2 * zoom} />
      case "environment":
        return <EnvironmentModel scale={0.5 * zoom} />
      case "duck":
      default:
        return <DuckModel scale={2 * zoom} />
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-lg overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg"
      style={{ height }}
    >
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Suspense fallback={<ModelLoader />}>
          {renderModel()}
          <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
          <Environment preset={environmentPreset} />
        </Suspense>
        <CameraController />
      </Canvas>

      {showControls && (
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
            onClick={handleZoomIn}
            aria-label="Zoom in"
          >
            <ZoomIn size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
            onClick={handleZoomOut}
            aria-label="Zoom out"
          >
            <ZoomOut size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
            onClick={handleReset}
            aria-label="Reset view"
          >
            <RotateCcw size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
          >
            <Maximize2 size={18} />
          </motion.button>
        </div>
      )}
    </div>
  )
}
