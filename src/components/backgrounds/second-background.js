import React from 'react'
import { StyledImage } from './index'
import { useStaticQuery, graphql } from 'gatsby'

export const Imageus = () => {
	const bck = useStaticQuery(graphql`
		query {
			desktop: file(relativePath: { eq: "asphalt.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2000) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)

	return <StyledImage fluid={bck.desktop.childImageSharp.fluid} />
}

export default Imageus
