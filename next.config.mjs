import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nextra from 'nextra';

const withNextra = nextra({});
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default withNextra({
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    outputFileTracingRoot: __dirname,
    turbopack: {
        resolveAlias: {
            'next-mdx-import-source-file': './mdx-components.tsx'
        }
    }
});
