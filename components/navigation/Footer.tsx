import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, SimpleGrid, Text, chakra, VisuallyHidden, Stack } from '@chakra-ui/react'
import Logo from "public/logo.png"
import Whatsapp from "public/WhatsApp.png"
import Linkedin from "public/LinkedIn.png"
import Twitter from "public/Twitter.png"
import Instagram from "public/Instagram.png"
import styles from "./footer.module.scss";
import { authFooter, navFooter, SocialBtnProps } from '@/utils'



const SocialBtns = ({ children, label, href }: SocialBtnProps) => {
    return (
        <chakra.button
            rounded='full'
            w='8'
            h='8'
            cursor='pointer'
            as='a'
            href={href}
            target='_blank'
            display='inline-flex'
            alignItems='center'
            justifyContent='center'
            transition={'background 0.3s ease'}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer(): JSX.Element {

    return (
        <>
            <Box as='footer' h='50%' mt='12rem' bgColor='primary.5'
                px={{ base: '1rem', md: '6rem' }} >
                <Box pt='4rem' py='4rem'>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: ' 2fr 1fr 1fr' }}
                        spacing={{ base: '8', md: '20', lg: '20' }} px={10} pl={{ base: '25px', md: '60px' }}
                        mb='20px'
                        className={styles.footer_ul}
                    >
                        <Box>
                            <Image src={Logo} alt='logo' />
                            <Box width={{ base: '100%', md: '404px', lg: '404px' }} mt='2rem'>
                                <Text color='black.40'>Bridging the Gap Between Learners and Tutors with Our Innovative Product</Text>
                            </Box>
                            <Box mt='3rem'>
                                <Text color='black.40' fontSize='lg'>© {new Date().getFullYear()} All rights reserved </Text>
                            </Box>
                        </Box>
                        <Box>
                            <Text color='black.40' fontSize='lg'>Quick Links</Text>
                            <Box mt='1rem' display='flex' justifyContent={{ base: 'none', md: 'space-between', lg: 'space-between' }} gap={{ base: '3rem', md: 'none', lg: 'none' }} alignItems='center'>
                                <Box>
                                    <ul>
                                        {navFooter.map((link, index) => (
                                            <Link href={link.href} key={index} legacyBehavior>
                                                <a key={link.title} style={{ cursor: "pointer" }} >
                                                    {link.title}
                                                </a>
                                            </Link>
                                        ))}
                                    </ul>
                                </Box>
                                <Box>
                                    <ul>
                                        {authFooter.map((link, index) => (
                                            <Link href={link.href} key={index} legacyBehavior>
                                                <a key={link.title} style={{ cursor: "pointer" }}>
                                                    {link.title}
                                                </a>
                                            </Link>
                                        ))}
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Text color='black.40' fontSize='lg'>Follow Us</Text>
                            <Stack direction='row' spacing={2} mt='1.5rem'>
                                <SocialBtns label='whatsapp' href='#'>
                                    <Image src={Whatsapp} alt='klosanow whatsapp' />
                                </SocialBtns>
                                <SocialBtns label='Linkedin' href='#'>
                                    <Image src={Linkedin} alt='klosanow Linkedin' />
                                </SocialBtns>
                                <SocialBtns label='Twitter' href='#'>
                                    <Image src={Twitter} alt='klosanow Twitter' />
                                </SocialBtns>
                                <SocialBtns label='Instagram' href='#'>
                                    <Image src={Instagram} alt='klosanow Instagram' />
                                </SocialBtns>
                            </Stack>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    )
}
