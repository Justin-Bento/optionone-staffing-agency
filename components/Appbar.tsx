import Link from "next/link";
import { HiMenu, HiOutlineUser, HiChevronDown } from "react-icons/hi";

export default function Appbar() {
  return (
    <header className="sticky top-[999] bg-white shadow">
      <div className="flex items-center justify-between p-4 md:container md:mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <button className="flex p-1 text-gray-500 appearance-none md:hidden">
            <HiMenu size="1.5rem" />
          </button>
          <Link href="/">
            <div className="w-20 h-8 bg-gray-200"></div>
          </Link>
        </div>
        <nav className="items-center hidden space-x-2 text-sm font-medium text-gray-800 md:flex">
          <Link href="/" className="px-3 py-2 transition bg-white rounded hover:bg-gray-100">Home</Link>
          <Link href="/services" className="px-3 py-2 transition bg-white rounded hover:bg-gray-100">Services</Link>
          <Link href="/about" className="px-3 py-2 transition bg-white rounded hover:bg-gray-100">About</Link>
          <Link href="/FAQs" className="px-3 py-2 transition bg-white rounded hover:bg-gray-100">FAQs</Link>
          <Link href="/blog" className="px-3 py-2 transition bg-white rounded hover:bg-gray-100">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
