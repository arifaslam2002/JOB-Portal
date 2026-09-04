import { useLocation, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { job } = location.state || {};

  if (!job) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4">
          Job details not found.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          {job.title}
        </h1>

        <p className="text-xl font-semibold text-blue-600 mb-4">
          {job.company_name}
        </p>

        <p className="text-gray-600 mb-2">
          Category: {job.category}
        </p>

        <p className="text-gray-600 mb-2">
          📍 {job.candidate_required_location}
        </p>

        <p className="text-gray-600 mb-6">
          Job Type: {job.job_type}
        </p>

        <h2 className="text-xl font-bold mb-3">
          Job Description
        </h2>

        <div
          className="text-gray-600 mb-6"
          dangerouslySetInnerHTML={{
            __html: job.description,
          }}
        />

        <h2 className="text-xl font-bold mb-3">
          Skills / Tags
        </h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {job.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
          >
            Back
          </button>

          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Apply Now
          </a>

        </div>

      </div>

    </div>
  );
};

export default JobDetails;