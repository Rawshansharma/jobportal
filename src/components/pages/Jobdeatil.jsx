import { useContext, useEffect} from 'react'
import { Link, useParams,useNavigate  } from 'react-router-dom'
import Loader from '../Loader';
import { toast } from 'react-toastify';
import DataContext from '../../context/DataContext';
 
const Jobdeatil = () => {
  const {fetchJobById ,  jobDetail, loading} = useContext(DataContext)
  const navigate = useNavigate();
  const {id}  = useParams(); 
   
  useEffect(() => {
       fetchJobById(id);
   },[fetchJobById, id])
  
  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this job listing ?')
    if(!confirm) return;
     deletejob(id)
     toast.success("Job Deleted successful")
     navigate('/jobs')
  }

  const deletejob = async(id) => {
      await fetch(`/api/jobs/${id}` , {
        method:'DELETE'
      })
  }
    
     const {description, location,salary,title,type } = jobDetail;
   return (
     <div className='flex justify-center p-4 '>
         {
          loading ? (<Loader/>) : (
            <div className='md:w-full w-full sm:w-full md:flex justify-center'>
               
               <div className='md:w-1/2 '>
               <Link className='p-4 text-gray-500 text-[15px]  mb-10' to ='/jobs'>{`<-- Go Back to jobs`}</Link>
                  <p className='text-2xl text-gray-500 p-4'>{type}</p>
                  <h1 className='text-2xl text-gray-600 p-4 font-bold'>{title}</h1>
                  <p className='text-gray-500 text-[25px] p-4'>{description}</p>
                  <p className='text-green-400 p-4 '> Salary : {salary}</p>
                  <p className='italic text-gray-500 p-4 '>{location}</p>
                  <button className='md:w-1/3 w-full mt-5 items-center bg-indigo-400 p-3 mb-10 text-white rounded-md hover:bg-indigo-500'>Apply Now</button>
               </div>
               <div className='bg-gray-100 rounded-md md:w-1/4 p-5 m-2'>
                <h1 className='text-gray-500 text-2xl p-2 font-bold'>Company Details </h1>
                <h1 className='text-[25px] text-gray-500 p-1 mt-4'>{jobDetail.company.name}</h1>
                <p className='text-gray-400 p-2 '>{jobDetail.company.description}</p>
                <p className='text-gray-500 p-2'>{jobDetail.company.contactEmail}</p>
                <p className='text-gray-500 p-2 mb-2'>{jobDetail.company.contactPhone}</p>
                  <Link  to={`/jobs/edit/${jobDetail.id}`} className='text-center  p-3 bg-indigo-400 rounded-md hover:bg-indigo-500 text-white'>
                     Edit job
                 </Link>
                 <button onClick={() => handleDelete(jobDetail.id)} className=' w-full p-3 bg-red-400 rounded-md hover:bg-red-500 text-white mt-5'>
                     delete job
                  </button> 
               </div>
            </div>
          )
         }
     </div>
  )
}

export default Jobdeatil