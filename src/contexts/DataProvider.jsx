import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [events, setEvents] = useState([]);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/topics").then(res => res.json()),
      fetch("/api/tutorials").then(res => res.json()),
      fetch("/api/events").then(res => res.json()),
      fetch("/api/trends").then(res => res.json()),
    ])
      .then(([t1, t2, t3, t4]) => {
        setTopics(t1);
        setTutorials(t2);
        setEvents(t3);
        setTrends(t4);
        setLoading(false);
      })
      .catch(err => console.error("Data loading error:", err));
  }, []);

  return (
    <DataContext.Provider value={{ topics, tutorials, events, trends, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
