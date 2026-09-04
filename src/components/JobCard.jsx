const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
<div className="flex justify-between">      <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
      <button className=" bg-blue-600 text-white p-1 rounded-lg hover:bg-blue-700 transition">
        View Job
      </button></div>
      <p className="text-lg font-semibold text-blue-600 mb-3">
        {job.company_name}
      </p>

      <p className="text-gray-600 mb-2">Category: {job.category}</p>

      <p className="text-gray-600">📍 {job.candidate_required_location}</p>
    </div>
  );
};

export default JobCard;
// const JobCard = ({job}) => {
//   return (
//     <div key={job.id}>
//     <h3>{job.title}</h3>
//     <p>{job.category}</p>
//     <p>{job.candidate_required_location}</p>
//     <p>{job.job_type}</p>
//     <p>{job.company_name}</p>
//     <p>{job.description}</p>
//     <div>{job.tags.map((tag)=>(
//         <p>{tag}</p>
//     ))}</div>
//     </div>
//   )
// }

// export default JobCard
