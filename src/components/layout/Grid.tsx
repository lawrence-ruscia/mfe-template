import * as React from 'react';
import { cn } from '@/lib/utils';

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Purpose:
 * - Defines a CSS Grid container
 * - Sets the 12-column layout
 * - Applies standardized gaps
 * - Acts as the parent for all GridColumn components
 */
export function Grid({ children, className }: GridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-4 gap-4',
        'md:grid-cols-8 md:gap-6',
        'lg:grid-cols-12 lg:gap-6',
        className,
      )}
    >
      {children}
    </div>
  );
}
