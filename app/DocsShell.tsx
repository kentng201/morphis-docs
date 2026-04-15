import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

const navbar = (
    <Navbar
        logo={
            <span className="landing-brand" aria-label="Morphis home">
                <span className="landing-brand-mark" />
                <span className="landing-brand-wordmark">morphis</span>
            </span>
        }
        projectLink="https://github.com/kentng201/morphis"
    />
)

const footer = (
    <Footer style={{ paddingBlock: '0.75rem' }}>
        <span style={{ fontSize: '0.82rem', opacity: 0.7 }}>
            MIT {new Date().getFullYear()} © Morphis. Built with{' '}
            <a className="docs-footer-link" href="https://nextra.site" target="_blank" rel="noreferrer">
                Nextra
            </a>
            .
        </span>
    </Footer>
)

export default async function DocsShell({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Layout
            banner={<></>}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/kentng201/morphis-docs/tree/master"
            footer={footer}
            editLink="Edit this page on GitHub"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            toc={{ backToTop: 'Scroll to top' }}
        >
            {children}
        </Layout>
    )
}