"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimation, useInView, type Variant } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", duration = 0.5, className = "" }: FadeInProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const getDirectionVariants = () => {
    const variants: Record<string, Variant> = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    switch (direction) {
      case "up":
        variants.hidden = { ...variants.hidden, y: 20 }
        variants.visible = { ...variants.visible, y: 0 }
        break
      case "down":
        variants.hidden = { ...variants.hidden, y: -20 }
        variants.visible = { ...variants.visible, y: 0 }
        break
      case "left":
        variants.hidden = { ...variants.hidden, x: 20 }
        variants.visible = { ...variants.visible, x: 0 }
        break
      case "right":
        variants.hidden = { ...variants.hidden, x: -20 }
        variants.visible = { ...variants.visible, x: 0 }
        break
    }

    return variants
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getDirectionVariants()}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0.1,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode
  className?: string
  index?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export function ImageReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div className={`relative overflow-hidden ${className}`} ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 1.1 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function HoverScale({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}
