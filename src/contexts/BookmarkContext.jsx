import { createContext, useEffect, useState } from "react";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save automatically
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  // ⭐ Toggle bookmark for both events & tutorials
  const toggleBookmark = (item, type = "tutorial") => {
    const id = item._id || item.link; // events: _id, tutorials: link

    const exists = bookmarks.some((b) => b.id === id);

    if (exists) {
      setBookmarks((prev) => prev.filter((b) => b.id !== id));
    } else {
      setBookmarks((prev) => [
        ...prev,
        {
          id, // unique key
          type,
          data: item,
        },
      ]);
    }
  };

  // ⭐ Check if bookmarked
  const isBookmarked = (id) => bookmarks.some((b) => b.id === id);

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, toggleBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
