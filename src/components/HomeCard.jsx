import React from 'react'
import Card from './Card'

const HomeCard = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center p-4 gap-10'>
     <Card  title ="For Developer" desc="Browser our react jobs and your carrer today"  btntext="Browse jobs" bg="bg-gray-100"  btnbg= "bg-indigo-400"/>
     <Card  title ="For Employers" desc="List your job to find the perfect developer for the role"  btntext="Add jobs" bg='bg-indigo-100'  btnbg="bg-gray-400"/>
  </div>
  
  )
}

export default HomeCard