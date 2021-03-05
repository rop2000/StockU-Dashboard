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
  SimpleGrid,
} from '@chakra-ui/react';
import StockHolding from '../StockHolding/StockHolding.js'
import StockStatsItem from '../StockStatsItem/StockStatsItem.js';

function StockStatsGrid() {
  return (  
    
    <SimpleGrid ml="5rem" mt="1rem" columns={{sm: 2, md: 4}} spacingX="2em" spacingY="2em">
    
    <StockStatsItem heading="Balance" value="$50,600" ></StockStatsItem>
    <StockStatsItem heading="24hr Volume" value="$50,600" ></StockStatsItem>
    <StockStatsItem heading="Market Cap" value="$50,600" ></StockStatsItem>
    <StockStatsItem heading="All Time High" value="$50,600" ></StockStatsItem>
    
    <StockStatsItem heading="Typical Hold" value="$50,600" ></StockStatsItem>
    <StockStatsItem heading="Activity" value="$50,600" ></StockStatsItem>
    <StockStatsItem heading="Popularity" value="$50,600" ></StockStatsItem>
    <StockStatsItem heading="Share Supply" value="$50,600" ></StockStatsItem>

    </SimpleGrid>
    
  );
}

export default StockStatsGrid;
