# Microfrontend Template

## Overview

This repository provides the **standard microfrontend (MFE) application template** for internal use.
It is designed to ensure **architectural consistency**, **UI standardization**, and **development efficiency** across all microfrontends built within the organization.

The template establishes:

- A common project structure
- A standardized layout and grid system
- A ready-to-use component foundation
- Clear extension and customization guidelines
- Isolation-safe styling and runtime behavior

This template is intended to be used as the **starting point for all new microfrontends**.

---

## Goals and Non-Goals

### Goals

- Enable independent development and deployment of microfrontends
- Provide a consistent UI and layout framework across applications
- Reduce setup and boilerplate effort for teams
- Encourage best practices for scalability and maintainability
- Preserve microfrontend autonomy and ownership

### Non-Goals

- This template is not a shared runtime UI library
- This template does not enforce business logic or domain patterns
- This template does not provide cross-MFE state management
- This template does not introduce runtime coupling between MFEs

---

## Technology Stack

The template is built using the following technologies:

- **React** with TypeScript
- Module Federation (via `create-mf-app`)
- **Tailwind CSS** for styling
- **shadcn/ui** for accessible UI primitives
- Rspack for development and production builds
- ESLint and Prettier for code quality and formatting

---

## Architecture Principles

### Microfrontend Independence

Each microfrontend:

- Is built and deployed independently
- Owns its UI components and layouts
- Does not import UI code from other MFEs at runtime
- Can evolve independently without breaking other applications

### Standardization Through Templates

Consistency is achieved by:

- Providing a shared starting template
- Defining layout patterns and grid rules
- Supplying ready-to-use components
- Establishing extension and governance rules

---

## Project Structure

```text
src/
├─ app/                    # Application bootstrap and entry points
├─ components/
│  ├─ ui/                  # shadcn-based UI primitives
│  ├─ common/              # Reusable, domain-agnostic components
│  └─ layout/
│     ├─ templates/        # Page-level layout templates
│     └─ Grid.tsx          # 12-column grid system
├─ features/               # Feature-based modules
├─ hooks/                  # Shared React hooks
├─ lib/                    # Utilities and helpers
├─ styles/                 # Global styles and Tailwind config
└─ types/                  # Shared TypeScript types
```

---

## Layout System

### 12-Column Grid

The template includes a standardized **responsive 12-column grid system**:

- Mobile: 4 columns
- Tablet: 8 columns
- Desktop: 12 columns

The grid is implemented using layout primitives (`Grid`, `GridColumn`) and is used consistently across all layouts.

---

## Layout Templates

Layout templates define **page-level structure** using **slot composition**.

### Key Characteristics

- Prop-based, slot-driven APIs
- Enforce consistent page structure
- Do not contain business logic
- Do not fetch data
- Do not manage routing

### Available Templates

- DashboardLayout
- ListPageLayout
- FormPageLayout
- CenteredLayout

Layouts are customized by **composing content into slots**, not by modifying the layout itself.

---

## Ready-to-Use Components

The template includes a curated set of components to accelerate development:

### UI Primitives

Low-level components generated from shadcn/ui (e.g. Button, Input, Dialog, Table).

### Common Components

Reusable patterns such as:

- PageHeader
- EmptyState
- LoadingState
- ErrorState
- ConfirmDialog
- DataTable
- SearchInput

These components are domain-agnostic and safe to use across features.

---

## Styling Strategy

### Tailwind CSS

- Utility-first styling
- Responsive by default
- Design tokens driven via CSS variables

### Styling Isolation

- Tailwind configuration is local to each microfrontend
- Optional class prefixing can be enabled if required
- No global CSS leakage between MFEs

### shadcn/ui Customization

- Components live inside `src/components/ui`
- Styling can be adjusted via Tailwind classes or CSS variables
- Components may be extended or replaced locally as needed

---

## Extension and Customization Guidelines

Teams may customize the template by:

- Composing different components into layout slots
- Creating wrapper layouts for feature-specific needs
- Adding new layout templates when structural changes are required

Teams must not:

- Modify base layout templates directly
- Introduce escape-hatch props to layouts
- Share UI components across MFEs at runtime

---

## Module Federation Guidelines

- Each microfrontend exposes only its public entry points
- Shared dependencies must be explicitly defined
- UI libraries should be shared as singletons where appropriate
- Version alignment is required for shared dependencies

---

## Scripts

Scripts provided by the template support both development and production workflows and are compatible with Windows environments.

Typical scripts include:

- Development server
- Production build
- Local preview of production build

Script configuration avoids reliance on environment-specific shell syntax.

---

## Intended Usage

This template should be:

- Used as the base for all new microfrontends
- Kept up to date by the platform or frontend enablement team
- Extended locally by feature teams without modifying the core structure

---

## Summary

This microfrontend template provides:

- A standardized architectural foundation
- A consistent layout and design system
- A clear component hierarchy
- Safe extension mechanisms
- Strong isolation guarantees

It balances **consistency and flexibility**, enabling teams to move fast while maintaining long-term maintainability.

---

## Ownership

This template is maintained internally and intended for organizational use only.
Questions, improvements, and updates should be coordinated with the owning platform or frontend architecture team.
