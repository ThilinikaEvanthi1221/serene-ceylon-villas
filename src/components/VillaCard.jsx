
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Users, BedDouble } from "lucide-react";

export default function VillaCard({ villa }) {
  return (
    <article className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        to={`/villas/${villa.slug}`}
        aria-label={`View details of ${villa.name}`}
        className="block overflow-hidden"
      >
        <img
          src={villa.image}
          alt={villa.name}
          loading="lazy"
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="p-7">
        <p className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} />
          {villa.location}
        </p>

        <h3 className="mb-3 font-serif text-2xl text-[#203a2e]">
          {villa.name}
        </h3>

        <p className="mb-5 leading-7 text-gray-600">
          {villa.description}
        </p>

        <div className="mb-6 flex gap-6 border-y border-gray-100 py-4 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <Users size={17} />
            {villa.guests} Guests
          </span>
          <span className="flex items-center gap-2">
            <BedDouble size={17} />
            {villa.bedrooms} Bedrooms
          </span>
        </div>

        <Link
          to={`/villas/${villa.slug}`}
          className="inline-flex items-center gap-2 font-semibold text-[#203a2e] transition hover:gap-4"
        >
          View Villa Details
          <ArrowUpRight size={19} />
        </Link>
      </div>
    </article>
  );
}
