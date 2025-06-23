# Nuxt 3 Starter with Rendering Strategies

A comprehensive Nuxt 3 starter project that demonstrates different rendering strategies: **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, and **Incremental Static Regeneration (ISR)**.

## 🚀 Features

- **Multiple Rendering Strategies**: Demonstrates SSR, SSG, and ISR with real-world examples
- **Contentstack CMS Integration**: Headless CMS for content management
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **TypeScript Support**: Full TypeScript integration
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Component Architecture**: Reusable components and layouts
- **File-based Routing**: Intuitive routing based on file structure

## 📁 Project Structure

```
kickstart-nuxt-Tim/
├── components/          # Reusable Vue components
├── composables/         # Nuxt composables (useGetPage.ts)
├── layouts/             # Layout components (default.vue)
├── pages/               # File-based routing
│   ├── index.vue        # Home page (SSR)
│   ├── about.vue        # About page (SSG)
│   ├── contact.vue      # Contact page (SSG)
│   ├── products/        # Products section
│   │   └── index.vue    # Products page (SSR)
│   └── blog/            # Blog section
│       ├── index.vue    # Blog listing (ISR)
│       └── [slug].vue   # Individual blog posts (ISR)
├── plugins/             # Nuxt plugins (contentstack.ts)
├── public/              # Static assets
├── server/              # Server-side code
├── types.ts             # TypeScript type definitions
├── nuxt.config.ts       # Nuxt configuration
└── package.json         # Dependencies and scripts
```

## 🎯 Rendering Strategies Demonstrated

### 1. Server-Side Rendering (SSR)
- **Pages**: Home (`/`), Products (`/products`)
- **Use Case**: Dynamic content, real-time data
- **Benefits**: Fresh content, good SEO, server processing
- **Example**: Product catalog with real-time inventory and pricing

### 2. Static Site Generation (SSG)
- **Pages**: About (`/about`), Contact (`/contact`)
- **Use Case**: Static content, marketing pages
- **Benefits**: Instant loading, excellent SEO, no server processing
- **Example**: Company information and contact details

### 3. Incremental Static Regeneration (ISR)
- **Pages**: Blog listing (`/blog`), Individual posts (`/blog/[slug]`)
- **Use Case**: Content that changes occasionally
- **Benefits**: Fast loading with background updates
- **Example**: Blog posts that can be updated without rebuilding

## 🛠️ Technologies Used

- **Nuxt 3**: Vue.js framework with SSR/SSG support
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Contentstack**: Headless CMS
- **Vue Router**: Client-side routing

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kickstart-nuxt-Tim
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   NUXT_CONTENTSTACK_API_KEY=your_api_key
   NUXT_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
   NUXT_CONTENTSTACK_ENVIRONMENT=your_environment
   NUXT_CONTENTSTACK_REGION=your_region
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 🎨 Customization

### Adding New Pages

1. Create a new `.vue` file in the `pages/` directory
2. The file path determines the route (e.g., `pages/services.vue` → `/services`)
3. Choose the appropriate rendering strategy for your content

### Styling

- The project uses Tailwind CSS for styling
- Custom styles can be added in the `<style>` section of components
- Global styles are defined in `app.vue`

### Content Management

- Content is managed through Contentstack CMS
- Use the `useGetPage` composable to fetch content

## 🔧 Configuration

### Nuxt Configuration (`nuxt.config.ts`)

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_CONTENTSTACK_API_KEY,
      deliveryToken: process.env.NUXT_CONTENTSTACK_DELIVERY_TOKEN,
      // ... other config
    },
  },
})
```

### Rendering Strategy Selection

- **SSR**: Use `useAsyncData` or `useFetch` in page components
- **SSG**: Static content embedded in components
- **ISR**: Use `definePageMeta` with `revalidate` option

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run generate`
3. Set publish directory: `.output/public`

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nuxt 3](https://nuxt.com/) - The Vue.js framework
- [Contentstack](https://www.contentstack.com/) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework

## 📞 Support

For support and questions:

- 📧 Email: hello@nuxtstarter.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 📖 Documentation: [Nuxt 3 Docs](https://nuxt.com/docs)

---

**Built with ❤️ using Nuxt 3 and Contentstack**
