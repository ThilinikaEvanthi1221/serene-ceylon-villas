
import { villas } from "../data/villas";
import VillaCard from "./VillaCard";

export default function Villas() {
  return (
    <section id="villas" className="bg-[#f5f2eb] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#a38c65]">
            Our Collection
          </p>

          <h2 className="font-serif text-4xl text-[#203a2e] sm:text-5xl">
            Discover Our Villas
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-600">
            Explore our collection of beautiful tropical retreats,
            each designed to offer comfort, privacy, and unforgettable
            experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {villas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </div>
    </section>
  );
}
