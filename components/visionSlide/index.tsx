
import React, { useRef } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Slider from "react-slick"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { aboutSlide } from '@/utils'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PrevBtn = ({ onClick }: { onClick: React.MouseEventHandler<HTMLElement> }) => {
    return (
        <Box as='button' onClick={onClick}>
            <ChevronLeftIcon color='primary.50' boxSize={8} />
        </Box>
    )
}

const NextBtn = ({ onClick }: { onClick: React.MouseEventHandler<HTMLElement> }) => {
    return (
        <Box as='button' onClick={onClick}>
            <ChevronRightIcon color='primary.50' boxSize={8} />
        </Box>
    )
}

export default function VisionSlide(): JSX.Element {

    const sliderRef = useRef<any>(null)

    const settings = {
        infinte: true,
        arrows: false,
        speed: 500,
        slideToShow: 1,
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
            <Slider {...settings} ref={sliderRef}>
                {aboutSlide.map((slideItem) => (
                    <div key={slideItem.id}>
                        <Box>
                            <Box bgColor='primary.5' py='4rem' px={{ base: '1rem', md: '8rem' }} borderRadius='20px'
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                gap={{ base: '2rem', md: '8rem' }}
                                flexDirection={{ base: 'column', md: 'row' }}
                            >
                                <Box>
                                    <Image loading='lazy' src={slideItem.img_url} alt='vision' width={687} height={412} />
                                </Box>
                                <Box>
                                    <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight={500}
                                        textAlign={{ base: 'center', md: 'right' }} color='black.60'>{slideItem.title}</Heading>
                                    <Text mt='1rem' color='black.50' textAlign={{ base: 'center', md: 'right' }}
                                        lineHeight='144.5%;' width={{ base: '100%', md: '322px' }}>
                                        {slideItem.desc}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                ))}

            </Slider>
            <Box mt='1.5rem' display='flex' gap='4rem' justifyContent='center' alignItems='center'>
                <PrevBtn onClick={sliderRef?.current?.slickPrev} />
                <Box as='span' w='28px' h='5px' borderRadius='50px' bgColor='primary.20'></Box>
                <NextBtn onClick={sliderRef?.current?.slickNext} />
            </Box>


        </>
    )
}
