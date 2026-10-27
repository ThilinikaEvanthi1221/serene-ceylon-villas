
import { useState } from "react";
import { CalendarDays, Users, ArrowRight } from "lucide-react";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function handleEnquiry(e) {
    e.preventDefault();

    if (!checkIn || !checkOut || checkOut <= checkIn) {
      alert("Please select valid check-in and check-out dates.");
      return;
    }

    const subject = encodeURIComponent("Villa Booking Enquiry");
    const body = encodeURIComponent(
      `Hello Serene Ceylon Villas,\n\n` +
      `I would like to enquire about a stay.\n\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Guests: ${guests}\n\n` +
      `Please let me know about availability.`
    );

    window.location.href =
      `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleEnquiry}
      className="mx-auto grid max-w-6xl gap-5 rounded-xl bg-white p-6 shadow-xl md:grid-cols-[1fr_1fr_1fr_auto] md:items-end"
    >
      <div>
        <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#263d32]">
          <CalendarDays size={18} />
          Check In
        </label>
        <input
          type="date"
          value={checkIn}
          min={localToday}
          onChange={(e) => {
            setCheckIn(e.target.value);
            if (checkOut && e.target.value >= checkOut) {
              setCheckOut("");
            }
          }}
          required
          className="w-full rounded-md border border-gray-200 p-3 text-gray-700"
        />
      </div>

      <div>
        <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#263d32]">
          <CalendarDays size={18} />
          Check Out
        </label>
        <input
          type="date"
          value={checkOut}
          min={checkIn || localToday}
          onChange={(e) => setCheckOut(e.target.value)}
          required
          className="w-full rounded-md border border-gray-200 p-3 text-gray-700"
        />
      </div>

      <div>
        <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#263d32]">
          <Users size={18} />
          Guests
        </label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full rounded-md border border-gray-200 p-3 text-gray-700"
        >
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <option key={number} value={number}>
              {number} {number === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="flex h-12 items-center justify-center gap-2 rounded-md bg-[#263d32] px-7 font-medium text-white transition hover:bg-[#395b49]"
      >
        Enquire Now
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
