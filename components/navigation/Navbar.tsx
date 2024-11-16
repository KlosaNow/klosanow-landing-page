"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Text,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "@/public/images/general/logo.png";
import { Links, NavLinkProps, MobileLinks } from "@/utils";
import polygon from "@/public/images/general/polygon.svg";

const NavLink = ({ children, href, onClose }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt="1rem"
      >
        <Link
          px={2}
          py={1}
          rounded="md"
          color="primary.80"
          fontWeight={400}
          fontSize="16px"
          href={href}
          onClick={onClose}
          _hover={{ textDecoration: "underline" }}
        >
          {children}
        </Link>
        {isActive ? <Image src={polygon} alt="polygon" loading="lazy" /> : ""}
      </Box>
    </>
  );
};
export default function Navbar(): JSX.Element {
  // toggle drawer on mobile
  const { isOpen, onOpen, onClose } = useDisclosure();

  // detect user scroll
  const [navScrollShadow, setnavScrollShadow] = useState<boolean>(false);

  function handleScroll() {
    const screenY = window.screenY;
    setnavScrollShadow(screenY >= 90 ? true : false);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // clean up
    return () => {
      setnavScrollShadow(false);
    };
  }, []);

  return (
    <>
      <Box
        bg="neutral.50"
        py=".5rem"
        px={{ base: "1rem", md: "6rem" }}
        zIndex={"200"}
        top={0}
        w="100%"
        position="fixed"
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        boxShadow={navScrollShadow ? "sm" : ""}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={8} alignItems={"center"}>
            <Box px={{ base: "none", md: "2rem" }}>
              <Link href="/">
                <Image src={Logo} alt="logo" loading="lazy" />
              </Link>
            </Box>
          </HStack>
          <Flex alignItems="center">
            <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link.title} href={link.href ?? "#"}>
                  {link.title}
                </NavLink>
              ))}
            </HStack>
          </Flex>

          {/* <Flex alignItems="center" justifyContent="space-between" gap="4rem">
            <Link
              href="https://app.klosanow.com"
              isExternal
              display={{ base: "none", md: "block" }}
            >
              <Text color="primary.50" fontWeight={400} fontSize="16px">
                Sign-up
              </Text>
            </Link>
            <Link
              href="https://app.klosanow.com"
              isExternal
              display={{ base: "none", md: "block" }}
            >
              <Button
                bgColor="primary.50"
                fontWeight={400}
                fontSize="16px"
                color="neutral.50"
                size="md"
              >
                Login
              </Button>
            </Link>
          </Flex> */}

          <Flex alignItems="center" justifyContent="space-between" gap="4rem">
            <Link href="#" display={{ base: "none", md: "block" }}>
              <Button
                bgColor="primary.50"
                fontWeight={400}
                fontSize="16px"
                color="neutral.50"
                size="md"
              >
                Join waitlist
              </Button>
            </Link>
          </Flex>
          <IconButton
            variant="outline"
            color="primary.70"
            size={"md"}
            icon={<HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              bg: "none",
            }}
          />
        </Flex>

        {isOpen ? (
          <Box display={{ md: "none" }}>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bgColor="neutral.50">
                <DrawerCloseButton color="primary.70" />
                <DrawerHeader>
                  <Link href="/">
                    <Image src={Logo} alt="logo" loading="lazy" />
                  </Link>
                </DrawerHeader>
                <DrawerBody>
                  <Stack as={"nav"} spacing={4}>
                    {MobileLinks.map((link) => (
                      <NavLink
                        key={link.title}
                        href={link.href ?? "#"}
                        onClose={onClose}
                      >
                        {link.title}
                      </NavLink>
                    ))}
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
