/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
  
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobDetail, setJobDetail] = useState([]);
 
  // Fetch jobs data from an external API (replace '/api/jobs' with your actual endpoint)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/jobs");
        const result = await response.json();
        setJobs(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fetch job by ID
  const fetchJobById = async (id) => {
    try {
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();
      setJobDetail(data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching job data:", err);
      setLoading(false);
    }
  };

  

  return (
    <DataContext.Provider
      value={{ jobDetail, jobs, loading, fetchJobById}}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
