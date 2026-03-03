import { cn } from '@/lib/utils';

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('htf-external-link', className)}
    >
      {children}
    </a>
  );
}

