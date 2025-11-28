import { useEffect, useState } from "react";
import TutorialsSlider from "./TutorialsSlider";

const Tutorials = () => {
  const [cpTutorials, setCpTutorials] = useState([]);
  const [webdevTutorials, setWebdevTutorials] = useState([]);
  const [dsTutorials, setDsTutorials] = useState([]);
  const [aiTutorials, setAiTutorials] = useState([]);
  const [mlTutorials, setMlTutorials] = useState([]);
  const [cyberTutorials, setCyberTutorials] = useState([]);

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

  // Data Science
  useEffect(() => {
    fetch("/data/data_science_playlists.json")
      .then((res) => res.json())
      .then((data) => setDsTutorials(data));
  }, []);

  // Artificial Intelligence
  useEffect(() => {
    fetch("/data/ai_playlists.json")
      .then((res) => res.json())
      .then((data) => setAiTutorials(data));
  }, []);

  // Machine Learning
  useEffect(() => {
    fetch("/data/ml_playlists.json")
      .then((res) => res.json())
      .then((data) => setMlTutorials(data));
  }, []);

  // Cyber Security
  useEffect(() => {
    fetch("/data/cybersecurity_playlists.json")
      .then((res) => res.json())
      .then((data) => setCyberTutorials(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      {/* Competitive Programming */}
      <h1 className="text-3xl font-bold mb-8">Competitive Programming</h1>
      <TutorialsSlider tutorials={cpTutorials} />

      <div className="my-14" />

      {/* Web Development */}
      <h1 className="text-3xl font-bold mb-8">Web Development</h1>
      <TutorialsSlider tutorials={webdevTutorials} />

      <div className="my-14" />

      {/* Data Science */}
      <h1 className="text-3xl font-bold mb-8">Data Science</h1>
      <TutorialsSlider tutorials={dsTutorials} />

      <div className="my-14" />

      {/* Artificial Intelligence */}
      <h1 className="text-3xl font-bold mb-8">Artificial Intelligence</h1>
      <TutorialsSlider tutorials={aiTutorials} />

      <div className="my-14" />

      {/* Machine Learning */}
      <h1 className="text-3xl font-bold mb-8">Machine Learning</h1>
      <TutorialsSlider tutorials={mlTutorials} />

      <div className="my-14" />

      {/* Cyber Security */}
      <h1 className="text-3xl font-bold mb-8">Cyber Security</h1>
      <TutorialsSlider tutorials={cyberTutorials} />
    </div>
  );
};

export default Tutorials;
