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
  VStack,
} from '@chakra-ui/react';
import StockHolding from '../StockHolding/StockHolding.js'


function StockList() {
  return (  
    
    <VStack spacing="10px" align="left" m={5}>
        <StockHolding></StockHolding>
        <StockHolding></StockHolding>
        <StockHolding></StockHolding>
        <StockHolding></StockHolding>
        <StockHolding></StockHolding>
   </VStack>
  );
}

export default StockList;
