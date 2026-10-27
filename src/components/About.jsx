
import { ArrowUpRight, Check } from "lucide-react";

const highlights = [
  "Handpicked luxury villas",
  "Beautiful tropical surroundings",
  "Personalized guest experiences",
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#faf8f3] px-6 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Image Section */}
        <div className="relative">
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
              alt="Luxury villa interior"
              loading="lazy"
              className="h-[420px] w-full object-cover sm:h-[540px]"
            />
          </div>

          {/* Decorative Experience Card */}
          <div className="absolute -bottom-6 right-4 bg-[#203a2e] px-8 py-6 text-white shadow-xl sm:right-[-20px]">
            <p className="font-serif text-4xl text-[#e7d3ad]">
              Luxury
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em]">
              Inspired by Nature
            </p>
          </div>
        </div>

        {/* Text Section */}
        <div className="pt-8 lg:pt-0">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#a38c65]">
            Welcome to Serene Ceylon
          </p>

          <h2 className="mb-7 font-serif text-4xl leading-tight text-[#203a2e] sm:text-5xl">
            Discover a Place
            <span className="block italic text-[#a38c65]">
              Beyond Ordinary
            </span>
          </h2>

          <p className="mb-5 leading-8 text-gray-600">
            Nestled among Sri Lanka's breathtaking landscapes,
            Serene Ceylon Villas brings together refined comfort,
            natural beauty, and authentic island experiences.
          </p>

          <p className="mb-8 leading-8 text-gray-600">
            From peaceful mornings surrounded by tropical gardens
            to unforgettable evenings beneath the stars, every
            moment is designed to inspire relaxation.
          </p>

          {/* Highlights */}
          <div className="mb-10 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9e2d4] text-[#203a2e]">
                  <Check size={15} />
                </span>

                <span className="text-sm font-medium text-[#203a2e]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#villas"
            className="inline-flex items-center gap-3 border-b border-[#203a2e] pb-2 font-semibold text-[#203a2e] transition hover:gap-5"
          >
            Explore Our Collection
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
