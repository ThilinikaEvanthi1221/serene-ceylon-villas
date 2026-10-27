
export default function Footer() {
  return (
    <footer className="bg-[#1c3027] px-6 py-8 text-center text-sm text-gray-300">
      <p>
        © {new Date().getFullYear()} Serene Ceylon Villas.
        All rights reserved.
      </p>

      <p className="mt-2 text-xs text-gray-400">
        Portfolio Concept Website
      </p>
    </footer>
  );
}
