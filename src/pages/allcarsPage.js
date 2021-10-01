import React from "react"
import Layout from "../components/Layout"
import AllCars from "../components/AllCars"
import SEO from "../components/SEO"

const AllCarsPage = () => {
  return (
    <Layout>
      <SEO title="精選好車" />
      <main className="page">
        <AllCars />
      </main>
    </Layout>
  )
}

export default AllCarsPage
