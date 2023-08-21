import React from 'react'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import empowerImg from "/public/images/general/empower.png"

export default function Empower() {
    return (
        <>
            <Box mt={{ base: '4rem', md: '12rem' }}>
                <Stack direction={{ base: 'column', md: 'row' }}
                    px={{ base: '1rem', md: '6rem' }}
                    position='relative' >
                    <Flex
                        p={8}
                        flex={1}
                        alignItems={'center'}
                        justify={'center'}
                        mt={{ md: '2rem' }}
                    >
                        <Stack spacing={6} w={'full'} maxW={'lg'}>

                            <Heading fontSize={{ base: '3xl', md: '4xl' }}
                                textAlign={{ base: 'center', md: 'center', lg: 'justify' }}
                            >
                                <Text color={'primary.100'} fontWeight={700}>Empowering</Text>
                                <Text color={'primary.100'} fontWeight={700}>Learners and Tutors</Text>
                                <Text color={'primary.100'} fontWeight={700}>Through Online</Text>
                                <Text color={'primary.100'} fontWeight={700}>Education</Text>
                            </Heading>
                            <Text color={'black.100'}
                                fontSize={{ base: 'md', md: 'lg' }}
                                mt={'1rem'} mb='.3rem' fontWeight={500}>
                                Our online teaching and learning platform is both effective and efficient,
                                enabling learners access learning contents created by tutors seamlessly
                            </Text>
                        </Stack>
                    </Flex>
                    <Box as='div'
                        width={'34px'} height={'34px'}
                        borderRadius={'50%'} bg={'secondary.30'}
                        transform={'translateY(0)'}
                        mt={{ md: '32rem' }} mr={{ md: '12rem' }}
                    ></Box>
                    <Flex flex={1} position='relative'>
                        <Image
                            loading='lazy'
                            src={empowerImg}
                            alt='empower-img'
                        />
                    </Flex>
                </Stack>
            </Box>
        </>
    )
}
