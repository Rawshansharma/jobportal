import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './components/Routers'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from './context/DataContext';

 
 const App = () => {
  return (
      <DataProvider>
      <Router>
      <Navbar/>
      <Routers/>
      <ToastContainer/>
      </Router>
      </DataProvider>
  )
}

export default App