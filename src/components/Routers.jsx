import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import AddJob from './pages/AddJob'
import JobList from './JobList'
import Home from './pages/Home'
import Resgister from './pages/Register'
import Jobdeatil from './pages/Jobdeatil'
import Error from './pages/Error'
import EditJob from './pages/EditJob'

const Routers = () => {
  return (
     <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/jobs' element={<JobList/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/addjobs' element={<AddJob/>} />
        <Route path='/signup' element = {<Resgister/>}/>
        <Route path='/job/:id' element={<Jobdeatil/>}/>
        <Route path='/jobs/edit/:id' element={<EditJob/>}/>
        <Route path='*' element={<Error/>}/>
     </Routes>
  )
}

export default Routers