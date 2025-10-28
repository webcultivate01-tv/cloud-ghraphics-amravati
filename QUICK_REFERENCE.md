# Quick Reference - Cloud Graphics Components

## 🎯 Component Usage Guide

### Layout Components

```jsx
// Layout - Wraps all pages
import Layout from './components/layout/Layout'
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
</Routes>
```

```jsx
// Navbar - Auto-included in Layout
- Fixed navigation
- Mobile responsive
- Smooth scroll to sections
- No props needed
```

```jsx
// Footer - Auto-included in Layout  
- Site-wide footer
- Social links
- Contact info
- No props needed
```

---

### Common Components

```jsx
// Button
import Button from './components/common/Button'

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>

// Props:
// - variant: "primary" | "secondary" | "outline"
// - size: "sm" | "md" | "lg"
// - onClick: function
// - className: additional classes
```

```jsx
// StatCard
import StatCard from './components/common/StatCard'

<StatCard value="100+" label="Projects Done" />

// Props:
// - value: string (e.g., "100+", "5+")
// - label: string (e.g., "Projects Done")
```

```jsx
// SectionHeader
import SectionHeader from './components/common/SectionHeader'

<SectionHeader
  badge="What I Offer"
  title="My Creative"
  gradientText="Services"
  description="Comprehensive design solutions..."
  isDark={false}
/>

// Props:
// - badge: string (small badge text)
// - title: string (main heading)
// - gradientText: string (gradient portion of title)
// - description: string (subtitle)
// - isDark: boolean (light/dark mode)
```

```jsx
// ServiceCard
import ServiceCard from './components/common/ServiceCard'

<ServiceCard service={{
  icon: "🎨",
  title: "Brand Identity",
  description: "Creating memorable...",
  gradient: "from-purple-500 to-pink-500",
  features: ["Logo Design", "Brand Guidelines"]
}} />

// Props:
// - service: object with { icon, title, description, gradient, features[] }
```

```jsx
// ClientCard
import ClientCard from './components/common/ClientCard'

<ClientCard
  name="TechCorp"
  logo="🏢"
  color="from-blue-500 to-cyan-500"
/>

// Props:
// - name: string
// - logo: emoji or icon
// - color: gradient class (from-X to-Y)
```

```jsx
// TestimonialCard
import TestimonialCard from './components/common/TestimonialCard'

<TestimonialCard testimonial={{
  name: "John Doe",
  role: "CEO",
  company: "TechCorp",
  avatar: "J",
  gradient: "from-purple-500 to-pink-500",
  rating: 5,
  text: "Amazing work!"
}} />

// Props:
// - testimonial: object with { name, role, company, avatar, gradient, rating, text }
```

---

## 📂 Data Files Reference

### servicesData.js
```javascript
import { servicesData } from '../data/servicesData'

// Array of service objects
// Each service: { icon, title, description, gradient, features[] }
```

### clientsData.js
```javascript
import { clientsData, statsData } from '../data/clientsData'

// clientsData: Array of { name, logo, color }
// statsData: Array of { value, label }
```

### testimonialsData.js
```javascript
import { testimonialsData } from '../data/testimonialsData'

// Array of testimonial objects
// Each: { name, role, company, avatar, gradient, rating, text }
```

---

## 🎨 Common Tailwind Patterns

### Gradients
```jsx
// Background gradients
className="bg-linear-to-r from-purple-600 to-pink-600"
className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900"

// Text gradients
className="bg-linear-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
```

### Responsive Layout
```jsx
// Mobile first
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="text-4xl lg:text-6xl"
className="hidden md:flex"  // Hide on mobile, show on desktop
```

### Hover Effects
```jsx
className="hover:scale-110 transition-transform duration-300"
className="hover:shadow-2xl hover:-translate-y-2"
className="group-hover:translate-x-1"  // Use with parent having 'group' class
```

### Spacing
```jsx
className="space-y-4"  // Vertical spacing between children
className="space-x-4"  // Horizontal spacing between children
className="gap-6"      // Grid/flex gap
```

---

## 🔄 Adding a New Page

### 1. Create Page Component
```jsx
// src/pages/NewPage.jsx
import React from 'react'

const NewPage = () => {
  return (
    <div className="min-h-screen py-24 px-6">
      <h1>New Page</h1>
      {/* Your content */}
    </div>
  )
}

export default NewPage
```

### 2. Add Route in App.jsx
```jsx
import NewPage from './pages/NewPage'

<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="newpage" element={<NewPage />} />
</Route>
```

### 3. Add Link in Navbar (Optional)
```jsx
// src/components/layout/Navbar.jsx
const navLinks = [
  ...
  { name: 'New Page', path: '/newpage', hash: null }
]
```

---

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🎯 Section IDs for Smooth Scroll

```jsx
#home      // HeroSection
#services  // ServicesOverview
#about     // AboutPreview
#clients   // OurTrustedClients
#contact   // Contact section (in Testimonials CTA or Footer)
```

Use in links:
```jsx
<a href="#services">Services</a>
<Link to="/" onClick={() => scrollTo('#services')}>Services</Link>
```

---

## 🎨 Color Palette

### Gradients
- **Purple-Pink**: `from-purple-500 to-pink-500`
- **Yellow-Orange**: `from-yellow-500 to-orange-500`
- **Blue-Cyan**: `from-blue-500 to-cyan-500`
- **Pink-Red**: `from-pink-500 to-red-500`
- **Green-Teal**: `from-green-500 to-teal-500`
- **Indigo-Purple**: `from-indigo-500 to-purple-500`

### Background Colors
- **Dark**: `bg-slate-950`, `bg-slate-900`
- **Light**: `bg-white`, `bg-gray-50`

### Text Colors
- **Light Theme**: `text-gray-900`, `text-gray-600`
- **Dark Theme**: `text-white`, `text-gray-300`, `text-gray-400`

---

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Usage:
```jsx
className="text-base md:text-lg lg:text-xl"
```

---

## ⚡ Performance Tips

1. Use `React.memo()` for expensive components
2. Lazy load pages: `const About = lazy(() => import('./pages/About'))`
3. Optimize images (use next-gen formats)
4. Use `loading="lazy"` on images below the fold
5. Minimize re-renders with `useMemo` and `useCallback`

---

## 🐛 Common Issues & Solutions

### Issue: Component not rendering
**Solution**: Check import paths and component export

### Issue: Styles not applying
**Solution**: Verify Tailwind class names (no typos)

### Issue: Route not working  
**Solution**: Ensure route path matches Link `to` prop

### Issue: Smooth scroll not working
**Solution**: Check element IDs match hash links

### Issue: Mobile menu not closing
**Solution**: Call `setIsMenuOpen(false)` on link click

---

## 📚 Key Files to Know

- `src/App.jsx` - Routing configuration
- `src/main.jsx` - App entry point
- `src/index.css` - Global styles + Tailwind imports
- `src/components/layout/Layout.jsx` - Main layout wrapper
- `src/components/layout/Navbar.jsx` - Navigation
- `src/components/layout/Footer.jsx` - Footer
- `src/data/*` - Content data files

---

**Quick Tip**: Use VS Code's "Go to Definition" (F12) to quickly navigate to component definitions!
