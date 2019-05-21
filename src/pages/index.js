import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Main from '../components/main'
import Features from '../components/features'
import Footer from '../components/footer'
import { Container } from '../components/shared'
import '../components/style.css'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
class BlogPostTemplate extends React.Component {
	render() {
		return (
			<MainParallax pages={3} ref={ref => (this.parallax = ref)}>
				<Background>
					<Container>
						<Divider
							offset={0}
							speed={1}
							onClick={() => this.parallax.scrollTo(3)}
							style={{ backgroundColor: 'red' }}
						>
							<Header />
						</Divider>
						<Divider offset={1} speed={1.2} style={{ zIndex: '-1', backgroundColor: 'blue' }}>
							<Main />
						</Divider>
						<Divider offset={2} speed={1} style={{ backgroundColor: 'white' }}>
							<Features />
						</Divider>
						<Divider
							offset={3}
							speed={1.1}
							onClick={() => this.parallax.scrollTo(0)}
							style={{ backgroundColor: 'green' }}
						>
							<Footer />
						</Divider>
					</Container>
				</Background>
			</MainParallax>
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
const Background = styled.div`background-color: #ffed78;`

const Divider = styled(ParallaxLayer)`
/* overflow:hidden !important; */
`
const MainParallax = styled(Parallax)`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
/* overflow-y:scroll ; */
&::-webkit-scrollbar {
  width:0;
  background:transparent;
}

`
