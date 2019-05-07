import React from 'react'
import styled from '@emotion/styled'
import Book1 from './featured-images/book1'
import Book2 from './featured-images/book2'
import Book3 from './featured-images/book3'
import Book4 from './featured-images/book4'

export default () => {
	return (
		<main id='main'>
			<section className='section-about'>
				<div className='u-center-text u-margin-bottom-8'>
					<SecondHeading className='heading-secondary'>Awesome books</SecondHeading>
				</div>
				<div className='row'>
					<div className='col-1-of-2'>
						<h3 className='heading-tertiary u-margin-bottom-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h3>
						<p className='paragraph u-margin-bottom-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque eos aut qui
							natus, laudantium nisi at debitis hic tempore.
						</p>
						<h3 className='heading-tertiary u-margin-bottom-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h3>
						<p className='paragraph u-margin-bottom-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque eos aut qui
							natus, laudantium nisi at debitis hic tempore.
						</p>
						<a href='#' className='btn-text'>
							Learn more &crarr;
						</a>
					</div>
					<div className='col-1-of-2'>
						<div className='composition'>
							<Book1 />
							<Book2 />
							<Book3 />
							<Book4 />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

const SecondHeading = styled.h2`
	font-family: Akronim, cursive;
	font-weight: 300;
`
