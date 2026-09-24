<div align="center">
  <h1>▲ IAMPlatform</h1>
  <p><b>The ultimate production-grade Turborepo template for Next.js applications.</b></p>

  <div>
    <img src="https://img.shields.io/npm/dy/IAMPlatform" alt="Downloads" />
    <img src="https://img.shields.io/npm/v/IAMPlatform" alt="Version" />
    <img src="https://img.shields.io/github/license/abdurrahmanse/IAMPlatform" alt="License" />
  </div>
</div>

---

## 🌟 Overview

[IAMPlatform](https://github.com/abdurrahmanse/IAMPlatform) is a powerful, production-ready [Turborepo](https://turborepo.com) template purpose-built for [Next.js](https://nextjs.org/) ecosystem. It serves as a comprehensive starting point for creating modern SaaS applications, offering a solid, opinionated architecture that drastically reduces setup time.

Forged from a decade of web application development experience, IAMPlatform strikes the perfect balance between development velocity and code quality, empowering you to ship robust products faster.

## 💡 Our Philosophy

IAMPlatform is guided by five foundational principles:

- ⚡ **Fast** — Optimized for rapid building, running, deployment, and seamless iteration.
- 💸 **Cheap** — Start for free with integrated services designed to scale effortlessly with your growth.
- 🎯 **Opinionated** — Carefully curated tooling that works harmoniously out of the box.
- 🚀 **Modern** — Leverages the latest stable features backed by vibrant community support.
- 🛡️ **Safe** — Built with end-to-end type safety and a robust security posture from day one.

## 🖥️ Live Demos

See IAMPlatform in action across our demo environments:

- 🌐 **[Marketing Web](https://demo.IAMPlatform.com)** 
- 📱 **[Main Application](https://app.demo.IAMPlatform.com)** 
- 🎨 **[Storybook UI](https://storybook.demo.IAMPlatform.com)** 
- 🩺 **[API Health Check](https://api.demo.IAMPlatform.com/health)** 

## 🔋 Batteries Included

IAMPlatform comes fully loaded with everything you need:

### 📦 Applications

- **Web** — High-conversion marketing site built with Tailwind CSS and TWBlocks.
- **App** — Core application featuring built-in authentication and database integration.
- **API** — Scalable RESTful API with automated health checks and monitoring.
- **Docs** — Beautiful documentation site powered by Mintlify.
- **Email** — Responsive email templates crafted with React Email.
- **Storybook** — Isolated component development and testing environment.

### 🛠️ Shared Packages

- 🔒 **Authentication** — Powered by [Clerk](https://clerk.com).
- 🗄️ **Database** — Type-safe ORM with automated migrations.
- 💅 **Design System** — Comprehensive, accessible component library with native dark mode.
- 💳 **Payments** — Seamless subscription management via [Stripe](https://stripe.com).
- ✉️ **Email** — Reliable transactional emails via [Resend](https://resend.com).
- 📊 **Analytics** — Web ([Google Analytics](https://developers.google.com/analytics)) and product analytics ([Posthog](https://posthog.com)).
- 👁️ **Observability** — Error tracking ([Sentry](https://sentry.io)) and uptime monitoring ([BetterStack](https://betterstack.com)).
- 🛡️ **Security** — App security ([Arcjet](https://arcjet.com)), rate limiting, and secure HTTP headers.
- 📝 **CMS** — Type-safe content management tailored for blogs and documentation.
- 🔍 **SEO** — Automated metadata management, sitemaps, and JSON-LD generation.
- 🤖 **AI** — Ready-to-use AI integration utilities.
- 🪝 **Webhooks** — Robust inbound and outbound webhook handling.
- 👥 **Collaboration** — Real-time multiplayer features with avatars and live cursors.
- 🚩 **Feature Flags** — Granular feature flag management.
- ⏱️ **Cron** — Dependable scheduled job management.
- 💾 **Storage** — Efficient file upload and asset management.
- 🌍 **Internationalization** — Built-in multi-language support.
- 🔔 **Notifications** — Comprehensive in-app notification system.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 20 or newer
- **[Bun](https://bun.sh)** (Recommended) or npm/yarn/pnpm
- **[Stripe CLI](https://docs.stripe.com/stripe-cli)** (For local webhook testing)

### Installation

Bootstrap a new IAMPlatform project in seconds:

```bash
npx IAMPlatform@latest init
```

### Setup Guide

1. Configure your environment variables.
2. Set up required service accounts (Clerk, Stripe, Resend, etc.).
3. Fire up the development server.

For an in-depth setup walkthrough, visit our [Documentation](https://www.IAMPlatform.com/docs).

## 🏗️ Project Structure

IAMPlatform utilizes a scalable monorepo architecture orchestrated by Turborepo:

```text
IAMPlatform/
├── apps/           # Deployable applications
│   ├── web/        # Marketing website (port 3001)
│   ├── app/        # Main application (port 3000)
│   ├── api/        # API server
│   ├── docs/       # Documentation
│   ├── email/      # Email templates
│   └── storybook/  # Component library
└── packages/       # Shared business logic and utilities
    ├── design-system/
    ├── database/
    ├── auth/
    └── ...
```

*Each app is self-contained and independently deployable. Packages are shared seamlessly across apps to ensure consistency and ease of maintenance.*

## 📚 Documentation

Dive into our comprehensive documentation at [IAMPlatform.com/docs](https://www.IAMPlatform.com/docs) to explore:

- 📖 Detailed setup and configuration guides
- 📦 In-depth package documentation
- 🔄 Provider migration guides
- 🚀 Deployment instructions across various platforms
- 🧑‍🍳 Code examples and recipes

## 🤝 Contributing

We love our contributors! Please review our [Contributing Guide](https://github.com/abdurrahmanse/IAMPlatform/blob/main/.github/CONTRIBUTING.md) to learn how you can help improve IAMPlatform.

## ✨ Contributors

<a href="https://github.com/abdurrahmanse/IAMPlatform/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=abdurrahmanse/IAMPlatform" alt="Contributors" />
</a>

*Made with [contrib.rocks](https://contrib.rocks).*

## 📄 License

This project is licensed under the **MIT License**.
