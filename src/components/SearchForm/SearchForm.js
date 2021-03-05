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
  InputGroup,
  InputRightAddon,
  Input,
  Flex,
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


function StockForm(props) {
  return (  
    
    
    <Box maxW="sm" height="3xs" borderWidth="2px" borderRadius="lg" bg="gray.900" width="80" overflow="hidden">
    <Box d="flex" flexDirection="row" m="5" as="div">
      <Heading pr="10" mt="1" mb="0" as="h4" size="md">Search</Heading>
      <InputGroup size="sm">
    
    <Input placeholder="Ticker" />
    <InputRightAddon as="button" children="Search" />
  </InputGroup>
    </Box>

    <HStack spacing={35}>
    <Box m="5" as="div">
    <HStack spacing={-5}>
    <Text fontSize="md" pr="10" >Open: {props.openPrice ? props.openPrice : "--"}</Text>   
    <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Open Price</PopoverHeader>
              <PopoverBody>This is the price the stock you searched for last opened at! You can use this adjust when you want your algo to buy shares.</PopoverBody>
            </PopoverContent>
        </Popover>
   
    </HStack>

    <HStack mt={25} spacing={-5}>
    <Text fontSize="md" pr="10" >Close: {props.openPrice ? props.openPrice : "--"}</Text>

        <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Close Price</PopoverHeader>
              <PopoverBody>This is the price the stock you searched for last closed at! You can use this adjust when you want to sell your algo.</PopoverBody>
            </PopoverContent>
        </Popover>

    </HStack>

    </Box>

    <Box as="div">
    <HStack spacing={-5}>
    <Text fontSize="md" pr="10" >Volume: {props.volume ? props.volume : "--"}</Text>   
    <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Volume</PopoverHeader>
              <PopoverBody>This is the price the stock you searched for last opened at! You can use this adjust when you want your algo to buy shares.</PopoverBody>
            </PopoverContent>
        </Popover>
   
    </HStack>

    <HStack mt={25} spacing={-5}>
    <Text fontSize="md" pr="10" >Change: {props.numChange && props.percChange ? props.numChange+"/"+props.percChange : "--" }</Text>

        <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Change #/%: {props.numChange && props.percChange ? props.numChange+"/"+props.percChange : "--" }</PopoverHeader>
              <PopoverBody>This is the price the stock you searched for last closed at! You can use this adjust when you want to sell your algo.</PopoverBody>
            </PopoverContent>
        </Popover>

    </HStack>

    </Box>
    </HStack>

</Box>
  );
}

export default StockForm;
