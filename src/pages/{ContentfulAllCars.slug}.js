import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  BsFillClockFill,
  BsFillAwardFill,
  BsFillBarChartFill,
} from "react-icons/bs"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/Button"

const CarsTemplate = ({ data }) => {
  const {
    contentfulAllCars: {
      carsType,
      carsName,
      cc,
      km,
      fuel,
      price,
      description: { description },
      images,
      years,
      tags: { tags },
    },
  } = data

  const pathToImage = getImage(images[0])

  return (
    <Layout>
      <SEO title={carsName} description={description} image={pathToImage} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={carsName}
              className="about-img"
            />
            <article className="recipe-info">
              <h2 style={{ lineHeight: "0.7" }}>
                {carsName} <br />
                <span
                  style={{ fontSize: "0.9rem", color: "var(--primary-400)" }}
                >
                  {carsType} | 排氣量：{cc} cc | {fuel}
                </span>
              </h2>
              <p>{description}</p>

              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsFillAwardFill />
                  <h5>售價</h5>
                  <p>{price} 萬元</p>
                </article>
                <article>
                  <BsFillClockFill />
                  <h5>年份</h5>
                  <p>{years} 年</p>
                </article>
                <article>
                  <BsFillBarChartFill />
                  <h5>行駛里程數</h5>
                  <p>{km} 萬km</p>
                </article>
              </div>
              {/* 聯絡資訊 */}
              <div
                style={{
                  backgroundColor: "var(--primary-0)",
                  borderRadius: "5px",
                  textAlign: "left",
                  padding: "1rem 2rem",
                  marginBottom: "1rem",
                  position: "relative",
                }}
              >
                <Button
                  style={{ position: "absolute", right: "20px", top: "20px" }}
                >
                  <a
                    style={{ color: "#fff" }}
                    href="https://line.me/ti/p/unWmnsUphZ"
                  >
                    點我加Line
                  </a>
                </Button>
                <p>
                  ⭐️店長：李盛鴻
                  <br /> ☎️ 電話 ：0937930489 <br />
                </p>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                標籤 ：
                {tags.map((tag, idx) => {
                  return (
                    <Link to={`/tags/${tag}`} key={idx}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            {images.slice(1).map((img, idx) => {
              const pathToImage = getImage(img)
              return <GatsbyImage key={idx} image={pathToImage} />
            })}
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleSlug($slug: String) {
    contentfulAllCars(slug: { eq: $slug }) {
      slug
      carsType
      carsName
      cc
      fuel
      id
      km
      price
      years
      tags {
        tags
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      description {
        description
      }
    }
  }
`

export default CarsTemplate
