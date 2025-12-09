import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { LogoBar } from '@/components/sections/LogoBar'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { Capabilities } from '@/components/sections/Capabilities'
import { Research } from '@/components/sections/Research'
import { WhySuperBryn } from '@/components/sections/WhySuperBryn'
import { Newsletter } from '@/components/sections/Newsletter'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { VoiceWidget } from '@/components/VoiceWidget'
import { FEATURE_FLAGS } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <div className="hero-bg">
        <Navigation />
        <Hero />
      </div>
      
      <LogoBar />
      <ProblemSolution />
      <Capabilities />
      <Research />
      <WhySuperBryn />
      <Newsletter />
      <FAQ />
      <FinalCTA />
      <Footer />
      
      {FEATURE_FLAGS.VOICE_WIDGET && <VoiceWidget />}
    </>
  )
}

