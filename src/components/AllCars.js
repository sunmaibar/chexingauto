import React from "react"
import TagsList from "./TagsList"
import CarsList from "./CarsList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allContentfulAllCars(sort: { fields: price, order: ASC }) {
      nodes {
        carsName
        price
        id
        years
        slug
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        tags {
          tags
        }
      }
    }
  }
`

const AllCars = () => {
  const data = useStaticQuery(query)
  const cars = data.allContentfulAllCars.nodes

  return (
    <section className="recipes-container">
      <TagsList cars={cars} />
      <CarsList cars={cars} />
    </section>
  )
}

export default AllCars
