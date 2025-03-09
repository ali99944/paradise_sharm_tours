"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Upper Half */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-black flex items-end justify-center pb-4 sm:pb-8"
            initial={{ y: 0 }}
            exit={{ 
              y: "-100%",
              transition: { 
                duration: 0.8,
                ease: [0.87, 0, 0.13, 1]
              }
            }}
          >
          </motion.div>

          {/* Lower Half */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black  flex items-start justify-center pt-4 sm:pt-8"
            initial={{ y: 0 }}
            exit={{ 
              y: "100%",
              transition: { 
                duration: 0.8,
                ease: [0.87, 0, 0.13, 1]
              }
            }}
          >
          </motion.div>

          {/* Centered Logo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.4 }
            }}
          >
            <div className="relative">
              {/* Main Logo */}
              <div className="relative z-10 bg-black p-4 flex flex-col items-center">
                <img src={'/images/logo.png'} alt="logo" className="h-32 w-32 sm:h-32 sm:w-32" />
                {/* <p className="text-sm sm:text-2xl mt-2 text-orange-500 font-bold">Source Media Agency</p> */}
                <div className='flex space-x-2 justify-center items-center mt-8'>
 	<span className='sr-only'>Loading...</span>
  	<div className='h-4 w-4 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div className='h-4 w-4 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div className='h-4 w-4 bg-orange-500 rounded-full animate-bounce'></div>
</div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
