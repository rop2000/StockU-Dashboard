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
  Progress,
  Flex,
  Button,
  MdBuild,
  useDisclosure,
  Tag,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';

import { InfoIcon } from '@chakra-ui/icons';
import AlgoModal from '../AlgoModal/AlgoModal.js'

function AlgoObj(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (  
    
    
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" bg="gray.900" width="80" overflow="hidden">
    
    <Box d="flex" flexDirection="row" m="5" as="div" href="/blog-post-thing">
      <Heading pr="10" mt="1" mb="0" as="h4" size="md"><Badge size="lg" fontSize="1em">{props.algoName}</Badge></Heading>
      <Box ml={20}>
      <Button onClick={onOpen} ml={-2} mt={1} leftIcon={<InfoIcon/>} variant="ghost" size="xs" colorScheme="gray" variant="solid">
        More Info
      </Button>
      </Box>

    </Box>
    <Box m="5" as="div">
    <Flex direction="column">
    <Badge size="xs" color="green.100">RUNNING</Badge>
    <Progress size="xs" isIndeterminate colorScheme="green" />
    </Flex>
    </Box>
    <AlgoModal isOpen={isOpen} onClose={onClose}>

    <Box maxW="32rem">
      <Heading mb={4}>{props.algoName}</Heading>

    <HStack spacing={35}>
    <Box m="5" as="div">
    <HStack spacing={-5}>
    <Text fontSize="md" pr="10" >Algo ID: {props.algoID ? props.algoID : "None"}</Text>   
    <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>What's an Algo ID?</PopoverHeader>
              <PopoverBody>We use your algorithm's ID to make sure it continues running even when you're away enjoying your coffee!</PopoverBody>
            </PopoverContent>
        </Popover>
   
    </HStack>

    <HStack mt={25} spacing={-5}>
    <Text fontSize="md" pr="10" >Stock: {props.algoStock ? props.algoStock : "None"}</Text>

        <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Stock Ticker</PopoverHeader>
              <PopoverBody>Equitia currently supports one stock per algorithm! If you want to use the same algorithm for multiple stocks, you can duplicate it and change the ticker.</PopoverBody>
            </PopoverContent>
        </Popover>

    </HStack>

    </Box>

    <Box as="div">
    <HStack spacing={-5}>
    <Text fontSize="md" pr="10" >Shares: {props.algoShares ? props.algoShares : "None"}</Text>   
    <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Current Share Amount</PopoverHeader>
              <PopoverBody>Depending on how your algorithm works, this value can change frequently during the day! This is the current number of shares the algo has invested into.</PopoverBody>
            </PopoverContent>
        </Popover>
   
    </HStack>

    <HStack mt={25} spacing={-5}>
    <Text fontSize="md" pr="10" >Profit: {props.algoProfit ? props.algoProfit : "$0" }</Text>

        <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader> Year To Date(YTD) Profit</PopoverHeader>
              <PopoverBody>This is how much profit your algorithm has made since you created it! If this is negative for a long period of time, you may want to try a different setup.</PopoverBody>
            </PopoverContent>
        </Popover>

    </HStack>

    </Box>
    </HStack>
    </Box>
        
    </AlgoModal> 
</Box>
  );
}

export default AlgoObj;
   