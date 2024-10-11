import React from 'react'
import Hero from '../Hero'
import HomeCard from '../HomeCard'
import JobList from '../JobList'
import ViewAllJobs from '../ViewAllJobs'

const Home = () => {
  return (
    <div>  
      <Hero/>
      <HomeCard/>
      <JobList isHome ={true}/>
      <ViewAllJobs/>
    </div>
  )
}

export default Home