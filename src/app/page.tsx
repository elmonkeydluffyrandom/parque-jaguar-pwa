'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Phrasebook } from '@/components/Phrasebook'

export default function Home() {
  const [isPracticeMode, setIsPracticeMode] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header
        isPracticeMode={isPracticeMode}
        onPracticeModeChange={setIsPracticeMode}
      />
      <main className="flex-1 p-4 md:p-8">
        <Phrasebook isPracticeMode={isPracticeMode} />
      </main>
    </div>
  )
}
