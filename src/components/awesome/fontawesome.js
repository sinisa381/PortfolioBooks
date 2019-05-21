import React from 'react'
import { IconContext } from 'react-icons'
import styled from '@emotion/styled'
export default ({ children }) => {
	return (
		<IconContext.Provider value={{ color: '#eee' }}>
			<Padding>{children}</Padding>
		</IconContext.Provider>
	)
}
const Padding = styled.div`padding: 1rem 2rem;`
