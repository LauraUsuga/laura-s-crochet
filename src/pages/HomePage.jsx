import CreationsSliderSection from '../components/sections/CreationsSliderSection'
import HeritageSection from '../components/sections/HeritageSection'
import HeroSection from '../components/sections/HeroSection'
import WeavingJourneySection from '../components/sections/WeavingJourneySection'
import { featuredCreations, heritageStory, processMediaMoments } from '../data/siteContent'

function HomePage() {
  return (
    <>
      <HeroSection />
      <WeavingJourneySection moments={processMediaMoments} />
      <CreationsSliderSection items={featuredCreations} />
      <HeritageSection story={heritageStory} />
    </>
  )
}

export default HomePage
