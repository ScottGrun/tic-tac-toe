"use client"

import { Button } from "@/components/Button";
import Logo from '@/assets/logo.svg'
import { PlayerSwitcher } from "@/components/PlayerSwitcher";

export default function Home() {
  return (
    <main className="min-h-screen flex ">
      <div className="w-full my-auto" >
        <Logo className="mb-8 mx-auto" />
        <PlayerSwitcher />
        <div className="grid grid-cols-1 gap-6 mt-8 ">
          <Button isLink href='/game' variant="secondary" size="lg" isFullWidth>
            NEW GAME (VS CPU)
          </Button>
          <Button variant="primary" size="lg" isFullWidth>
            NEW GAME  (VS PLAYER)
          </Button>
        </div>
      </div>
    </main>
  )
}
