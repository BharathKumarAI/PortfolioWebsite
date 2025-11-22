# Portfolio Content Management Guide

Your portfolio is designed for easy content management without touching code. All content is managed through Markdown files and configuration files.

## Quick Start

1. **Update Personal Information**: Edit `lib/config.ts` with your details
2. **Add Projects**: Create `.md` files in `content/projects/`
3. **Add Experience**: Create `.md` files in `content/experience/`
4. **Customize Skills**: Edit the skills object in `lib/config.ts`

## Project Structure

```
myprofile/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx         # About section
│   ├── Card.tsx          # Content card component
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation
│   ├── Section.tsx       # Generic section wrapper
│   └── Skills.tsx        # Skills section
├── content/              # Content directory (Markdown files)
│   ├── projects/         # Project entries
│   ├── experience/       # Work experience entries
│   ├── education/        # Education entries (optional)
│   └── certifications/   # Certifications (optional)
├── lib/                  # Utility libraries
│   ├── config.ts         # Personal info & configuration
│   ├── constants.ts      # App constants
│   ├── content.ts        # Content fetching functions
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Configuration File (`lib/config.ts`)

### Personal Information

Edit the `personalInfo` object:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  location: "Your City, Country",
  // ... more fields
};
```

### Skills

Update the `skills` object with your technical skills:

```typescript
export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    // Add more...
  ],
  backend: [
    { name: "Node.js", level: 85 },
    // Add more...
  ],
  tools: [
    { name: "Git", level: 90 },
    // Add more...
  ]
};
```

### Social Links

Update your social media links:

```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "mailto:your.email@example.com",
}
```

## Content Management

### Adding a New Project

1. Create a new file: `content/projects/project-name.md`
2. Add frontmatter and content:

```markdown
---
title: "Project Title"
date: "2024-11"
summary: "Short description for the card."
technologies: ["React", "Node.js", "PostgreSQL"]
link: "https://project-url.com"
github: "https://github.com/you/project"
featured: true
category: "Full Stack"
---

# Project Title

Detailed description of your project...

## Features
- Feature 1
- Feature 2

## Technical Details
...
```

### Adding Work Experience

1. Create a new file: `content/experience/company-name.md`
2. Add frontmatter and content:

```markdown
---
title: "Job Title"
company: "Company Name"
date: "2022 - Present"
location: "City, Country"
summary: "Brief description of your role."
technologies: ["Tech 1", "Tech 2", "Tech 3"]
featured: true
---

# Job Title

## Responsibilities
- Responsibility 1
- Responsibility 2

## Achievements
- Achievement 1
- Achievement 2
```

### Frontmatter Fields

#### Common Fields (All Content Types)
- `title`: Entry title (required)
- `date`: Date or date range (required)
- `summary`: Short description for cards (required)
- `technologies`: Array of technologies used
- `featured`: Boolean, shows in featured sections
- `content`: The markdown body below the frontmatter

#### Project-Specific Fields
- `link`: Live project URL
- `github`: GitHub repository URL
- `category`: Project category (e.g., "Full Stack", "Mobile")
- `image`: Project screenshot path

#### Experience-Specific Fields
- `company`: Company name
- `location`: Job location

## Adding New Sections

To add a new content section (e.g., "Education"):

1. **Create content folder**: `content/education/`
2. **Add content files**: Create `.md` files in the folder
3. **Update types**: Add to `ContentType` in `lib/types.ts`:
   ```typescript
   export type ContentType = 'projects' | 'experience' | 'education';
   ```
4. **Update page**: In `app/page.tsx`, add:
   ```typescript
   const education = getSortedContentData('education');
   
   <Section
     id="education"
     title="Education"
     items={education}
   />
   ```
5. **Update navigation**: Add to `NAV_LINKS` in `lib/constants.ts`:
   ```typescript
   { name: 'Education', href: '#education', id: 'education' }
   ```

## Styling & Customization

### Colors
Edit color scheme in `app/globals.css`:
```css
:root {
  --accent-emerald: #10b981;
  --accent-cyan: #06b6d4;
  --accent-violet: #8b5cf6;
}
```

### Fonts
Change fonts in `app/layout.tsx`:
```typescript
import { Inter, Space_Grotesk } from "next/font/google";
```

### Animations
Adjust animation timings in `lib/constants.ts`:
```typescript
export const ANIMATION = {
  DURATION: { FAST: 0.3, NORMAL: 0.5, SLOW: 0.8 },
};
```

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Tips

1. **Images**: Place images in `public/` folder and reference as `/image.jpg`
2. **Featured Content**: Set `featured: true` to highlight important items
3. **Sorting**: Content is sorted by date (newest first) and featured status
4. **Markdown**: Supports full markdown syntax including code blocks, lists, and links
5. **Live Reload**: Development server auto-refreshes on content changes

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Build with `npm run build`
- Deploy the `.next` folder
- Set Node.js version to 18+

## Troubleshooting

- **Content not showing**: Check file is in correct folder and has `.md` extension
- **Styling issues**: Clear browser cache and rebuild
- **Build errors**: Ensure all frontmatter fields are properly formatted
- **Images not loading**: Verify images are in `public/` folder

## Support

For issues or questions:
1. Check this guide first
2. Review example content files
3. Check Next.js documentation
4. Verify markdown formatting

---

Remember: You rarely need to touch the code. Most customization happens through:
- `lib/config.ts` for personal info and skills
- `content/` folder for projects and experience
- `app/globals.css` for colors and styles
