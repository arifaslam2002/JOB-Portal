import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between h-15 bg-sky-500 rounded-b-full ">
      <div className="ml-10 mt-1.5">
        <h2 className="text-4xl font-bold">JobPortal</h2>
      </div>
      <div className="mr-10 mt-1.5 flex gap-2.5 pb-1">
        <Link
          to="/"
          className="text-xl font-bold border rounded-3xl bg-cyan-800 text-white p-2.5"
        >
          Home
        </Link>

        <Link
          to="/saved"
          className="text-xl font-bold border rounded-3xl bg-cyan-800 text-white p-2.5"
        >
          Saved ⭐
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
