const SearchBar = ({ searchData, setSearchData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchData);
  };

  return (
    <div className="bg-amber-50 rounded-2xl m-7 border-4 border-fuchsia-900 p-6">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Land To Your Dream Job
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchData.search}
          onChange={(e) =>
            setSearchData({
              ...searchData,
              search: e.target.value,
            })
          }
          className="flex-1 border border-gray-300 rounded-xl p-3 outline-none"
        />

        <select
          value={searchData.category}
          onChange={(e) =>
            setSearchData({
              ...searchData,
              category: e.target.value,
            })
          }
          className="flex-1 border border-gray-300 rounded-xl p-3 outline-none"
        >
          <option value="">All Categories</option>
          <option value="software">Software Development</option>
          <option value="Information Technology">Information Technology</option>
          <option value="marketing">Marketing</option>
          <option value="Customer Service">Customer Service</option>
          <option value="sales">Sales</option>
          <option value="writing">Writing</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          value={searchData.location}
          onChange={(e) =>
            setSearchData({
              ...searchData,
              location: e.target.value,
            })
          }
          className="flex-1 border border-gray-300 rounded-xl p-3 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
