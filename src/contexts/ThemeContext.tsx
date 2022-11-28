// import { createContext, useContext, useState } from 'react';
//example
type ThemeOptions = 'dark' | 'light';

export interface Theme {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
}

// export const ThemeContext = createContext<Theme>({
//   theme: 'dark',
//   setTheme: () => null,
// });

// export const ThemeProvider = (props: {
//   children: JSX.Element;
// }): JSX.Element => {
//   const [theme, setTheme] = useState<ThemeOptions>('dark');

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return {
//     theme,
//     toggleTheme: () => {
//       if (theme === 'dark') {
//         setTheme('light');
//         console.log('light')
//       } else {
//         setTheme('dark');
//         console.log('dark')
//       }
//     },
//   };
// };
