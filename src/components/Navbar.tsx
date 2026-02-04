import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <Logo />

        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/legal" className="hover:text-primary">
            Legal Stuff
          </Link>
          <Link href="/housing" className="hover:text-primary">
            Housing
          </Link>
          <Link href="/wellbeing" className="hover:text-primary">
            Wellbeing
          </Link>
          <Link href="/associations" className="hover:text-primary">
            Associations
          </Link>
          <Link href="/forum" className="hover:text-primary">
            Forum
          </Link>
        </div>

        <div>
          <button className="px-3 py-1 border rounded-md text-xs md:text-sm hover:bg-gray-50">
            EN/FR
          </button>
        </div>
      </div>
    </nav>
  );
}
