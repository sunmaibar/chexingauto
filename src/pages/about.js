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
            <h2>誠信生意。口碑服務</h2>
            <p>
              成立車星車業館前有七年半汽車銷售及服務經驗，進入不惑之年前決定自行創業，這些年扎實的耕耘及熱忱服務為基底，銷售超過五百台及帶領團隊，為了延續對汽車的熱愛及未來的憧憬，從熟悉的商用車及國產車，現今擴大至進口車和外匯車，並提供各品牌車輛估價、銷售、租賃、貸款及保險一條龍客製化專業服務，車星車業秉持[誠信]與[服務]期待您的蒞臨。
            </p>
            <Link to="/contact" className="btn">
              聯繫車星
            </Link>
          </article>
          <article>
            <StaticImage
              src="../assets/images/chex-cover.jpg"
              alt="車星車業"
              className="about-img"
              placeholder="blurred"
            />
          </article>
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
