import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import CarsList from "../components/CarsList"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  console.log(data)
  const cars = data.allContentfulAllCars.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <CarsList cars={cars} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetCarTag($tag: String) {
    allContentfulAllCars(
      sort: { fields: price, order: DESC }
      filter: { tags: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        carsName
        years
        price
        slug
        images {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default TagTemplate
