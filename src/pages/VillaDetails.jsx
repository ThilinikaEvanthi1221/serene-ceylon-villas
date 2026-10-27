
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Users,
  BedDouble,
  Bath,
  Check,
} from "lucide-react";
import { villas } from "../data/villas";
import VillaGallery from "../components/VillaGallery";
import BookingForm from "../components/BookingForm";

export default function VillaDetails() {
  const { slug } = useParams();
  const villa = villas.find((item) => item.slug === slug);

  if (!villa) {
    return (
      <main className="min-h-screen px-6 pb-24 pt-40 text-center">
        <h1 className="font-serif text-4xl">Villa not found</h1>
        <Link to="/" className="mt-6 inline-block underline">
          Return to homepage
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f3] pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/#villas"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#203a2e]"
        >
          <ArrowLeft size={18} />
          Back to Villas
        </Link>

        <p className="mb-3 uppercase tracking-[0.25em] text-[#a38c65]">
          Exclusive Accommodation
        </p>

        <h1 className="font-serif text-4xl text-[#203a2e] md:text-6xl">
          {villa.name}
        </h1>

        <p className="mt-5 flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          {villa.location}
        </p>

        <div className="mt-10">
  <VillaGallery
  images={[
    villa.image,
    ...(villa.gallery || []).filter(
      (image) => image !== villa.image
    ),
  ]}
  villaName={villa.name}
/>
</div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="mb-6 font-serif text-3xl text-[#203a2e]">
              About This Villa
            </h2>

            <p className="leading-8 text-gray-600">
              {villa.longDescription}
            </p>

            <div className="my-10 flex flex-wrap gap-8 border-y border-gray-200 py-6">
              <span className="flex items-center gap-2">
                <Users size={20} /> {villa.guests} Guests
              </span>
              <span className="flex items-center gap-2">
                <BedDouble size={20} /> {villa.bedrooms} Bedrooms
              </span>
              <span className="flex items-center gap-2">
                <Bath size={20} /> {villa.bathrooms} Bathrooms
              </span>
            </div>

            <h2 className="mb-6 font-serif text-3xl text-[#203a2e]">
              Villa Amenities
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {villa.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3">
                  <Check size={19} className="text-[#a38c65]" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit bg-white p-6 shadow-md lg:p-8">
  <h3 className="mb-3 font-serif text-3xl text-[#203a2e]">
    Plan Your Stay
  </h3>

  <p className="mb-8 leading-7 text-gray-600">
    Tell us about your preferred dates and we'll help you
    plan your tropical getaway.
  </p>

  <BookingForm
    key={villa.slug}
    selectedVilla={villa.name}
  />
</aside>

        </div>
      </div>
    </main>
  );
}
