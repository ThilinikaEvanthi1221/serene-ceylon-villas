
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

export default function VillaGallery({ images, villaName }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeGallery = () => setActiveIndex(null);

  const previous = () =>
    setActiveIndex((index) =>
      (index - 1 + images.length) % images.length
    );

  const next = () =>
    setActiveIndex((index) => (index + 1) % images.length);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  if (!images?.length) return null;

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
        {images.slice(0, 5).map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View photo ${index + 1} of ${villaName}`}
            className={`group relative overflow-hidden ${
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : ""
            }`}
          >
            <img
              src={image}
              alt={`${villaName} photo ${index + 1}`}
              loading="lazy"
              className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                index === 0 ? "h-80 md:h-full" : "h-48"
              }`}
            />

            {index === 4 && (
              <span className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 font-semibold text-white">
                <Images size={20} />
                View All Photos
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${villaName} photo gallery`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-16"
        >
          <button
            type="button"
            onClick={closeGallery}
            aria-label="Close gallery"
            className="absolute right-6 top-6 text-white"
          >
            <X size={30} />
          </button>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous photo"
            className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-8"
          >
            <ChevronLeft size={26} />
          </button>

          <img
            src={images[activeIndex]}
            alt={`${villaName} photo ${activeIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />

          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-8"
          >
            <ChevronRight size={26} />
          </button>

          <p className="absolute bottom-6 text-sm text-white/80">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
