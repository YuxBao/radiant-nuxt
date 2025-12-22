---
title: "Modern CSS Techniques"
description: "Explore powerful features of modern CSS to elevate your frontend skills."
date: "2024-03-01"
author: "Yux Bao"
tags: ["CSS", "Web Design", "Frontend"]
---

CSS has evolved into a powerful styling language. Let's look at some best practices for modern CSS.

## CSS Variables

CSS Variables (Custom Properties) make theme management simple:

```css
:root {
  --primary-color: #3b82f6;
  --text-color: #1f2937;
  --spacing-unit: 8px;
}

.button {
  background: var(--primary-color);
  color: white;
  padding: calc(var(--spacing-unit) * 2);
}
```

## Flexbox Layout

Flexbox makes layout simple and intuitive:

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1;
}
```

## Grid Layout

Grid provides two-dimensional layout capabilities:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

## Responsive Design

Using modern media queries:

```css
/* Mobile First */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

## Container Queries

New container queries make components more independent:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

## Modern Selectors

```css
/* :is() - Simplify selectors */
:is(h1, h2, h3) {
  line-height: 1.2;
}

/* :where() - Low specificity */
:where(ul, ol) li {
  margin-bottom: 0.5rem;
}

/* :has() - Parent selector */
.card:has(img) {
  padding: 0;
}
```

## CSS Animations

Smooth animations improve user experience:

```css
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Gradients and Shadows

```css
.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## Summary

Mastering these modern CSS techniques allows you to create more beautiful, responsive, and high-performance web pages.
