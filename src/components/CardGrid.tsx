import Link from 'next/link';

export type CardItem = {
  title: string;
  description: string;
  href: string;
  icon?: React.ElementType;
};

type CardGridProps = {
  cards: CardItem[];
};

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map(({ title, description, href, icon: Icon }) => (
        <Link
          key={title}
          href={href}
          className="group block bg-white border rounded-xl p-5 hover:shadow-md transition"
        >
          <div className="flex items-start gap-4">
            {Icon && (
              <div className="rounded-full bg-primary/5 p-2 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary">
                {title}
              </h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
