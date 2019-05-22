import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { mq } from '../globals'
import styled from '@emotion/styled'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
	<StaticQuery
		query={graphql`
			query {
				avatar: file(relativePath: { eq: "sss.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 300, maxHeight: 400) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
			}
		`}
		render={data => {
			// Set ImageData.
			const imageData = data.avatar.childImageSharp.fluid
			return (
				<BackgroundImage Title='profile pic' className={className} fluid={imageData}>
					{/* <h1>Hello gatsby-background-image</h1> */}
				</BackgroundImage>
			)
		}}
	/>
)

const StyledBackgroundSection = styled(BackgroundSection)`
background-position:center center;
  background-repeat: no-repeat;
  background-size:cover;
  border-radius:100%;
  background-color: #000;
  width:100%;
  height:100%;
	/* width: 13rem;
	height: 13rem; */
	position: relative;
	z-index: 1000;
	margin-bottom: 2rem;
	${mq[2]} {
		/* width: 17rem;
		height: 17rem; */
	}
`

export default StyledBackgroundSection
