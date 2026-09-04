import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("https://remotive.com/api/remote-jobs");

      setJobs(response.data.jobs);
    } catch (error) {
      console.log(error);
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };
  console.log(jobs);
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return <h2 className="text-center text-2xl mt-10">Loading jobs...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">{error}</h2>;
  }
  return (
    <>
      <Navbar />
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Home;
