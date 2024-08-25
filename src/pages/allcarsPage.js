import React from "react"
import Layout from "../components/Layout"
import AllCars from "../components/AllCars"
import Seo from "../components/SEO"

const AllCarsPage = () => {
  return (
    <Layout>
      <Seo title="精選好車" />
      <main className="page">
        <AllCars />
      </main>
    </Layout>
  )
}

export default AllCarsPage
