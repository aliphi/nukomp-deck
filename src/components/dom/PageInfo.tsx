import { Flex, Text, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { Message_data } from "../../context/context";
import { Fade } from "@chakra-ui/react";

export default function Pageinfo() {
  const context = useContext(Message_data);

  return (
    <Flex
      fontSize={{
        base: "0.35em",
        sm: ".4em",
        md: ".45em",
        lg: ".6em",
        xl: ".8em",
        "2xl": "1em",
        "3xl": "2em",
      }}
      position="absolute"
      bottom="4em"
      left="10vw"
      minH="10em"
      direction="column"
      textAlign="center"
      justifyContent="flex-end"
      alignItems="center"
      pointerEvents="all"
      zIndex={1500}
    >
      {context.camera === 1 && (
        <Fade in={context.camera === 1 ? true : false}>
          <Flex
            flexDir={"row"}
            alignItems={"center"}
            gap={6}
            fontSize="2em"
          >
            <Text>PITCH DECK</Text>
            <Text fontSize="0.5em">/</Text>
            <Text>MONTH 20XX</Text>
          </Flex>
        </Fade>
      )}

      {context.camera === 2 && (
        <Fade in={context.camera === 2 ? true : false}>
          <Flex
            flexDir={"row"}
            alignItems={"center"}
            gap={6}
            fontSize="2em"
          >
            <HStack minW="5em" gap={6}>
              <Text>{context.camera - 1}</Text>
              <Text fontSize="0.5em">/</Text>
              <Text>19</Text>
            </HStack>
            <Text ml="4em">TABLE OF CONTENTS</Text>
          </Flex>
        </Fade>
      )}

      {context.camera >= 3 && context.camera <= 7 && (
        <Flex flexDir={"row"} alignItems={"center"} gap={6} fontSize="2em">
          <HStack minW="5em" gap={6}>
            <Text>{context.camera - 1}</Text>
            <Text fontSize="0.5em">/</Text>
            <Text>19</Text>
          </HStack>
          <Text
            ml="4em"
            onClick={() => context.setCamera(3)}
            cursor="pointer"
          >
            COMPANY OVERVIEW
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(8)}
            cursor="pointer"
          >
            MARKET
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(13)}
            cursor="pointer"
          >
            STRATEGY
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(17)}
            cursor="pointer"
          >
            FINANCIAL
          </Text>
        </Flex>
      )}

      {context.camera >= 8 && context.camera <= 12 && (
        <Flex flexDir={"row"} alignItems={"center"} gap={6} fontSize="2em">
          <HStack minW="5em" gap={6}>
            <Text>{context.camera - 1}</Text>
            <Text fontSize="0.5em">/</Text>
            <Text>20</Text>
          </HStack>
          <Text
            ml="4em"
            opacity="0.5"
            onClick={() => context.setCamera(3)}
            cursor="pointer"
          >
            COMPANY OVERVIEW
          </Text>
          <Text onClick={() => context.setCamera(8)} cursor="pointer">
            MARKET
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(13)}
            cursor="pointer"
          >
            STRATEGY
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(17)}
            cursor="pointer"
          >
            FINANCIAL
          </Text>
        </Flex>
      )}

      {context.camera >= 13 && context.camera <= 16 && (
        <Flex flexDir={"row"} alignItems={"center"} gap={6} fontSize="2em">
          <HStack minW="5em" gap={6}>
            <Text>{context.camera - 1}</Text>
            <Text fontSize="0.5em">/</Text>
            <Text>19</Text>
          </HStack>
          <Text
            ml="4em"
            opacity="0.5"
            onClick={() => context.setCamera(3)}
            cursor="pointer"
          >
            COMPANY OVERVIEW
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(8)}
            cursor="pointer"
          >
            MARKET
          </Text>
          <Text onClick={() => context.setCamera(13)} cursor="pointer">
            STRATEGY
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(17)}
            cursor="pointer"
          >
            FINANCIAL
          </Text>
        </Flex>
      )}

      {context.camera >= 17 && context.camera <= 19 && (
        <Flex flexDir={"row"} alignItems={"center"} gap={6} fontSize="2em">
          <HStack minW="5em" gap={6}>
            <Text>{context.camera - 1}</Text>
            <Text fontSize="0.5em">/</Text>
            <Text>19</Text>
          </HStack>
          <Text
            ml="4em"
            opacity="0.5"
            onClick={() => context.setCamera(3)}
            cursor="pointer"
          >
            COMPANY OVERVIEW
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(8)}
            cursor="pointer"
          >
            MARKET
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(13)}
            cursor="pointer"
          >
            STRATEGY
          </Text>
          <Text onClick={() => context.setCamera(17)} cursor="pointer">
            FINANCIAL
          </Text>
        </Flex>
      )}

      {context.camera === 20 && (
        <Flex flexDir={"row"} alignItems={"center"} gap={6} fontSize="2em">
          <HStack minW="5em" gap={6}>
            <Text>{context.camera - 1}</Text>
            <Text fontSize="0.5em">/</Text>
            <Text>19</Text>
          </HStack>
          <Text
            ml="4em"
            opacity="0.5"
            onClick={() => context.setCamera(3)}
            cursor="pointer"
          >
            COMPANY OVERVIEW
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(8)}
            cursor="pointer"
          >
            MARKET
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(13)}
            cursor="pointer"
          >
            STRATEGY
          </Text>
          <Text
            opacity="0.5"
            onClick={() => context.setCamera(17)}
            cursor="pointer"
          >
            FINANCIAL
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
