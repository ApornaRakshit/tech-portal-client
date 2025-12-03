/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { BookmarkContext } from "../contexts/BookmarkContext";

const TutorialCard = ({ tutorial, clickable = true }) => {
  const { toggleBookmark, isBookmarked } = useContext(BookmarkContext);

  const bookmarked = isBookmarked(tutorial.link);

  // FIX: Correct the image path
  const imageUrl = tutorial.thumbnail.startsWith("/")
    ? tutorial.thumbnail
    : `/tutorials/${tutorial.thumbnail}`;

  // Wrapper element — <a> when clickable, otherwise <div>
  const Wrapper = clickable ? "a" : "div";

  return (
    <Wrapper
      href={clickable ? tutorial.link : undefined}
      target={clickable ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block"
    >
      {/* Card Container */}
      <div
        className="
          relative 
          hover:bg-gradient-to-r from-blue-100 to-purple-100 
          rounded-xl shadow-md overflow-hidden 
          transform transition-all duration-300 
          hover:scale-105 hover:shadow-xl 
          h-full flex flex-col
        "
      >
        {/*  Bookmark Icon */}
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent opening the link
            toggleBookmark(tutorial);
          }}
          className="
            absolute top-3 right-3 z-20 
            bg-white p-2 rounded-full shadow 
            hover:bg-gray-100 transition
          "
        >
          {bookmarked ? (
            <FaBookmark className="text-purple-600" size={20} />
          ) : (
            <FiBookmark className="text-gray-700" size={20} />
          )}
        </button>

        {/* Thumbnail */}
        <div className="w-full h-40 overflow-hidden">
          <img
            src={imageUrl}
            alt={tutorial.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between p-4 flex-grow">
          <div>
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">
              {tutorial.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-1">
              {tutorial.channel}
            </p>
          </div>

          {/* View Button */}
          <button
            className="
              mt-4 text-black py-2 px-4 
              rounded-lg font-semibold 
              btn-outline w-full
              hover:bg-gradient-to-r from-blue-300 to-purple-300
            "
          >
            View
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default TutorialCard;
