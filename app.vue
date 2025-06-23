<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
/**
 * Base styles for the application
 * These styles apply to the entire application
 */
body {
  background: #f9fafb;
}

a {
  text-decoration: none;
}

/* Prose styles for rich text content */
.prose {
  max-width: 65ch;
  color: #374151;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  color: #111827;
  font-weight: 600;
  line-height: 1.25;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.prose h1 {
  font-size: 2.25em;
  margin-top: 0;
}

.prose h2 {
  font-size: 1.875em;
}

.prose h3 {
  font-size: 1.5em;
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  line-height: 1.75;
}

.prose ul,
.prose ol {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-left: 1.625em;
}

.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.prose strong {
  color: #111827;
  font-weight: 600;
}

.prose code {
  color: #1f2937;
  font-weight: 600;
  font-size: 0.875em;
}

.prose pre {
  color: #e5e7eb;
  background-color: #1f2937;
  overflow-x: auto;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.7142857;
  margin-top: 1.7142857em;
  margin-bottom: 1.7142857em;
  border-radius: 0.375rem;
  padding: 0.8571429em 1.1428571em;
}

.prose pre code {
  background-color: transparent;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}
</style> 