import React from 'react'
import { mq } from '../globals'
import { IconContext } from 'react-icons'
import styled from '@emotion/styled'
export default ({ color, size, children }) => {
	return (
		<Card>
			<Mb>
				<IconContext.Provider value={{ color, size }}>{children}</IconContext.Provider>
			</Mb>
			<Title>The title1 is biggre</Title>
			<Description>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nihil numquam ad voluptatem dolorum nobis
				magni culpa amet consectetur.
			</Description>
		</Card>
	)
}

const Title = styled.h1`
	color: #fff;
	font-size: 1.5rem;
	margin: 1rem 0;
	${mq[2]} {
		font-size: 2rem;
	}
`
const Subtitle = styled.h3`
	color: #fff;
	font-size: 1.2rem;
	margin-bottom: 1rem;
	${mq[2]} {
		font-size: 1.5rem;
	}
`
const Description = styled.p`
	color: #fff;
	font-size: 1rem;
	${mq[2]} {
		font-size: 1.2rem;
	}
`

const Card = styled.div`
	max-width: 50ch;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	margin-right: 2rem;
	margin-bottom: 3.5rem;
`
const Mb = styled.div`margin-bottom: 1rem;`
