
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Our Villas", href: "/#villas" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen || !isHomePage
          ? "bg-[#203a2e] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/#home"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-semibold tracking-[0.12em] text-white md:text-2xl"
        >
          SERENE{" "}
          <span className="text-[#d9c5a0]">
            CEYLON
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-[#d9c5a0]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Booking Button */}
        <Link
          to="/booking"
          className="hidden items-center gap-2 border border-[#d9c5a0] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#d9c5a0] hover:text-[#203a2e] lg:flex"
        >
          Book Your Stay
          <ArrowUpRight size={17} />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-5 border-t border-white/10 bg-[#203a2e] px-6 py-6 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/90 transition hover:text-[#d9c5a0]"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Booking Button */}
          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-[#d9c5a0] px-5 py-3 font-semibold text-[#203a2e] transition hover:bg-[#e5d5b8]"
          >
            Book Your Stay
            <ArrowUpRight size={17} />
          </Link>
        </div>
      )}
    </header>
  );
}
