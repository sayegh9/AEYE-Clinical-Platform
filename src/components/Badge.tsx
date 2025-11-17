interface BadgeProps {
  children: React.ReactNode;
  variant: 'normal' | 'warning' | 'critical' | 'info';
  className?: string;
}

export function Badge({ children, variant, className = '' }: BadgeProps) {
  const variantStyles = {
    normal: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-amber-100 text-amber-800 border-amber-200',
    critical: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200'
  } satisfies Record<BadgeProps['variant'], string>;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
