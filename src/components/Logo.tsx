import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
        HTF
      </span>
      <span className="hidden sm:inline text-base font-semibold tracking-tight">
        How To France
      </span>
    </Link>
  );
}
