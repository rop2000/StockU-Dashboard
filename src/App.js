import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './components/Navbar/Navbar.js'
import Tickers from './components/Tickers/Tickers.js'
import StockHolding from './components/StockHolding/StockHolding.js'
import StockList from './components/StockList/StockList.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import StockChart from './components/StockGraph/StockGraph.js'
import AlgoObj from './components/AlgoObj/AlgoObj.js'
import StockStatsItem from './components/StockStatsItem/StockStatsItem.js';
import StockStatsGrid from './components/StockStatsGrid/StockStatsGrid.js';

function App() {
  return (
    
    <ChakraProvider theme={theme}>
     <Header/>
    <Tickers/>
   <Dashboard></Dashboard>
   {/* <StockChart numPoints={30}></StockChart> */}
















      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
