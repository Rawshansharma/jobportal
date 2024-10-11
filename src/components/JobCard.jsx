import React, { useState } from 'react'

const JobCard = ({job}) => {
    const [showdesc , setShowdesc] = useState(false);
    let description = job.description;
    if(!showdesc) {
        description =  description.substring(0,190) + "...."
    }
  return (
    <div className='flex flex-col md:w-1/3 p-5 w-full shadow-lg rounded-lg m-4 bg-gray-100'>
    <p className='m-2'>{job.type}</p>
     <h1 className='text-2xl m-2 font-bold'>{job.title}</h1>
     <p className='m-2  text-gray-400'>{description}</p>
     <button className='text-start m-2 text-indigo-500' onClick={() => setShowdesc(!showdesc)}>
        {showdesc ? "Less" : "More"}
     </button>
    <div className='flex justify-between'>
       <div>
       <p className='text-green-500 m-2'>{job.salary}</p>
       <p className='text-gray-500 m-2'>{job.location}</p>
       </div>
    
    <a href={`/job/${job.id}`} className='px-4 py-4 mt-4 bg-indigo-400 rounded-md hover:bg-gray-400 hover:text-white text-center text-white font-bold'>Read more</a>
     
    </div>
     
   </div>
  )
}

export default JobCard
