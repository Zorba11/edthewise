import ReactMarkdown from "react-markdown";
import { useColorModeValue } from "@chakra-ui/react";
import { CustomCard } from "./card/Card";

export function MessageBox(props: { output: string }) {
  const { output } = props;
  const textColor = useColorModeValue("navy.700", "white");
  return (
    <CustomCard
      display={output ? "flex" : "none"}
      px="22px !important"
      pl="22px !important"
      color={textColor}
      minH="450px"
      fontSize={{ base: "sm", md: "md" }}
      lineHeight={{ base: "24px", md: "26px" }}
      fontWeight="500"
    >
      <ReactMarkdown className="font-medium">{output ? output : ""}</ReactMarkdown>
    </CustomCard>
  );
}
