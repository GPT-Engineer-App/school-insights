import React from "react";
import { Box, Container, Flex, Heading, Stat, StatLabel, StatNumber, SimpleGrid, Image, useColorModeValue } from "@chakra-ui/react";
import { FaUserTie, FaChalkboardTeacher, FaUserGraduate, FaClock, FaMoneyCheckAlt, FaMoneyBillWave } from "react-icons/fa";

const DashboardCard = ({ icon, label, number, imageQuery }) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <Stat p={5} borderRadius="md" bg={bgColor} boxShadow="md">
      <Flex alignItems="center">
        {icon}
        <Box ml={3}>
          <StatLabel fontWeight="bold">{label}</StatLabel>
          <StatNumber fontSize="2xl">{number}</StatNumber>
        </Box>
      </Flex>
      {imageQuery && <Image src={`https://placehold.co/600x400`} borderRadius="md" mt={3} maxH="100px" objectFit="cover" />}
    </Stat>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Heading mb={5}>Principal's Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 6 }} spacing={5}>
        <DashboardCard icon={<FaChalkboardTeacher size="3em" />} label="Teachers Present Today" number={25} imageQuery="teacher in classroom" />
        <DashboardCard icon={<FaUserGraduate size="3em" />} label="Students Present Today" number={450} imageQuery="students in school" />
        <DashboardCard icon={<FaClock size="3em" />} label="Active Classes" number={18} imageQuery="active classroom" />
        <DashboardCard icon={<FaUserTie size="3em" />} label="Classes Without Teachers" number={3} imageQuery="empty classroom" />
        <DashboardCard icon={<FaMoneyCheckAlt size="3em" />} label="Fees Paid This Week" number={200} imageQuery="student paying fees" />
        <DashboardCard icon={<FaMoneyBillWave size="3em" />} label="Pending Fees This Week" number={35} imageQuery="worried student" />
      </SimpleGrid>
    </Container>
  );
};

export default Index;
