import { useState, useRef, useEffect } from "react";
import {
  Flex,
  Text,
  Image,
  Stack,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AspectRatio,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  StackDivider,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { useContext } from "react";
import { Message_data } from "../context/context";

// @ts-ignore
import Typewriter from "typewriter-effect";

// @ts-ignore
import Immersive from "@/components/dom/Animation";

import Tasks from "@/components/dom/Tasks";
import PageInfo from "@/components/dom/PageInfo";

import styles from "@/styles/Home.module.scss";

export default function Scene({ ...props }) {
  const [pointerDown, setPointerDown] = useState(false);
  const [cameraDirection, setCameraDirection] = useState([0, 0]);
  const [loader, setLoader] = useState(true);

  const loaderRed = useRef();

  const [popup, setPopup] = useState(0);
  const [project, setProject] = useState(0);

  const context = useContext(Message_data);

  const [modal, setModal] = useState(false);

  // const [fov, setFov] = useState(35)

  // useEffect(() => {
  // device ? setFov(45) : setFov(62)
  // }, [device])

  // useEffect(() => {
  //   context.camera === 3 &&
  //     (setModal(true),
  //     setTimeout(() => {
  //       setModal(false);
  //     }, 300));
  // }, [context.camera, modal]);

  const steps = [
    { title: "6-Month Milestone", description: "Contact Info" },
    { title: "1-Year Milestone", description: "Date & Time" },
    { title: "2-Year Milestone", description: "Select Rooms" },
    { title: "5-Year Milestone", description: "Select Rooms" },
  ];

  function HandleProject(e) {
    e !== 0
      ? (setPopup(1),
        setTimeout(() => {
          setProject(e);
        }, 100))
      : (setProject(0),
        setTimeout(() => {
          setPopup(0);
        }, 100));
  }

  const changePage = async (e: any) => {
    if (context.camera > 1 && e === -1) {
      context.setCamera(context.camera - 1);
    } else if (context.camera < 20 && e === 1) {
      context.setCamera(context.camera + 1);
    }
  };

  return (
    <div className={styles.main}>
      <>
        <Tasks />
        <PageInfo />

        <Flex
          fontSize={{
            base: ".09em",
            sm: ".4em",
            md: ".45em",
            lg: ".5em",
            xl: ".7em",
            "2xl": "0.95em",
            "3xl": "2em",
          }}
          position="fixed"
          flexDirection="column"
          minW="100vw"
          minH="100vh"
          justifyContent="center"
          zIndex="1000"
          // pt="15vh"
          pb="15vh"
          pl="10vw"
          pr="10vw"
          opacity="1"
          // pointerEvents="none"
          overflowX={"hidden"}
        >
          <Collapse
            in={context.camera === 1 ? true : false}
            animateOpacity
            transition={{ enter: { duration: 0.5 } }}
          >
            <Box>
              <Text fontSize="5em">NULLSIGHT</Text>
              <Text fontSize="3em">
                Unleashing authentic artistry on a unified digital canvas.
              </Text>
              <br></br>
              {/* <Stack fontSize="6em" lineHeight="0.9em">
              <Typewriter
                options={{
                  strings: ["CREATING", "DESIGNING", "DEVELOPING"],
                  autoStart: true,
                  // @ts-ignore
                  pauseFor: 7000,
                  // @ts-ignore
                  loop: false,
                }}
              />
              <Typewriter
                options={{
                  strings: ["PHYGITAL", "DIGITAL", "WEB-BASED", "HYBRID"],
                  autoStart: true,
                  // @ts-ignore
                  pauseFor: 8000,
                  // @ts-ignore
                  loop: true,
                }}
              />
              <Typewriter
                options={{
                  strings: ["EXPERIENCES", "APPLICATIONS", "PRODUCTS"],
                  autoStart: true,
                  // @ts-ignore
                  pauseFor: 9000,
                  // @ts-ignore
                  loop: true,
                }}
              />
            </Stack> */}
              {/* <Text
              fontSize="2em"
              lineHeight="1.1em"
              maxW="30vw"
              mt="4em"
              mb="1em"
            >
              Hi, I am Ali Phi, <br></br>
              Design Technologist, Creative Hybrid and Interaction Designer.
            </Text> */}
              {/* <Text
              fontSize="1em"
              lineHeight="0.9em"
              textDecoration="underline"
              cursor="pointer"
              pointerEvents="all"
              onClick={() => HandleProject(1)}
            >
              Read more about what I do!
            </Text> */}
              <br></br>
              <br></br>
              {/* <Text
              fontSize="0.7em"
              lineHeight="1em"
              // textDecoration="underline"
              // cursor="pointer"
              pointerEvents="all"
              // as="u"
            >
              This presentation has been crafted using the advancements made in
              recent projects using Next.js and R3F.
            </Text> */}
            </Box>
          </Collapse>

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
                Instagram{" "}
              </Text>
              <Text display={"inline"}>
                stands as the reigning champion for artists to showcase their
                work like a portfolio.
                <br></br>
                <br></br>
              </Text>
              <Text fontSize="1.25em" fontWeight={"bold"} display={"inline"}>
                Yet, no unified platform{" "}
              </Text>
              <Text display={"inline"}>
                that allows digital artworks to be shared, acquired, and
                displayed without compression or limitation, unlike several art
                streaming platforms!
                <br></br>
                <br></br>
              </Text>
              <Text fontSize="1.25em" fontWeight={"bold"} display={"inline"}>
                {" "}
                How digital art is experienced and valued{" "}
              </Text>
              <Text display={"inline"}>
                needs to be revolutionized, by integrating cutting-edge
                technology and a user-centric approach, in the cloud-based
                digital age.
                <br></br>
                <br></br>
                Our mission is to democratize the world of digital art, making
                it accessible to creators, collectors, and audiences worldwide
                by integrating cutting-edge technology and a user-centric
                approach, we aim to revolutionize
              </Text>
            </Box>
          </Collapse>

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

              <UnorderedList fontSize="1.5em">
                <ListItem>
                  Current art streaming services often have a narrow focus,
                  primarily catering to the art world, advertisements, or NFT
                  sales.
                </ListItem>
                <ListItem>
                  Constraints like compression, media limits, and quality
                  concerns, and a lack of support for 3D or generative arts.
                </ListItem>
                <ListItem>
                  Absence of a versatile, embeddable, and omnichannel solution.
                </ListItem>
                <ListItem>
                  Addressing artists' royalties, intellectual property rights,
                  and the after-market experience.
                </ListItem>
                <ListItem>
                  Fragmented communities among artists, collectors, and the
                  market.
                </ListItem>
                <ListItem>
                  Difficulties in presenting and exhibiting works at public or
                  private events.
                </ListItem>
              </UnorderedList>
            </Box>
          </Collapse>

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

              <UnorderedList fontSize="1.5em">
                <ListItem>
                  Cloud-based service catering to artists, galleries, agents,
                  collectors, retailers, and DOOH services.
                </ListItem>
                <ListItem>
                  Customizable ratio, quality, and format, offering real-time
                  generative, WebGL and rendered videos.
                </ListItem>
                <ListItem>
                  Seamless integration with Demand-Side Platforms and
                  Programmatic Advertisement providers.
                </ListItem>
                <ListItem>
                  Interactive overlay layer to enhance viewer engagement.
                </ListItem>
                <ListItem>
                  Comprehensive CMS empowering collectors or business owners to
                  rent directly from artists and manage their screens.
                </ListItem>
                <ListItem>
                  Traceable equity in artists' royalties, shares and
                  intellectual property rights via blockchain technology.
                </ListItem>
              </UnorderedList>
            </Box>
          </Collapse>

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
                  Established in 2013, Rooted in Toronto, we began our journey
                  as a pioneering studio and collective dedicated to crafting
                  immersive spaces that seamlessly blend art, science,
                  technology, and light. Throughout our evolution, we've
                  fostered dynamic collaborations with esteemed international
                  art and cultural institutions, as well as galleries.
                  <br />
                  <br />
                  Our expertise lies in curating and orchestrating art events,
                  leading audiovisual production, designing and developing
                  cutting-edge new media spatial environments, orchestrating
                  public installations, and co-producing digital art festivals
                  and public events.
                  <br />
                  <br />
                  In the last four years, we've expanded our focus to encompass
                  the realm of software development and cloud-based solutions.
                  These endeavors are specifically tailored to empower artists
                  and enthusiasts alike, providing them with an arsenal of tools
                  to amplify their creative expression by nurturing the growth
                  of new media arts and technology-driven artistic endeavors,
                  we've been pivotal in catalyzing technical productions and
                  providing a platform for artists to showcase their works.
                </Text>
              </Flex>

              <Flex flexDir={"column"} maxW="50%">
                <Image src="./nullsight.jpg" />
              </Flex>
            </Flex>
          </Collapse>

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
                <Image src="./1.jpg" />
                <Text fontSize={"2em"}>Ali Phi</Text>

                <Text>New Media Artist</Text>
                <Text>Founder of Nullsight</Text>
              </Flex>

              <Flex flexDir={"column"} maxW={"24%"} minW={"24%"} p={8}>
                <Image src="./2.jpg" />
                <Text fontSize={"2em"}>Simon Rojas</Text>
                <Text>Design Technologist</Text>
                <Text>Co-Founder of Derooted Immersive</Text>
              </Flex>

              <Flex flexDir={"column"} maxW={"24%"} minW={"24%"} p={8}>
                <Image src="./3.jpg" />
                <Text fontSize={"2em"}>Miriam Arbus</Text>
                <Text>Digital Strategist</Text>
                <Text>Curator at Styly</Text>
              </Flex>

              <Flex flexDir={"column"} maxW={"24%"} minW={"24%"} p={8}>
                <Image src="./4.jpg" />
                <Text fontSize={"2em"}>Saurabh Suri</Text>
                <Text>Creative Technologist</Text>
                <Text>Business Advisor at Nullsight</Text>
                <Text></Text>
              </Flex>
            </Flex>
          </Collapse>

          {/* ////////// */}

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
                // bg='red'
              >
                <Flex
                  flexDir={"column"}
                  maxW="45%"
                  alignContent={"center"}
                  // justifyContent={"center"}
                  // bg='red'
                >
                  <Text
                    fontSize="1.7em"
                    lineHeight="1.25em"
                    textAlign="justify"
                  >
                    The market for digital art and media consumption is
                    experiencing an unprecedented surge in demand, presenting a
                    promising opportunity for Nullsight. According to a recent
                    report by Statista, the global digital art market is
                    projected to reach a staggering $11.2 billion by 2026, with
                    a compound annual growth rate (CAGR) of 21.7% from 2021 to
                    2026.
                    <br />
                    This rapid growth is fueled by a burgeoning interest in
                    digital art across a diverse demographic, from seasoned
                    collectors to a new generation of tech-savvy enthusiasts.
                    Furthermore, the integration of digital art into mainstream
                    culture is evident in the rise of NFTs (Non-Fungible
                    Tokens), which have witnessed a remarkable surge in sales,
                    with an estimated $2.5 billion in NFT transactions in the
                    first half of 2021 alone.
                  </Text>{" "}
                </Flex>

                <Flex
                  flexDir={"column"}
                  w="55%"
                  alignContent={"center"}
                  // justifyContent={"center"}
                  // bg='red'
                >
                  <Image src="./graph2.png" maxH="50vh" />
                </Flex>
              </Flex>
            </Box>
          </Collapse>

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
                The market opportunity for Nullsight is propelled by significant
                trends in the digital art and media consumption landscape:
              </Text>
              <br></br>
              <UnorderedList fontSize="1.5em">
                <ListItem>
                  The recent surge in visual programming software has
                  facilitated the showcasing and promotion of a new wave of
                  digital artists.
                </ListItem>
                <ListItem>
                  The rapid adoption of blockchain technology and NFTs within
                  the art world is reshaping how creative works are valued and
                  shared.
                </ListItem>
                <ListItem>
                  The integration of augmented reality (AR) and virtual reality
                  (VR) in art experiences is revolutionizing audience
                  engagement.
                </ListItem>
                <ListItem>
                  The increasing demand for dynamic and personalized content
                  across diverse platforms and generating revenue.
                </ListItem>
                <ListItem>
                  The convergence of industries with the metaverse and digital
                  arts gained traction following the NFT surge, filling a
                  significant interest gap.
                </ListItem>
              </UnorderedList>
            </Box>
          </Collapse>

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
                Nullsight distinguishes itself by offering a versatile,
                cloud-based service that encompasses a wider range of
                functionalities. It provides a dynamic platform where artists,
                galleries, agents, and collectors can engage in a broader
                spectrum of activities, including uploading, trading, renting,
                and interactive content creation. Unlike most platforms that
                have a more specialized focus, Nullsight addresses a broader
                spectrum of needs, providing an embeddable, secure, and dynamic
                platform for artists to share their work while ensuring fair
                compensation.
                <br />
                <br />
                Additionally, Nullsight uniquely occupies a central position,
                covering NFT markets, art streaming platforms, DOOH advertising
                services, and urban public spaces. It achieves this by curating
                genuine content and delivering a comprehensive, accessible
                service to end users, retailers, industries, digital businesses,
                and urban public spaces.
              </Text>
            </Box>
          </Collapse>

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
                <Image src="./Competitive Analysis.png" maxH="60vh" />
              </Flex>
            </Box>
          </Collapse>

          <Collapse
            in={context.camera === 12 ? true : false}
            animateOpacity
            transition={{ enter: { duration: 0.5 } }}
          >
            <Box>
              <Text fontSize="3em" lineHeight="2.5em">
                DIFFERENTIATORS
              </Text>
              <Text fontSize="2em">1. Unified Canvas with Integrity:</Text>
              <Text fontSize="1em" pb="1em">
                Device-Agnostic accessibility sets us apart, providing a secure
                foundation for artists to present, trade, and share their
                creations.
              </Text>
              <Text fontSize="2em">2. Interactive Content Hosting:</Text>
              <Text fontSize="1em" pb="1em">
                This capability expands their reach beyond traditional art
                fields, providing opportunities for trade and exhibition in both
                advertising and non-advertising sectors.
              </Text>
              <Text fontSize="2em">3. Blockchain Security:</Text>
              <Text fontSize="1em" pb="1em">
                Every artist's intellectual property is securely recorded in the
                Blockchain, providing an extra layer of protection and
                accessibility within their wallets.
              </Text>
              <Text fontSize="2em">4. Cross-Industry Integration:</Text>
              <Text fontSize="1em">
                Our platform is designed to integrate smoothly with a wide range
                of digital applications across various industries.
              </Text>
            </Box>
          </Collapse>

          {/* ////////// */}

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
                Our primary aim is to position Nullsight as the go-to platform
                for digital artists, revolutionizing the way their creations are
                shared, valued, and experienced. Simultaneously, we are
                dedicated to providing a stable and innovative presentation
                platform for collectors, industries, and agencies. With a strong
                foothold in the online art market, our key objectives include
                further expansion in sales and enhancing our solutions to cater
                to large companies, city and urban planning organizations, as
                well as businesses in sectors spanning advertisement,
                entertainment, hospitality, and retail. Through strategic
                partnerships and technological excellence, we aspire to be the
                leading force in shaping the future of digital art and its
                integration across diverse industries.
              </Text>
            </Box>
          </Collapse>

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
              <UnorderedList fontSize="1.5em" lineHeight="1.25em">
                <ListItem>
                  Unique value proposition: Unified platform for sharing and
                  trading digital artworks with a focus on security and
                  transparency.
                </ListItem>
                <ListItem>
                  Integration with Blockchain technology for secure intellectual
                  property rights and transactions.
                </ListItem>
                <ListItem>
                  Customizable features, including real-time generative and
                  rendered videos, offering a versatile user experience.
                </ListItem>
                <ListItem>
                  Comprehensive Content Management System (CMS) empowering
                  collectors and businesses to curate their own art collections.
                </ListItem>
              </UnorderedList>

              <br />
              <Text fontSize="2em" lineHeight="1.25em">
                Weaknesses:
              </Text>

              <UnorderedList fontSize="1.5em" lineHeight="1.25em">
                <ListItem>
                  Limited historical data on revenue, user base, and market
                  performance (as of last knowledge update in September 2021).
                </ListItem>
                <ListItem>
                  Potential challenges in establishing and maintaining strategic
                  partnerships with large companies and organizations.
                </ListItem>
                <ListItem>
                  Possible dependence on external factors such as technological
                  advancements and market trends.
                </ListItem>
              </UnorderedList>

              <br />

              <Text fontSize="2em" lineHeight="1.25em">
                Opportunities:
              </Text>
              <UnorderedList fontSize="1.5em" lineHeight="1.25em">
                <ListItem>
                  Expanding market for digital art and NFTs, with a growing
                  community of artists, collectors, and enthusiasts.
                </ListItem>
                <ListItem>
                  Increasing demand for dynamic and personalized content across
                  various platforms.
                </ListItem>
                <ListItem>
                  Potential for collaborations with city planning organizations,
                  entertainment, hospitality, and retail businesses for
                  immersive experiences.
                </ListItem>
                <ListItem>
                  Opportunity to further develop and refine the platform based
                  on user feedback and emerging technologies.
                </ListItem>
              </UnorderedList>

              <br />
              <Text fontSize="2em" lineHeight="1.25em">
                Threats:
              </Text>

              <UnorderedList fontSize="1.5em" lineHeight="1.25em">
                <ListItem>
                  Expanding market for digital art and NFTs, with a growing
                  community of artists, collectors, and enthusiasts.
                </ListItem>
                <ListItem>
                  Intense competition in the digital art and NFT market from
                  existing platforms and potential new entrants.
                </ListItem>
                <ListItem>
                  Regulatory changes or legal challenges related to intellectual
                  property rights and Blockchain technology.
                </ListItem>
                <ListItem>
                  Technological advancements that could render certain features
                  or approaches obsolete if not adapted in a timely manner.
                </ListItem>
              </UnorderedList>
            </Box>
          </Collapse>

          <Collapse
            in={context.camera === 15 ? true : false}
            animateOpacity
            transition={{ enter: { duration: 0.5 } }}
          >
            <Box>
              <Text fontSize="3em" lineHeight="3.5em">
                Key Performance Indicators (KPIs)
              </Text>

              <Flex flexDirection={"row"} gap={16}>
                <Flex flexDirection={"column"} maxW="50%" fontSize="1.25em">
                  <Text fontSize="1.25em" fontWeight={"bold"}>
                    1. Monthly Active Users (MAU):
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Indicates user engagement and overall platform health.
                    </ListItem>
                    <ListItem>
                      Utilize analytics tools to monitor MAU trends and assess
                      user activity.
                    </ListItem>
                  </UnorderedList>
                  <br />

                  <Text fontSize="1.25em" fontWeight={"bold"}>
                    2. Conversion Rate from Visitor to Registered User:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Measures user acquisition efficiency and the effectiveness
                      of onboarding processes.
                    </ListItem>
                    <ListItem>
                      Analyze website and platform data to calculate the
                      conversion rate.
                    </ListItem>
                  </UnorderedList>
                  <br />

                  <Text fontSize="1.25em" fontWeight={"bold"}>
                    3. Artworks Uploaded per User:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Indicates user activity and content generation on the
                      platform.
                    </ListItem>
                    <ListItem>
                      Utilize platform data to calculate this average on a
                      regular basis.
                    </ListItem>
                  </UnorderedList>
                  <br />

                  <Text fontSize="1.25em" fontWeight={"bold"}>
                    4. Transaction Volume (Sales and Rentals):
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Reflects the platform's revenue-generating capability and
                      its value.
                    </ListItem>
                    <ListItem>
                      Monitor transaction data and revenue reports.
                    </ListItem>
                  </UnorderedList>
                  <br />
                </Flex>

                <Flex flexDirection={"column"} maxW="50%" fontSize="1.25em">
                  <Text fontSize="1.25em" fontWeight={"bold"}>
                    5. Customer Lifetime Value (CLV):
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Helps assess customer acquisition costs against long-term
                      value.
                    </ListItem>
                    <ListItem>
                      Analyze customer behavior and transaction history to
                      calculate CLV.
                    </ListItem>
                  </UnorderedList>
                  <br />

                  <Text fontSize="1.25em" fontWeight={"bold"}>
                    6. User Retention Rate:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Indicates user satisfaction, platform stickiness, and the
                      effectiveness of retention efforts.
                    </ListItem>
                    <ListItem>
                      Monitor user activity and assess retention rates at
                      regular intervals.
                    </ListItem>
                  </UnorderedList>
                  <br />

                  <Text fontSize="1.25em" fontWeight={"bold"}>
                    7. Partnership Acquisition Rate:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Reflects the platform's ability to forge valuable
                      collaborations for growth.
                    </ListItem>
                    <ListItem>
                      Document and evaluate partnership agreements and their
                      impact on platform expansion.
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
            </Box>
          </Collapse>

          <Collapse
            in={context.camera === 16 ? true : false}
            animateOpacity
            transition={{ enter: { duration: 0.5 } }}
          >
            <Box>
              <Text fontSize="3em" lineHeight="2.5em">
                ACTION PLAN
              </Text>
              <br /> <br />
              {steps && (
                //@ts-ignore
                <Stepper
                  pb="2em"
                  pl="7.5vw"
                  pr="7.5vw"
                  colorScheme="white"
                  fontSize={{
                    base: "1em",
                    sm: ".4em",
                    md: ".45em",
                    lg: ".6em",
                    xl: ".7em",
                    "2xl": "1em",
                    "3xl": "2em",
                  }}
                >
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepIndicator>
                        <StepStatus
                          // complete={<StepIcon />}
                          // incomplete={<StepNumber />}
                          active={<StepNumber />}
                        />
                      </StepIndicator>

                      <Box flexShrink="0">
                        {/* <StepTitle>{step.title}</StepTitle> */}
                        {/* <StepDescription>{step.description}</StepDescription> */}
                      </Box>

                      <StepSeparator />
                    </Step>
                  ))}
                </Stepper>
              )}
              <Flex flexDir={"row"} gap={2} justifyContent={"space-between"}>
                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"24%"}
                  minW={"24%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.5em"} fontWeight={"bold"}>
                      6-Month Milestones
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          MVP Development (Month 1-3)
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Define core features and functionalities for the MVP
                            based on user needs and platform objectives.
                          </ListItem>
                          <ListItem>
                            Develop and launch the MVP, focusing on essential
                            elements for artists to upload, showcase, and users
                            to engage with artworks.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Platform Refinement (Month 4-6)
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Gather user feedback on the MVP to identify areas
                            for improvement and optimization.
                          </ListItem>
                          <ListItem>
                            Implement necessary updates and enhancements to
                            enhance user experience and platform performance.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>

                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"24%"}
                  minW={"24%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.5em"} fontWeight={"bold"}>
                      1-Year Milestones
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          User Acquisition and Engagement (Month 7-9)
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Leverage the MVP to attract and onboard new artists
                            and users.
                          </ListItem>
                          <ListItem>
                            Implement engagement strategies to encourage active
                            participation and content creation.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Partnership Development (Month 10-12)
                        </Text>
                        <UnorderedList>
                          <ListItem>
                            Showcase the MVP's potential to potential partners,
                            solidifying strategic alliances with art
                            institutions and galleries.
                          </ListItem>
                          <ListItem>
                            Explore collaborations to enhance platform features
                            and reach a broader audience.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>

                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"24%"}
                  minW={"24%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.5em"} fontWeight={"bold"}>
                      2-Year Milestones
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Blockchain Integration (Month 13-18)
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Incorporate Blockchain technology into the platform,
                            beginning with the MVP, to establish secure
                            transactions and IP protection.
                          </ListItem>
                          <ListItem>
                            Educate users on the benefits and functionalities of
                            Blockchain within the platform.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Scaling User Base (Month 19-24)
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Leverage the enhanced MVP to scale user acquisition
                            efforts, employing data-driven marketing strategies
                            and referral programs.
                          </ListItem>
                          <ListItem>
                            Prioritize user retention and loyalty initiatives to
                            ensure sustained engagement.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>

                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"24%"}
                  minW={"24%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.5em"} fontWeight={"bold"}>
                      5-Year Milestones
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Global Presence (Year 3-5)
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Utilize the robust platform, built upon the MVP
                            foundation, to establish Nullsight as the leading
                            global platform for digital artists and collectors.
                          </ListItem>
                          <ListItem>
                            Expand operations to key art-centric cities
                            worldwide, fostering a truly international
                            community.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Diversification of Offerings (Year 3-5)
                        </Text>

                        <UnorderedList>
                          <ListItem>
                            Introduce innovative features, such as AR/VR
                            experiences and AI-powered curation, to maintain a
                            cutting-edge platform.
                          </ListItem>
                          <ListItem>
                            Explore opportunities in adjacent markets, like
                            digital collectibles or virtual exhibitions.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </Flex>
            </Box>
          </Collapse>

          {/* ////////// */}

          <Collapse
            in={context.camera === 17 ? true : false}
            animateOpacity
            transition={{ enter: { duration: 0.5 } }}
          >
            <Box>
              <Text fontSize="3em" lineHeight="4.5em">
                REVENUE
              </Text>
              <Text fontSize="2em">
                1. Sales, Rents and Trades Fees
                <br />
                2. Transaction Fees
                <br />
                3. Artist Subscriptions
                <br />
                4. Premium Features and Add-ons
                <br />
                5. Platform Monetization Tools
                <br />
                6. Strategic Partnerships and Collaborations
                <br />
                7. Licensing and Royalties
                <br />
                8. Consulting and Workshops
                <br />
                9. Advertising and Sponsorships
                <br />
                10. Data and Analytics Services
                <br />
                11. Educational Resources
                <br />
                <br />
              </Text>
            </Box>
          </Collapse>

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
                Nullsight anticipates a steady increase in revenue over the next
                five years, driven by strategic initiatives and market
                expansion.
              </Text>

              <Flex flexDir={"row"} gap={2} fontSize={"1.25em"}>
                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"19%"}
                  minW={"19%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.2em"} fontWeight={"bold"}>
                      Year 1 (2024)
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Estimated Revenue:
                          <br />
                          $500,000
                        </Text>
                        <Text pt="2">Key Revenue Streams:</Text>
                        <UnorderedList>
                          <ListItem>Artist Subscriptions</ListItem>
                          <ListItem>
                            Transaction Fees (Sales and Rentals)
                          </ListItem>
                          <ListItem>Strategic Partnerships</ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>

                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"19%"}
                  minW={"19%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.2em"} fontWeight={"bold"}>
                      Year 2 (2025)
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Projected Revenue:
                          <br />
                          $1.2 million
                        </Text>
                        <Text pt="2">Key Growth Drivers:</Text>

                        <UnorderedList>
                          <ListItem>Platform Monetization Features</ListItem>
                          <ListItem>Enhanced User Engagement</ListItem>
                          <ListItem>Geographic Market Expansion</ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>

                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"19%"}
                  minW={"19%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.2em"} fontWeight={"bold"}>
                      Year 3 (2026)
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Projected Revenue:
                          <br />
                          $3 million
                        </Text>
                        <Text pt="2">Market Growth Factors:</Text>

                        <UnorderedList>
                          <ListItem>Blockchain Integration</ListItem>
                          <ListItem>Diversification of Offerings</ListItem>
                          <ListItem>Global Presence</ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>

                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"19%"}
                  minW={"19%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.2em"} fontWeight={"bold"}>
                      Year 4 (2027)
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Projected Revenue:
                          <br />
                          $6 million
                        </Text>
                        <Text pt="2">Driving Forces:</Text>

                        <UnorderedList>
                          <ListItem>Continued Global Expansion</ListItem>
                          <ListItem>
                            Introduction of Innovative Features
                          </ListItem>
                          <ListItem>
                            Increased User Base and Transactions
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>

                <Card
                  bg="transparent"
                  border="solid 1px white"
                  color="white"
                  maxW={"19%"}
                  minW={"19%"}
                >
                  <CardHeader>
                    <Text fontSize={"1.2em"} fontWeight={"bold"}>
                      Year 5 (2027)
                    </Text>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text fontWeight={"bold"} textTransform="uppercase">
                          Projected Revenue:
                          <br />
                          $12 million
                        </Text>
                        <Text pt="2">Key Catalysts for Growth:</Text>

                        <UnorderedList>
                          <ListItem>
                            Strategic Acquisitions and Alliances
                          </ListItem>
                          <ListItem>
                            Maturing Ecosystem and Monetization Strategies
                          </ListItem>
                          <ListItem>Sustained Market Leadership</ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </Flex>

              <Text fontSize="1em" mt="2em">
                These revenue projections are based on a combination of user
                acquisition strategies, monetization models, and the continued
                expansion of Nullsight's offerings. It's important to note that
                actual revenue figures may vary based on market conditions and
                the successful execution of the business strategy.{" "}
              </Text>
            </Box>
          </Collapse>

          <Collapse
            in={context.camera === 19 ? true : false}
            animateOpacity
            transition={{ enter: { duration: 0.5 } }}
          >
            <Box>
              <Text fontSize="3em" lineHeight="2.5em">
                FUNDING
              </Text>
              <Text
                fontSize="1.5em"
                display={"inline"}
                lineHeight={"1.1em"}
                pb="1em"
              >
                Nullsight is seeking an investment of
              </Text>

              <Text
                fontSize="2em"
                display={"inline"}
                lineHeight={"1.1em"}
                pb="1em"
              >
                {" "}
                CA$ 750.000
              </Text>

              <Text fontSize="1.5em" lineHeight={"1.1em"} pb="1em">
                to accelerate growth, enhance platform capabilities, and capture
                a larger share of the digital art market.
              </Text>

              <Text fontSize="2em" display="inline">
                30%{" "}
              </Text>
              <Text fontSize="1.25em" display="inline">
                Product Development and Enhancement
              </Text>
              <UnorderedList mb="1em">
                <ListItem>
                  Further development of platform features, including
                  integration with emerging technologies and enhancing user
                  experience.
                </ListItem>
              </UnorderedList>

              <Text fontSize="2em" display="inline">
                25%{" "}
              </Text>
              <Text fontSize="1.25em" display="inline">
                Marketing and User Acquisition
              </Text>
              <UnorderedList mb="1em">
                <ListItem>
                  Aggressive marketing campaigns to expand user base, target new
                  markets, and increase platform visibility.
                </ListItem>
              </UnorderedList>

              <Text fontSize="2em" display="inline">
                15%{" "}
              </Text>
              <Text fontSize="1.25em" display="inline">
                Blockchain Integration and Security
              </Text>
              <UnorderedList mb="1em">
                <ListItem>
                  Implementing robust Blockchain technology for secure
                  transactions, intellectual property rights, and enhanced
                  platform security.
                </ListItem>
              </UnorderedList>

              <Text fontSize="2em" display="inline">
                15%{" "}
              </Text>
              <Text fontSize="1.25em" display="inline">
                Strategic Partnerships and Alliances
              </Text>
              <UnorderedList mb="1em">
                <ListItem>
                  Investment in establishing partnerships with art institutions,
                  galleries, and technology providers for collaborative
                  initiatives.
                </ListItem>
              </UnorderedList>

              <Text fontSize="2em" display="inline">
                5%{" "}
              </Text>
              <Text fontSize="1.25em" display="inline">
                Operational Infrastructure
              </Text>
              <UnorderedList mb="1em">
                <ListItem>
                  Strengthening the internal infrastructure, including hiring
                  key talent, legal compliance, and administrative costs.
                </ListItem>
              </UnorderedList>

              <Text fontSize="2em" display="inline">
                5%{" "}
              </Text>
              <Text fontSize="1.25em" display="inline">
                Research and Development
              </Text>
              <UnorderedList mb="1em">
                <ListItem>
                  Allocation for ongoing research and development efforts to
                  stay at the forefront of technological advancements in the
                  digital art space.
                </ListItem>
              </UnorderedList>

              <Text fontSize="2em" display="inline">
                5%{" "}
              </Text>
              <Text fontSize="1.25em" display="inline">
                Contingency Reserve
              </Text>
              <UnorderedList>
                <ListItem>
                  Reserved for unforeseen expenses, market fluctuations, or
                  strategic pivots to ensure adaptability in a dynamic industry.
                </ListItem>
              </UnorderedList>
            </Box>
          </Collapse>

          {/* ////// */}

          <Collapse
            in={context.camera === 20 ? true : false}
            animateOpacity
            transition={{ enter: { duration: 0.5 } }}
          >
            <Box>
              <Text fontSize="3em" lineHeight="2.5em">
                Join us redefining the digital art landscape.
              </Text>
              <Text fontSize="1.5em" lineHeight="1.25em">
                For more information, Please contact:
                <br />
                nu@nullsight.com
              </Text>
            </Box>
          </Collapse>

          {/* 
{context.camera === 3 && (
          <>
            <Immersive play={true} click={true} />

            <Flex flexDirection={"column"} pointerEvents="none">
              <Collapse
                in={context.cameraSide === 2 ? true : false}
                animateOpacity
              >
                <Text fontSize="3em" lineHeight={"0.6em"} mt="1em">
                  BRANDS I HAVE WORKES WITH
                  <Text fontSize="0.5em" mt="0.8em">
                    #Google #Hermes #GrandMarnier #Reebok #MaisonMargiela #Miele
                    #Sapporo #Faze #Samsung #Panasonic #Totinos #Dataforce #LG
                    #Novonordisk #DataRobot #CNE #MatteProjects #Unesco
                    #OntarioScienceCenter #Acura #MusicBoardBerlin
                    #GoetheInstitute #ArsElectronica #Mutek #Derooted #Globacore
                    #FrontRunner #BrandedCities #Digikala #ParsData
                  </Text>
                </Text>
              </Collapse>

              <Collapse
                in={context.cameraSide === 3 ? true : false}
                animateOpacity
              >
                <Text fontSize="3em" lineHeight={"0.7em"}>
                  SKILL SET
                  <Text fontSize="0.5em" mt="0.8em" lineHeight={"1.2em"}>
                    <Flex
                      flexDir={"row"}
                      flexWrap={"wrap"}
                      minW={"100%"}
                      gap={8}
                      justifyContent={"space-between"}
                    >
                      <Flex flexDir={"column"}>
                        #Product_Design
                        <br />
                        #Creative_Development
                        <br />
                        #Technical_Research
                        <br />
                        #Art_Direction
                        <br />
                        #Interaction_Design
                        <br />
                        #User_Experience
                        <br />
                        #UI
                        <br />
                        #UX
                        <br />
                        #Full_Stack
                        <br />
                      </Flex>
                      <Flex flexDirection={"column"}>
                        #React
                        <br />
                        #Nextjs
                        <br />
                        #Nodejs
                        <br />
                        #Webgl
                        <br />
                        #Javascript
                        <br />
                        #Threejs
                        <br />
                        #R3F
                        <br />
                        #A_Frame
                        <br />
                        #P5js
                        <br />
                        #JQuery
                      </Flex>
                      <Flex flexDirection={"column"}>
                        #AR
                        <br />
                        #VR
                        <br />
                        #XR
                        <br />
                        #Visual_Programming
                        <br />
                        #Touchdesigner
                        <br />
                        #Processing
                        <br />
                        #GLSL
                        <br />
                        #Python
                        <br />
                        #Unreal_Engine
                      </Flex>
                      <Flex flexDirection={"column"}>
                        #Computational_Design
                        <br />
                        #Generative_Visuals
                        <br />
                        #Interactive_Installations
                        <br />
                        #Digital_Fabrication
                        <br />
                        #Physical_Modeling
                      </Flex>
                      <Flex flexDirection={"column"}>
                        #Blender
                        <br />
                        #Cinema4D
                        <br />
                        #3D_Printing
                        <br />
                        #Video_Mapping
                        <br />
                        #Arduino
                        <br />
                        #RaspberryPi
                        <br />
                        #Motion_Graphic
                        <br />
                        #Video_Production
                        <br />
                        #Motion_Graphics
                      </Flex>
                    </Flex>
                  </Text>
                </Text>
              </Collapse>

              <Collapse
                in={context.cameraSide === 4 ? true : false}
                animateOpacity
              >
                <Accordion allowToggle pointerEvents="all">
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              2010-NOW | FREELANCE PROJECTS
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Design Technologist , Creative Developer<br></br>
                          http://www.aliphi.me<br></br>
                          <br></br>
                          2023 | Twh | AI-driven immersive installation | Art
                          direction and development | Client: Unesco Germany
                          <br></br>
                          2023 | Sapporo, Travel to Japan | AR web APP | Design
                          and full-stack development | Client: Sapporo Canada
                          <br></br>
                          2022 | CNE’s North Star | Immersive performance |
                          Content production | Client: CNE<br></br>
                          2021 | TCS Berlin | Immersive exhibition | Curation
                          and event production | Client: Goethe Institute
                          Germany<br></br>
                          2020 | Maison Marginal X Reebok | Interactive
                          generative installation | Design and development |
                          Client: Matte Projects
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              2020-2023 | Globacore Technologies [CA]
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Position: Creative Developer<br></br>
                          http://www.globacore.com<br></br>
                          <br></br>
                          2023 | Google built-in, Auto driving experience | 3D
                          Web app | Full-stack creative development | Client:
                          Google USA<br></br>
                          2023 | FaZe x Totino’s 2 mins to chill | 3D Web game
                          app | Full-stack creative development | Client: Faze,
                          Totino’s<br></br>
                          2023 | Miele KBPS online experience | Web app |
                          Full-stack development | Client: Miele<br></br>
                          2022 | Dataforce Experience | Interactive web app |
                          Full-stack development | Client: Dataforce<br></br>
                          2021 | Google Connected Home | 3D Web app shop |
                          Full-stack creative development | Client: Google
                          Australia<br></br>
                          2021 | DataRobot Japan online event | Web app |
                          Back-end development | Client: DataRobot Japan
                          <br></br>
                          2021 | Experience Acura | Web app | Full-stack
                          creative development | Client: Acura Canada<br></br>
                          2020 | Reflexion’s BGRT experience | 3D Web app |
                          Full-stack creative development | Client: Reflexion
                          USA<br></br>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              2019-2020 | Derooted Immersive [CA]
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Position: Lead Creative Developer<br></br>
                          http://www.derooted.com<br></br>
                          <br></br>
                          2019 | Campari Activation Campaign | Hybrid web and
                          physical app | Full-stack Development | Client:
                          Campari Canada<br></br>
                          2019 | Panasonic Canada at ASTC19 | Generative
                          installation | Full-stack interaction design | Client:
                          Panasonic Canada<br></br>
                          2019 | Ontario Science Center Innovators Ball | Event
                          | Visual Design & Production | Client: Ontario Science
                          Center<br></br>
                          2019 | Branded Cities 20th Anniversary | Video
                          installation | ack-End Technical Development | Client:
                          Branded Cities USA<br></br>
                          2019 | Hermes Grand Opening Vancouver House
                          Interactive installations | Back-End Development |
                          Client: Hermes Canada<br></br>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              2013-NOW | Nullsight [CA/DE/IR]
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Position: Founder / Creative Directo<br></br>
                          http://www.nullsight.com<br></br>
                          <br></br>
                          2019 | Noxte Vol III at TCS 2019 | Immersive
                          exhibition | Curation and event production | Client:
                          Goethe Institute Germany<br></br>
                          2019 | Toronto Sound Festival 2019 | Live event |
                          Visual design and production | Client: Toronto Sound
                          Festival<br></br>
                          2019 | Pagoda Stage, Shambhala Festival | Live event |
                          Visual design and production | Client: Shambhala
                          Festival<br></br>
                          2018 | Dorsa x Swarovski | Multimedia installation |
                          Design and development | Client: Swarovski<br></br>
                          2017 | Pars Data at IRANTELEKOM 2017 | Interactive
                          installation | Design and development | Client: Pars
                          Data<br></br>
                          2017 | Petro Pars Petroleum at IRANOILSHOW 2017 |
                          Video installation | Creative development | Client:
                          Pars Metro Co<br></br>
                          2016 | Private Exhibition for Digikala | Interactive
                          installations | Curation and development | Client:
                          Digikala<br></br>
                          2014 | Victoza Unveiling Event with Novonordisk
                          Interactive installation | Full-stack interaction
                          development | Client: Novonordisk<br></br>
                          2013 | LG Optimus G Pro Launch | Interactive
                          installation | Creative development | Client: LG
                          <br></br>
                          2011-2018 | Tehran Annual Digital Art Exhibition |
                          Digital arts festival | Event art direction and
                          production | Recurring project2018<br></br>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </Collapse>
            </Flex>
          </>
        )} */}
        </Flex>
        {/* 
      <Collapse in={modal ? true : false} animateOpacity>
        <Flex
          w="100%"
          h="100%"
          position={"fixed"}
          zIndex={100}
          alignItems={"flex-end"}
          justifyContent={"center"}
          pb={"12vh"}
          pointerEvents={"none"}
        >
          <Flex
            flexDir={"column"}
            bg="	rgb(255,255,255,0.25)"
            borderRadius={"10px"}
            mb={0}
            color={"white"}
            boxShadow={"xl"}
            p={8}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src="./360.png" w="5em" pb="2em" />
            360 SCENE, ROTATE & ZOOM USING YOUR CURSOR
          </Flex>
        </Flex>
      </Collapse> */}
      </>
    </div>
  );
}
