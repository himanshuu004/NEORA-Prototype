# NEORA Clinic Website

A simple, clean React.js + Tailwind CSS landing page for a speech therapy & audiology clinic.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar component
│   ├── Hero.jsx        # Hero section with navbar and slider
│   ├── Slider.jsx      # Image slider component
│   └── Section.jsx     # Reusable section wrapper
├── pages/
│   └── Home.jsx        # Main landing page
├── App.jsx             # Root app component
├── main.jsx            # Entry point
└── index.css           # Tailwind CSS imports
```

## Adding Images

To add your own slider images:
1. Create a `public/images/` folder
2. Add your images (e.g., `slide1.jpg`, `slide2.jpg`, `slide3.jpg`)
3. The slider will automatically use these images

If images are not found, placeholder images will be displayed automatically.

## Features

- Simple, clean UI with Tailwind CSS
- Responsive design
- Auto-sliding image carousel
- Smooth scrolling sections
- No complex dependencies




