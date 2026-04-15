import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

import CodeBlockPre from './app/components/CodeBlockPre'

const themeComponents = getThemeComponents()

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...themeComponents,
        ...components,
        pre: CodeBlockPre
    }
}
