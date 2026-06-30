# AGENTS.md

## Project Overview

This project is a modern QR Code Generator built with React, JavaScript, and Tailwind CSS.

The application allows users to:

- Generate QR codes from plain text
- Generate QR codes from URLs
- Preview QR codes instantly
- Download generated QR codes
- Use the application on desktop, tablet, and mobile devices

The project prioritizes clean architecture, reusable components, responsive design, and maintainable code.

---

# Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- qrcode.react
- Framer Motion (animations)
- React Icons
- Lucide React

---

# Folder Structure

src/

- assets/ → images, icons, static assets
- components/ → reusable UI components
- pages/ → application pages
- App.jsx
- main.jsx

---

# Development Guidelines

## Components

- Keep components reusable.
- Avoid duplicated JSX.
- If UI appears more than once, extract it into a component.
- Prefer small focused components.

## Pages

Pages should only be responsible for layout and page-level logic.

Business logic should be delegated to components whenever possible.

## Styling

Use Tailwind CSS only.

Avoid inline styles unless absolutely necessary.

Maintain consistent spacing, typography, colors, and responsive behavior.

## Responsiveness

The application must work properly on:

- Mobile
- Tablet
- Desktop

Use responsive Tailwind utilities whenever possible.

## Animations

Use Framer Motion for:

- Page transitions
- Hover effects
- Small entrance animations

Avoid excessive animations.

## Icons

Prefer:

- Lucide React
- React Icons

Do not import icon libraries that are not already used.

## Assets

Store all static assets inside:

src/assets

Do not place images inside components.

## Routing

Use React Router DOM.

Pages belong inside:

src/pages

---

# Code Style

- Use functional components.
- Prefer arrow functions.
- Use meaningful variable names.
- Keep files organized.
- Remove unused imports.
- Avoid unnecessary comments.
- Write readable code instead of clever code.

---

# Performance

- Avoid unnecessary re-renders.
- Reuse components.
- Keep bundle size small.
- Lazy load pages if needed.

---

# Goal

Maintain a clean, scalable, modern QR Code Generator with a premium user experience and maintainable codebase.