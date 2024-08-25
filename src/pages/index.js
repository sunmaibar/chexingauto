import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import AllCars from "../components/AllCars"
import Seo from "../components/SEO"
import Services from "../components/Services"
export default function Home() {
  return (
    <Layout>
      <Seo title="只賣好車" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/2024cover.jpg"
            alt="車星車業館"
            className="hero-img"
            layout="fullWidth"
            placeholder="tracedSVG"
          />
          {/* <div className="hero-container">
            <div className="hero-text">
              <h1>車星車業館</h1>
              <h5>
                各廠牌 新車/二手車/外匯車
                <br />
                企業租賃/融資貸款/保險理賠
              </h5>
            </div>
          </div> */}
        </header>
        <Services />
        <AllCars />
      </main>
    </Layout>
  )
}
