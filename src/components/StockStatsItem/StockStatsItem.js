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
  Text,
  Flex,
} from '@chakra-ui/react';


function StockStatsItem(props) {
  return (  
<Box maxW="12rem" borderRadius="lg" borderWidth="1px" bg="gray.900" overflow="hidden">
<Flex justify="center" direction="columns"><Text fontSize="2xl"><Badge colorScheme="purple">{props.heading}</Badge></Text></Flex>
<Divider orientation="horizontal" />
<Flex justify="center" direction="columns"><Text fontSize="2xl">{props.value}</Text></Flex>
</Box>
  );
}

export default StockStatsItem;
