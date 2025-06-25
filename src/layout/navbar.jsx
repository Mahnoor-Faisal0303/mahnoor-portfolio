import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1A0B2E] text-white shadow-md relative z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">My Portfolio</div>
          <div
            className={`hidden md:flex space-x-6 text-sm font-medium ${
              isOpen ? "hidden" : ""
            }`}
          >
            <Link
              href="#home"
              scroll={true}
              className="hover:text-cyan-400 hover:underline transition-colors"
            >
              Home
            </Link>
            <Link
              href="#skills"
              scroll={true}
              className="hover:text-cyan-400 hover:underline transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              scroll={true}
              className="hover:text-cyan-400 hover:underline transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              scroll={true}
              className="hover:text-cyan-400 hover:underline transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className={`md:hidden ${isOpen ? "hidden" : ""}`}>
            <button
              onClick={() => setIsOpen(true)}
              className="focus:outline-none hover:cursor-pointer"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 flex transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-[#000000d4] bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`relative bg-[#1A0B2E] w-3/4 max-w-xs p-6 z-50 shadow-lg transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:cursor-pointer"
          >
            <X size={24} />
          </button>
          <div className="text-2xl font-bold">MyPortfolio</div>
          <div className="mt-10 space-y-4 text-white text-base font-medium">
            <Link
              href="#home"
              scroll={true}
              className="block font-bold hover:text-cyan-400 hover:underline"
            >
              Home
            </Link>
            <Link
              href="#skills"
              scroll={true}
              className="block font-bold hover:text-cyan-400 hover:underline"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              scroll={true}
              className="block font-bold hover:text-cyan-400 hover:underline"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              scroll={true}
              className="block font-bold hover:text-cyan-400 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
