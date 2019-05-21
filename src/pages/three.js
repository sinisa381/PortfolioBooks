import React from 'react'
import styled from '@emotion/styled'
import { WaveWrapper, InnerWave } from '../components/wave'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import { mq } from '../components/globals'
import Header from '../components/header'
import Awesome from '../components/awesome'
import Bck from '../components/second-background'
import Bck2 from '../components/third-background'
import '../components/style.css'
class Page extends React.Component {
	render() {
		return (
			<Parallax pages={3} ref={ref => (this.parallax = ref)}>
				<ParallaxLayer offset={0} speed={0} factor={3}>
					<div
						className='pattern'
						style={{
							height: '100%',
							width: '100%',
							fontSize: '2rem'
						}}
					>
						<Header />
						<div
							style={{
								padding: '1.5rem 2rem',
								borderRadius: '6px',
								maxWidth: '600px',
								margin: '0 auto'
							}}
						>
							<Heading>
								<p>
									Lorem ipsum dolor sit amet consectetur. sit amet consectetur adipisicing elit.
									Distinctio, unde!{' '}
								</p>
							</Heading>
							<Line />
						</div>
						<Awesome />
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={1.1}>
					<div style={{ backgroundColor: '#253237', height: '100%', width: '100%' }}>
						<div style={{ width: '100%' }}>
							<Bck />
							<Displaynone>
								<Bck2 />
							</Displaynone>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={1}>
					<Page2>
						<AboutMeContainer>
							<Circle />
							<AboutMeContent>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste est omnis odio
								consectetur nihil ipsam at, harum architecto veritatis temporibus accusantium aliquam
								eaque molestiae.
							</AboutMeContent>
						</AboutMeContainer>
						<WaveWrapper>
							<InnerWave>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 800 338.05'
									preserveAspectRatio='none'
								>
									<path>
										<animate
											attributeName='d'
											values='M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
											repeatCount='indefinite'
											dur='30s'
										/>
									</path>
								</svg>
							</InnerWave>
						</WaveWrapper>
					</Page2>
					<Copyrights>All content &copy; Sinisa Colic sinisa820@gmail.com</Copyrights>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1.2}>
					<div style={{ height: '20%', width: '10%', marginLeft: '90%' }}>asdasdasdsdt!</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1.9}>
					<div style={{ height: '20%', width: '30%', marginLeft: '65%' }}>asdasdt!</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={1}>
					<Grid>
						{/* <img src={Img} style={{ width: '100%', maxHeight: '100%', display: 'block' }} /> */}
					</Grid>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1.1}>
					<div style={{ height: '20%', width: '30%', color: 'white', marginLeft: '5%' }}>first</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.2} speed={1.3}>
					<div style={{ height: '20%', width: '30%', color: 'white' }}>second</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.4} speed={1.5}>
					<div style={{ height: '20%', width: '30%', color: 'blue' }}>third</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.6} speed={1.7}>
					<div style={{ height: '20%', width: '30%', color: 'blue' }}>fourth!</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.8} speed={1.9}>
					<div style={{ height: '20%', width: '30%', color: 'blue', marginLeft: '5%' }}>fifth</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.8} speed={1.9}>
					<div style={{ height: '20%', width: '30%', color: 'blue', marginLeft: '70%' }}>fifth right</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.32} speed={-0.3}>
					<ScrollHeading>Animi ipsum, possimus obcaecati voluptate debitis! Aliquid, laborum!</ScrollHeading>
				</ParallaxLayer>

				{/* <ParallaxLayer offset={1} speed={1}>
					<img src={Img} style={{ width: '50%', height: '100vh', marginLeft: '50%', display: 'block' }} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={2}>
					<img src={Img} style={{ width: '100%', height: '100%', display: 'block' }} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={2}>
					<img src={Img} style={{ width: '100%', height: '100%', display: 'block' }} />
				</ParallaxLayer> */}
			</Parallax>
		)
	}
}
export default Page
const Grid = styled.div`
	width: 100%;
	height: 100%;
	/* border: 1px solid #000; */
`
const Line = styled.div`
	width: 8rem;
	height: .5rem;
	background-color: #fff;
	margin: 0 auto;
	margin-top: 1rem;
`
const ScrollHeading = styled.h2`
	margin-top: 1rem;
	width: 100%;
	font-family: 'PlayFair Display', sans-serif;
	color: #eee;
	text-align: center;
	padding: 1rem 2rem;
	font-size: 1.5rem;
	${mq[2]} {
		font-size: 2rem;
		width: 50rem;
	}
	margin-left: 50%;
	transform: translateX(-50%);
	pointer-events: none;
	text-shadow: 3px 3px 2px rgba(0, 0, 0, .7);
`
const Heading = styled.h1`
	max-width: 600px;
	margin: 0 auto;
	margin-top: 4rem;
	${mq[2]} {
		margin-top: 0rem;
	}
	p {
		margin-top: 0rem;
		font-size: 1.5rem;
		text-align: center;
		color: #e4e4e4;
		font-family: 'Open Sans Condensed', sans-serif ${mq[2]} {
			font-size: 2rem;
		}
	}
`
const Text = styled.p`
	color: yellow;
	font-size: 1rem;
	margin-top: 90vh;
	${mq[1]} {
		margin-top: 90vh;
		display: none;
	}
	padding: 0rem 4rem;
	padding-top: 20v;
`
const Page2 = styled.div`height: 100%;`
const Displaynone = styled.div`
	display: block;
	${mq[1]} {
		display: none;
	}
`
const Circle = styled.div`
	border-radius: 100%;
	background-color: #fff;
	width: 20rem;
	height: 20rem;
	position: relative;
	z-index: 1000;
`
const AboutMeContent = styled.p`
	color: #fff;
	font-size: 3rem;
	max-width: 46ch;
	position: relative;
	z-index: 1000;
`
const AboutMeContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
	margin-top: 30vh;
`
const Copyrights = styled.p`
	position: absolute;
	bottom: 0;
	z-index: 1000;
	color: #e2e2e2;
	left: 50%;
	padding: 1rem;
	transform: translateX(-50%);
`
