import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import SEO from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulAllCars.nodes)
  return (
    <Layout>
      <SEO title="分類" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, idx) => {
            const [text, value] = tag
            return (
              <Link className="tag" key={idx} to={`/tags/${text}`}>
                <h5>{text}</h5>
                <p>有 {value} 台車</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulAllCars {
      nodes {
        tags {
          tags
        }
      }
    }
  }
`

export default Tags
