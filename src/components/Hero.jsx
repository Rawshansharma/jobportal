import React from 'react'

const Hero = ({ title = "Become a React Dev " ,subtitle = "find react job that fit your skill set" }) => {
  return (
      <div className="bg-gray-900 text-white h-[30vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-300">
           {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Hero