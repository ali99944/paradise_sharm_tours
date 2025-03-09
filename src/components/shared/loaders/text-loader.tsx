"use client"

import { motion } from "framer-motion"

interface TextLoaderProps {
  lines?: number
  width?: string[]
  className?: string
}

export default function TextLoader({
  lines = 4,
  width = ["100%", "90%", "95%", "80%"],
  className = "",
}: TextLoaderProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {[...Array(lines)].map((_, index) => (
        <div key={index} className="h-4 rounded-md overflow-hidden" style={{ width: width[index % width.length] }}>
          <motion.div
            className="h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: index * 0.1 }}
          />
        </div>
      ))}
    </div>
  )
}

