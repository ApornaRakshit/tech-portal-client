import { useRef } from "react";
import TutorialCard from "../components/TutorialCard";

const TutorialsSlider = ({ tutorials }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="relative w-full">
                {/* Navigation Buttons */}
                <div className="absolute right-4 -top-10 flex gap-3 z-10">
                    <button
                        onClick={scrollLeft}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 border"
                    >
                        ←
                    </button>

                    <button
                        onClick={scrollRight}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 border"
                    >
                        →
                    </button>
                </div>

                {/* Scrollable Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth py-4 no-scrollbar"
                >
                    {tutorials.map((t) => (
                        <div key={t.id} className="shrink-0 w-80 h-[420px]">
                            <TutorialCard tutorial={t} clickable={true} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Inject CSS here */}
            <style>
                {`
        /* Hide scrollbar for Chrome, Safari, Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for Firefox */
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}
            </style>
        </>
    );
};

export default TutorialsSlider;
