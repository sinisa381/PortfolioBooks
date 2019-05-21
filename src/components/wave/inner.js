import styled from '@emotion/styled'
import { waveAnimation } from './animation'
const InnerWave = styled.div`
	position: relative;
	height: 100%;
	svg {
		width: 100%;
		height: 40vh;
		fill: #242424;
	}
	path {
		${waveAnimation('20s')};
	}
`
export default InnerWave
