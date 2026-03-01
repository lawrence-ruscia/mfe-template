# Microfrontend Template – Standard Component Inventory

## Purpose

This document defines the **standard set of components** that must be included in the microfrontend (MFE) template.
These components provide a **consistent UI foundation**, **standardized layouts**, and **ready-to-use building blocks** to accelerate feature development across teams.

The components are grouped by responsibility and abstraction level.

---

## 1. UI Primitives (Base Layer)

### Description

UI primitives are **low-level, reusable components** generated from `shadcn/ui`.
They encapsulate accessibility, semantics, and base styling using Tailwind CSS.

These components:

- Contain no business logic
- Are safe to use anywhere
- Should remain close to upstream shadcn defaults

### Location

```text
src/components/ui/
```

### Required Components

- Button
- Input
- Textarea
- Select
- Checkbox
- RadioGroup
- Switch
- Card
- Badge
- Alert
- Dialog
- DropdownMenu
- Tabs
- Accordion
- Tooltip
- Table
- Pagination
- Skeleton

### Example Usage

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Example() {
  return (
    <Card>
      <CardContent className="flex justify-end">
        <Button variant="default">Save</Button>
      </CardContent>
    </Card>
  );
}
```

---

## 2. Common Components (Reusable Patterns)

### Description

Common components are **opinionated compositions** of UI primitives.
They represent **frequently repeated UI patterns** across features and pages.

These components:

- Are domain-agnostic
- Accept data and actions via props
- Do not contain API calls or routing logic

### Location

```text
src/components/common/
```

---

### 2.1 PageHeader

**Purpose**
Standardized page title, description, and actions.

```tsx
<PageHeader
  title="Users"
  description="Manage application users"
  actions={<Button>Add User</Button>}
/>
```

---

### 2.2 EmptyState

**Purpose**
Consistent empty-state messaging.

```tsx
<EmptyState
  title="No data available"
  description="Get started by creating a new item."
  action={<Button>Create</Button>}
/>
```

---

### 2.3 LoadingState

**Purpose**
Unified loading indicator.

```tsx
<LoadingState message="Loading data..." />
```

---

### 2.4 ErrorState

**Purpose**
Standard error display with retry support.

```tsx
<ErrorState
  title="Failed to load data"
  description="An unexpected error occurred."
  retry={handleRetry}
/>
```

---

### 2.5 ConfirmDialog

**Purpose**
Reusable confirmation dialog for destructive actions.

```tsx
<ConfirmDialog
  title="Delete item"
  description="This action cannot be undone."
  onConfirm={handleDelete}
>
  <Button variant="destructive">Delete</Button>
</ConfirmDialog>
```

---

### 2.6 DataTable

**Purpose**
Opinionated wrapper around table components.

```tsx
<DataTable columns={columns} data={rows} emptyState="No records found" />
```

---

### 2.7 SearchInput

**Purpose**
Standard search and filtering input.

```tsx
<SearchInput placeholder="Search..." value={query} onChange={setQuery} />
```

---

## 3. Layout Primitives (Structural Foundation)

### Description

Layout primitives implement the **12-column responsive grid system** and spacing rules.
They are **children-based** and intentionally generic.

### Location

```text
src/components/layout/
```

---

### 3.1 Container

**Purpose**
Constrains page width and enforces horizontal padding.

```tsx
<Container>
  <Grid>...</Grid>
</Container>
```

---

### 3.2 Grid

**Purpose**
Responsive grid wrapper.

```tsx
<Grid>
  <GridColumn span={{ base: 4, md: 8, lg: 12 }}>Content</GridColumn>
</Grid>
```

---

### 3.3 GridColumn

**Purpose**
Column-based layout using a 12-column system.

```tsx
<GridColumn span={{ base: 4, md: 4, lg: 6 }}>Section</GridColumn>
```

---

## 4. Layout Templates (Page-Level Layouts)

### Description

Layout templates define **standard page structures** using **slot composition**.
They are intentionally **prop-based** to enforce consistency.

These components:

- Control structure and spacing
- Do not contain business logic
- Do not fetch data
- Do not manage routing

### Location

```text
src/components/layout/templates/
```

---

### 4.1 DashboardLayout

**Use Case**
Pages with persistent navigation (sidebar + content).

```tsx
<DashboardLayout sidebar={<Sidebar />} content={<DashboardContent />} />
```

---

### 4.2 ListPageLayout

**Use Case**
CRUD list pages.

```tsx
<ListPageLayout
  header={<PageHeader title="Users" />}
  filters={<SearchInput />}
  content={<UsersTable />}
/>
```

---

### 4.3 FormPageLayout

**Use Case**
Create/Edit forms.

```tsx
<FormPageLayout header={<PageHeader title="Create User" />} content={<UserForm />} />
```

---

### 4.4 CenteredLayout

**Use Case**
Authentication, error, or empty-state pages.

```tsx
<CenteredLayout>
  <LoginForm />
</CenteredLayout>
```

---

## 5. Extension Guidelines

- Base components must not be modified directly
- Customization is achieved via slot composition or wrapper layouts
- Structural changes require a new layout template
- Feature-specific layouts must live inside the feature directory

---

## Summary

This component inventory ensures that each microfrontend:

- Starts with a consistent UI foundation
- Adheres to standardized layout rules
- Enables rapid feature development
- Maintains autonomy and independence

This list represents the **minimum required baseline** for the microfrontend template.
