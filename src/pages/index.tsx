import Hero from "~/components/Hero"
import Layout from "~/components/Layout"


export default function IndexPage() {

  return (
    <Layout>
      <Hero />
      <div>
        <h1>Welcome to the site!</h1>
        <p>Here is some content.</p>
      </div>
    </Layout>
  )
}
