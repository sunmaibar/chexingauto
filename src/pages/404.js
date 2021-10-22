import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <main className="error-page">
        <section>
          <h1>好車搶手</h1>
          <h3>
            你正在找的車子，可能已經賣掉，或者網路問題，所以找不到你正在尋找的網頁，請按左上角Logo回首頁，看看其他車子吧
          </h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
