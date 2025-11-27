/* eslint-disable react/prop-types */
const TutorialCard = ({ tutorial, clickable = true }) => {
  const imageUrl = new URL(
    `/public/tutorials/${tutorial.thumbnail}`,
    import.meta.url
  ).href;

  const Wrapper = clickable ? "a" : "div";

  return (
    <Wrapper
      href={clickable ? tutorial.link : undefined}
      target="_blank"
      className="block bg-white rounded-xl shadow hover:shadow-xl transition p-3 cursor-pointer border hover:border-blue-500 no-underline h-80"
    >
      <div className="h-full flex flex-col">

        {/* Image */}
        <img
          src={imageUrl}
          className="w-full h-44 object-cover rounded-lg"
          alt={tutorial.title}
        />

        {/* Title */}
        <h2 className="text-lg font-semibold mt-3">{tutorial.title}</h2>

        {/* Channel */}
        <p className="text-sm text-gray-500">{tutorial.channel}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {tutorial.description}
        </p>

        {/* Button text */}
        <span className="text-blue-600 font-medium mt-auto">
          Watch Tutorial →
        </span>
      </div>
    </Wrapper>
  );
};

export default TutorialCard;
