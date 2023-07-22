import React, { ReactNode } from 'react'
import {
    Box,
    Flex, HStack,
    Link, IconButton,
    useDisclosure, Stack,
    Drawer, DrawerBody,
    DrawerHeader, DrawerOverlay,
    DrawerCloseButton, DrawerContent
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
    return (
        <>
            <Box>Navbar</Box>

        </>
    )
}
