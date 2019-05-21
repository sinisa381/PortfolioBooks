import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
	<StaticQuery
		query={graphql`
			query {
				desktop: file(relativePath: { eq: "blur-book.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1000, maxHeight: 1000) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={data => {
			// Set ImageData.
			const imageData = data.desktop.childImageSharp.fluid
			return (
				<BackgroundImage Tag='section' className={className} fluid={imageData}>
					<h1>Hello gatsby-background-image</h1>
				</BackgroundImage>
			)
		}}
	/>
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
