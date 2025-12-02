import { useEffect, useState } from "react";
import TutorialCard from "../../components/TutorialCard";

const MyCourses = () => {
  const [allTutorials, setAllTutorials] = useState([]);
  const [filteredTutorials, setFilteredTutorials] = useState([]);

  const [loading, setLoading] = useState(true);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("newest");

  // View more button
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("/data/tutorials.json").then((res) => res.json()),
      fetch("/data/webdev_playlists.json").then((res) => res.json()),
      fetch("/data/data_science_playlists.json").then((res) => res.json()),
      fetch("/data/ai_playlists.json").then((res) => res.json()),
      fetch("/data/ml_playlists.json").then((res) => res.json()),
      fetch("/data/cybersecurity_playlists.json").then((res) => res.json()),
    ])
      .then(([cp, web, ds, ai, ml, cyber]) => {
        const merged = [
          ...cp.map((i) => ({ ...i, category: "cp" })),
          ...web.map((i) => ({ ...i, category: "web" })),
          ...ds.map((i) => ({ ...i, category: "ds" })),
          ...ai.map((i) => ({ ...i, category: "ai" })),
          ...ml.map((i) => ({ ...i, category: "ml" })),
          ...cyber.map((i) => ({ ...i, category: "cyber" })),
        ];

        setAllTutorials(merged);
        setFilteredTutorials(merged);
      })
      .finally(() => setLoading(false));
  }, []);

  // Apply Search + Category + Sorting
  useEffect(() => {
    let updated = [...allTutorials];

    // 🔍 Search
    if (searchQuery.trim() !== "") {
      updated = updated.filter((t) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 🏷 Category filter
    if (selectedCategory !== "all") {
      updated = updated.filter((t) => t.category === selectedCategory);
    }

    // 🔄 Sorting
    if (sortOption === "newest") {
      updated = updated.reverse(); // simple trick since JSON is static
    } else if (sortOption === "atoz") {
      updated = updated.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "ztoa") {
      updated = updated.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredTutorials(updated);
  }, [searchQuery, selectedCategory, sortOption, allTutorials]);

  if (loading) {
    return <p className="px-5 py-5">Loading courses...</p>;
  }

  const visibleTutorials = showMore
    ? filteredTutorials
    : filteredTutorials.slice(0, 6);

  return (
    <div className="px-5 py-5">
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>
      <p className="text-gray-500 mb-6">Your tutorials library.</p>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Search tutorials…"
          className="input input-bordered w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category */}
        <select
          className="select select-bordered w-full md:w-1/4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="cp">Competitive Programming</option>
          <option value="web">Web Development</option>
          <option value="ds">Data Science</option>
          <option value="ai">Artificial Intelligence</option>
          <option value="ml">Machine Learning</option>
          <option value="cyber">Cyber Security</option>
        </select>

        {/* Sort */}
        <select
          className="select select-bordered w-full md:w-1/4"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="atoz">A → Z</option>
          <option value="ztoa">Z → A</option>
        </select>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTutorials.map((tutorial, index) => (
          <TutorialCard key={index} tutorial={tutorial} />
        ))}
      </div>

      {/* VIEW MORE / SHOW LESS */}
      {filteredTutorials.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90"
          >
            {showMore ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
