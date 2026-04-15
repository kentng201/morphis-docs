import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
    title: {
        default: 'Morphis Docs',
        template: '%s | Morphis Docs'
    },
    description:
        'Official documentation for Morphis, a modern TypeScript web framework inspired by Laravel and powered by Bun.'
}

const banner = (
    <Banner storageKey="morphis-docs-banner">
        Morphis documentation is now live with Nextra.
    </Banner>
)

const navbar = <Navbar logo={<strong>Morphis</strong>} projectLink="https://github.com/kentng201/morphis" />

const footer = (
    <Footer>
        MIT {new Date().getFullYear()} © Morphis. Built with Nextra.
    </Footer>
)

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body>
                <Layout
                    banner={<></>}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/kentng201/morphis/tree/development"
                    footer={footer}
                    editLink="Edit this page on GitHub"
                    sidebar={{ defaultMenuCollapseLevel: 1 }}
                    toc={{ backToTop: true }}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
