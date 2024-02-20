import { Nav } from './Nav'
import { Footer } from './Footer'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import {
Box, Text, Flex, VStack, HStack
} from '@chakra-ui/react'

export const Main = () => {
     const data = {
        datasets: [
            {
                data: [35, 30, 25],
                backgroundColor: ["#239463", "#242636", "#1E1E2C"],
                borderColor: "#1E1E2C",
                hoverOffset: 4,
                borderWidth: [0, 0, 0]
            },
        ],
    };

    return (
        <div className='bg-primary text-offWhite min-h-screen flex flex-col justify-between h-[100vh]'>
            <Nav />
            <div className='h-[20%] px-8 py-10'>
                <p className='text-[25px] pr-[170px] tracking-wider leading-[40px]'>Query out products with their comments with machine learning which predicts positive and negative comment.</p>
            </div>
            <VStack borderRadius={"18.6348px"} p={"4"}>

                <HStack gap='30px'>
                    <Doughnut data={data} width="50%" height="50%" />
                    <VStack gap='10px'>
                        <Flex justifyContent={"center"} alignItems={"center"} mt='2'>
                            <Box w="10px" h="10px" bgColor="#239463" rounded="50%" mr="7px"></Box>
                            <Text color={"#f2f2f3"}>Positive</Text>
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"} mt='2'>
                            <Box w="10px" h="10px" bgColor="#1E1E2C" rounded="50%" mr="7px"></Box>
                            <Text color={"#f2f2f3"}>Unknown</Text>
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"} mt='2'>
                            <Box w="10px" h="10px" bgColor="#242636" rounded="50%" mr="7px"></Box>
                            <Text color={"#f2f2f3"}>Negative</Text>
                        </Flex>
                    </VStack>
                </HStack>
            </VStack>
            <Footer />
        </div>
    )
}