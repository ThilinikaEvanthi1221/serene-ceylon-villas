
import { useState } from "react";
import { CalendarDays, Send } from "lucide-react";
import { villas } from "../data/villas";
import { useSearchParams } from "react-router-dom";

export default function BookingForm({ selectedVilla = "" }) {
    const [searchParams] = useSearchParams();

const initialCheckIn = searchParams.get("checkIn") || "";
const initialCheckOut = searchParams.get("checkOut") || "";
const initialGuests = searchParams.get("guests") || "2";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    villa: selectedVilla,
    checkIn: initialCheckIn,
checkOut: initialCheckOut,
guests: initialGuests,
    message: "",
  });

  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "checkIn" &&
      previous.checkOut &&
      value >= previous.checkOut
        ? { checkOut: "" }
        : {}),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.checkOut <= form.checkIn) {
      alert("Check-out must be after check-in.");
      return;
    }

    const subject = encodeURIComponent(
      `Booking Enquiry - ${form.villa}`
    );

    const body = encodeURIComponent(
      `Hello Serene Ceylon Villas,\n\n` +
      `I would like to enquire about a stay.\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Villa: ${form.villa}\n` +
      `Check-in: ${form.checkIn}\n` +
      `Check-out: ${form.checkOut}\n` +
      `Guests: ${form.guests}\n\n` +
      `Message:\n${form.message || "No additional message"}`
    );

    window.location.href =
      `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  const inputStyle =
    "w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[#203a2e] outline-none transition focus:border-[#a38c65] focus:ring-2 focus:ring-[#a38c65]/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="guest-name" className="mb-2 block text-sm font-medium">
            Full Name *
          </label>
          <input
            id="guest-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputStyle}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="guest-email" className="mb-2 block text-sm font-medium">
            Email Address *
          </label>
          <input
            id="guest-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputStyle}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="guest-phone" className="mb-2 block text-sm font-medium">
            Phone Number *
          </label>
          <input
            id="guest-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputStyle}
            placeholder="+94 77 123 4567"
          />
        </div>

        <div>
          <label htmlFor="villa-select" className="mb-2 block text-sm font-medium">
            Select Villa *
          </label>
          <select
            id="villa-select"
            name="villa"
            required
            value={form.villa}
            onChange={handleChange}
            className={inputStyle}
          >
            <option value="">Choose a villa</option>
            {villas.map((villa) => (
              <option key={villa.id} value={villa.name}>
                {villa.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="check-in" className="mb-2 block text-sm font-medium">
            Check In *
          </label>
          <input
            id="check-in"
            name="checkIn"
            type="date"
            required
            min={todayString}
            value={form.checkIn}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="check-out" className="mb-2 block text-sm font-medium">
            Check Out *
          </label>
          <input
            id="check-out"
            name="checkOut"
            type="date"
            required
            min={form.checkIn || todayString}
            value={form.checkOut}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="guest-count" className="mb-2 block text-sm font-medium">
            Guests *
          </label>
          <select
            id="guest-count"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className={inputStyle}
          >
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="guest-message" className="mb-2 block text-sm font-medium">
          Additional Message
        </label>
        <textarea
          id="guest-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={inputStyle}
          placeholder="Any special requests or questions?"
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 bg-[#203a2e] px-8 py-4 font-semibold text-white transition hover:bg-[#395b49]"
      >
        <Send size={18} />
        Prepare Booking Enquiry
      </button>

      <p className="text-center text-xs text-gray-500">
        Demo enquiry form. This opens your email application;
        no information is stored or submitted automatically.
      </p>
    </form>
  );
}
