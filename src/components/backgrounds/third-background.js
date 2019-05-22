import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StyledImage } from './index'

export const Imageus = () => {
	const bck = useStaticQuery(graphql`
		query {
			desktop: file(relativePath: { eq: "adventure-altitude.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 1000) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)

	return <StyledImage fluid={bck.desktop.childImageSharp.fluid} />
}

export default Imageus
