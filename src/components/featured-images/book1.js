import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Image from 'gatsby-image'

export default () => {
	const Book = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "book1.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return <Image fluid={Book.file.childImageSharp.fluid} className='composition__photo composition__photo--p1' />
}
