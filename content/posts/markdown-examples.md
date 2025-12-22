---
title: "Markdown Syntax Guide"
description: "A comprehensive guide to the Markdown syntax supported by Radiant."
date: "2024-03-22"
author: "Yux Bao"
tags: ["Markdown", "Guide", "Syntax"]
---

This post demonstrates the rendering of various Markdown elements in the Radiant theme.

## Typography

### Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

### Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### Blockquotes

> The only way to do great work is to love what you do.
>
> — Steve Jobs

## Lists

### Unordered

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Ordered

1. First step
2. Second step
3. Third step

## Code

### Inline Code

You can use `console.log('Hello World')` to print to the console.

### Code Blocks

```typescript
interface User {
  id: number;
  name: string;
  role: "admin" | "user";
}

function getUser(id: number): User {
  return {
    id,
    name: "John Doe",
    role: "admin",
  };
}
```

## Custom Components

::grid{cols=2}
::card{title="Component 1"}
This is a card inside a grid.
::
::card{title="Component 2"}
This is another card inside a grid.
::
::

::alert{type="success"}
**Success!** The operation completed successfully.
::
