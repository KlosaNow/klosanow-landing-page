import React from 'react'
import { Box, Button, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
export default function Connect() {
    return (
        <>
            <Box mt={{ base: '4rem', md: '8rem' }} height='100%'
            >
                <Box
                    mt='3rem'
                    bgImage="url('/images/general/connect.png')"
                    bgPosition='center'
                    bgSize='cover'
                    bgRepeat='no-repeat'
                    py='8rem'
                    display='flex'
                    flexDirection={{ base: 'column', md: 'column' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    px='1rem'
                >
                    <Text color='neutral.30'>Let’s Connect</Text>
                    <Heading fontSize={{ base: '3xl', md: '4xl' }}
                        color='neutral.50' mt='2rem'
                    >
                        <Text textAlign='center'>Stay Connected with Our Newsletter</Text>
                        <Text textAlign='center'>for the Latest Updates</Text>

                    </Heading>
                    <Box bg={'neutral.50'} py='2rem' mt='2rem'
                        width={{ base: '100%', md: '715.559px' }}
                        borderRadius='20px'
                        px={{ base: '1rem', md: '3rem', lg: '3rem' }}
                    >
                        <InputGroup size='lg'>
                            <Input
                                pr='4.5rem'
                                type='email'
                                placeholder='Your Email Address'
                                variant='unstyled'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button
                                    top='-10px'
                                    size='md'
                                    bg='primary.50' color='neutral.50'
                                    px={{ base: '2.8rem', md: '4rem' }}
                                    borderRadius='10px'
                                    _hover={{
                                        opacity: .8,
                                    }}
                                >
                                    Subscribe
                                </Button>

                            </InputRightElement>
                        </InputGroup>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
