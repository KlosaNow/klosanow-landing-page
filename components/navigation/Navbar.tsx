import React, { ReactNode } from 'react'
import {
    Box,
    Flex, HStack,
    Link, IconButton,
    useDisclosure, Stack,
    Drawer, DrawerBody,
    DrawerHeader, DrawerOverlay,
    DrawerCloseButton, DrawerContent, Text, Button
} from '@chakra-ui/react'
import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from "public/logo.png"


const Links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "#" },
    { title: "Contact", href: "#" },
]

interface NavLinkProps {
    children: ReactNode,
    href: string,
    onClose?: () => void,
}

const NavLink = ({ children, href, onClose }: NavLinkProps) => {
    return (
        <Link px={2} py={1} rounded='md' color='black.100' fontWeight={500} href={href} onClick={onClose} >
            {children}
        </Link>
    )
}
export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg='neutral.50' py='.4rem' px={{ base: '1rem', md: '6rem' }}
                border={'0.3px solid rgba(0, 0, 0, 0.20)'}
                shadow={'sm'}
            >

                <Flex h={16} alignItems='center' justifyContent='space-between'>
                    <IconButton
                        variant='outline'
                        color='primary.70'
                        size={'md'}
                        icon={<HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _hover={{
                            bg: 'none'
                        }}
                    />
                    <HStack spacing={8} alignItems={'center'}>

                        <Box px={{ base: 'none', md: '2rem' }}>
                            <Link href='/'>
                                <Image src={Logo} alt='logo' loading='lazy' />
                            </Link>
                        </Box>

                    </HStack>
                    <Flex alignItems='center'>
                        <HStack
                            as='nav'
                            spacing={8}
                            display={{ base: 'none', md: 'flex' }} >

                            {Links.map((link) => (
                                <NavLink key={link.title} href={link.href ?? '#'}>{link.title}</NavLink>
                            ))}
                        </HStack>
                    </Flex>

                    <Flex alignItems='center' justifyContent='space-between' gap='4rem'>
                        <Link href='#' display={{ base: 'none', md: 'block' }}>
                            <Text color='primary.50'>Sign-up</Text>
                        </Link>
                        <Link href='#'>
                            <Button bgColor='primary.50' color='neutral.50' size='md'>Login</Button>

                        </Link>
                    </Flex>

                </Flex>

                {isOpen ? (
                    <Box display={{ md: 'none' }}>
                        <Drawer
                            isOpen={isOpen}
                            placement='left'
                            onClose={onClose}
                        >
                            <DrawerOverlay />
                            <DrawerContent bgColor='neutral.50'>
                                <DrawerCloseButton color='primary.70' />
                                <DrawerHeader>
                                    <Link href='/'>
                                        <Image src={Logo} alt='logo' loading='lazy' />
                                    </Link>
                                </DrawerHeader>
                                <DrawerBody>
                                    <Stack as={'nav'} spacing={4}>
                                        {Links.map((link) => (
                                            <NavLink key={link.title} href={link.href ?? '#'} onClose={onClose}
                                            >{link.title}</NavLink>
                                        ))}

                                    </Stack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Box>
                ) : null}
            </Box>

        </>
    )
}
