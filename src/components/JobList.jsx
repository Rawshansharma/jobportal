import React, { useContext, useEffect, useState } from 'react'
import JobCard from './JobCard'
import Loader from './Loader';
import DataContext from '../context/DataContext';


const JobList = ({isHome = false}) => {
      const {jobs,loading} = useContext(DataContext)
        const resentjobs = isHome ? jobs.slice(0,4) : jobs;
   return (
    <div className='flex flex-wrap  justify-center p-2'>
    <h1 className="w-full text-center font-bold text-2xl md:text-3xl mt-6 text-blue-500 ">Browse Jobs</h1>
    {
      loading ? (<Loader/>) : (
        <>
         {
        resentjobs.map((job) => (
            <JobCard key={job.id} job={job}/>
         )) }
        </>
      )
    }
  
  </div>
  
  )
}

export default JobList