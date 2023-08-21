import React from 'react'
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from "framer-motion";
import Image from 'next/image'
import HeroImg from "/public/images/general/hero.png"

export default function Hero(): JSX.Element {
    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: '0.8' }}
        >
        <Box mt={{ md: '8rem', lg: '8rem' }} height='100vh'>
                <Stack direction={{ base: 'column', md: 'row' }}
                px={{ base: '1rem', md: '6rem' }}
                    position='relative' as={motion.div}
                >
                <Box
                    as='div'
                    position='absolute'
                    right={{ base: '23%', md: '75%', lg: '75.5%' }}
                    width='572px'
                    height='572px'
                    border={1}
                    borderColor={'secondary.30'}
                    borderStyle={'solid'}
                    borderRadius='50%'
                        top={{ base: '-65%', md: '-40%' }}
                    zIndex={'1'} 
                >
                </Box>

                <Flex
                    p={8}
                    flex={1}
                    alignItems={'center'}
                    justify={'center'}
                        mt={{ md: '2rem' }} as={motion.div}
                >
                    <Stack spacing={6} w={'full'} maxW={'lg'}>

                            <Heading fontSize={{ base: '3xl', md: '4xl' }}
                                textAlign={{ base: 'center', md: 'center', lg: 'justify' }}
                                as={motion.h1}
                                initial={{ y: -100 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: '0.8' }}
                        >
                            <Text as='span'
                                fontSize='lg'
                                ml={'2rem'}
                                position={'relative'}
                                color={'secondary.30'}
                                _after={{
                                    content: '""',
                                    width: '40px',
                                    height: '1px',
                                    position: 'absolute',
                                    left: '-30%',
                                    bottom: '0',
                                    bg: 'secondary.30'
                                }}
                            >Why Join Us ?</Text>

                            <Text color={'primary.100'} fontWeight={700}>Online teaching and</Text>
                            <Text color={'primary.100'} fontWeight={700}>learning just got</Text>
                            <Text color={'primary.100'} fontWeight={700}>easier with Klosanow</Text>
                        </Heading>
                            <Text as={motion.div}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: '0.8' }}
                                color={'black.100'} fontSize={{ base: 'md', md: 'lg' }}
                                mt={{ base: '1.5rem', md: '1.5rem' }}
                                mb='.3rem' fontWeight={500}>
                            Create engaging video learning content,
                            send it to your learning community and stay connected 24/7 through the messaging feature in our platform.
                        </Text>
                            <Stack
                                as={motion.div}
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: '0.8' }}
                                direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Button size='lg'
                                bg='primary.50' color='neutral.50'
                                px='3rem'
                                borderRadius='5px'
                                _hover={{
                                    opacity: .8,
                                }}
                            >
                                <Link href='#'>
                                    Get Started
                                </Link>
                            </Button>
                            <Button size='lg' variant='outline'
                                borderColor='primary.50'
                                px='3rem'
                                color='primary.100'
                                _hover={{
                                    opacity: .8,
                                }}>
                                <Link href='#'>
                                    Watch Demo
                                </Link>
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Box as='div'
                    width={'34px'} height={'34px'}
                    borderRadius={'50%'} bg={'secondary.30'}
                    transform={'translateY(0)'}
                    mt={{ md: '14rem' }} mr={{ md: '8rem' }}
                ></Box>
                    <Flex flex={1} position='relative' as={motion.div}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                            scale: [1.1, 1],
                            x: [-100, 0],
                        }}
                        transition={{ duration: '0.5' }}
                    >
                    <Image
                            loading='lazy'
                            src={HeroImg}
                            alt='hero-img'
                            style={{
                                position: 'absolute',
                                zIndex: '10'
                            }}


                    />
                    <Box
                        as='div'
                        position='absolute'
                            display={{ base: 'none', md: 'block' }}
                        top={{ md: '40%', lg: '50.5%' }}
                        width='572px'
                        height='572px'
                        border={1}
                        borderColor={'secondary.30'}
                        borderStyle={'solid'}
                        borderRadius='50%'
                            right={{ base: '-65%', md: '-40%' }}
                        zIndex={'1'}
                    >
                    </Box>
                </Flex>
            </Stack>
        </Box >
        </Box>
    )
}
