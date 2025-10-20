# Breadcrumb Components

This directory contains three different breadcrumb components for different use cases:

## 1. Basic Breadcrumb (`page.tsx`)

The default breadcrumb component that automatically generates breadcrumbs based on the current URL path.

### Usage:

```tsx
import { Breadcrumb } from "@/components/breadcrumb";

export default function MyPage() {
  return (
    <div>
      <Breadcrumb />
      {/* Your page content */}
    </div>
  );
}
```

### Features:

- Automatically generates breadcrumbs from URL path
- Handles special route labels for BNM website
- Hides on home page
- Responsive design with Tailwind CSS
- Accessible with proper ARIA labels

## 2. Advanced Breadcrumb (`AdvancedBreadcrumb.tsx`)

A more flexible breadcrumb component with additional customization options.

### Usage:

```tsx
import { AdvancedBreadcrumb } from "@/components/breadcrumb";

export default function MyPage() {
  return (
    <div>
      <AdvancedBreadcrumb showHome={true} className="custom-breadcrumb-class" />
      {/* Your page content */}
    </div>
  );
}
```

### Props:

- `customItems?: BreadcrumbItem[]` - Override default breadcrumb generation
- `showHome?: boolean` - Whether to show home link (default: true)
- `className?: string` - Additional CSS classes

## 3. Dynamic Breadcrumb (`DynamicBreadcrumb.tsx`)

For cases where you need full control over breadcrumb items, especially with dynamic data.

### Usage:

```tsx
import { DynamicBreadcrumb } from "@/components/breadcrumb";

export default function TourDetailPage({ tour }) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "BNM Tours", href: "/bnm-tours" },
    { label: tour.name, href: `/bnm-tours/${tour.id}`, isActive: true },
  ];

  return (
    <div>
      <DynamicBreadcrumb items={breadcrumbItems} />
      {/* Your page content */}
    </div>
  );
}
```

### Props:

- `items: BreadcrumbItem[]` - Array of breadcrumb items
- `className?: string` - Additional CSS classes
- `separator?: React.ReactNode` - Custom separator element

## BreadcrumbItem Interface

```tsx
interface BreadcrumbItem {
  label: string; // Display text
  href: string; // Link URL
  isActive?: boolean; // Whether this is the current page
}
```

## Examples

### For a tour detail page:

```tsx
import { DynamicBreadcrumb } from "@/components/breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "BNM Tours", href: "/bnm-tours" },
  {
    label: "Eastern Echoes",
    href: "/bnm-tours/eastern-echoes",
    isActive: true,
  },
];

<DynamicBreadcrumb items={breadcrumbItems} />;
```

### For an accommodation page:

```tsx
import { Breadcrumb } from "@/components/breadcrumb";

// Automatically generates: Home > Accommodation
<Breadcrumb />;
```

### Custom styling:

```tsx
import { AdvancedBreadcrumb } from "@/components/breadcrumb";

<AdvancedBreadcrumb className="bg-gray-50 p-4 rounded-lg" showHome={false} />;
```

## Route Labels

The components automatically handle these special route labels:

- `visit-ulaanbaatar` → "Visit Ulaanbaatar"
- `bnm-tours` → "BNM Tours"
- `accommodation` → "Accommodation"
- `destination` → "Destinations"
- `commercial` → "Commercial"
- `events` → "Events"
- `info` → "Information"
- `merchant` → "Merchants"

Other routes are automatically converted from kebab-case to Title Case.
