import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react"
import { features } from '@/utils'
import Image from 'next/image'
import { motion } from "framer-motion";


export default function Features() {
    return (
        <Box mt={{ base: '6rem', md: '5px' }}
            zIndex={'1'} position={'relative'} >
            <Box
                as='div'
                position='absolute'
                right={{ base: '23%', md: '75%' }}
                width='572px'
                height='572px'
                border={1}
                bg={'red.100'}
                borderRadius='50%'
                top={{ base: '65%', md: '40%' }}
                zIndex={'-1'}
                display={{ base: 'none', md: 'block', lg: 'block' }}
            >
            </Box>

            <Box px={{ base: '2rem', md: '6rem' }}
            >
                <Box bg={'neutral.40'}
                    py='4rem' px='5rem' 
                    borderRadius={'20px'} boxShadow={'base'} height={'100%'} >
                    <Box float={'right'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign={'end'}>
                            <Text color={'primary.100'} fontWeight={700}>How Klosanow</Text>
                            <Text color={'primary.100'} fontWeight={700}
                                position={'relative'}
                                _before={{
                                    content: '""',
                                    width: '50px',
                                    height: '3px',
                                    position: 'absolute',
                                    right: '2%',
                                    bottom: '0',
                                    bg: 'secondary.30'
                                }}>works</Text>


                        </Heading>
                    </Box>
                    <Box mt={'12rem'} >
                        <Box display={'flex'}
                            justifyContent={'space-around'} alignItems={'center'} gap={'2rem'}
                            flexDirection={{ base: 'column', md: 'row' }}>
                            {features.map((feat, index) => (
                                <Box key={index}
                                    as={motion.div}
                                    whileHover={{ scale: 1.1 }}
                                    animate={{
                                        scale: [1.1, 1],
                                        x: [-100, 0],
                                    }}
                                    transition={{ duration: '0.5' }}
                                    width={{ base: '250px', md: '362px' }}
                                    height={'294px'}
                                    borderRadius={'20px'}
                                    border={1}
                                    borderStyle={'solid'}
                                    borderColor={'neutral.20'}
                                    p={4}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    flexDirection={'column'}

                                >
                                    <Image src={feat.src} alt='feat' width={100} height={100} />
                                    <Text mt='1rem' textAlign={'center'}>{feat.desc}</Text>
                                </Box>
                            ))}

                        </Box>
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}
