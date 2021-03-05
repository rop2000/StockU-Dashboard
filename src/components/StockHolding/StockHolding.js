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
  Badge,
  Heading,
  Text
} from '@chakra-ui/react';


function StockHolding() {
  return (  
    
    
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" bg="gray.900" width="80" overflow="hidden">
    <Box d="flex" flexDirection="row" m="5" as="div" href="/blog-post-thing">
      <Heading pr="10" mt="1" mb="0" as="h4" size="md"><Badge size="lg" fontSize="1em">GME</Badge></Heading>
      <Box ml="20">
          <Stat>
      <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      23.36%
    </StatHelpText>
    </Stat>
      </Box>

    </Box>
    <Box m="5" as="div">
    <Heading pr="10" mt={-5} as="h4" size="md">Position: 50 Shares</Heading>
    </Box>
</Box>
  );
}

export default StockHolding;
