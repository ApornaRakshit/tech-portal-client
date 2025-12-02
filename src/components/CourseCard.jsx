/* eslint-disable react/prop-types */

const CourseCard = ({ course, clickable = true }) => {
    // Fix image URL
    const imageUrl = course.thumbnail?.startsWith("/")
      ? course.thumbnail
      : `/courses/${course.thumbnail}`;
  
    const Wrapper = clickable ? "a" : "div";
  
    return (
      <Wrapper
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className="hover:bg-gradient-to-r from-blue-100 to-purple-100 
          rounded-xl shadow-md overflow-hidden 
          transform transition-all duration-300 
          hover:scale-105 hover:shadow-xl 
          h-full flex flex-col"
        >
          {/* Thumbnail */}
          <div className="w-full overflow-hidden">
            <img
              src={imageUrl}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
          </div>
  
          {/* Content */}
          <div className="flex flex-col justify-between p-4 flex-grow">
            <div>
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                {course.title}
              </h3>
  
              <p className="text-gray-600 text-sm line-clamp-1">
                {course.instructor || "Unknown Instructor"}
              </p>
            </div>
  
            {/* Button */}
            <button
              className="mt-4 text-black py-2 px-4 
              rounded-lg font-semibold btn-outline 
              hover:bg-gradient-to-r from-blue-300 to-purple-300"
            >
              View Course
            </button>
          </div>
        </div>
      </Wrapper>
    );
  };
  
  export default CourseCard;
  