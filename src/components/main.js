import React from 'react'
import styled from '@emotion/styled'
import Book1 from './featured-images/book1'
import Book2 from './featured-images/book2'
import Book3 from './featured-images/book3'
import Book4 from './featured-images/book4'
import { css } from '@emotion/core'
import { mq } from './globals'
// import Inner from '../elements/Inner'
export default class Tomato extends React.Component {
	render() {
		return (
			<main>
				<About>
					<div className='u-center-text u-margin-bottom-8'>
						<SecondHeading className='heading-secondary'>Awesome books</SecondHeading>
					</div>
					<FlexBox>
						<Box>
							<h3 className='heading-tertiary u-margin-bottom-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h3>
							<h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis.</h4>
							<p className='paragraph u-margin-bottom-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque eos aut qui
								natus, laudantium nisi at debitis hic tempore. Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Consequatur, earum.
							</p>
						</Box>
						<Book1 />
					</FlexBox>
					<FlexBox>
						<Book2 />
						<Box
							css={css`
								padding-left: 0;
								order: -1;
								${mq[2]} {
									padding-left: 2rem;
									order: 1;
								}
							`}
						>
							<h3 className='heading-tertiary u-margin-bottom-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h3>
							<h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis.</h4>
							<p className='paragraph u-margin-bottom-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque eos aut qui
								natus, laudantium nisi at debitis hic tempore. Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Consequatur, earum.
							</p>
						</Box>
					</FlexBox>
					<FlexBox>
						<Box>
							<h3 className='heading-tertiary u-margin-bottom-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h3>
							<h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis.</h4>
							<p className='paragraph u-margin-bottom-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque eos aut qui
								natus, laudantium nisi at debitis hic tempore. Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Consequatur, earum.
							</p>
						</Box>
						<Book3 />
					</FlexBox>
					<FlexBox>
						<Book4 />
						<Box
							css={css`
								padding-left: 0;
								order: -1;
								${mq[2]} {
									padding-left: 2rem;
									order: 1;
								}
							`}
						>
							<h3 className='heading-tertiary u-margin-bottom-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h3>
							<h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis.</h4>
							<p className='paragraph u-margin-bottom-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque eos aut qui
								natus, laudantium nisi at debitis hic tempore. Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Consequatur, earum.
							</p>
						</Box>
					</FlexBox>
					{/* <a href='#' className='btn-text'>
						Learn more &crarr;
          </a> */}
					<p>laen more</p>
				</About>
			</main>
		)
	}
}

const SecondHeading = styled.h2`
	/* font-family: Akronim, cursive;
	font-weight: 300;
	margin-top: -4rem;
	${mq[2]} {
		margin-top: 2rem;
	} */
`
const FlexBox = styled.div`
	display: grid;
	grid-gap: 1rem;
	justify-content: center;
	align-items: start;
	flex-wrap: wrap;
	margin-bottom: 3rem;
	grid-template-columns: 1fr;
	${mq[2]} {
		grid-template-columns: 1fr 1fr;
	}
`

const Box = styled.div`
	padding: 0 1rem;
	${mq[2]} {
		padding: 0;
	}
	flex: 1 1 50%;
	h3 {
		margin: 0;
	}
	h4 {
		margin-bottom: 2rem;
		margin-top: 1rem;
	}
`
const About = styled.section`
	background-color: #ffed78;
	margin: 0 auto;
	/* margin-top: -25vh; */
	cursor: default;
	/* padding: 8rem 0rem; */
	${mq[2]} {
		/* margin-top: -20vh; */
		/* padding: 18rem 5rem; */
	}
`
const Testing = styled.div`
	width: 40rem;
	width: 100vw;
	/* padding-top: 60rem;
	margin-top: -50rem; */
	background-color: red;
	clip-path: polygon(0 16%, 100% 4%, 100% 82%, 0 94%);
`
