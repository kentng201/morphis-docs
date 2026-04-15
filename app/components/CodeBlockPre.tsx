'use client'

import type { HTMLAttributes, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

type PreProps = HTMLAttributes<HTMLPreElement> & {
    'data-copy'?: ''
    'data-filename'?: string
    'data-language'?: string
    'data-pagefind-ignore'?: string
    icon?: ReactNode
}

function joinClasses(...values: Array<string | false | null | undefined>) {
    return values.filter(Boolean).join(' ')
}

function CopyIcon() {
    return (
        <svg viewBox="0 0 16 16" aria-hidden="true" className="morphis-copy-button__icon">
            <path
                d="M5.5 2.5A1.5 1.5 0 0 1 7 1h5.5A1.5 1.5 0 0 1 14 2.5V9a1.5 1.5 0 0 1-1.5 1.5H11V12A2 2 0 0 1 9 14H3.5A1.5 1.5 0 0 1 2 12.5V6A2 2 0 0 1 4 4h1.5V2.5Zm1 1.5V2.5a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H11V6A2 2 0 0 0 9 4H6.5Zm3.5 2A1 1 0 0 0 9 5H4A1 1 0 0 0 3 6v6.5a.5.5 0 0 0 .5.5H9a1 1 0 0 0 1-1V6Z"
                fill="currentColor"
            />
        </svg>
    )
}

type CopyButtonProps = {
    onClick: () => void
    isCopied: boolean
}

function CopyButton({ onClick, isCopied }: CopyButtonProps) {
    return (
        <button type="button" className="morphis-copy-button" onClick={onClick}>
            <CopyIcon />
            <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
    )
}

export default function CodeBlockPre({
    children,
    className,
    icon,
    'data-filename': filename,
    'data-pagefind-ignore': pagefindIgnore,
    ...props
}: PreProps) {
    const preRef = useRef<HTMLPreElement>(null)
    const resetTimerRef = useRef<number | null>(null)
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        return () => {
            if (resetTimerRef.current !== null) {
                window.clearTimeout(resetTimerRef.current)
            }
        }
    }, [])

    async function handleCopy() {
        const sourceCode = preRef.current?.querySelector('code')?.textContent ?? ''

        if (!sourceCode) {
            return
        }

        try {
            await navigator.clipboard.writeText(sourceCode)
            setIsCopied(true)

            if (resetTimerRef.current !== null) {
                window.clearTimeout(resetTimerRef.current)
            }

            resetTimerRef.current = window.setTimeout(() => {
                setIsCopied(false)
                resetTimerRef.current = null
            }, 3 * 1000)
        } catch {
            setIsCopied(false)
        }
    }

    const hasCopyButton = true
    const showToolbarInHeader = Boolean(filename)

    return (
        <div data-pagefind-ignore={pagefindIgnore} className="morphis-code-block nextra-code x:relative x:not-first:mt-[1.25em]">
            {showToolbarInHeader ? (
                <div className="morphis-code-toolbar morphis-code-toolbar--header x:flex x:items-center x:gap-2 x:px-4 x:text-xs x:text-gray-700 x:dark:text-gray-200 x:bg-gray-100 x:dark:bg-neutral-900 x:h-12 x:rounded-t-md x:border x:border-b-0 x:border-gray-300 x:dark:border-neutral-700">
                    {icon}
                    <span className="x:truncate">{filename}</span>
                    {hasCopyButton ? <CopyButton onClick={handleCopy} isCopied={isCopied} /> : null}
                </div>
            ) : null}
            {hasCopyButton && !showToolbarInHeader ? (
                <div className="morphis-code-toolbar morphis-code-toolbar--floating">
                    <CopyButton onClick={handleCopy} isCopied={isCopied} />
                </div>
            ) : null}
            <pre
                ref={preRef}
                className={joinClasses(
                    'morphis-code-block-pre x:group x:focus-visible:nextra-focus x:overflow-x-auto x:subpixel-antialiased x:text-[.9em] x:bg-white x:dark:bg-black x:py-4 x:ring-1 x:ring-inset x:ring-gray-300 x:dark:ring-neutral-700 x:contrast-more:ring-gray-900 x:contrast-more:dark:ring-gray-50 x:contrast-more:contrast-150 not-prose',
                    filename ? 'x:rounded-b-md' : 'x:rounded-md',
                    className
                )}
                {...props}
            >
                {children}
            </pre>
        </div>
    )
}