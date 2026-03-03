import { cn } from '@/lib/utils';

type CalloutVariant = 'tip' | 'warning' | 'success';

type CalloutProps = {
  variant: CalloutVariant;
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
};

const VARIANT_STYLES: Record<CalloutVariant, { bg: string; border: string; text: string; defaultIcon: string }> = {
  tip: { bg: '#EFF6FF', border: '#3B82F6', text: '#1E293B', defaultIcon: '💡' },
  warning: { bg: '#FFFBEB', border: '#F59E0B', text: '#1E293B', defaultIcon: '⚠️' },
  success: { bg: '#F0FDF4', border: '#10B981', text: '#1E293B', defaultIcon: '✅' },
};

export default function Callout({ variant, title, icon, children, className }: CalloutProps) {
  const s = VARIANT_STYLES[variant];
  return (
    <div
      className={cn('rounded-xl p-4 md:p-5', className)}
      style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, color: s.text }}
    >
      <div className="flex items-start gap-3">
        <div className="text-xl leading-none" aria-hidden="true">
          {icon ?? s.defaultIcon}
        </div>
        <div className="min-w-0">
          <div className="font-extrabold">{title}</div>
          <div className="mt-1 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

