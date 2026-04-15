import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

const navbar = <Navbar logo={<strong>Morphis</strong>} projectLink="https://github.com/kentng201/morphis" />

const footer = (
    <Footer>
        MIT {new Date().getFullYear()} © Morphis. Built with Nextra.
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
            docsRepositoryBase="https://github.com/kentng201/morphis/tree/development"
            footer={footer}
            editLink="Edit this page on GitHub"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            toc={{ backToTop: true }}
        >
            {children}
        </Layout>
    )
}