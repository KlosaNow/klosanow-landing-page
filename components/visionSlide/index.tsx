
import React, { useRef } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import visionImg from "/public/images/about/vision.png"
import Image from 'next/image'
import Slider from "react-slick"

export default function VisionSlide(): JSX.Element {

    const sliderRef = useRef<any>(null)

    const settings = {
        dots: true,
        infinte: true,
        centerMode: true,
        centerPadding: "150px",
        arrows: false,
        speed: 500,
        slideToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                }
            },
        ],
    }
    return (
        <>
            <Box>
                <Box bgColor='primary.5' py='4rem' px={{ base: '1rem', md: '8rem' }} borderRadius='20px'
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    gap={{ base: '2rem', md: '8rem' }}
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Box>
                        <Image loading='lazy' src={visionImg} alt='vision' />
                    </Box>
                    <Box>
                        <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight={500}
                            textAlign={{ base: 'center', md: 'right' }} color='black.60'>Our Vision</Heading>
                        <Text mt='1rem' color='black.50' textAlign={{ base: 'center', md: 'right' }}
                            lineHeight='144.5%;' width={{ base: '100%', md: '322px' }}>
                            We aspire to create an online education platform that is designed
                            to meet the diverse and dynamic educational requirements of induvials residing in Sub-Saharan Africa
                        </Text>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
