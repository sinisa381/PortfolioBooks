import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledImage } from '../shared'

export default () => {
	const Book = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "book3.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200, maxHeight: 550) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return <StyledImage fluid={Book.file.childImageSharp.fluid} />
}
