import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from '@emotion/styled'
import { mq } from '../globals'

const Button = () => {
	const props = useSpring({
		config: config.stiff,
		from: { opacity: `0`, transform: `translate3d(0, 100px,0)` },
		to: { opacity: `1`, transform: 'translate3d(0px, 0,0) ' },
		delay: '100'
	})
	return (
		<animated.div style={props}>
			<HeaderBtnInfo>Sinisa Colic </HeaderBtnInfo>
		</animated.div>
	)
}

const HeaderBtnInfo = styled.p`
	color: #ffed78;
	text-shadow: 1px 1px 1px #000;
	font-size: 1.2rem;
	display: inline-block;
	padding: 1rem 2rem;
	${mq[1]} {
		font-size: 2rem;
	}
`
export default Button
