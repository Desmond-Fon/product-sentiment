import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, useDisclosure, Image, Box, Text, Flex, VStack, HStack
} from '@chakra-ui/react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export function ProductModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const data = {
        datasets: [
            {
                data: [80, 20],
                backgroundColor: ["#239463", "#242636"],
                borderColor: "#1E1E2C",
                hoverOffset: 4,
                borderWidth: [0, 0, 0]
            },
        ],
    };
    return (
        <>
            <div className='w-[100%] bg-red-400 relative' >
                <Image
                    objectFit='cover'
                    w={{ base: '100%', sm: '200px', md: '100%' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />
                <div className='bg-overlay absolute bottom-0 w-full flex justify-between items-center px-3 py-2'>
                    <div className='text-[14px]'>
                        <p className='font-[500]'>Yesterday files</p>
                        <p className='text-[12px]'>04/12/2020</p>
                    </div>
                    <button className='bg-secondary px-3 py-1 border-none rounded-sm text-[14px]' onClick={onOpen}>View chart</button>
                </div>
            </div>

            <Modal isOpen={isOpen} size='3xl' onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='#282928' color='#f2f2f3'>
                    <ModalHeader fontWeight='700' fontSize='20px'>PRODUCT 1</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack borderRadius={"18.6348px"} p={"4"}>
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontSize={"18px"}
                                fontWeight="600"
                            >
                                Product Sentiment Chart
                            </Text>
                            <HStack gap='30px'>
                                <Doughnut data={data} width="70%" height="70%" />
                                <VStack gap='10px'>
                                    <Flex justifyContent={"center"} alignItems={"center"} mt='2'>
                                        <Box w="10px" h="10px" bgColor="#239463" rounded="50%" mr="7px"></Box>
                                        <Text color={"#f2f2f3"}>Positive</Text>
                                    </Flex>
                                    <Flex justifyContent={"center"} alignItems={"center"} mt='2'>
                                        <Box w="10px" h="10px" bgColor="#242636" rounded="50%" mr="7px"></Box>
                                        <Text color={"#f2f2f3"}>Negative</Text>
                                    </Flex>
                                </VStack>
                            </HStack>

                            <div>
                                <p className='font-[600] pt-6 text-center px-5'>Most Common Comment :
                                    <span className='font-[400]'> Query out products with their comments with machine learning which predicts positive and negative comment</span>  </p>
                            </div>

                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button bg='#239463' color='#f2f2f3' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}