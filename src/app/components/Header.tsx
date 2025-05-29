import Link from "next/link";
import { Button } from "@/app/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <Link href="/" className="text-lg font-medium">
        syndicate_m
      </Link>
      <Button variant="ghost" asChild>
        <Link href="/people">People</Link>
      </Button>
    </header>
  );
};

export default Header;
