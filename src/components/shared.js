import styled from '@emotion/styled'
import GatsbyImage from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import { mq, theme } from './globals'

export const FlexBox = styled.div`
	display: flex;
	justify-content: ${props => (props.justify ? props.justify : 'center')};
	align-items: ${props => (props.items ? props.items : 'center')};
	flex-wrap: wrap;
`
export const NavItem = styled(Link)`
cursor:pointer;
font-size:1rem !important;
display:${props => (props.nav ? 'block' : 'none')};
${mq[2]}{
  display:block; 
}
padding:4px 0;
font-family:${theme.font.heading};
font-family: 'Josefin Sans', sans-serif;
font-family: 'Lato', sans-serif;
text-decoration:none;
font-size: ${props => (props.nav ? '.6rem' : '1rem')};
margin-left: 1.4rem;
margin-top:${props => props.nav && '.5rem'};
color: ${props => (props.nav ? '#ffffff' : 'rgba(0,0,0,.5)')};
margin:${props => props.nav && 0};
padding:${props => props.nav && '8px 20px'};
font-variant:${props => props.nav && 'small-caps'}
`

export const Title = styled.h1`
	padding: 0;
	margin-bottom: .8rem;
	font-family: Lato, sans-serif;
	font-weight: 300;
	font-size: 1.25rem;
	${mq[1]} {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	${mq[2]} {
		font-size: 2.25rem;
		margin-bottom: 1.5rem;
	}
	color: ${props => (props.color ? props.color : '#000000')};
`

export const Text = styled.p`
	font-size: .875rem;
	line-height: 1.4em;
	${mq[1]} {
		font-size: 1rem;
	}
	${mq[2]} {
		font-size: 1.25rem;
	}
	font-family: 'Hind madurai', sans-serif;
	font-weight: 300;
	color: ${props => (props.color ? props.color : 'black')};
	margin: 0;
	padding: 0;
`
export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
`

export const BackgroundTitle = styled.div`
	background-color: #a9acb1;
	padding: 2rem;
	width: 100%;
	${mq[1]} {
	}
`

export const Abbr = styled.abbr`
	border-bottom: none !important;
	cursor: default !important;
	text-decoration: none !important;
	padding: 0 !important;
	margin: 0 !important;
`
export const Image = styled.img`
	margin: 0;
	/* margin: .6rem; */
	width: 100%;
`

export const Box = styled.div`
	${mq[3]} {
		width: 100%;
		margin-bottom: 1.5rem;
		display: grid;
		grid-template-columns: 40vw 1fr;
		grid-gap: 40px;
		justify-content: center;
		align-items: center;
	}
`

export const ImageGrid = styled.div`
	display: grid;
	justify-content: center;
	grid-gap: 1rem;
	grid-template-columns: 1fr;
	${mq[2]} {
		grid-template-columns: repeat(2, min-content);
		width: 80%;
		margin: 0 auto;
	}
`
export const IconsBox = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-auto-flow: column;
	justify-content: ${props => (props.justify ? props.justify : 'start')};
	align-items: center;
	margin-top: .5rem;
`

export const StyledBackgroundSection = styled(BackgroundImage)`
  min-width: 10rem;
  width:20rem;
  height: 15rem;
  min-height: auto;
  cursor:pointer;
  background-position: bottom center;
  border-radius:5px;
  background-repeat: no-repeat;
  background-size: cover;
  transition:all .5s;
  &:hover {
    transform:scale(1.2);
    a {
      display:block;
      font-weight:bold;
    }
  }
`

export const Portfolio = styled.div`
  width:100%;
  height:100%;
  overflow:hidden;
  position:relative;
  a{
   align-items:center;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
   color: white;
   display:none;
  }
	/* img {
		border-radius: 7px;
		cursor: pointer;
	}
	p {
		font-family: 'Hind madurai', sans-serif;
		font-size: .875rem;
		${mq[1]} {
			font-size: 1rem;
		}
		${mq[2]} {
			font-size: 1.25rem;
		}
	} */
`

export const StyledImage = styled(GatsbyImage)`
margin-bottom:1rem;
border-radius:3px;
flex:0 1 100%;
${mq[2]}{
flex:0 0 50%;
}
`
