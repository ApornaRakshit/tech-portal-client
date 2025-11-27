import { useEffect, useState } from "react";
import TutorialsSlider from "./TutorialsSlider";

const Tutorials = () => {
  const [cpTutorials, setCpTutorials] = useState([]);
  const [webdevTutorials, setWebdevTutorials] = useState([]);

  // Competitive Programming
  useEffect(() => {
    fetch("/data/tutorials.json")
      .then((res) => res.json())
      .then((data) => setCpTutorials(data));
  }, []);

  // Web Development
  useEffect(() => {
    fetch("/data/webdev_playlists.json")
      .then((res) => res.json())
      .then((data) => setWebdevTutorials(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">

      {/* ----------------------------- */}
      {/* Competitive Programming */}
      {/* ----------------------------- */}
      <h1 className="text-3xl font-bold mb-8">Competitive Programming</h1>
      <TutorialsSlider tutorials={cpTutorials} />

      {/* Space between sections */}
      <div className="my-14"></div>

      {/* ----------------------------- */}
      {/* Web Development */}
      {/* ----------------------------- */}
      <h1 className="text-3xl font-bold mb-8">Web Development</h1>
      <TutorialsSlider tutorials={webdevTutorials} />

    </div>
  );
};

export default Tutorials;
