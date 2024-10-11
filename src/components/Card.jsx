import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className={`w-full md:w-auto ${ props.bg} shadow-lg rounded-lg overflow-hidden mt-4 `}>
    <div className="px-6 py-8 md:px-10 md:py-12">
      <h2 className="text-xl md:text-3xl font-bold mb-2 text-gray-800">
        {props.title}
      </h2>
      <p className="text-gray-600 font-bold mb-4">
         {props.desc}
      </p>
      <button className={`  ${props.btnbg} text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out`}>
          {props.btntext}

      </button>
    </div>
  </div>
  )
}

export default Card