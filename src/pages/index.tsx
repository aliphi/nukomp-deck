import {
  Flex,
  Text,
  Image,
  Stack,
  Box,
  ListItem,
  UnorderedList,
  StackDivider,
  Collapse
} from "@chakra-ui/react";

import { useContext } from "react";
import { Message_data } from "../context/context";
import Tasks from "@/components/dom/Tasks";
import PageInfo from "@/components/dom/PageInfo";
import styles from "@/styles/Home.module.scss";

export default function Scene({ ...props }) {

  const context = useContext(Message_data);

  return (
    <div className={styles.main}>
      <Tasks />
      <PageInfo />

      <Flex
        fontSize={{
          base: ".35em",
          sm: ".4em",
          md: ".45em",
          lg: ".6em",
          xl: ".7em",
          "2xl": "0.95em",
          "3xl": "2.5em",
        }}
        position="fixed"
        flexDirection="column"
        minW="100vw"
        minH="calc(var(--vh, 1vh) * 100)"
        justifyContent="center"
        zIndex="1000"
        pb="15vh"
        pl="10vw"
        pr="10vw"
        opacity="1"
        overflowX={"hidden"}
      >

        {/* EDITE HERE =========> FRONT PAGE SECTION - PAGE 0 */}
        <Collapse
          in={context.camera === 1 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="5em">COMPANY NAME</Text>
            <Text fontSize="3em">
              A cool sentence about the vision and the concept.</Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> FRONT PAGE SECTION - PAGE 0 */}

        {/* EDITE HERE =========> CONTENT SECTION - PAGE 1 */}
        <Collapse
          in={context.camera === 2 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2em">
              CONTENT:
            </Text>
            <Text
              fontSize="2em"
              lineHeight="1.5em"
              onClick={() => context.setCamera(3)}
              cursor="pointer"
            >
              COMPANY OVERVIEW
            </Text>
            <Text
              fontSize="2em"
              lineHeight="1.5em"
              onClick={() => context.setCamera(8)}
              cursor="pointer"
            >
              MARKET
            </Text>
            <Text
              fontSize="2em"
              lineHeight="1.5em"
              onClick={() => context.setCamera(13)}
              cursor="pointer"
            >
              STRATEGY
            </Text>
            <Text
              fontSize="2em"
              lineHeight="1.5em"
              onClick={() => context.setCamera(17)}
              cursor="pointer"
            >
              FINANCIAL
            </Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> CONTENT SECTION - PAGE 1 */}

        {/* EDITE HERE =========> MISSION SECTION - PAGE 2 */}
        <Collapse
          in={context.camera === 3 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box fontSize="1.5em" lineHeight="1.25em">
            <Text fontSize="3em" lineHeight="2.5em">
              MISSION
            </Text>
            <Text fontSize="1.25em" fontWeight={"bold"} display={"inline"}>
              Lorem ipsum
            </Text>
            <br></br>
            <Text display={"inline"}>
              dolor sit amet, consectetur adipiscing elit.
              <br></br>
              <br></br>
            </Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> MISSION SECTION - PAGE 2 */}

        {/* EDITE HERE =========> PRODUCT, PROBLEM STATEMENT SECTION - PAGE 3 */}
        <Collapse
          in={context.camera === 4 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="1.5em">
              PRODUCT:
            </Text>
            <Text fontSize="2em" lineHeight="2.5em">
              PROBLEM STATEMENT
            </Text>
            <br />
            <br />
            <Flex ml={1}>
              <UnorderedList fontSize="1.5em">
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> PRODUCT, PROBLEM STATEMENT SECTION - PAGE 3 */}

        {/* EDITE HERE =========> PRODUCT, SOLUTION SECTION - PAGE 4 */}
        <Collapse
          in={context.camera === 5 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="1.5em">
              PRODUCT:
            </Text>
            <Text fontSize="2em" lineHeight="2.5em">
              SOLUTION
            </Text>
            <br />
            <br />
            <Flex ml={1}>
              <UnorderedList fontSize="1.5em">
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> PRODUCT, SOLUTION SECTION - PAGE 4 */}

        {/* EDITE HERE =========> TEAM SECTION - PAGE 5 */}
        <Collapse
          in={context.camera === 6 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Text fontSize="3em" lineHeight="2.5em">
            TEAM
          </Text>
          <Flex gap={16}>
            <Flex maxW="50%">
              <Text
                fontSize="1.5em"
                lineHeight="1.25em"
                textAlign={"justify"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus, aliquam elementum urna pulvinar nec. Integer posuere sem nec massa mattis posuere. Nullam
                commodo nisi viverra vulputate pulvinar. Vivamus pulvinar velit ac metus placerat facilisis. Nam in faucibus nisi. Aenean quis nunc at lectus varius placerat sit amet ac dui.
                Nam vehicula a lacus eu euismod. Maecenas pretium massa odio, in iaculis sapien faucibus id.
                <br />
                <br />
                Suspendisse porta turpis sit amet dui bibendum, quis blandit mauris blandit. Donec
                placerat, urna sed pellentesque consectetur, tortor mi tristique lectus, ac porta ante ante ut ex. Aenean mollis, velit at fringilla finibus, urna mauris ullamcorper mi,
                porttitor aliquam diam ex in lorem.
              </Text>
            </Flex>
            <Flex flexDir={"column"} maxW="50%">
              <Image src="./nullsight.jpg" />
            </Flex>
          </Flex>
        </Collapse>
        {/* EDITE HERE =========> TEAM SECTION - PAGE 5 */}

        {/* EDITE HERE =========> LEADERSHIP SECTION - PAGE 6 */}
        <Collapse
          in={context.camera === 7 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Text fontSize="3em" lineHeight="2.5em">
            LEADERSHIP
          </Text>
          <Flex flexDir={"row"} justifyContent={"space-between"} gap={4}>
            <Flex flexDir={"column"} maxW={"24%"} minW={"24%"} p={8}>
              <Image src="./profile.jpg" />
              <Text fontSize={"2em"}>Lorem ipsum </Text>
              <Text>dolor sit amet</Text>
              <Text>consectetur adipiscing elit</Text>
            </Flex>
            <Flex flexDir={"column"} maxW={"24%"} minW={"24%"} p={8}>
              <Image src="./profile.jpg" />
              <Text fontSize={"2em"}>Lorem ipsum </Text>
              <Text>dolor sit amet</Text>
              <Text>consectetur adipiscing elit</Text>
            </Flex>
            <Flex flexDir={"column"} maxW={"24%"} minW={"24%"} p={8}>
              <Image src="./profile.jpg" />
              <Text fontSize={"2em"}>Lorem ipsum </Text>
              <Text>dolor sit amet</Text>
              <Text>consectetur adipiscing elit</Text>
            </Flex>
            <Flex flexDir={"column"} maxW={"24%"} minW={"24%"} p={8}>
              <Image src="./profile.jpg" />
              <Text fontSize={"2em"}>Lorem ipsum </Text>
              <Text>dolor sit amet</Text>
              <Text>consectetur adipiscing elit</Text>
              <Text></Text>
            </Flex>
          </Flex>
        </Collapse>
        {/* EDITE HERE =========> LEADERSHIP SECTION - PAGE 6 */}

        {/* EDITE HERE =========> SIZE SECTION - PAGE 7 */}
        <Collapse
          in={context.camera === 8 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              SIZE
            </Text>
            <Flex
              flexDir={"row"}
              w="100%"
              alignContent={"center"}
              justifyContent={"center"}
              gap={4}
            >
              <Flex flexDir={"column"} maxW="45%" alignContent={"center"}>
                <Text
                  fontSize="1.7em"
                  lineHeight="1.25em"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus, aliquam elementum urna pulvinar nec. Integer posuere sem nec massa mattis posuere. Nullam
                  commodo nisi viverra vulputate pulvinar. Vivamus pulvinar velit ac metus placerat facilisis.
                  <br />
                  <br />
                  Nam in faucibus nisi. Aenean quis nunc at lectus varius placerat sit amet ac dui.
                  Nam vehicula a lacus eu euismod. Maecenas pretium massa odio, in iaculis sapien faucibus id.

                </Text>{" "}
              </Flex>

              <Flex flexDir={"column"} w="55%" alignContent={"center"}>
                <Image src="./Graph2.png" maxH="50vh" />
              </Flex>
            </Flex>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> SIZE SECTION - PAGE 7 */}

        {/* EDITE HERE =========> TRENDS SECTION - PAGE 8 */}
        <Collapse
          in={context.camera === 9 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              TRENDS
            </Text>

            <br />
            <br />

            <Text fontSize="1.75em" lineHeight="1.5em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit:
            </Text>
            <br></br>
            <Flex ml={1}>
              <UnorderedList fontSize="1.5em">
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> TRENDS SECTION - PAGE 8 */}

        {/* EDITE HERE =========> COMPETITIVE LANDSCAPE SECTION - PAGE 9 */}
        <Collapse
          in={context.camera === 10 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              COMPETITIVE LANDSCAPE
            </Text>
            <Text fontSize="1.5em" lineHeight="1.25em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus, aliquam elementum urna pulvinar nec. Integer posuere sem nec massa mattis posuere.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus, aliquam elementum urna pulvinar nec. Integer posuere sem nec massa mattis posuere.
            </Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> COMPETITIVE LANDSCAPE SECTION - PAGE 9 */}

        {/* EDITE HERE =========> COMPETITIVE ANALYSIS SECTION - PAGE 10 */}
        <Collapse
          in={context.camera === 11 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              COMPETITIVE ANALYSIS
            </Text>
            <Flex
              flexDir={"row"}
              w="100%"
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Image src="./Graph1.png" maxH="60vh" />
            </Flex>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> COMPETITIVE ANALYSIS SECTION - PAGE 10 */}

        {/* EDITE HERE =========> DIFFERENTIATORS SECTION - PAGE 11 */}
        <Collapse
          in={context.camera === 12 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              DIFFERENTIATORS
            </Text>
            <Text fontSize="2em">1. Lorem ipsum dolor sit amet:</Text>
            <Text fontSize="1em" pb="1em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ed congue nisi lacus, aliquam elementum urna pulvinar nec.
            </Text>
            <Text fontSize="2em">2. Lorem ipsum dolor sit amet:</Text>
            <Text fontSize="1em" pb="1em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ed congue nisi lacus, aliquam elementum urna pulvinar nec.
            </Text>
            <Text fontSize="2em">3. Lorem ipsum dolor sit amet:</Text>
            <Text fontSize="1em" pb="1em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ed congue nisi lacus, aliquam elementum urna pulvinar nec.
            </Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> DIFFERENTIATORS SECTION - PAGE 11 */}

        {/* EDITE HERE =========> GOALS SECTION - PAGE 12 */}
        <Collapse
          in={context.camera === 13 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              GOALS
            </Text>
            <Text fontSize="1.5em" lineHeight="1.25em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus, aliquam elementum urna pulvinar nec. Integer posuere sem nec massa mattis posuere. Nullam
              commodo nisi viverra vulputate pulvinar. Vivamus pulvinar velit ac metus placerat facilisis. Nam in faucibus nisi. Aenean quis nunc at lectus varius placerat sit amet ac dui.
              Nam vehicula a lacus eu euismod. Maecenas pretium massa odio, in iaculis sapien faucibus id.
            </Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> GOALS SECTION - PAGE 12 */}

        {/* EDITE HERE =========> SWOT SECTION - PAGE 13 */}
        <Collapse
          in={context.camera === 14 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              SWOT
            </Text>
            <Text fontSize="2em" lineHeight="1.25em">
              Strengths:
            </Text>
            <Flex ml={1}>
              <UnorderedList fontSize="1.1em" lineHeight="1.25em">
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
              </UnorderedList>
            </Flex>
            <br />
            <Text fontSize="2em" lineHeight="1.25em">
              Weaknesses:
            </Text>
            <Flex ml={1}>
              <UnorderedList fontSize="1.1em" lineHeight="1.25em">
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
              </UnorderedList>
            </Flex>
            <br />
            <Text fontSize="2em" lineHeight="1.25em">
              Opportunities:
            </Text>
            <Flex ml={1}>
              <UnorderedList fontSize="1.1em" lineHeight="1.25em">
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
              </UnorderedList>
            </Flex>
            <br />
            <Text fontSize="2em" lineHeight="1.25em">
              Threats:
            </Text>
            <Flex ml={1}>
              <UnorderedList fontSize="1.1em" lineHeight="1.25em">
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> SWOT SECTION - PAGE 13 */}


        {/* EDITE HERE =========> KPIs SECTION - PAGE 14 */}
        <Collapse
          in={context.camera === 15 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box fontSize={"0.85em"}>
            <Text fontSize="3.5em" lineHeight="3em">
              Key Performance Indicators (KPIs)
            </Text>

            <Flex flexDirection={"row"} gap={16} ml={1}>
              <Flex flexDirection={"column"} maxW="50%" fontSize="1.25em">
                <Text fontSize="1.25em" fontWeight={"bold"}>
                  1. Lorem ipsum dolor:
                </Text>
                <UnorderedList>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                </UnorderedList>
                <br />

                <Text fontSize="1.25em" fontWeight={"bold"}>
                  2. Lorem ipsum dolor:
                </Text>
                <UnorderedList>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                </UnorderedList>
                <br />

                <Text fontSize="1.25em" fontWeight={"bold"}>
                  3. Lorem ipsum dolor:
                </Text>
                <UnorderedList>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                </UnorderedList>
                <br />

                <Text fontSize="1.25em" fontWeight={"bold"}>
                  4. Lorem ipsum dolor:
                </Text>
                <UnorderedList>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                </UnorderedList>
                <br />
              </Flex>

              <Flex flexDirection={"column"} maxW="50%" fontSize="1.25em">
                <Text fontSize="1.25em" fontWeight={"bold"}>
                  5. Lorem ipsum dolor:
                </Text>
                <UnorderedList>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                </UnorderedList>
                <br />

                <Text fontSize="1.25em" fontWeight={"bold"}>
                  6. Lorem ipsum dolor:
                </Text>
                <UnorderedList>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                </UnorderedList>
                <br />

                <Text fontSize="1.25em" fontWeight={"bold"}>
                  7. Lorem ipsum dolor:
                </Text>
                <UnorderedList>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                  <ListItem>
                    dolor sit amet, consectetur adipiscing elit.
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> KPIs SECTION - PAGE 14 */}

        {/* EDITE HERE =========> ACTION PLAN SECTION - PAGE 15 */}
        <Collapse
          in={context.camera === 16 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              ACTION PLAN
            </Text>
            <Flex flexDir={"row"} gap={2} justifyContent={"space-between"}>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"24%"}
                minW={"24%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.5em"} fontWeight={"bold"}>
                  6-Month Milestones
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"24%"}
                minW={"24%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.5em"} fontWeight={"bold"}>
                  1-Year Milestones
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"24%"}
                minW={"24%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.5em"} fontWeight={"bold"}>
                  2-Year Milestones
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"24%"}
                minW={"24%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.5em"} fontWeight={"bold"}>
                  5-Year Milestones
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
            </Flex>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> ACTION PLAN SECTION - PAGE 15 */}

        {/* EDITE HERE =========> REVENUE SECTION - PAGE 16 */}
        <Collapse
          in={context.camera === 17 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="3em">
              REVENUE
            </Text>
            <Text fontSize="2em">
              1. Lorem ipsum dolor
              <br />
              2. Lorem ipsum dolor
              <br />
              3. Lorem ipsum dolor
              <br />
              4. Lorem ipsum dolor
              <br />
              5. Lorem ipsum dolor
              <br />
              6. Lorem ipsum dolor
              <br />
              <br />
            </Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> REVENUE SECTION - PAGE 16 */}

        {/* EDITE HERE =========> FINANCIAL PROJECTIONS SECTION - PAGE 17 */}
        <Collapse
          in={context.camera === 18 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              FINANCIAL PROJECTIONS
            </Text>

            <Text fontSize="1.5em" mb="2em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
            </Text>
            <Flex flexDir={"row"} gap={1} fontSize={"1em"}>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"19%"}
                minW={"19%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.2em"} fontWeight={"bold"} pb="1em">
                  Year 1 (20XX)
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor:
                      <br />
                      $000,000
                    </Text>
                    <Text pt="2">Lorem ipsum dolor:</Text>
                    <UnorderedList>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"19%"}
                minW={"19%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.2em"} fontWeight={"bold"} pb="1em">
                  Year 2 (20XX)
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor:
                      <br />
                      $000,000
                    </Text>
                    <Text pt="2">Lorem ipsum dolor:</Text>
                    <UnorderedList>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"19%"}
                minW={"19%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.2em"} fontWeight={"bold"} pb="1em">
                  Year 3 (2026)
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor:
                      <br />
                      $000,000
                    </Text>
                    <Text pt="2">Lorem ipsum dolor:</Text>
                    <UnorderedList>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"19%"}
                minW={"19%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.2em"} fontWeight={"bold"} pb="1em">
                  Year 4 (2027)
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor:
                      <br />
                      $000,000
                    </Text>
                    <Text pt="2">Lorem ipsum dolor:</Text>
                    <UnorderedList>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
              <Flex
                flexDir={"column"}
                bg="transparent"
                border="solid 1px white"
                color="white"
                maxW={"19%"}
                minW={"19%"}
                borderRadius={"5px"}
                p="2em"
              >
                <Text fontSize={"1.2em"} fontWeight={"bold"} pb="1em">
                  Year 4 (2028)
                </Text>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Lorem ipsum dolor:
                      <br />
                      $000,000
                    </Text>
                    <Text pt="2">Lorem ipsum dolor:</Text>
                    <UnorderedList>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                      <ListItem>dolor sit amet.</ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
            </Flex>
            <Text fontSize="1em" mt="2em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus, aliquam elementum urna pulvinar nec.
            </Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> FINANCIAL PROJECTIONS SECTION - PAGE 17 */}

        {/* EDITE HERE =========> FUNDING SECTION - PAGE 18 */}
        <Collapse
          in={context.camera === 19 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box fontSize={"0.85em"}>
            <Text fontSize="3.5em" lineHeight="2em">
              FUNDING
            </Text>
            <Text
              fontSize="1.5em"
              display={"inline"}
              lineHeight={"1.1em"}
              pb="1em"
            >
              Lorem ipsum dolor sit amet,
            </Text>

            <Text
              fontSize="2em"
              display={"inline"}
              lineHeight={"1.1em"}
              pb="1em"
            >
              {" "}
              $ 000.000
            </Text>
            <Text fontSize="1.5em" lineHeight={"1.1em"} pb="1em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus.
            </Text>

            <Text fontSize="2em" display="inline">
              00%{" "}
            </Text>
            <Text fontSize="1.25em" display="inline">
              Lorem ipsum dolor sit amet.
            </Text>
            <UnorderedList mb="1em">
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus.
              </ListItem>
            </UnorderedList>

            <Text fontSize="2em" display="inline">
              00%{" "}
            </Text>
            <Text fontSize="1.25em" display="inline">
              Lorem ipsum dolor sit amet.
            </Text>
            <UnorderedList mb="1em">
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus.
              </ListItem>
            </UnorderedList>

            <Text fontSize="2em" display="inline">
              00%{" "}
            </Text>
            <Text fontSize="1.25em" display="inline">
              Lorem ipsum dolor sit amet.
            </Text>
            <UnorderedList mb="1em">
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus.
              </ListItem>
            </UnorderedList>

            <Text fontSize="2em" display="inline">
              00%{" "}
            </Text>
            <Text fontSize="1.25em" display="inline">
              Lorem ipsum dolor sit amet.
            </Text>
            <UnorderedList mb="1em">
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus.
              </ListItem>
            </UnorderedList>

            <Text fontSize="2em" display="inline">
              00%{" "}
            </Text>
            <Text fontSize="1.25em" display="inline">
              Lorem ipsum dolor sit amet.
            </Text>
            <UnorderedList mb="1em">
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nisi lacus.
              </ListItem>
            </UnorderedList>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> FUNDING SECTION - PAGE 18 */}

        {/* EDITE HERE =========> LAST PAGE SECTION - PAGE 19 */}
        <Collapse
          in={context.camera === 20 ? true : false}
          animateOpacity
          transition={{ enter: { duration: 0.5 } }}
        >
          <Box>
            <Text fontSize="3em" lineHeight="2.5em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text fontSize="1.5em" lineHeight="1.25em">
              For more information, Please contact:
              <br />
              XX@XXXXX.com
            </Text>
          </Box>
        </Collapse>
        {/* EDITE HERE =========> LAST PAGE SECTION - PAGE 19 */}

      </Flex>
    </div>
  );
}
