import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/saved" element={<SavedJobs />} />
    </Routes>
  );
};

export default App;