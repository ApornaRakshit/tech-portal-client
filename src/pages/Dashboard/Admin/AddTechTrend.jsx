import React, { useState } from "react";

const AddTechTrend = () => {
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trend = { title, source, link, desc };

    const res = await fetch("http://localhost:5000/trends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trend),
    });

    const data = await res.json();
    if (data.success) {
      alert("Trend added!");

      setTitle("");
      setSource("");
      setLink("");
      setDesc("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Add Tech Trend</h1>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          placeholder="Source (Website Name)"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          placeholder="Article Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="input input-bordered w-full"
          required
        />

        <textarea
          placeholder="Short Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="textarea textarea-bordered w-full h-32"
          required
        />

        <button
          type="submit"
          className="btn w-full bg-purple-600 text-white"
        >
          Add Trend
        </button>
      </form>
    </div>
  );
};

export default AddTechTrend;
