import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchData, setSearchData] = useState({
    search: "",
    category: "",
    location: "",
  });
  const [sort, setSort] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
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
  const filteredJobs = jobs.filter((job) => {
    const searchMatch = job.title
      .toLowerCase()
      .includes(searchData.search.toLowerCase());

    const categoryMatch = job.category
      .toLowerCase()
      .includes(searchData.category.toLowerCase());

    const locationMatch = job.candidate_required_location
      .toLowerCase()
      .includes(searchData.location.toLowerCase());

    return searchMatch && categoryMatch && locationMatch;
  });
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sort === "az") {
      return a.title.localeCompare(b.title);
    }

    if (sort === "za") {
      return b.title.localeCompare(a.title);
    }

    return 0;
  });
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(saved);
  }, []);
  const handleSaveJob = (job) => {
    const alreadySaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    if (alreadySaved) {
      const updatedJobs = savedJobs.filter(
        (savedJob) => savedJob.id !== job.id,
      );

      setSavedJobs(updatedJobs);
      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
    } else {
      const updatedJobs = [...savedJobs, job];

      setSavedJobs(updatedJobs);
      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
    }
  };
  if (loading) {
    return <h2 className="text-center text-2xl mt-10">Loading jobs...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">{error}</h2>;
  }
  return (
    <>
      <Navbar />
      <SearchBar searchData={searchData} setSearchData={setSearchData} />
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border border-gray-300 rounded-xl p-3 m-6"
      >
        <option value="">Sort Jobs</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {sortedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onSave={handleSaveJob}
            isSaved={savedJobs.some((savedJob) => savedJob.id === job.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
