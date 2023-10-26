import { Flex, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Message_data } from "../../context/context";

import Pulse from "@/components/dom/pulse/Pulse";

export default function Tasks() {
  const context = useContext(Message_data);
  const [page, setPage] = useState(1);

  const changePage = async (e: any) => {
    e.StopPropagation;
    if (page > 1 && e === -1) {
      setPage(page - 1);
    } else if (page < 20 && e === 1) {
      setPage(page + 1);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const isUp = event.key === "ArrowUp";
    const isDown = event.key === "ArrowDown";
    const isLeft = event.key === "ArrowLeft";
    const isRight = event.key === "ArrowRight";

    if (isUp && page > 1) {
      setPage(page - 1);
    }

    if (isDown && page < 20) {
      setPage(page + 1);
    }

    if (isLeft && page > 1) {
      setPage(page - 1);
    }

    if (isRight && page < 20) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [page]);

  useEffect(() => {
    context.setCamera(page);
  }, [page]);

  useEffect(() => {
    context.camera !== page && setPage(context.camera);
  }, [context.camera]);

  return (
        <Flex
          fontSize={{
            base: ".35em",
            sm: ".4em",
            md: ".45em",
            lg: ".6em",
            xl: ".7em",
            "2xl": "1em",
            "3xl": "2em",
          }}
          position="absolute"
          bottom="4em"
          right="4em"
          p="1em"
          minH="10em"
          direction="column"
          textAlign="center"
          justifyContent="flex-end"
          alignItems="center"
          pointerEvents="all"
          boxShadow="0 0 8px rgba(0, 0, 0, 0.3)"
          zIndex={1500}
          borderRadius="5em"
        >
          {context.camera > 1 && (
            <Image
              src="/IconArrow.svg"
              maxH="2em"
              maxW="2em"
              minH="2em"
              minW="2em"
              alt="Arrow Up"
              m="1em"
              transform="rotate(90deg)"
              cursor="pointer"
              onClick={() => changePage(-1)}
            />
          )}

          {context.camera < 20 ? (
            <Image
              src="/IconArrow.svg"
              maxH="2em"
              maxW="2em"
              minH="2em"
              minW="2em"
              alt="Arrow Down"
              m="1em"
              transform="rotate(-90deg)"
              cursor="pointer"
              onClick={() => changePage(1)}
            />
          ) : (
            <Image
              src="/IconArrow.svg"
              maxH="2em"
              maxW="2em"
              minH="2em"
              minW="2em"
              alt="Arrow Down"
              m="1em"
              transform="rotate(-90deg)"
              pointerEvents={"none"}
              opacity={"0"}
            />
          )}

          {context.camera === 1 && (
            <Flex w="4em" h="4em" position="absolute" pointerEvents="none">
              <Pulse />
            </Flex>
          )}
        </Flex>
  );
}
