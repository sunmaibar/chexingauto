import React from "react"
import styled from "styled-components"
import { BsFillBookmarksFill, BsFillStarFill } from "react-icons/bs"

import { FaCar } from "react-icons/fa"

const Services = () => {
  return (
    <Wrapper className="services">
      <div className="services-center">
        <article>
          <span>
            <BsFillStarFill />
          </span>
          <h4>只賣好車</h4>
          <p>車況正常 來源清楚 里程準確</p>
        </article>
        <article>
          <span>
            <FaCar />
          </span>
          <h4>專精車款</h4>
          <p>商用車 日系車 進口外匯車</p>
        </article>
        <article>
          <span>
            <BsFillBookmarksFill />
          </span>
          <h4>誠信服務</h4>
          <p>好車加價買 好車合理賣</p>
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .services-center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
  }
  article {
    background-color: var(--primary-0);
    margin: 2rem 0;
    text-align: center;
    border-radius: 10px;
  }
  span {
    background: var(--primaryColor);
    padding: 0.5rem;
    display: inline-block;
    font-size: 2rem;
    /* margin-bottom: 1.5rem; */
  }
  h4 {
    font-size: 1.3rem;
  }
  p {
    margin-top: 0;
    font-size: 0.8rem;
  }
`

export default Services
