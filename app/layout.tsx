import type { Metadata } from 'next'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata: Metadata = {
    title: {
        default: 'Morphis Docs',
        template: '%s | Morphis Docs'
    },
    description:
        'Official documentation for Morphis, a modern TypeScript web framework inspired by Laravel and powered by Bun.'
}

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head
                color={{
                    hue: { light: 34, dark: 34 },
                    saturation: { light: 25, dark: 42 },
                    lightness: { light: 44, dark: 68 }
                }}
                backgroundColor={{
                    light: '#f6f6f4',
                    dark: '#2e251e'
                }}
            >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body>{children}</body>
        </html>
    )
}
