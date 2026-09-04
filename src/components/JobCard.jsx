import { useNavigate } from "react-router-dom";

const JobCard = ({ job, onSave, isSaved }) => {
  const navigate = useNavigate();

  const handleViewJob = () => {
    navigate(`/jobs/${job.id}`, {
      state: { job },
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>

      <p className="text-lg font-semibold text-blue-600 mb-3">
        {job.company_name}
      </p>

      <p className="text-gray-600 mb-2">Category: {job.category}</p>

      <p className="text-gray-600 mb-5">📍 {job.candidate_required_location}</p>

      <div className="flex justify-between" ><button
        onClick={handleViewJob}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Job
      </button>
      <button
        onClick={() => onSave(job)}
        className="bg-yellow-500 text-white px-5 py-2 rounded-lg"
      >
        {isSaved ? "⭐ Saved" : "☆ Save Job"}
      </button></div>
    </div>
  );
};

export default JobCard;
