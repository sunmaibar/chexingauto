import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import CarsList from "../components/CarsList"
import SEO from "../components/SEO"
import Button from "../components/Button"

const Contact = ({
  data: {
    allContentfulAllCars: { nodes: cars },
  },
}) => {
  return (
    <Layout>
      <SEO title="聯繫" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>與我進一步聯繫</h3>
            <p>本公司專營各類轎車事宜，新車，中古車，租賃，保險，貸款</p>
            <p>
              有任何問題歡迎來電詢問，或者在此留下您的寶貴意見，如需回覆，請留下正確聯絡方式
            </p>
            <p>負責人：李盛鴻 0937 930 489</p>
            <Button>點我加Line</Button>
          </article>
          <article>
            <form
              action="https://formspree.io/f/xpzknqdr"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">您的大名</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">您的Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">留下訊息</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                提交
              </button>
            </form>
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

export default Contact
