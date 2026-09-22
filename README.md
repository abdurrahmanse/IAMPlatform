# ▲ / IAMPlatform

**Production-grade Turborepo template for Next.js apps.**

<div>
  <img src="https://img.shields.io/npm/dy/IAMPlatform" alt="" />
  <img src="https://img.shields.io/npm/v/IAMPlatform" alt="" />
  <img src="https://img.shields.io/github/license/abdurrahmanse/IAMPlatform" alt="" />
</div>

## Overview

[IAMPlatform](https://github.com/abdurrahmanse/IAMPlatform) is a production-grade [Turborepo](https://turborepo.com) template for [Next.js](https://nextjs.org/) apps. It's designed to be a comprehensive starting point for building SaaS applications, providing a solid, opinionated foundation with minimal configuration required.

Built on a decade of experience building web applications, IAMPlatform balances speed and quality to help you ship thoroughly-built products faster.

### Philosophy

IAMPlatform is built around five core principles:

- **Fast** — Quick to build, run, deploy, and iterate on
- **Cheap** — Free to start with services that scale with you
- **Opinionated** — Integrated tooling designed to work together
- **Modern** — Latest stable features with healthy community support
- **Safe** — End-to-end type safety and robust security posture

## Demo

Experience IAMPlatform in action:

- [Web](https://demo.IAMPlatform.com) — Marketing website
- [App](https://app.demo.IAMPlatform.com) — Main application
- [Storybook](https://storybook.demo.IAMPlatform.com) — Component library
- [API](https://api.demo.IAMPlatform.com/health) — API health check

## Features

IAMPlatform comes with batteries included:

### Apps

- **Web** — Marketing site built with Tailwind CSS and TWBlocks
- **App** — Main application with authentication and database integration
- **API** — RESTful API with health checks and monitoring
- **Docs** — Documentation site powered by Mintlify
- **Email** — Email templates with React Email
- **Storybook** — Component development environment

### Packages

- **Authentication** — Powered by [Clerk](https://clerk.com)
- **Database** — Type-safe ORM with migrations
- **Design System** — Comprehensive component library with dark mode
- **Payments** — Subscription management via [Stripe](https://stripe.com)
- **Email** — Transactional emails via [Resend](https://resend.com)
- **Analytics** — Web ([Google Analytics](https://developers.google.com/analytics)) and product ([Posthog](https://posthog.com))
- **Observability** — Error tracking ([Sentry](https://sentry.io)), logging, and uptime monitoring ([BetterStack](https://betterstack.com))
- **Security** — Application security ([Arcjet](https://arcjet.com)), rate limiting, and secure headers
- **CMS** — Type-safe content management for blogs and documentation
- **SEO** — Metadata management, sitemaps, and JSON-LD
- **AI** — AI integration utilities
- **Webhooks** — Inbound and outbound webhook handling
- **Collaboration** — Real-time features with avatars and live cursors
- **Feature Flags** — Feature flag management
- **Cron** — Scheduled job management
- **Storage** — File upload and management
- **Internationalization** — Multi-language support
- **Notifications** — In-app notification system

## Getting Started

### Prerequisites

- Node.js 20+
- [Bun](https://bun.sh) (or npm/yarn/pnpm)
- [Stripe CLI](https://docs.stripe.com/stripe-cli) for local webhook testing

### Installation

Create a new IAMPlatform project:

```sh
npx IAMPlatform@latest init
```

### Setup

1. Configure your environment variables
2. Set up required service accounts (Clerk, Stripe, Resend, etc.)
3. Run the development server

For detailed setup instructions, read the [documentation](https://www.IAMPlatform.com/docs).

## Structure

IAMPlatform uses a monorepo structure managed by Turborepo:

```
IAMPlatform/
├── apps/           # Deployable applications
│   ├── web/        # Marketing website (port 3001)
│   ├── app/        # Main application (port 3000)
│   ├── api/        # API server
│   ├── docs/       # Documentation
│   ├── email/      # Email templates
│   └── storybook/  # Component library
└── packages/       # Shared packages
    ├── design-system/
    ├── database/
    ├── auth/
    └── ...
```

Each app is self-contained and independently deployable. Packages are shared across apps for consistency and maintainability.

## Documentation

Full documentation is available at [IAMPlatform.com/docs](https://www.IAMPlatform.com/docs), including:

- Detailed setup guides
- Package documentation
- Migration guides for swapping providers
- Deployment instructions
- Examples and recipes

## Contributing

We welcome contributions! See the [contributing guide](https://github.com/abdurrahmanse/IAMPlatform/blob/main/.github/CONTRIBUTING.md) for details.

## Contributors

<a href="https://github.com/abdurrahmanse/IAMPlatform/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=abdurrahmanse/IAMPlatform" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

MIT
