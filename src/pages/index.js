import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Main from '../components/main'
import Features from '../components/features'
import Footer from '../components/features'
import { Container } from '../components/shared'
import '../components/style.css'

class BlogPostTemplate extends React.Component {
	render() {
		return (
			<Background>
				<Container>
					<Header />
					<Main />
					<Features />
					<Footer />
				</Container>
			</Background>
		)
	}
}

export default BlogPostTemplate
export const Query = graphql`
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
					}
				}
			}
		}
	}
`
const Background = styled.div`background-color: #242424;`
