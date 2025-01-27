import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="p-4 max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Realtor Website</h1>
          <nav className="flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/buying-with-us">Buy with us</Link>
            <Link href="/about">About</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
