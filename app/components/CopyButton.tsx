'use client'

import { useState } from 'react'

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className={`rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-all duration-200 ${
        copied
          ? 'bg-[#d4edda] text-[#155724]'
          : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
      }`}
    >
      {copied ? '✓ Copied' : 'Copy script'}
    </button>
  )
}
