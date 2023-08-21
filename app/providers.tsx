'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/chakra.config'
import { Footer, Navbar } from '@/components/navigation'
import { Box } from '@chakra-ui/react'

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <Navbar />
                <Box mt={20}> 
                    {children}
                </Box>
                <Footer />
            </ChakraProvider>
        </CacheProvider>
    )
}