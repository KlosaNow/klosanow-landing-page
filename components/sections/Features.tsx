import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react"
export default function Features() {
    return (
        <Box mt={{ base: '6rem', md: '10px', lg: '120px' }} height='80vh'>
            {/* <Box
                as='div'
                position='absolute'
                right={{ base: '23%', md: '75%', lg: '75.5%' }}
                width='572px'
                height='572px'
                border={1}
                bg={'red.100'}
                // borderStyle={'solid'}
                borderRadius='50%'
                // top={{ base: '-65%', md: '-40%', lg: '-40%' }}
                zIndex={'2'}
            >
            </Box> */}

            <Box px={{ base: '1rem', md: '6rem' }}
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
                    <Box mt={'4rem'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos possimus illum quis iure eos molestiae, porro quia obcaecati autem doloremque ad dicta rem. Porro reiciendis provident impedit voluptatibus veritatis!
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}
