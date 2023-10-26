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
            <br></br>
            <Text display={"inline"}>
              stands as the reigning champion for artists to showcase their
              work like a portfolio.
              <br></br>
              <br></br>
            </Text>
            <Text fontSize="1.25em" fontWeight={"bold"} display={"inline"}>
              Yet, no unified platform{" "}
            </Text>
            <br></br>

            <Text display={"inline"}>
              that allows digital artworks to be shared, acquired, and
              displayed without compression or limitation.
              <br></br>
              <br></br>
            </Text>
            <Text fontSize="1.25em" fontWeight={"bold"} display={"inline"}>
              {" "}
              How digital art is experienced and valued{" "}
            </Text>
            <br></br>
            <Text display={"inline"}>
              needs to be revolutionized, by a user-centric approach, in the
              cloud-based digital age.
              <br></br>
              <br></br>
              "Our mission is to democratize the world of digital art, making
              it accessible to creators, collectors, and audiences worldwide."
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

            <Flex ml={1}>
              <UnorderedList fontSize="1.5em">
                <ListItem>
                  Narrow focus of current art streaming services.
                </ListItem>
                <ListItem>
                  Quality limitations and lack of support for generative arts.
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
                  Difficulties in presenting, transfering and managing works.
                </ListItem>
              </UnorderedList>
            </Flex>
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

            <Flex ml={1}>
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
                  Comprehensive CMS empowering collectors or business owners
                  to rent directly from artists and manage their screens.
                </ListItem>
                <ListItem>
                  Traceable equity in artists' royalties, shares and
                  intellectual property rights via blockchain technology.
                </ListItem>
              </UnorderedList>
            </Flex>
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
              <Text>Curator at Styly & Nullsight</Text>
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
                  The market for digital art and media consumption is
                  experiencing an unprecedented surge in demand, presenting a
                  promising opportunity for Nullsight.
                  <br />
                  <br />
                  According to a recent report by Statista, the global digital
                  art market is projected to reach a staggering $11.2 billion
                  by 2026, with a compound annual growth rate (CAGR) of 21.7%
                  from 2021 to 2026.
                  <br /> <br />
                  This rapid growth is fueled by a burgeoning interest in
                  digital art across a diverse demographic, from seasoned
                  collectors to a new generation of tech-savvy enthusiasts.
                </Text>{" "}
              </Flex>

              <Flex flexDir={"column"} w="55%" alignContent={"center"}>
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
            <Flex ml={1}>
              <UnorderedList fontSize="1.5em">
                <ListItem>
                  The recent surge in visual programming softwares has
                  facilitated the showcasing of a new wave of digital artists.
                </ListItem>
                <ListItem>
                  The rapid adoption of blockchain technology within the art
                  world is reshaping how creative works are valued and shared.
                </ListItem>
                <ListItem>
                  The integration of augmented reality (AR) and virtual
                  reality (VR) in art experiences is revolutionizing audience
                  engagement.
                </ListItem>
                <ListItem>
                  The increasing demand for dynamic and personalized content
                  across diverse platforms and generating revenue.
                </ListItem>
                <ListItem>
                  The convergence of industries with the metaverse and digital
                  arts
                </ListItem>
              </UnorderedList>
            </Flex>
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
              Nullsight provides a dynamic platform where artists, galleries,
              agents, and collectors can engage in a broader spectrum of
              activities, including uploading, trading, renting, and
              interactive content creation.
              <br />
              <br />
              Additionally, Nullsight uniquely occupies a central position,
              covering digital collectibles markets, art streaming platforms,
              DOOH advertising services, and urban public spaces.
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
              for digital artists,revolutionizing the way their creations are
              shared, valued, and experienced. Simultaneously, we are
              dedicated to providing a stable and innovative presentation
              platform for collectors, industries, and agencies.<br></br>
              <br></br>With a strong foothold in the online art market, our
              key objectives include further expansion in sales and enhancing
              our solutions to cater to large companies, city and urban
              planning organizations, as well as businesses in sectors
              spanning advertisement, entertainment, hospitality, and retail.
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

            <Flex ml={1}>
              <UnorderedList fontSize="1.1em" lineHeight="1.25em">
                <ListItem>
                  Unique value proposition: Unified platform for sharing and
                  trading digital artworks with a focus on security and
                  transparency.
                </ListItem>
                <ListItem>
                  Integration with Blockchain technology for secure
                  intellectual property rights and transactions.
                </ListItem>
                <ListItem>
                  Customizable features, including real-time generative and
                  rendered videos, offering a versatile user experience.
                </ListItem>
                <ListItem>
                  Comprehensive Content Management System (CMS) empowering
                  collectors and businesses to curate their own art
                  collections.
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
                  Limited historical data on revenue, user base, and market
                  performance.
                </ListItem>
                <ListItem>
                  Potential challenges in establishing and maintaining
                  strategic partnerships with large companies and
                  organizations.
                </ListItem>
                <ListItem>
                  Possible dependence on external factors such as
                  technological advancements and market trends.
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
                  Expanding market for digital art and digital collectibles,
                  with a growing community.
                </ListItem>
                <ListItem>
                  Increasing demand for dynamic and personalized content
                  across various platforms.
                </ListItem>
                <ListItem>
                  Potential for collaborations with city planning
                  organizations, entertainment, hospitality, and retail
                  businesses for immersive experiences.
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
                  Intense competition in the digital art and NFT market from
                  existing platforms and potential new entrants.
                </ListItem>
                <ListItem>
                  Regulatory changes or legal challenges related to
                  intellectual property rights and Blockchain technology.
                </ListItem>
                <ListItem>
                  Technological advancements that could render certain
                  features or approaches obsolete if not adapted in a timely
                  manner.
                </ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </Collapse>

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
                    of onboarding.
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
                    effectiveness.
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
                    impact.
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
                      MVP Development<br></br>(Month 1-3)
                    </Text>

                    <UnorderedList>
                      <ListItem>
                        Define core features and functionalities for the MVP.
                      </ListItem>
                      <ListItem>
                        Develop and launch the MVP, focusing on essential
                        elements to upload, showcase and engagment
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Platform Refinement<br></br>(Month 4-6)
                    </Text>

                    <UnorderedList>
                      <ListItem>
                        Gather user feedback on the MVP to identify areas for
                        improvement and optimization.
                      </ListItem>
                      <ListItem>
                        Implement necessary updates and enhancements to
                        enhance user experience and platform performance.
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
                      User Acquisition<br></br>(Month 7-9)
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
                      Partnership Development<br></br>(Month 10-12)
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        Showcase the MVP's potential to potential partners,
                        solidifying strategic alliances with art institutions.
                      </ListItem>
                      <ListItem>
                        Explore collaborations to enhance platform features
                        and reach a broader audience.
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
                      Blockchain Integration<br></br>(Month 13-18)
                    </Text>

                    <UnorderedList>
                      <ListItem>
                        Incorporate Blockchain technology into the platform,
                        to establish secure transactions and IP.
                      </ListItem>
                      <ListItem>
                        Educate users on the benefits and functionalities of
                        Blockchain.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Scaling User Base<br></br>(Month 19-24)
                    </Text>

                    <UnorderedList>
                      <ListItem>
                        Scale user acquisition efforts, employing data-driven
                        marketing strategies and referral programs.
                      </ListItem>
                      <ListItem>
                        Prioritize user retention and loyalty initiatives to
                        ensure sustained engagement.
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
                      Global Presence<br></br>(Year 3-5)
                    </Text>

                    <UnorderedList>
                      <ListItem>
                        Esstablish Nullsight as the leading global platform
                        for digital arts.
                      </ListItem>
                      <ListItem>
                        Expand operations to key art-centric cities worldwide,
                        fostering a truly international community.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} textTransform="uppercase">
                      Diversification of Offerings<br></br>(Year 3-5)
                    </Text>

                    <UnorderedList>
                      <ListItem>
                        Introduce innovative features, such as AR/VR
                        experiences and AI-powered curation.
                      </ListItem>
                      <ListItem>
                        Explore opportunities in adjacent markets, like
                        digital collectibles or virtual exhibitions.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </Flex>
            </Flex>
          </Box>
        </Collapse>

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
              1. Sales, Rents and Trades Fees
              <br />
              2. Artist Subscriptions
              <br />
              3. Premium Features and Add-ons
              <br />
              4. Platform Monetization Tools
              <br />
              5. Strategic Partnerships and Collaborations
              <br />
              6. Licensing and Royalties
              <br />
              7. Consulting and Curation
              <br />
              8. Advertising and Sponsorships
              <br />
              9. Data and Analytics Services
              <br />
              10. Educational Resources & Workshops
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
                  Year 1 (2024)
                </Text>
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
                  Year 2 (2025)
                </Text>
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
                      Projected Revenue:
                      <br />
                      $6 million
                    </Text>
                    <Text pt="2">Driving Forces:</Text>

                    <UnorderedList>
                      <ListItem>Continued Global Expansion</ListItem>
                      <ListItem>Introduction of Innovative Features</ListItem>
                      <ListItem>
                        Increased User Base and Transactions
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
              </Flex>
            </Flex>

            <Text fontSize="1em" mt="2em">
              These revenue projections are based on a combination of user
              acquisition strategies, monetization models, and the continued
              expansion of Nullsight's offerings.<br></br>It's important to
              note that actual revenue figures may vary based on market
              conditions and the successful execution of the business
              strategy.{" "}
            </Text>
          </Box>
        </Collapse>

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
      </Flex>
    </div>
  );
}
