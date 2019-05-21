import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

class Page extends React.Component {
	render() {
		return (
			<Parallax pages={3} ref={ref => (this.parallax = ref)}>
				<ParallaxLayer offset={0} speed={0} factor={3}>
					<div style={{ backgroundColor: 'tomato', height: '100%', width: '100%', paddingTop: '1%' }}>
						Scroll down!
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1}>
					<div style={{ backgroundColor: '#805E73', height: '100%', width: '100%' }}>I'm fast!</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={1}>
					<div style={{ backgroundColor: '#87BCDE', height: '100%' }}>I'm going in the other direction!</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.3} speed={-0.3}>
					<div
						style={{
							backgroundColor: '#242424',
							height: '10rem',
							width: '10rem',
							color: '#eee',

							marginLeft: '70%',
							pointerEvents: 'none'
						}}
					>
						tomatoes down!
					</div>
				</ParallaxLayer>
			</Parallax>
		)
	}
}
export default Page
