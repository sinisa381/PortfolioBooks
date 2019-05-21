import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import { theme } from '../globals'
import styled from '@emotion/styled'
import { mq } from '../globals'

const Title = ({ children }) => {
	const props = useSpring({
		config: config.wobbly,
		from: { opacity: 0, marginLeft: -1000 },
		delay: '700',
		to: { opacity: 1, marginLeft: 0 }
	})
	return (
		<animated.div style={props}>
			<TextShadow>{children}</TextShadow>
		</animated.div>
	)
}

const TextShadow = styled.h1`
	display: inline-block;
	max-width: 30rem;
	margin: 0 auto;
	margin-top: 10vh;
	text-shadow: 1px 1px 1px #000;
	font-size: 2rem;
	color: #ffed78;
	text-transform: uppercase;
	${mq[1]} {
		font-size: 3rem;
	}
	${mq[2]} {
		font-size: 4rem;
	}
`
export default Title
