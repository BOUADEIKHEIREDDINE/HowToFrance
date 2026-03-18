import Link from 'next/link';
import Image from 'next/image';

import logo from '../../icons/logo.png';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logo}
        alt="How To France"
        width={60}
        height={60}
        priority
        className="h-12 w-12 rounded-full ring-1 ring-border/60"
      />
      <span className="hidden sm:inline text-base font-semibold tracking-tight">
        How To France
      </span>
    </Link>
  );
}
