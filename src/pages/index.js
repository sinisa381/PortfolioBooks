import React from 'react'
import { FiZap, FiCloudSnow, FiFlag } from 'react-icons/fi'
import Avatar from '../components/hooks/avatar'
import styled from '@emotion/styled'
import { WaveWrapper, InnerWave } from '../components/wave'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import { mq } from '../components/globals'
import Header from '../components/header'
import Awesome from '../components/awesome'
import Card from '../components/card'
import Bck from '../components/backgrounds/second-background'
import Bck2 from '../components/backgrounds/third-background'
import Bck3 from '../components/backgrounds/fourth-background'
import '../components/style.css'
class Page extends React.Component {
	render() {
		return (
			<Parallax pages={4} ref={ref => (this.parallax = ref)}>
				<ParallaxLayer offset={0} speed={0} factor={4}>
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
							<Line />
						</div>
						<Media>
							<Awesome />
						</Media>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={1.1}>
					<div style={{ backgroundColor: '#253237', height: 'auto', width: '100%' }}>
						<Gallery style={{ width: '100%' }}>
							<Bck />
							<Bck2 />
							<Displaynone>
								<Bck3 />
							</Displaynone>
						</Gallery>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2.7} speed={1}>
					<Cards>
						<Card color='#fff' size='5rem'>
							<FiZap />
						</Card>
						<Card color='#fff' size='5rem'>
							<FiCloudSnow />
						</Card>
						<Card color='#fff' size='5rem'>
							<FiFlag />
						</Card>
					</Cards>
				</ParallaxLayer>
				<ParallaxLayer offset={3} speed={1}>
					<Page2>
						<AboutMeContainer>
							<Circle>
								<Avatar />
							</Circle>
							<AboutMeContent>
								Hello, my name is Sinisa. I have good experience with React. And i love bulding
								websites! Feel free to contact me!
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

				<ParallaxLayer offset={1.2} speed={-0.65}>
					<Mt>
						<ScrollHeading>Just keep scrolling</ScrollHeading>
					</Mt>
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
	width: 13rem;
	height: 13rem;
	position: relative;
	z-index: 1000;
	margin-bottom: 2rem;
	${mq[2]} {
		width: 17rem;
		height: 17rem;
	}
`
const AboutMeContent = styled.p`
	color: #fff;
	font-size: 1.5rem;
	max-width: 30ch;
	position: relative;
	z-index: 1000;
	text-align: center;
	${mq[2]} {
		text-align: start;
		font-size: 2.5rem;
		max-width: 46ch;
	}
`
const AboutMeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	margin-top: 10vh;
	${mq[2]} {
		flex-direction: row;
		margin-top: 20vh;
		justify-content: space-around;
		align-items: center;
	}
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
const Mt = styled.div`
	margin-top: -6rem;
	${mq[2]} {
		margin-top: 1.7rem;
	}
`
const Gallery = styled.div`
	display: block;
	${mq[1]} {
		display: flex;
	}
`
const Cards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-top: -10rem;
	@media only screen and (min-width: 525px) {
		margin-top: -5rem;
	}
	@media only screen and (min-width: 522px) {
		margin-top: 6rem;
	}
	@media only screen and (min-width: 600px) {
		margin-top: 9rem;
	}

	@media only screen and (min-width: 620px) {
		margin-top: -5rem;
	}
`

const Media = styled.div`
	margin-top: -70vh;
	${mq[2]} {
		margin-top: 5rem;
	}
`
