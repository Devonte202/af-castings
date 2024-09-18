import FeaturedModels from "~/components/FeaturedModels"
import Hero from "~/components/Hero"
import Layout from "~/components/Layout"


export default function IndexPage() {

  return (
    <Layout>
      <Hero />
      <FeaturedModels />
    </Layout>
  )
}
