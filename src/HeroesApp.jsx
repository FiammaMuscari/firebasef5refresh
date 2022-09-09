import React from 'react';
import { AppRouter } from './router/AppRouter';
import { ChakraProvider } from '@chakra-ui/react'
import 'animate.css';

export const HeroesApp = () => {
  return (
   <>
    <ChakraProvider>
          <AppRouter />
    </ChakraProvider>
   </>
  )
}
