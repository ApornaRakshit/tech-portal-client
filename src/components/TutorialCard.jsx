/* eslint-disable react/prop-types */
const TutorialCard = ({ tutorial, clickable = true }) => {
  // Fix image URL
  const imageUrl = tutorial.thumbnail.startsWith("/")
    ? tutorial.thumbnail
    : `/tutorials/${tutorial.thumbnail}`;

  const Wrapper = clickable ? "a" : "div";

  return (
    <Wrapper
      href={tutorial.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="hover:bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-md overflow-hidden 
        transform transition-all duration-300 
        hover:scale-105 hover:shadow-xl 
        h-full flex flex-col"
      >
        {/* Thumbnail */}
        <div className="font-semibold w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={tutorial.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-4 flex-grow">
          <div>
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">
              {tutorial.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-1">
              {tutorial.channel}
            </p>
          </div>

          {/* Button */}
          <button
            className="mt-4 text-black py-2 px-4 
            rounded-lg font-semibold 
            btn-outline w-18 hover:bg-gradient-to-r from-blue-300 to-purple-300"
          >
            View
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default TutorialCard;
