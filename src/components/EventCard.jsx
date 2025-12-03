import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { BookmarkContext } from "../contexts/BookmarkContext";

const EventCard = ({ event }) => {
  const { toggleBookmark, isBookmarked } = useContext(BookmarkContext);

  const bookmarked = isBookmarked(event._id);

  return (
    <div className="relative bg-white shadow-md rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

      {/* Bookmark Icon */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleBookmark(event, "event");
        }}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        {bookmarked ? (
          <FaBookmark size={20} className="text-purple-600" />
        ) : (
          <FiBookmark size={20} className="text-gray-700" />
        )}
      </button>

      {/* Title */}
      <h2 className="text-xl font-bold">{event.title}</h2>

      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>

      <p className="text-sm mt-2 text-gray-700">{event.description}</p>

      <a
        href={`/events/${event._id}`}
        className="mt-4 inline-block text-blue-600 font-semibold"
      >
        View Details →
      </a>
    </div>
  );
};

export default EventCard;
