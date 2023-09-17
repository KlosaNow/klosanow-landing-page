"use client"

import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import moonSvg from "/public/images/about/moon.svg"
import stackImg from "/public/images/about/stack.png"
import cultureImg from "/public/images/about/culture.png"
import VisionSlide from "@/components/visionSlide"

export default function AboutPage() {
    return (
        <>
            <Box mt={{ base: '.2rem', md: '6rem' }}
                px={{ base: '1rem', md: '6rem' }} py='6rem'
            >
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                    <Box position='absolute' top={{ base: '5rem', md: '10rem' }} right={{ base: '2rem', md: '14rem' }}>
                        <Image src={moonSvg} alt='moon' />
                    </Box>
                    <Heading color='black.60' fontSize={{ base: '3xl', md: '4xl' }} fontWeight={500}>Get to Know Us!</Heading>
                    <Text mt='1rem' color='black.50' fontSize={'18px'} textAlign='center' lineHeight='144.5%;' width={{ md: '716px' }}>
                        At Klosanow, we revolutionize the educational landscape by providing a cutting-edge EdTech
                        platform that seamlessly connects tutors with learners. Our innovative solution empowers tutors
                        to create and share engaging pre-recorded video lessons, enabling learners to access and engage
                        with the content conveniently on our platform, anytime and anywhere. Embrace the future of education with Klosanow
                        and embark on a transformative learning experience that transcends traditional boundaries.
                    </Text>

                    <Box mt={{ md: '-8rem' }}>
                        <Image src={stackImg} alt='stack' loading='lazy' />

                        <Box as='div'
                            position='absolute'
                            display={{ base: 'none', md: 'block' }}
                            width='572px'
                            height='572px'
                            bgColor='red.100'
                            borderRadius='50%'
                            right={{ md: '-30%' }}
                            top='12%'
                            zIndex={'1'}
                        >
                        </Box>
                    </Box>
                </Box>
                <VisionSlide />
                <Box mt='8rem'>
                    <Box display='grid'
                        gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
                        gap={{ md: '12rem' }}
                    >
                        <Box>
                            <Heading fontWeight={500} color='black.60' fontSize={{ base: '3xl', md: '4xl' }}>
                                We live a worthwhile  <Text as='u'>culture</Text>
                            </Heading>
                            <Box mt='2rem'>
                                <Text lineHeight='144.5%;' color='black.50' fontSize='18px'>
                                    <Text as='u' fontWeight={600}>Seamless:</Text> Klosanow values providing a smooth
                                    and hassle-free experience for its users, ensuring that using the platform is effortless and efficient.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem' fontSize='18px'>
                                    <Text as='u' fontWeight={600}> Support:</Text> The brand places high importance on offering strong customer
                                    support and assistance to its users, ensuring they have the guidance they need.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem' fontSize='18px'>
                                    <Text as='u' fontWeight={600}> Growth:</Text> Klosanow promotes a culture of continuous growth and improvement, both for the platform and its users.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem' fontSize='18px' >
                                    <Text as='u' fontWeight={600}> Openness: </Text> The brand encourages an open and transparent communication culture, where ideas and feedback are welcomed.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem' fontSize='18px'>
                                    <Text as='u' fontWeight={600}> Inspiring:</Text> Klosanow aims to inspire its users to embrace the power of online education and pursue their learning goals with enthusiasm.
                                </Text>
                                <Text lineHeight='144.5%;' color='black.50' mt='1rem' fontSize='18px'>
                                    <Text as='u' fontWeight={600}>Teamwork:</Text> Klosanow values teamwork and collaboration among its employees to achieve common goals and objectives.
                                </Text>
                            </Box>
                        </Box>

                        <Box mt='2rem'>
                            <Image loading='lazy' src={cultureImg} alt='culture' />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box mt='4rem' bgColor='neutral.5' px='4rem' py='8rem' display='flex' justifyContent='center' alignItems='center'>
                <Box>
                    <Heading color='black.60' fontWeight={500} fontSize={{ base: '4xl', md: '3xl', lg: '4xl' }} textAlign='center'> Driving Innovation and </Heading>
                    <Heading color='black.60' fontWeight={500} fontSize={{ base: '4xl', md: '3xl', lg: '4xl' }} textAlign='center'>Accomplishments</Heading>
                    <Text mt='1rem' color='black.50' fontSize={'18px'} textAlign='center' lineHeight='144.5%;' width={{ md: '716px' }} >
                        Step behind the scenes and meet the exceptional individuals who bring our groundbreaking product to life.
                        Through constant iterations and a passion for simplicity, our team of creative minds relentlessly
                        pushes boundaries to deliver an unparalleled user experience. Join us as we redefine
                        what&apos;s possible and embark on a journey of transformative accomplishments together.
                    </Text>
                </Box>

            </Box>

        </>
    )
}
