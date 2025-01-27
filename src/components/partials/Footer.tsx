import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto">
        <div className="px-4 py-10 flex justify-between">
          <div>
            <Link href="/">
              <h2 className="text-2xl font-bold">Realtor Website</h2>
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/buying-with-us">Buying with us</Link>
            <Link href="/about">About</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
