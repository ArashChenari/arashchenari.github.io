"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations"
import { ModelViewer } from "@/components/model-viewer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ModelsPage() {
  const [selectedModel, setSelectedModel] = useState("picolo")
  const [selectedEnvironment, setSelectedEnvironment] = useState("city")

  const models = [
    { id: "picolo", name: "Picolo Character", description: "Main character from the Picolo series" },
    { id: "character", name: "Animated Character", description: "Character with facial animation rig" },
    { id: "environment", name: "Environment Asset", description: "3D environment from hezaro yek shaab" },
    { id: "duck", name: "Sample Duck", description: "Sample 3D model for testing" },
  ]

  const environments = [
    { id: "city", name: "City" },
    { id: "studio", name: "Studio" },
    { id: "sunset", name: "Sunset" },
    { id: "dawn", name: "Dawn" },
    { id: "night", name: "Night" },
    { id: "warehouse", name: "Warehouse" },
    { id: "forest", name: "Forest" },
    { id: "park", name: "Park" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <FadeIn>
          <Link href="/" className="inline-flex items-center mb-8 text-gray-700 hover:text-gray-900 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Interactive 3D Models</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Explore my 3D models in an interactive viewer. Rotate, zoom, and examine the models from any angle to
            appreciate the details of the work.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <FadeIn>
              <ModelViewer
                modelType={selectedModel}
                height="600px"
                environmentPreset={selectedEnvironment}
                showControls={true}
              />
            </FadeIn>
          </div>

          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-2xl font-medium mb-4">Select Model</h2>
                <div className="space-y-2">
                  {models.map((model) => (
                    <motion.button
                      key={model.id}
                      onClick={() => setSelectedModel(model.id)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedModel === model.id
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="font-medium">{model.name}</h3>
                      <p className={`text-sm ${selectedModel === model.id ? "text-gray-300" : "text-gray-600"}`}>
                        {model.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <h2 className="text-2xl font-medium mb-4">Environment</h2>
                <div className="grid grid-cols-2 gap-2">
                  {environments.map((env) => (
                    <motion.button
                      key={env.id}
                      onClick={() => setSelectedEnvironment(env.id)}
                      className={`p-3 rounded-lg text-center transition-colors ${
                        selectedEnvironment === env.id
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {env.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div>
                <h2 className="text-2xl font-medium mb-4">Instructions</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Click and drag to rotate the model</li>
                  <li>Scroll to zoom in and out</li>
                  <li>Right-click and drag to pan</li>
                  <li>Use the controls in the bottom right to adjust the view</li>
                  <li>Click the fullscreen button for an immersive experience</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn>
          <div className="bg-gray-100 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-medium mb-4">About the 3D Models</h2>
            <p className="text-gray-700 mb-4">
              These 3D models represent a selection of my work in character design, environment creation, and asset
              development. Each model is created with attention to detail, optimized topology, and carefully crafted
              textures.
            </p>
            <p className="text-gray-700 mb-4">
              The workflow typically involves concept design, modeling in ZBrush or Blender, retopology for
              optimization, UV unwrapping, texturing in Substance Painter, rigging when necessary, and final rendering
              in Cycles or V-Ray.
            </p>
            <p className="text-gray-700">
              For custom 3D model commissions or to discuss your project needs, please contact me at{" "}
              <a href="mailto:Arashche5441@gmail.com" className="text-gray-900 font-medium hover:underline">
                Arashche5441@gmail.com
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
