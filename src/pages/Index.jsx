import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              Financial Times
            </Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">World</Link>
              <Link href="#" color="white">Business</Link>
              <Link href="#" color="white">Tech</Link>
              <Link href="#" color="white">Markets</Link>
              <Link href="#" color="white">Opinion</Link>
              <Link href="#" color="white">Life & Arts</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Headlines Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Headlines</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Headline 1</Heading>
                <Text mt={2}>Summary of the first headline...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Headline 2</Heading>
                <Text mt={2}>Summary of the second headline...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Articles Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Articles</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Article 1</Heading>
                <Text mt={2}>Summary of the first article...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Article 2</Heading>
                <Text mt={2}>Summary of the second article...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={4}>
              <Link href="#" isExternal><FaTwitter /></Link>
              <Link href="#" isExternal><FaFacebook /></Link>
              <Link href="#" isExternal><FaLinkedin /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;