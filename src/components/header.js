import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { SpringButton, SpringTitle } from '../components/springs'
import BackgroundImage from 'gatsby-background-image'
// import Blurbook from '../components/hooks/background'
import { useStaticQuery } from 'gatsby'
import { mq } from './globals'

const Header = ({ site, location }) => {
	const data = useStaticQuery(graphql`
		query {
			book: file(relativePath: { eq: "adventure-clouds.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							path
						}
					}
				}
			}
		}
	`)

	return (
		<React.Fragment>
			<StyledBackground fluid={data.book.childImageSharp.fluid}>
				<div className='header__text-box'>
					<h1 className='heading-primary'>
						<SpringTitle>landing page</SpringTitle>
					</h1>
				</div>
			</StyledBackground>
		</React.Fragment>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: ``
}

export default Header
const StyledBackground = styled(BackgroundImage)`
	height: 65vh;
  clip-path: polygon(0 0, 100% 0, 100% 55vh, 0 100%);
	background-size: cover;
	background-position: center;
  position: relative;
  ${mq[2]}{
	height: 95vh;
	clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
  }
`
