"use client"
import { Outfit } from '@next/font/google'
import '@/styles/globals.css'
import clsx from 'clsx'
import { useState } from 'react'
import { PlayerOneMark, PlayerOneMarkContext } from '@/context/PlayerOneMark'

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [playerOneMark, setPlayerOneMark] = useState<PlayerOneMark>('x')
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <PlayerOneMarkContext.Provider value={[playerOneMark, setPlayerOneMark]}>
          <div className={clsx(outfit.className, 'px-6 min-h-screen')}>
            {children}
          </div>
        </PlayerOneMarkContext.Provider>
      </body>
    </html>
  )
}
