import { Outfit } from '@next/font/google'
import '@/styles/globals.css'
import clsx from 'clsx'

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={clsx(outfit.className, 'px-6 min-h-screen')}>
          {children}
        </div>
        </body>
    </html>
  )
}
