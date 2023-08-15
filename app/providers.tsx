'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import theme from '@/chakra.config'

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
                <ProgressBar
                    height="4px"
                    color="#523BA3"
                    options={{ showSpinner: true }}
                />
            </ChakraProvider>
        </CacheProvider>
    )
}