import CollectionsSection from '../components/sections/CollectionsSection'
import { collections } from '../data/siteContent'

function CollectionsPage() {
  return <CollectionsSection items={collections} />
}

export default CollectionsPage
