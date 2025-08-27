# Ajay's Blog

A fast, accessible cybersecurity blog and mentoring site built with React, Vite, TailwindCSS, Framer Motion, and Lucide icons.  
**Designed and authored by [navakt](https://github.com/navakt).**

## Features

- Modern, responsive UI
- Dark mode (auto and toggle)
- Blog post search & filter
- Animated sections (Framer Motion)
- Accessible navigation and skip links
- Newsletter (localStorage, privacy-friendly)
- Contact form (mailto + local fallback)
- Ready for GitHub Pages deployment

## Quick Start

```sh
git clone https://github.com/navakt/ajaysblog.git
cd ajaysblog
npm install
npm run dev
```

To build for production:

```sh
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Push your code to the `main` branch.
2. In your repo settings, set GitHub Pages to deploy from the `/dist` folder.
3. Update `vite.config.js`'s `base` if your repo is not at the root.

## Customization

- Edit `src/App.jsx` for content, blog posts, sections, and design.
- TailwindCSS makes styling fast. See `src/index.css` and `tailwind.config.js`.

## License

MIT © [navakt](https://github.com/navakt)