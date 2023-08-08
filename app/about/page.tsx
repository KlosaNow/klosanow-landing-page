"use client"

import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'
export default function AboutPage() {
    return (
        <>
            <Box mt={{ base: '.2rem', md: '6rem', lg: '6rem' }}
                px={{ base: '1rem', md: '6rem' }} py='6rem'
            >
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                    <Box position='absolute' top={{ base: '5rem', md: '10rem' }} right={{ base: '2rem', md: '14rem' }}>
                        <Image src='/images/about/moon.svg' alt='moon' />
                    </Box>
                    <Text color='black.60' fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>Get to Know Us!</Text>
                    <Text mt='1rem' color='black.50' textAlign='center' lineHeight='144.5%;' width={{ md: '716px' }}>
                        At Klosanow, we revolutionize the educational landscape by providing a cutting-edge EdTech
                        platform that seamlessly connects tutors with learners. Our innovative solution empowers tutors
                        to create and share engaging pre-recorded video lessons, enabling learners to access and engage
                        with the content conveniently on our platform, anytime and anywhere. Embrace the future of education with Klosanow
                        and embark on a transformative learning experience that transcends traditional boundaries.
                    </Text>

                    <Box mt={{ md: '-8rem' }}>
                        <Image src='/images/about/stack.png' alt='stack' loading='lazy' />
                    </Box>
                </Box>

                <Box bgColor='primary.5' py='4rem' px={{ base: '1rem', md: '8rem', lg: '8rem' }} borderRadius='20px'
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    flexWrap='wrap'
                >
                    <Box>
                        <Image loading='lazy' src='/images/about/vision.png' alt='vision' />
                    </Box>
                    <Box>
                        <Text fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
                            textAlign={{ base: 'center', md: 'right', lg: 'right' }} color='black.60'>Our Vision</Text>
                        <Text mt='1rem' color='black.50' textAlign={{ base: 'center', md: 'right', lg: 'right' }}
                            lineHeight='144.5%;' width={{ base: '100%', md: '322px' }}>
                            We aspire to create an online education platform that is designed
                            to meet the diverse and dynamic educational requirements of induvials residing in Sub-Saharan Africa
                        </Text>
                    </Box>
                </Box>

                <Box mt='8rem'>
                    <Box display='grid'
                        gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)', lg: 'repeat(2,1fr)' }}
                        // justifyContent='space-between'
                        // alignContent='center'
                        gap={{ md: '12rem', lg: '12rem' }}
                    >
                        <Box>
                            <Text color='black.60' fontSize={'4xl'}>
                                We live a worthwhile culture
                            </Text>
                            <Box mt='2rem'>
                                <Text lineHeight='144.5%;' color='black.50' >
                                    Seamless: Klosanow values providing a smooth
                                    and hassle-free experience for its users, ensuring that using the platform is effortless and efficient.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem'>
                                    Support: The brand places high importance on offering strong customer
                                    support and assistance to its users, ensuring they have the guidance they need.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem'>
                                    Growth: Klosanow promotes a culture of continuous growth and improvement, both for the platform and its users.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem' >
                                    Openness: The brand encourages an open and transparent communication culture, where ideas and feedback are welcomed.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem'>
                                    Inspiring: Klosanow aims to inspire its users to embrace the power of online education and pursue their learning goals with enthusiasm.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem'>
                                    Teamwork: Klosanow values teamwork and collaboration among its employees to achieve common goals and objectives.
                                </Text>
                            </Box>
                        </Box>

                        <Box>
                            <Image loading='lazy' src='/images/about/culture.png' alt='culture' />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
