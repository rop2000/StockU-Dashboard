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
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

import StockList from '../StockList/StockList.js'
import StockChart from '../StockGraph/StockGraph.js'
import SearchForm from '../SearchForm/SearchForm.js'


function Dashboard() {
  return (  
    <Flex color="white">
    <Flex direction="column">
    <Heading ml={5} mt={5} size="lg">Your Stocks</Heading>
    <StockList></StockList>
    </Flex>

    <Flex direction="column"> 
    <Heading ml={5} mt={5} size="lg">Live Stock Price</Heading>
    <StockChart numPoints={30}> </StockChart>
   
    {/* Chart comes here */}
    {/*Table or Transactions come here*/}
    </Flex>
    
    <Flex mt={5} ml={20} direction="column">
    <Heading size="lg">Search A Stock</Heading>
    <Flex mt={5} ><SearchForm></SearchForm></Flex>
    </Flex>
    {/* Search Box Comes here */}
    
    </Flex>
  );
}

export default Dashboard;
