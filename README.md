# Modern Portfolio Website

A beautiful, performant, and customizable portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with smooth animations
- **⚡ Fast Performance**: Optimized for speed with Next.js 14 and App Router
- **📱 Fully Responsive**: Works perfectly on all devices and screen sizes
- **🎭 Smooth Animations**: Beautiful transitions using Framer Motion
- **📝 Markdown Content**: Easy content management with Markdown files
- **🎯 SEO Optimized**: Built-in SEO best practices
- **♿ Accessible**: WCAG compliant components
- **🌙 Glass Morphism**: Modern glassmorphism design elements
- **🔧 Easy Customization**: Configure everything without touching code
- **📦 Type Safe**: Full TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this repository**

```bash
git clone <your-repo-url>
cd myprofile
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure your portfolio**

Edit `lib/config.ts` with your personal information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  // ... update all fields
};
```

4. **Add your content**

- Add projects to `content/projects/`
- Add experience to `content/experience/`
- See `INSTRUCTIONS.md` for detailed guide

5. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
myprofile/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and themes
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
│
├── components/            # React components
│   ├── About.tsx         # About section
│   ├── Card.tsx          # Reusable card component
│   ├── Footer.tsx        # Footer with social links
│   ├── Hero.tsx          # Hero/landing section
│   ├── Navbar.tsx        # Navigation bar
│   ├── Section.tsx       # Generic section wrapper
│   └── Skills.tsx        # Skills display with progress bars
│
├── content/              # Markdown content files
│   ├── projects/         # Project showcases
│   ├── experience/       # Work experience
│   ├── education/        # Education (optional)
│   └── certifications/   # Certifications (optional)
│
├── lib/                  # Utility libraries
│   ├── config.ts         # Personal info & site configuration
│   ├── constants.ts      # App-wide constants
│   ├── content.ts        # Content fetching utilities
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Helper functions
│
├── public/               # Static assets
│   └── ...               # Images, icons, etc.
│
├── INSTRUCTIONS.md       # Detailed usage guide
└── README.md            # This file
```

## 🎨 Customization

### Personal Information

Edit `lib/config.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  location: "Your City",
  // ... more fields
};
```

### Skills

Update your skills in `lib/config.ts`:

```typescript
export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    // Add more skills
  ],
  // ... more categories
};
```

### Colors & Theme

Modify color scheme in `app/globals.css`:

```css
:root {
  --background: #0f0f1e;
  --accent-emerald: #10b981;
  --accent-cyan: #06b6d4;
  /* Update colors here */
}
```

### Adding Content

Create new Markdown files in the `content/` folders:

**Project Example** (`content/projects/my-project.md`):

```markdown
---
title: "Amazing Project"
date: "2024-11"
summary: "Brief description"
technologies: ["React", "Node.js"]
link: "https://project-url.com"
featured: true
---

# Full project description here...
```

See `INSTRUCTIONS.md` for complete guide.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [Gray Matter](https://github.com/jonschlinkert/gray-matter) for Markdown parsing
- **Icons**: [Lucide React](https://lucide.dev/)

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- **Netlify**: Use Next.js plugin
- **AWS Amplify**: Full Next.js support
- **Railway**: Easy deployment
- **Docker**: Production Dockerfile included

## 📖 Documentation

- **[INSTRUCTIONS.md](./INSTRUCTIONS.md)**: Complete guide for content management
- **Configuration**: See `lib/config.ts` comments
- **Components**: Check individual component files for props

## 🎯 Features Breakdown

### Hero Section
- Eye-catching landing with animated gradients
- Call-to-action buttons
- Smooth scroll indicators

### About Section
- Personal information display
- Profile card with contact details
- Rich text content support

### Skills Section
- Visual skill progress bars
- Categorized skills (Frontend, Backend, Tools)
- Animated on scroll

### Projects Section
- Grid layout with hover effects
- Expandable modal for details
- Featured project highlighting
- Technology tags

### Experience Section
- Timeline-style display
- Company and role information
- Detailed descriptions
- Technology stack badges

### Footer
- Social media links
- Copyright information
- Back to top button

## 🔧 Troubleshooting

**Content not appearing?**
- Check file extensions are `.md`
- Verify frontmatter formatting
- Ensure files are in correct `content/` subfolder

**Build errors?**
- Clear `.next` folder and rebuild
- Verify all dependencies installed
- Check Node.js version (18+)

**Styling issues?**
- Clear browser cache
- Check Tailwind CSS configuration
- Verify custom CSS syntax

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others

## 📧 Contact

For questions or support, please open an issue or reach out via the contact information in your portfolio.

---

Built with ❤️ using Next.js and modern web technologies.
