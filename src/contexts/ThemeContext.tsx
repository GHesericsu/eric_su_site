import { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContext {
  theme: 'blue' | 'black'
  toggle: (theme: string) => void
}

const ThemeContext = createContext<ThemeContext>({
  theme: 'black',
  toggle: () => null
});


export const ThemeProvider = () => {

}