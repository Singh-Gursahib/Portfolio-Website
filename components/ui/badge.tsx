import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[#734916] text-[#F2CA99] dark:bg-[#A6855D] dark:text-[#00010D] hover:bg-[#A6855D]/90 dark:hover:bg-[#A6855D]/80',
        secondary:
          'border-transparent bg-[#F2CA99]/30 text-[#734916] dark:bg-[#734916]/40 dark:text-[#F2CA99] hover:bg-[#F2CA99]/50 dark:hover:bg-[#734916]/60 border-[#A6855D]/20',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-[#734916] dark:text-[#F2CA99] border-[#A6855D]/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
