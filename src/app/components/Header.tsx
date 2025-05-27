import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <Link href="/" className="text-lg font-medium text-black">
        syndicate_m
      </Link>
      <Link href="/testimonials" className="text-lg hover:underline text-black">
        Testimonials
      </Link>
    </header>
  );
};

export default Header; 