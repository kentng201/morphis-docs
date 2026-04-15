import type { Metadata } from 'next'
import Link from 'next/link'
import { LandingThemeToggle } from './LandingThemeToggle'

const features = [
    {
        title: 'Bun-first execution',
        description:
            'Run an opinionated HTTP stack on Bun with a CLI that gets a project online without hand-assembling every folder.'
    },
    {
        title: 'Laravel-shaped structure',
        description:
            'Controllers, services, validators, transformers, and middleware land where you expect them so teams can move without re-debating architecture.'
    },
    {
        title: 'Scaffold, then ship',
        description:
            'Morphis generates the boring parts fast, then leaves the runtime and source tree plain enough to debug and extend.'
    }
] as const

const commandLines = [
    {
        comment: 'Install Morphis globally',
        command: 'bun i morphis -g'
    },
    {
        comment: 'Scaffold a new backend',
        command: 'morphis new my-backend'
    },
    {
        comment: 'Enter the project folder',
        command: 'cd my-backend'
    },
    {
        comment: 'Install project dependencies',
        command: 'bun install'
    },
    {
        comment: 'Start local development',
        command: 'bun dev'
    }
] as const

const docLinks = [
    { href: '/docs/getting-started', label: 'Get Started' },
    { href: '/docs/api-reference', label: 'API Reference' },
    { href: '/docs/http/middleware', label: 'Middleware' },
    { href: '/docs/cli', label: 'CLI' }
] as const

export const metadata: Metadata = {
    title: 'Morphis',
    description:
        'Build TypeScript APIs with Bun-first tooling, Laravel-style structure, and Morphis CLI scaffolding.'
}

export default function HomePage() {
    return (
        <main className="landing-shell">
            <div className="landing-grid" aria-hidden="true">
                <div />
                <div />
                <div />
                <div />
            </div>

            <header className="landing-nav">
                <Link href="/" className="landing-brand" aria-label="Morphis home">
                    <span className="landing-brand-mark" />
                    <span className="landing-brand-wordmark">morphis</span>
                </Link>

                <nav className="landing-nav-links" aria-label="Primary">
                    {docLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="landing-nav-controls">
                    <LandingThemeToggle />
                    <a
                        className="landing-github"
                        href="https://github.com/kentng201/morphis"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Morphis GitHub repository"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fill="currentColor"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.344-3.369-1.344-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.297 2.748-1.027 2.748-1.027.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
                            />
                        </svg>
                    </a>
                </div>
            </header>

            <section className="landing-hero">
                <div className="landing-copy">
                    <p className="landing-eyebrow">Opinionated HTTP framework for Bun</p>
                    <h1>Flow, perfected for backend teams.</h1>
                    <p className="landing-summary">
                        Morphis gives you Bun-native performance, a Laravel-shaped codebase, and a CLI that scaffolds the pieces you would otherwise rebuild on every service.
                    </p>

                    <div className="landing-actions">
                        <Link className="landing-primary-action" href="/docs/getting-started">
                            Get Started
                        </Link>
                        <Link className="landing-secondary-action" href="/docs/core-concepts">
                            Explore Concepts
                        </Link>
                    </div>

                    <div className="landing-feature-list">
                        {features.map((feature) => (
                            <article key={feature.title} className="landing-feature-card">
                                <h2>{feature.title}</h2>
                                <p>{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="landing-code-panel">
                    <div className="landing-code-ornament" />
                    <div className="landing-code-card">
                        <div className="landing-code-header">
                            <span />
                            <span />
                            <span />
                        </div>
                        <pre>
                            <code>
                                {commandLines.map((line) => (
                                    <span key={line.command} className="landing-code-line">
                                        <span className="landing-code-comment">// {line.comment}</span>
                                        <span className="landing-code-command">{line.command}</span>
                                    </span>
                                ))}
                            </code>
                        </pre>
                    </div>

                    <div className="landing-code-caption">
                        <strong>Fastest path to a running Morphis app</strong>
                        <p>
                            Start with the published CLI, scaffold a backend, install dependencies, and boot the dev server in five commands.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="landing-footer">
                <span>v0.6.3</span>
                <span></span>
                <Link href="/docs/getting-started">Open the installation guide</Link>
            </footer>
        </main>
    )
}