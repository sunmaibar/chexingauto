import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CarsList = ({ cars = [] }) => {
  return (
    <div className="recipes-list">
      {cars.map(car => {
        const { carsName, price, id, years, images, slug } = car
        const pathToImage = getImage(images[0])
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={carsName}
            />
            <h5>{carsName}</h5>
            <p>
              出廠：{years} 年 ｜ 售價：{price} {price === "電洽" ? "" : "萬"}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default CarsList
