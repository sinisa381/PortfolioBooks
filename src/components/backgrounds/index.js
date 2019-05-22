import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { mq } from '../globals'
export const StyledImage = styled(Image)`
background-position:cover;
margin-bottom:3rem;
  width:100%;
  @media only screen and (min-width:620px){
    max-height:400px;
  }
${mq[2]}{
margin-bottom:0rem;
  max-height:100vh;
  height:auto;
width:50%;
}
`
