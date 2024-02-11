import React from 'react';
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-gray-800 text-white p-4">
      <div className="w-full px-10 sm:px-24 md:px-36 flex items-center">
        <nav>
          <ul className="flex justify-center items-center space-x-4">
            <li>
              <Link href="/" className="text-xl font-bold">Home</Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-gray-300">Posts</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-gray-300">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
