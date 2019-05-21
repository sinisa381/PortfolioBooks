import React from 'react'
import styled from '@emotion/styled'
import { FlexBox } from '../components/shared'
import { waveAnimation } from './wave/animation'
import { mq } from './globals'
// import { Flip } from 'react-reveal/'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
export default () => {
	return (
		<React.Fragment>
			<Footer>
				<WaveWrapper>
					<InnerWave>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 338.05' preserveAspectRatio='none'>
							<path>
								<animate
									attributeName='d'
									values='M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
									repeatCount='indefinite'
									dur='30s'
								/>
							</path>
						</svg>
						<Test>asdad as dasdjaosd jasd asd aa</Test>
					</InnerWave>
					{/* <FlexBox>
						<Text size='5px' color='#eeeee'>
							© {new Date().getFullYear()} All rights reserved Sinisa Colic
						</Text>
					</FlexBox> */}
					<FlexBox>
						<ParallaxLayer>
							<Text size='50px' color='#fff'>
								sinisa820@gmail.com
							</Text>
						</ParallaxLayer>
					</FlexBox>
				</WaveWrapper>
			</Footer>
		</React.Fragment>
	)
}

const Text = styled.p`
	font-family: 'Hind madurai', sans-serif;
	font-size: 15px;
	margin: 0;
`
const Footer = styled.footer`
	/* width: 100%;
	padding: 1rem;
	margin: 0 auto;
	margin-bottom: 0;
	background-color: #364349;
	color: #eee; */
`

const WaveWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	transform: matrix(1, 0, 0, -1, 0, 0);
`

const InnerWave = styled.div`
	position: relative;
	height: 100%;
	svg {
		width: 100%;
		height: 40vh;
	}
	path {
		${waveAnimation('20s')};
	}
`
const Test = styled.p`padding: 20rem;`
