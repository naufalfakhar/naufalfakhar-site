'use client'
import * as React from 'react'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Skill from '@/components/home/Skill'
import Projects from '@/components/home/Project'
import End from '@/components/home/End'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <End />
    </main>
  )
}
