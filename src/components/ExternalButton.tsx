import { cn } from '@/lib/utils';

type ExternalButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function ExternalButton({
  href,
  children,
  variant = 'primary',
  className,
}: ExternalButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'htf-btn',
        variant === 'primary' ? 'htf-btn-primary' : 'htf-btn-secondary',
        className,
      )}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

