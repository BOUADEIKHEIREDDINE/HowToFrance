import Link from 'next/link';

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function CategoryCard({ title, description, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border rounded-xl p-5 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <span className="text-sm font-medium text-accent">Learn more →</span>
    </Link>
  );
}
