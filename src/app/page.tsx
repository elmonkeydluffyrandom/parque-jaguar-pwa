'use client'

import { Header } from '@/components/Header'
import { Phrasebook } from '@/components/Phrasebook'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-8">
        <Phrasebook />
      </main>
    </div>
  )
}
