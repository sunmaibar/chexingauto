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
            <p>
              車星車業館專精商用車、日系車及進口外匯車，各品牌車種的估價、銷售、租賃、貸款和保險皆能提供您專業服務與建議，致力發展全方位一條龍客製化汽車專業服務，不論車子的大小事，交給車星車業館就對了!!
            </p>
            <p>
              有任何問題或需求歡迎來電或LINE詢問，或在此留下您的寶貴意見，如需回覆，請您留下正確聯絡方式，謝謝。
            </p>
            <p>負責人：李盛鴻 0937 930 489</p>
            <Button
              style={{ backgroundColor: "#3FBB06", paddingBottom: "0.7rem" }}
            >
              <a
                style={{ color: "#fff" }}
                href="https://line.me/ti/p/unWmnsUphZ"
              >
                加Line聯繫
              </a>
            </Button>
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
