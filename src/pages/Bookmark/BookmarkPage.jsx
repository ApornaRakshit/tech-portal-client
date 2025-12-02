import { useContext } from "react";
import { BookmarkContext } from "../../contexts/BookmarkContext";
import TutorialCard from "../../components/TutorialCard";

const BookmarkPage = () => {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Bookmarked Tutorials</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-600">No bookmarks yet.</p>
      ) : (
        <div>
          <p className="mb-4 text-gray-500">
            Showing {bookmarks.length} bookmarked tutorials
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((tutorial, idx) => (
              <TutorialCard key={idx} tutorial={tutorial} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookmarkPage;
