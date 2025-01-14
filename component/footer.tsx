import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6">
      <h1 className="text-center text-2xl font-semibold mb-4">This is Footer</h1>
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/app/about" className="hover:text-blue-400 transition duration-300">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/app/carrier" className="hover:text-blue-400 transition duration-300">
            Career
          </Link>
        </li>
        <li>
          <Link href="/app/about/education" className="hover:text-blue-400 transition duration-300">
            Education
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
