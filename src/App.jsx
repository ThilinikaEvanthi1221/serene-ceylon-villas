
import { ArrowRight, Wifi, Waves, Coffee } from "lucide-react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import BookingBar from "./components/BookingBar";
import About from "./components/About";
import Villas from "./components/Villas";
import ScrollManager from "./components/ScrollManager";

// Pages
import VillaDetails from "./pages/VillaDetails";
import BookingPage from "./pages/BookingPage";

// ===============================
// HOMEPAGE
// ===============================

function Home() {
  return (
    <div className="bg-[#faf8f3] text-[#263d32]">

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-[90vh] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.45)),url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 text-white">

          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#e5cfaa]">
            Discover Paradise in Sri Lanka
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.12] tracking-tight sm:text-6xl lg:text-[76px]">
            Escape to a World
            <span className="block italic text-[#e7d3ad]">
              of Serenity
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Experience timeless elegance, tropical beauty and
            unforgettable stays at Serene Ceylon Villas.
          </p>

          <a
            href="#villas"
            className="mt-9 inline-flex items-center gap-3 bg-[#d9c5a0] px-8 py-4 font-medium text-[#263d32] transition duration-300 hover:bg-white"
          >
            Explore Our Villas
            <ArrowRight size={19} />
          </a>

        </div>
      </section>

      {/* ================= BOOKING BAR ================= */}
      <section
        aria-label="Booking enquiry"
        className="relative z-10 -mt-12 px-6 pb-4"
      >
        <BookingBar />
      </section>

      {/* ================= ABOUT ================= */}
      <About />

      {/* ================= VILLAS ================= */}
      <Villas />

      {/* ================= AMENITIES ================= */}
      <section className="bg-[#faf8f3] px-6 py-24">

        <div className="mx-auto max-w-7xl text-center">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#a38c65]">
            The Serene Experience
          </p>

          <h2 className="mb-14 font-serif text-4xl text-[#203a2e] sm:text-5xl">
            Experience Exceptional Comfort
          </h2>

          <div className="grid gap-12 sm:grid-cols-3">

            {/* Private Pools */}
            <div className="flex flex-col items-center gap-4">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e9e2d4]">
                <Waves size={34} className="text-[#203a2e]" />
              </div>

              <h3 className="text-xl font-semibold">
                Private Pools
              </h3>

              <p className="max-w-xs leading-7 text-gray-600">
                Relax in beautiful tropical surroundings with
                peaceful private swimming pools.
              </p>

            </div>

            {/* Free WiFi */}
            <div className="flex flex-col items-center gap-4">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e9e2d4]">
                <Wifi size={34} className="text-[#203a2e]" />
              </div>

              <h3 className="text-xl font-semibold">
                Complimentary Wi-Fi
              </h3>

              <p className="max-w-xs leading-7 text-gray-600">
                Stay connected with reliable internet access
                throughout your tropical getaway.
              </p>

            </div>

            {/* Dining */}
            <div className="flex flex-col items-center gap-4">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e9e2d4]">
                <Coffee size={34} className="text-[#203a2e]" />
              </div>

              <h3 className="text-xl font-semibold">
                Dining Experiences
              </h3>

              <p className="max-w-xs leading-7 text-gray-600">
                Discover delightful local flavours and memorable
                dining experiences inspired by Sri Lanka.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-[#263d32] px-6 py-24 text-center text-white"
      >

        <div className="mx-auto max-w-4xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d9c5a0]">
            Begin Your Journey
          </p>

          <h2 className="mb-6 font-serif text-4xl md:text-5xl">
            Your Paradise Awaits
          </h2>

          <p className="mx-auto mb-10 max-w-xl leading-8 text-gray-300">
            Plan your next tropical getaway and discover the beauty
            of Sri Lanka through unforgettable villa experiences.
          </p>

          <a
            href="mailto:hello@example.com?subject=Villa%20Enquiry"
            className="inline-flex items-center gap-3 bg-[#d9c5a0] px-9 py-4 font-semibold text-[#263d32] transition duration-300 hover:bg-white"
          >
            Send an Enquiry
            <ArrowRight size={18} />
          </a>

          <p className="mt-6 text-sm text-gray-400">
            Portfolio demonstration — fictional property and
            contact details.
          </p>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1c3027] px-6 py-8 text-center text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()} Serene Ceylon Villas.
          All rights reserved.
        </p>

        <p className="mt-2 text-xs text-gray-400">
          Portfolio Concept Website
        </p>
      </footer>

    </div>
  );
}

// ===============================
// MAIN APPLICATION
// ===============================

function App() {
  return (
    <>
      {/* Handle page and anchor scrolling */}
      <ScrollManager />

      {/* Shared Navbar */}
      <Navbar />

      {/* Website Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/villas/:slug"
          element={<VillaDetails />}
        />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
