import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
const TagsList = ({ cars }) => {
  const newTags = setupTags(cars)

  return (
    <div className="tag-container">
      <h4>精選好車</h4>
      <div className="tags-list">
        {newTags.map((tag, idx) => {
          const [text, value] = tag
          return (
            <Link to={`/tags/${text}`} key={idx}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
