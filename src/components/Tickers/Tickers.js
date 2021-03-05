import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  Center,
  Container, 
  Divider,
} from '@chakra-ui/react';


function generateTickers(numTickers){
 let tickerList = []
 for(let i = 0; i < numTickers; i++){
    tickerList.push(
        <div>
    <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      23.36%
    </StatHelpText>
  </Stat>
  <Divider orientation="vertical" />
  </div>
  
  )
 } 
return tickerList;

}



function Tickers() {
  return (
      <Container maxWidth="100" maxW="container.xl" bg="gray.900" mt="-50" borderWidth="1px" height="80px" letterSpacing="wide" overflow="hidden">
    <StatGroup height="80px">
    {generateTickers(8)}
</StatGroup>
</Container>
   
  );
}

export default Tickers;
