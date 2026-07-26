import Link from "next/link";

const Header = () => {
  return (
    <header className="font-system flex items-center justify-between p-6">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-link-accent"
      >
        syndicate_m
      </Link>
      <Link
        href="/people"
        className="text-sm font-medium transition-colors hover:text-link-accent"
      >
        people
      </Link>
    </header>
  );
};

export default Header;
