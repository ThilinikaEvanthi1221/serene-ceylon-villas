import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  MapPin,
  Wifi,
  Waves,
  Coffee,
} from "lucide-react";

const villas = [
  {
    name: "Ocean View Villa",
    location: "Mirissa, Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900",
    description: "A peaceful coastal escape with ocean views.",
  },
  {
    name: "Tropical Garden Villa",
    location: "Galle, Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
    description: "Experience luxury surrounded by nature.",
  },
  {
    name: "Private Pool Villa",
    location: "Bentota, Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900",
    description: "Relax in your own private tropical retreat.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#faf8f3] text-[#263d32]">
      {/* Navbar */}
      <nav className="absolute top-0 z-20 w-full text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#home" className="text-2xl font-semibold tracking-wide">
            SERENE <span className="text-[#d9c5a0]">CEYLON</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#villas">Our Villas</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-5 bg-[#263d32] px-6 py-6 md:hidden">
            {["home", "about", "villas", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[90vh] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.45)),url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 text-white">
          <p className="mb-5 uppercase tracking-[0.3em] text-[#e5cfaa]">
            Discover Paradise in Sri Lanka
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Escape to a World of Serenity
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-200">
            Experience timeless elegance, tropical beauty and
            unforgettable stays at Serene Ceylon Villas.
          </p>

          <a
            href="#villas"
            className="mt-9 inline-flex items-center gap-3 bg-[#d9c5a0] px-8 py-4 font-medium text-[#263d32] transition hover:bg-white"
          >
            Explore Our Villas <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 uppercase tracking-[0.25em] text-[#a38c65]">
            Welcome to Serene Ceylon
          </p>

          <h2 className="mb-7 font-serif text-4xl md:text-5xl">
            Where Luxury Meets Nature
          </h2>

          <p className="mx-auto max-w-3xl leading-8 text-gray-600">
            Discover the beauty of Sri Lanka through thoughtfully
            designed villas, peaceful surroundings and unforgettable
            experiences. Every stay is an invitation to relax,
            reconnect and create lasting memories.
          </p>
        </div>
      </section>

      {/* Villas */}
      <section id="villas" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 uppercase tracking-[0.25em] text-[#a38c65]">
              Our Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Discover Our Villas
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {villas.map((villa) => (
              <div
                key={villa.name}
                className="group overflow-hidden bg-[#faf8f3] shadow-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={villa.image}
                    alt={villa.name}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={15} />
                    {villa.location}
                  </div>

                  <h3 className="mb-3 font-serif text-2xl">
                    {villa.name}
                  </h3>

                  <p className="mb-6 text-gray-600">
                    {villa.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-medium"
                  >
                    Enquire Now <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-14 font-serif text-4xl">
            Experience Exceptional Comfort
          </h2>

          <div className="grid gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <Waves size={36} />
              <h3 className="text-xl font-medium">Private Pools</h3>
              <p className="text-gray-600">
                Relax in beautiful tropical surroundings.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Wifi size={36} />
              <h3 className="text-xl font-medium">Free Wi-Fi</h3>
              <p className="text-gray-600">
                Stay connected throughout your visit.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Coffee size={36} />
              <h3 className="text-xl font-medium">Dining Experiences</h3>
              <p className="text-gray-600">
                Enjoy delightful local flavours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#263d32] px-6 py-24 text-center text-white"
      >
        <h2 className="mb-6 font-serif text-4xl md:text-5xl">
          Your Paradise Awaits
        </h2>

        <p className="mx-auto mb-9 max-w-xl text-gray-300">
          Plan your next tropical getaway and discover the beauty
          of Sri Lanka.
        </p>

        <a
          href="mailto:hello@example.com?subject=Villa%20Enquiry"
          className="inline-flex items-center gap-3 bg-[#d9c5a0] px-9 py-4 font-medium text-[#263d32]"
        >
          Send an Enquiry <ArrowRight size={18} />
        </a>

        <p className="mt-5 text-sm text-gray-400">
          Portfolio demonstration — fictional property and contact details.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c3027] px-6 py-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Serene Ceylon Villas.
        Portfolio concept website.
      </footer>
    </div>
  );
}

export default App;