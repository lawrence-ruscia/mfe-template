import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { GridColumn } from '@/components/layout/GridColumn';

type ListPageLayoutProps = {
  header: React.ReactNode;
  filters?: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export function ListPageLayout({ header, filters, content, className }: ListPageLayoutProps) {
  return (
    <Container className={cn('py-6', className)}>
      <Grid>
        {/* Header */}
        <GridColumn span={{ base: 4, md: 8, lg: 12 }}>{header}</GridColumn>

        {/* Filters */}
        {filters && <GridColumn span={{ base: 4, md: 8, lg: 12 }}>{filters}</GridColumn>}

        {/* Content */}
        <GridColumn span={{ base: 4, md: 8, lg: 12 }}>{content}</GridColumn>
      </Grid>
    </Container>
  );
}
