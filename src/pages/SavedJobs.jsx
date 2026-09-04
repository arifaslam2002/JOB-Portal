import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(saved);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-6">
        Saved Jobs ⭐
      </h1>

      {savedJobs.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">
          No saved jobs yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {savedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;