import DocsShell from '../DocsShell'

export default function RoadmapLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return <DocsShell>{children}</DocsShell>
}