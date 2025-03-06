import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-md shadow-none px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-md font-bold">
              <span className="text-[#1B468F]">Paradise</span>
              <span className="text-[#F15A29]"> Sharm</span>
              {/* <span className="text-[#1B468F]"> Tours</span> */}
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            {
              pathname !== "/" && <Link href="/" className="text-[#1B468F] font-bold hover:text-[#F15A29] transition-colors">
              Home
            </Link>
            }
            {
              pathname !== "/about" && <Link href="/about" className="text-[#1B468F] font-bold hover:text-[#F15A29] transition-colors">
              About
            </Link>
            }
            {
              pathname !== "/contact" && <Link href="/contact" className="text-[#1B468F] font-bold hover:text-[#F15A29] transition-colors">
              Contact
            </Link>
            }

          </nav>

          {/* <Button className="bg-[#F15A29] hover:bg-[#E14A19] text-white rounded-sm cursor-pointer transition-colors duration-300">
            BOOK NOW
          </Button> */}
        </div>
      </div>
    </header>
  );
}
