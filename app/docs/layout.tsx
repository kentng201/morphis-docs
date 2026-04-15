import DocsShell from '../DocsShell'

export default function DocsLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return <DocsShell>{children}</DocsShell>
}