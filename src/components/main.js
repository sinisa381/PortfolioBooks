import React from 'react'
import styled from '@emotion/styled'
import Book1 from './featured-images/book1'
import Book2 from './featured-images/book2'
import Book3 from './featured-images/book3'
import Book4 from './featured-images/book4'
import { css } from '@emotion/core'
import { mq } from './globals'

export default () => {
	return (
		<main id='main'>
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
				<a href='#' className='btn-text'>
					Learn more &crarr;
				</a>
			</About>
		</main>
	)
}

const SecondHeading = styled.h2`
	font-family: Akronim, cursive;
	font-weight: 300;
`
const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 3rem;
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
	margin-top: -15vh;
	cursor: default;
	padding: 8rem 0rem;
	${mq[2]} {
		margin-top: -20vh;
		padding: 18rem 5rem;
	}
`
