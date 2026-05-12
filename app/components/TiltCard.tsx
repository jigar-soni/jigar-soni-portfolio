'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 250, damping: 25, mass: 0.5 })
  const ySpring = useSpring(y, { stiffness: 250, damping: 25, mass: 0.5 })
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['3.5deg', '-3.5deg'])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-3.5deg', '3.5deg'])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    x.set((e.clientX - left) / width - 0.5)
    y.set((e.clientY - top) / height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
