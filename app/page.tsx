"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, CuboidIcon as Cube } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, ImageReveal } from "@/components/animations"
import { ModelViewer } from "@/components/model-viewer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">PORTFOLIO</h1>
          <h2 className="text-2xl md:text-4xl mt-6 font-light">Arash Chenarizadeh</h2>
        </motion.div>
        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <ChevronDown size={32} />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            y: scrollY * 0.2,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%205-0NwxA2Ac1TZ1OUpJXVzJw17cZ4Rb2t.png"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="min-h-screen flex flex-col justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden">
        <FadeIn>
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi I&apos;m Arash Chenarizadeh,
                  <br />
                  3D Generalist
                  <br />
                  And Vfx Artist.
                </h1>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 text-right">
                <p className="text-gray-500">+98 9373397378</p>
                <p className="text-gray-500">Arashche5441@gmail.com</p>
              </div>
            </div>
            <div className="absolute right-12 bottom-12">
              <p className="text-4xl font-bold">PORTFOLIO</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* About */}
      <section className="min-h-screen p-6 md:p-12 lg:p-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn direction="right" delay={0.2}>
            <div>
              <h2 className="text-3xl font-light mb-8">About Me</h2>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                My work is mainly focused on 3D modeling, texturing and rendering For Vfx production and 3D animation.
                Also I&apos;m currently work as an freelancing compositor and color grade artist.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                my main skills includes problem solving, and have vast experience in team management.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">I am thrilled to answer to your next project</p>
            </div>
          </FadeIn>

          <div>
            <FadeIn direction="left" delay={0.4}>
              <div className="mb-12">
                <h2 className="text-3xl font-light mb-8">Main Software</h2>
                <p className="text-xl leading-relaxed text-gray-700">
                  Pixologic ZBrush, Autodesk Maya, Vray Renderer, Blender
                  <br />
                  Davinci resolve, The Foundry Nuke,
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.6}>
              <div className="mb-12">
                <h2 className="text-3xl font-light mb-8">Main Skills</h2>
                <p className="text-xl leading-relaxed text-gray-700">
                  Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, concept art, Color grade
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.8}>
              <div>
                <h2 className="text-3xl font-light mb-8">experience</h2>
                <StaggerContainer>
                  <StaggerItem>
                    <p className="text-xl leading-relaxed text-gray-700 mb-4">
                      working as junior 3d artist in hive animation studio (2018_2019)
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-xl leading-relaxed text-gray-700 mb-4">
                      Art director and technical Supervisor in Humoro studio
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-xl leading-relaxed text-gray-700 mb-4">concept artist in noir karen film 2022</p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-xl leading-relaxed text-gray-700 mb-4">
                      senior 3d generalist, compositor in EEFA VFX studio
                      <br />
                      2022_2023
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-xl leading-relaxed text-gray-700">
                      3D Supervisor in EEFA VFX studio
                      <br />
                      2023_2024
                    </p>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Concept Art */}
      <section className="min-h-screen p-6 md:p-12 lg:p-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-light mb-12">Concept Art</h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-12">
              working as an movie environment designer for Director Mostafa Kiayee on current series called one thousand
              and one nights (hezaro yek shaab)
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8">
            <ImageReveal>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%204-bZ6Z44csK0Uv5TkPqi8InAIoxHctfr.png"
                  alt="Concept art showing atmospheric scenes"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ImageReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageReveal>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%205-0NwxA2Ac1TZ1OUpJXVzJw17cZ4Rb2t.png"
                    alt="Landscape concept art"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
              <ImageReveal>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%207-v8SMPLtUjiuCgfKpFEgwTQhUFiMft2.png"
                    alt="Columned interior with figures"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageReveal>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%208-jI4HdIozCuJM2vQ6mVo8eu2KnKcXxS.png"
                    alt="Dungeon interior"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
              <ImageReveal>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%206-3oNiLTgAg42CqMGdgQJiQrzS6KTffL.png"
                    alt="Temple carved into cliff"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
            </div>

            <FadeIn>
              <div className="text-sm text-gray-500 mt-4">
                <p>
                  Sculpted in ZBrush, Retopologized and UVs done in Blender, Textured in substance, Rendered using
                  Cycles.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VFX Work */}
      <section className="min-h-screen p-6 md:p-12 lg:p-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-light mb-12">VFX Work</h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-16">
            {/* Before/After VFX */}
            <div>
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-medium mb-8">Before & After</h3>
              </FadeIn>
              <div className="grid grid-cols-1 gap-8">
                <ImageReveal>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2018-KWc4OMp17fiKrxCtO9irQnun06HoDE.png"
                      alt="Before and after VFX shots"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </ImageReveal>
                <FadeIn delay={0.3}>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-500">
                    <p>hezaro yek shaab Series</p>
                    <p>hezaro yek shaab Series</p>
                    <p>Tasian Series</p>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Environment Creation */}
            <div>
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-medium mb-8">Environment Creation</h3>
              </FadeIn>
              <ImageReveal>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2017-q9h6CT2QNPaPSsvZ97icVaWhAG0esx.png"
                    alt="Environment creation process"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
              <FadeIn delay={0.3}>
                <p className="text-lg leading-relaxed text-gray-700 mt-6">
                  Environment design in visual effects refers to the process of creating and shaping spaces, sets, and
                  digital environments in films, video games, or animated projects. This process involves using computer
                  graphics techniques to create realistic or imaginative locations with detailed and captivating
                  visuals.
                </p>
              </FadeIn>
            </div>

            {/* Asset Creation */}
            <div>
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-medium mb-8">Asset Creation</h3>
              </FadeIn>
              <ImageReveal>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2016-TaOmh7G9Rq9uheJY9hcVrLphAeF2H8.png"
                    alt="3D asset creation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
              <FadeIn delay={0.3}>
                <p className="text-lg leading-relaxed text-gray-700 mt-6">
                  Realistic modeling, texturing and shading in cycles composite in nuke for the hezaro yek shaab series.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Projects */}
      <section className="min-h-screen p-6 md:p-12 lg:p-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <FadeIn>
              <h2 className="text-4xl font-light mb-8">Animation</h2>
              <p className="text-xl leading-relaxed text-gray-700">
                Animation project I have been involved in as Asset creator Senior lookdev artist
              </p>
            </FadeIn>

            <div className="mt-8">
              <ImageReveal>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%209-Q5tcMdwRMRjcdRMNMz5bJXmiJAspk4.png"
                    alt="Animation project with floating islands"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
            </div>
          </div>

          <div className="mb-16">
            <FadeIn>
              <h2 className="text-4xl font-light mb-8">ANMOL (advertisement)</h2>
              <p className="text-xl leading-relaxed text-gray-700 mb-4">www.anmol.network</p>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                a no coding nft creation company made up of a diverse team of individuals, spanning from Pakistan,
                Germany, Poland, Canada, the US, and the UK.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                3d model (blender), sculpt (Zbrush), texture (substance), Rig & animate (maya), Render (eevee)
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageReveal>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2012-CiwjfYGbaMARrmZ2fwD11Dt0DS7Ehv.png"
                    alt="ANMOL concept art"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
              <ImageReveal>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2013-Zwz1FibT0XuYLs212YND4WJxSEwXmj.png"
                    alt="ANMOL 3D render"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
            </div>
          </div>

          <div className="mb-16">
            <FadeIn>
              <h2 className="text-4xl font-light mb-8">Animation Process</h2>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                Designing a animation pipeline as production manager for humoro studios was the main chalenge for this
                project also bringing the 2d element to a 3d work space was something that i personaly enjoyed and the
                customer was satisfied by the results.
              </p>
            </FadeIn>

            <ImageReveal>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2014-ZwTuVmn1XBydqhOVrYbFC7hXhkv7AE.png"
                  alt="Animation process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ImageReveal>
          </div>

          <div>
            <FadeIn>
              <h2 className="text-4xl font-light mb-8">Picolo (filimo series)</h2>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                Picolo is the most recent project I&apos;ve been working on this series made by Director Ali Ahmadi and
                Noir Karen Film production.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                3d model (blender), sculpt (Zbrush), texture (substance), Rig (maya), Render (Cycles & Vray Gpu)
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageReveal>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2010-4J9RJLnwQqgeqRd3uJj24ILVLSV5Wq.png"
                    alt="Picolo character development"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </ImageReveal>
              <div className="flex items-center">
                <FadeIn direction="left">
                  <div>
                    <p className="text-xl mb-4">Concept</p>
                    <p className="text-xl">Look Dev process</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character & Asset Development */}
      <section className="min-h-screen p-6 md:p-12 lg:p-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-light mb-12">Character & Asset Development</h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12">
            <ImageReveal>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2011-ElHc5aQi5OLM2fzQlidVr6hLqdUR9D.png"
                  alt="Character and asset development"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ImageReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn direction="right">
                <div>
                  <h3 className="text-2xl font-light mb-4">3D modeled and rendered variations</h3>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    after multiple edits rendered by (cycles)
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left">
                <div>
                  <h3 className="text-2xl font-light mb-4">Asset Creation and animation</h3>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Plane shaded look modeled and textured (blender)
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn direction="right">
                <div>
                  <h3 className="text-2xl font-light mb-4">3D Rig for body and advanced facial animations</h3>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">vehicle Rig and animation</p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    final composited look (rendered Cycles/ composition nuke)
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left">
                <div>
                  <h3 className="text-2xl font-light mb-4">Character development</h3>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">Character manual rig (maya)</p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">Character final look (rendered by vray)</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Metaverse Game */}
      <section className="min-h-screen p-6 md:p-12 lg:p-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-light mb-8">Histopia (metaverse game)</h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-4">www.Histopia.io</p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Histopia is a blockchain-based MMORPG (Massively Multiplayer Online Role-Playing Game) Metaverse with a
              vast set of gameplay cores and user interactions. I was operating as animation supervisor in this project
            </p>
          </FadeIn>

          <ImageReveal>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%2015-5aN9hKVMRMiEzVVpr5u3muteHG0CBY.png"
                alt="Histopia metaverse game"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </ImageReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="min-h-screen p-6 md:p-12 lg:p-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-light mb-12">Let&apos;s work together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your
                  vision.
                </p>
                <p className="text-xl leading-relaxed text-gray-700">
                  Feel free to contact me for any project inquiries.
                </p>
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <p className="text-xl text-gray-700">Arashche5441@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Phone</h3>
                  <p className="text-xl text-gray-700">+98 9373397378</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3D Model Showcase */}
      <section className="min-h-screen p-6 md:p-12 lg:p-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-light mb-4">Interactive 3D Models</h2>
                <p className="text-xl leading-relaxed text-gray-700 max-w-2xl">
                  Explore my 3D work in an interactive viewer. Rotate, zoom, and examine the models from any angle.
                </p>
              </div>
              <Link
                href="/3d-models"
                className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Cube className="mr-2 h-5 w-5" />
                View All Models
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-2xl font-medium mb-6">Picolo Character</h3>
                <ModelViewer modelType="picolo" height="400px" />
                <p className="mt-4 text-gray-700">
                  Character model from the Picolo series, created in ZBrush and Blender, textured in Substance Painter.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-2xl font-medium mb-6">Environment Asset</h3>
                <ModelViewer modelType="environment" height="400px" environmentPreset="sunset" />
                <p className="mt-4 text-gray-700">
                  Environment asset from the hezaro yek shaab series, modeled in Blender and rendered in Cycles.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 md:p-12 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.p className="text-xl font-bold" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            PORTFOLIO
          </motion.p>
          <div className="mt-4 md:mt-0">
            <p>+98 9373397378</p>
            <p>Arashche5441@gmail.com</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
