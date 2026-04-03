import ProcessSection from '../components/sections/ProcessSection'
import { processSteps } from '../data/siteContent'

function ProcessPage() {
  return <ProcessSection steps={processSteps} />
}

export default ProcessPage
