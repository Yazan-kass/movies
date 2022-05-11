import styled from 'styled-components'

export const Flex = styled.div`
     display: flex;
     flex-direction: row;
`

export const FlexContener = styled(Flex)`
    justify-content: start;
    align-items: center;
    height: 100%;
    width: 80%;
    max-width: 1600px;
    margin: 0 auto;
`
export const InnerContener = styled.div`
     display: flex;
    justify-content: start;
    flex-direction: column;
    height: 100%;
    width: 80%;
    max-width: 1600px;
    margin: 0 auto;
    
`

