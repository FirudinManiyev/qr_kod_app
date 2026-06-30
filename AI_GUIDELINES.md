# AI_GUIDELINES.md

## Purpose

This file defines how AI assistants should contribute to this repository.

Any generated code should follow these rules.

---

# General Rules

- Do not rewrite the entire project unless requested.
- Preserve the existing folder structure.
- Reuse existing components whenever possible.
- Avoid duplicate code.
- Keep changes minimal and focused.
- Do not introduce unnecessary dependencies.

---

# Tech Stack

Framework:
- React

Language:
- JavaScript

Styling:
- Tailwind CSS

Libraries:
- React Router DOM
- qrcode.react
- Framer Motion
- React Icons
- Lucide React

---

# Components

Whenever a piece of UI can be reused, create a component.

Examples:

- Button
- Input
- QR Preview
- Download Button
- Navbar
- Footer
- Card
- Section
- Modal

Do not duplicate component code.

---

# Pages

Current pages include:

- Welcome Page
- QR Generator Page

Pages should compose components rather than contain large blocks of UI.

---

# Styling Rules

Only use Tailwind CSS.

Maintain consistent:

- spacing
- font sizes
- border radius
- colors
- shadows

Use responsive utilities.

Avoid inline CSS.

---

# Responsive Design

Every feature must support:

- Mobile
- Tablet
- Desktop

Test layouts before introducing new UI.

---

# Animations

Use Framer Motion only where it improves UX.

Examples:

- fade
- slide
- scale
- hover transitions

Avoid distracting animations.

---

# QR Features

The application generates QR codes for:

- Text
- URLs

Users can:

- Preview QR code
- Download QR code

Future features should integrate naturally into the existing architecture.

---

# File Organization

assets/

Only static assets.

components/

Reusable UI only.

pages/

Page components only.

Avoid placing page logic inside reusable components.

---

# Code Quality

Always:

- Keep components small.
- Use descriptive names.
- Remove dead code.
- Keep imports clean.
- Prefer readability.
- Write maintainable code.

Never:

- Duplicate JSX.
- Hardcode repeated values.
- Create overly large components.
- Mix multiple responsibilities inside one component.

---

# Preferred Development Approach

When implementing a feature:

1. Understand the current architecture.
2. Reuse existing components.
3. Create new reusable components if needed.
4. Maintain responsive behavior.
5. Keep styling consistent.
6. Keep code simple.
7. Ensure no existing functionality breaks.

---

# Objective

Produce production-ready React code that is clean, reusable, responsive, and easy to maintain while preserving the project's architecture and design consistency.