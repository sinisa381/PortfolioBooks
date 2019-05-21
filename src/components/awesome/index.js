import React from 'react'
import Awesome from './fontawesome'
import {
	GiCycling,
	GiEagleHead,
	GiGasPump,
	GiKiwiBird,
	GiMightyBoosh,
	GiPerspectiveDiceSixFacesRandom,
	GiRhinocerosHorn,
	GiRobberMask,
	GiSunglasses,
	GiWalrusHead,
	GiRibcage
} from 'react-icons/gi'
import styled from '@emotion/styled'
export default () => (
	<Flex>
		<Awesome>
			<GiCycling />
		</Awesome>
		<Awesome>
			<GiEagleHead />
		</Awesome>
		<Awesome>
			<GiGasPump />
		</Awesome>
		<Awesome>
			<GiKiwiBird />
		</Awesome>
		<Awesome>
			<GiMightyBoosh />
		</Awesome>
		<Awesome>
			<GiPerspectiveDiceSixFacesRandom />
		</Awesome>
		<Awesome>
			<GiRhinocerosHorn />
		</Awesome>
		<Awesome>
			<GiRobberMask />
		</Awesome>
		<Awesome>
			<GiSunglasses />
		</Awesome>
		<Awesome>
			<GiWalrusHead />
		</Awesome>
		<Awesome>
			<GiRibcage />
		</Awesome>
	</Flex>
)
const Flex = styled.div`
	margin-top: 90vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: .5rem;
`
