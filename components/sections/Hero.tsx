import React from 'react'
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
export default function Hero() {
    return (
        <Box mt={{ md: '8rem', lg: '8rem' }}>
            <Stack direction={{ base: 'column', md: 'row', lg: 'row' }}
                px={{ base: '1rem', md: '6rem' }}
                position='relative' >
                <Box
                    as='div'
                    position='absolute'
                    right={{ base: '30%', md: '75%', lg: '75%' }}
                    width='472px'
                    height='472px'
                    border={1}
                    borderColor={'secondary.30'}
                    borderStyle={'solid'}
                    borderRadius='50%'
                    top='-55%'
                // zIndex={'-999'} 
                >
                </Box>

                <Flex
                    p={8}
                    flex={1}
                    alignItems={'center'}
                    justify={'center'}
                    mt={{ md: '2rem', lg: '4rem' }}

                >
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                            textAlign={{ base: 'center', md: 'center', lg: 'justify' }}

                        >
                            <Text color={'primary.100'} fontWeight={700}>Online teaching and</Text>
                            <Text color={'primary.100'} fontWeight={700}>learning just got</Text>
                            <Text color={'primary.100'} fontWeight={700}>easier with Klosanow</Text>
                        </Heading>
                        <Text color={'black.100'} fontSize={{ base: 'md', md: 'lg', lg: 'lg' }} mt='.3rem' mb='.3rem' fontWeight={500}>
                            Create engaging video learning content,
                            send it to your learning community and stay connected 24/7 through the messaging feature in our platform.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row', lg: 'row' }} spacing={4}>
                            <Button>
                                <Link href='#'>
                                    Get Started
                                </Link>
                            </Button>
                            <Button>
                                <Link href='#'>
                                    Get Started
                                </Link>
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>

            Hero</Box>
    )
}
