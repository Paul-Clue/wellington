'use client';
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import { AuthContextProvider } from '@/stores/authContext';

export default function App({ Component, pageProps }) {
  return(
    <AuthContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContextProvider>
     )
}
