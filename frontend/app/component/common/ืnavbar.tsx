import Link from "next/link";
import { Printer } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Printer className="text-blue-900" size={30} />
          <h1 className="text-3xl font-bold text-gray-900">
            PrintHub
          </h1>
        </Link>

        {/* Menu */}
        <ul className="hidden gap-10 font-medium text-gray-700 md:flex">
          <li>
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
          </li>

          <li>
            <Link href="/order" className="hover:text-blue-700">
              Order
            </Link>
          </li>

          <li>
            <Link href="/chat" className="hover:text-blue-700">
              Chat
            </Link>
          </li>

          <li>
            <Link href="/setting" className="hover:text-blue-700">
              Setting
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-700">
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link
          href="/signup"
          className="rounded-full bg-blue-900 px-7 py-3 text-white transition hover:bg-blue-800"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}