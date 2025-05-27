import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <Link href="/" className="text-lg font-medium">
        syndicate_m
      </Link>
      <Link href="/people" className="text-lg hover:underline">
        People
      </Link>
    </header>
  );
};

export default Header;
