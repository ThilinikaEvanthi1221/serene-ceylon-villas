
import BookingForm from "../components/BookingForm";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] px-6 pb-24 pt-36">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-[#203a2e]"
        >
          <ArrowLeft size={18} />
          Back to Homepage
        </Link>

        <div className="mb-10 text-center">
          <CalendarDays
            size={34}
            className="mx-auto mb-5 text-[#a38c65]"
          />

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#a38c65]">
            Plan Your Stay
          </p>

          <h1 className="font-serif text-4xl text-[#203a2e] sm:text-5xl">
            Booking Enquiry
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
            Share your preferred dates and contact information.
            We'll help you plan your tropical getaway.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg sm:p-10">
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
