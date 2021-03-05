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
import AlgoObj from '../AlgoObj/AlgoObj.js'

function genAlgoItems(numAlgos){
    let algos = []
    for(let i = 0; i < numAlgos; i++){
        algos.push(<AlgoObj algoName={"Algo" + i} key={i}></AlgoObj>)
    }
    return algos;
}

function AlgoList(props) {
  return (  
    
    <VStack spacing="10px" align="left" mt={5}>
      {genAlgoItems(props.numAlgos)}
   </VStack>
  );
}

export default AlgoList;
