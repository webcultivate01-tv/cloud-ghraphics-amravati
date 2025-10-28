# 🎨 Cloud Graphics - Portfolio Website

A modern, stunning portfolio website for Cloud Graphics - a creative design studio specializing in brand identity, digital design, photography, and video production. Built with cutting-edge web technologies and featuring premium animations, glass-morphism effects, and a fully responsive design.

## ✨ Features

- 🎭 **Automated Background Slider** - 3 rotating background images with smooth transitions
- 🌟 **Advanced Visual Effects** - Ken Burns zoom, floating particles, scan lines, gradient overlays
- 💎 **Glass-morphism Design** - Modern frosted glass UI components with backdrop blur
- 🎨 **Premium Animations** - Custom CSS animations (float, twinkle, scan, color-shift, blob)
- 📱 **Fully Responsive** - Mobile-first design with hamburger menu and adaptive layouts
- 🗺️ **Interactive Google Maps** - Embedded studio location with attractive overlay
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **SEO Optimized** - Semantic HTML and proper meta tags

## 🛠️ Technologies Used

### Core Framework
- **React 19.1.1** - Latest React with modern hooks and features
- **Vite 7.1.7** - Next-generation frontend build tool with blazing fast HMR

### Styling & UI
- **Tailwind CSS 4.1.16** - Utility-first CSS framework with custom configurations
- **@tailwindcss/vite 4.1.16** - Tailwind CSS Vite plugin for optimal integration
- Custom CSS Animations - Hand-crafted animations for premium user experience

### Routing
- **React Router DOM 7.9.4** - Declarative routing for React applications

### Code Quality
- **ESLint 9.36.0** - JavaScript linting with custom rules
- **@eslint/js 9.36.0** - ESLint JavaScript configuration
- **eslint-plugin-react-hooks 5.2.0** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh 0.4.22** - ESLint plugin for React Fast Refresh

### Development Tools
- **@vitejs/plugin-react 5.0.4** - Official Vite plugin for React with Fast Refresh
- **@types/react 19.1.16** - TypeScript definitions for React
- **@types/react-dom 19.1.9** - TypeScript definitions for React DOM
- **globals 16.4.0** - Global variables for various environments

## 📁 Project Structure

```
cloud-graphics-amravati/
├── public/
│   ├── bg_img/              # Background images (bg1.jpg, bg2.jpg, bg3.jpg)
│   └── vite.svg
├── src/
│   ├── assets/              # Static assets (images, icons, etc.)
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── ClientCard.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── TestimonialCard.jsx
│   │   ├── Home/            # Home page components
│   │   │   ├── AboutPreview.jsx
│   │   │   ├── CallToAction.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicesOverview.jsx
│   │   │   └── WorkProcess.jsx
│   │   └── Layout/          # Layout components
│   │       ├── Footer.jsx
│   │       ├── Layout.jsx
│   │       └── Navbar.jsx
│   ├── data/
│   │   └── servicesData.js  # Service offerings data
│   ├── pages/               # Page components
│   │   ├── About.jsx
│   │   ├── Contacts.jsx
│   │   ├── Home.jsx
│   │   ├── OurWork.jsx
│   │   └── Services.jsx
│   ├── App.css              # Application styles
│   ├── App.jsx              # Root component with routing
│   ├── index.css            # Global styles & custom animations
│   └── main.jsx             # Application entry point
├── .gitignore
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration

```

## 🎨 Design Features

### Color Scheme
- **Primary**: Violet (400-950 shades)
- **Secondary**: Fuchsia (400-950 shades)
- **Accent**: Indigo (400-950 shades)
- **Background**: Slate (900-950)

### Custom Animations
- `float` / `float-slow` / `float-fast` - Multi-speed floating effects
- `twinkle` - Sparkle opacity pulse (3s)
- `scan` / `scan-slow` - Vertical light beam effects
- `color-shift` - Hue rotation (8s)
- `fade-in-up` - Entry animation (0.6s)
- `blob` - Morphing transformation (7s)
- `gradient` - Background position shift (3s)

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** or **pnpm**
- **Git** (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/webcultivate01-tv/cloud-ghraphics-amravati.git
   cd cloud-ghraphics-amravati
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```
   
   Or using pnpm:
   ```bash
   pnpm install
   ```

3. **Add background images**
   
   Place your background images in the `public/bg_img/` directory:
   - `bg1.jpg`
   - `bg2.jpg`
   - `bg3.jpg`

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5174` (or another port if 5174 is busy).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎯 Key Components

### HeroSection
- Automated background image slider (5-second intervals)
- Ken Burns zoom effect (12s animation)
- Multi-layered visual effects (particles, gradients, vignette)
- Responsive stat cards and category cards

### Navbar
- Fixed position with scroll detection
- Hamburger menu for mobile devices
- Full-screen mobile overlay menu
- Smooth transitions and backdrop blur

### ServicesOverview
- Glass-morphism service cards
- Animated section headers with badges
- Premium CTA section with stats
- Trust indicators with checkmarks
- Responsive grid layout (1→2→3 columns)

### Footer
- 4-column responsive grid layout
- Interactive Google Maps integration
- Animated gradient borders
- Social media links with SVG icons
- Contact information with hover effects
- Glass-morphism overlay card on map

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Configuration

### Vite Configuration
The project uses Vite with React plugin and Tailwind CSS integration. See `vite.config.js` for details.

### ESLint Configuration
Custom ESLint rules for React and modern JavaScript. See `eslint.config.js` for configuration.

### Tailwind CSS
Using Tailwind CSS v4 with custom gradients (`bg-linear-to-*` syntax) and extended color palette.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Cloud Graphics.

## 👥 Author

**Cloud Graphics**
- Location: Amravati, Maharashtra, India
- Email: hello@cloudgraphics.com
- Phone: +91 98765 43210

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Tailwind CSS team for the utility-first CSS framework
- The open-source community for inspiration and tools

---

Made by "Om Dhage" and Guided by "Tejas Meher" | © 2025 All Rights Reserved
