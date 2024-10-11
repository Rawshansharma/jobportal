import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex justify-center mt-[10%]'>
         <div className=' md:w-1/2 w-full p-20'>
        <h1 className='text-6xl font-bold  text-gray-500 p-4 '>404 Not Found </h1>
        <p className='text-4xl text-gray-400 p-4'>This page doesn't exists</p>
        <Link to='/'>
        <button  className='bg-indigo-400 p-3 rounded-md ml-4 text-white hover:bg-indigo-500'>Go Back</button>
        </Link>
    </div>
    </div>
  )
}

export default Error