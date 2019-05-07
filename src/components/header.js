import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FaBars } from 'react-icons/fa'
// import { css } from '@emotion/core'
import SideNav from './sidenav'
import { FlexBox, NavItem } from './shared'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery } from 'gatsby'
import { mq } from './globals'

const Header = ({ site, location }) => {
	const data = useStaticQuery(graphql`
		query {
			book: file(relativePath: { eq: "book5.jpg" }) {
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
	const navigationItems = color => <React.Fragment />

	return (
		<React.Fragment>
			<StyledBackground fluid={data.book.childImageSharp.fluid} className='header'>
				<div className='header__text-box'>
					<h1 className='heading-primary'>
						{/* <span className='heading-primary--main'>Reading</span> */}
						<TextShadow className='heading-primary--sub'>Makes your life better</TextShadow>
					</h1>
					<a href='#main' className='btn btn--white btn--animated'>
						Click to see more
					</a>
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
	height: 95vh;
	background-image: linear-gradient(to right, rgba(255, 237, 120, 0), rgba(0, 0, 0, 0.2));
	background-size: cover;
	background-position: center;
	position: relative;
	clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
`
const TextShadow = styled.span`
	text-shadow: 1px 1px 1px #000;
	font-size: 2rem;
	${mq[1]} {
		font-size: 3rem;
	}
	${mq[2]} {
		font-size: 4rem;
	}
`
