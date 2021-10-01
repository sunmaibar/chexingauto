import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import AllCars from "../components/AllCars"
import SEO from "../components/SEO"
import Services from "../components/Services"
export default function Home() {
  return (
    <Layout>
      <SEO title="首頁" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/lanbo.jpg"
            alt="車星車業館"
            className="hero-img"
            layout="fullWidth"
            placeholder="tracedSVG"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>車星車業館</h1>
              <h4>新車 中古車 租賃保險 貸款</h4>
            </div>
          </div>
        </header>
        <Services />
        <AllCars />
      </main>
    </Layout>
  )
}
