"use client"

import { motion } from "framer-motion"

interface CircularLoaderProps {
  size?: number
  color?: string
  thickness?: number
  speed?: number
  className?: string
}

export default function CircularLoader({
  size = 40,
  color = "#f97316", // orange-500
  thickness = 4,
  speed = 1.2,
  className = "",
}: CircularLoaderProps) {
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Background Circle */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255, 255, 255, 0.1)" strokeWidth={thickness} />
      </svg>

      {/* Animated Circle */}
      <svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.75}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </svg>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-md animate-pulse" />

      {/* Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-500 rounded-full"
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * size * 1.5],
            y: [0, (Math.random() - 0.5) * size * 1.5],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  )
}

