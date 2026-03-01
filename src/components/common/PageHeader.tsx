import * as React from 'react';
import { cn } from '@/lib/utils';

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
};
/**
 * Purpose:
 * - Consistent page titles
 * - Optional descriptions
 * - A predictable area for actions (buttons, menus)
 */
export function PageHeader({ title, description, actions, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        'sm:flex-row sm:items-start sm:justify-between',
        className,
      )}
    >
      <div className="space-y-1">
        <h1 className="text-2xl leading-none font-semibold tracking-tight">{title}</h1>

        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>

      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}
