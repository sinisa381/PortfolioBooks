import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledImage } from '../shared'

export default () => {
	const Book = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "book2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200, maxHeight: 800) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return <StyledImage fluid={Book.file.childImageSharp.fluid} />
}
