"use client"

import { motion } from "framer-motion"

interface CardLoaderProps {
  count?: number
  className?: string
  height?: string
}

export default function CardLoader({ count = 1, className = "" }: CardLoaderProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {[...Array(count)].map((_, index) => (
        <div key={index} className="relative group">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/10 relative z-10 h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 flex items-center justify-between">
              <div className="h-6 w-32 rounded-md overflow-hidden">
                <motion.div
                  className="h-full w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"
                  animate={{ x: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
              <div className="bg-white/10 p-3 rounded-full">
                <div className="h-6 w-6 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"
                    animate={{ x: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 relative">
              {/* Text lines */}
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 rounded-md overflow-hidden" style={{ width: `${85 - i * 15}%` }}>
                    <motion.div
                      className="h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
                      animate={{ x: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: i * 0.1 }}
                    />
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-end mt-6">
                <div className="h-4 w-20 rounded-md overflow-hidden">
                  <motion.div
                    className="h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
                    animate={{ x: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Animated Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/10 to-orange-400/10 rounded-lg blur opacity-30 animate-pulse"></div>
        </div>
      ))}
    </div>
  )
}

