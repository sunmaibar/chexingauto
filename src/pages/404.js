import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import styled from "styled-components"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <main className="error-page">
        <Wrapper>
          <h2>好車搶手</h2>
          <h4>
            你正在找的車子，可能已經賣掉，或者網路問題，找不到你正在尋找的網頁，請按下回首頁，看看其他車子吧
          </h4>
          <h5 className="emoji">🤷🏼‍♂️🤷🏼‍♀️</h5>

          <Link className="btn" to="/">
            回首頁
          </Link>
        </Wrapper>
      </main>
    </Layout>
  )
}
const Wrapper = styled.section`
  background-color: lightblue;
  padding: 3rem;
  margin: 2rem 2rem;
  border-radius: 2rem;

  h4 {
    margin-bottom: 1rem;
  }
  .emoji {
    font-size: 6rem;
  }
`

export default Error
