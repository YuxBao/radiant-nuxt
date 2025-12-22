---
title: "Radiant Theme Features"
description: "Explore the features and design details of the Radiant theme."
date: "2024-03-21"
author: "Yux Bao"
tags: ["Features", "Design", "English"]
---

## Glassmorphism Design

I adopted the **Glassmorphism** style, creating a transparent, modern texture through background blurring and semi-transparent masks.

::grid{cols=2}
::grid-item

### Visual Hierarchy

Distinguishing content hierarchy through shadows and blur levels, rather than simple borders.
::
::grid-item

### Color System

Using low-saturation cool tones (Slate/Gray) to reduce visual fatigue.
::
::

## Powerful Markdown Components

Radiant comes with built-in MDC (Markdown Components) to enrich your article layout.

### Card

::card{title="Tip"}
This is a card component with a title, suitable for displaying important information.
::

### Badge

You can insert inline :badge{type="success"}[status tags] or :badge{type="warning"}[warning tags].

### Alert

::alert{type="info"}
This is an info alert box.
::

::alert{type="danger"}
This is a danger alert box.
::

### Radiant Text

You can apply a gradient glow effect to text using the `:radiant-text` component:

:radiant-text[This text glows with a gradient effect.]

## Responsive Layout

Whether on wide-screen monitors or mobile devices, Radiant provides a perfect reading experience. The sidebar table of contents automatically hides on small screens to ensure content readability.
