import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        coverImage
      }
    }
  }
`

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.coverImage
  return (
    <Helmet
      htmlAttributes={{ lang: "zh-TW" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    >
      <meta name="keywords" content="車星車業館，新車 中古車 車貸 " />
      <meta name="image" content={metaImage} />
      <link rel="image_src" href={metaImage} />
    </Helmet>
  )
}

export default SEO
