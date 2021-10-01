import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import CarsList from "../components/CarsList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulAllCars: { nodes: cars },
  },
}) => {
  return (
    <Layout>
      <SEO title="關於車星" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>誠信買賣，信用良好車商</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed
              voluptate libero culpa exercitationem tempore minima expedita
              debitis quo! Dolorum quia, sapiente ratione quas itaque nam
              reiciendis architecto dicta illum.
            </p>
            <Link to="/contact" className="btn">
              聯繫車星
            </Link>
          </article>
          <StaticImage
            src="../assets/images/DSC03824.jpg"
            alt="車星車業"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>店長強力推薦精選好車</h5>
          <CarsList cars={cars} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulAllCars(
      sort: { fields: price, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        carsName
        price
        id
        years
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        slug
      }
    }
  }
`

export default About
