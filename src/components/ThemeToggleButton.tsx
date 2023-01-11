import useTheme from 'next-theme';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ModeButton theme={theme} toggleTheme={toggleTheme}></ModeButton>;
}

function ModeButton({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <div>
      <div
        className='inline-block cursor-pointer rounded-full border border-black bg-primary-200 p-2 drop-shadow-lg hover:bg-primary-300 dark:bg-primary-600 hover:dark:bg-primary-700'
        onClick={() => toggleTheme()}>
        <IconContext.Provider value={{ className: '' }}>
          <div>
            {theme === 'dark' ? <MdDarkMode /> : <MdOutlineLightMode />}
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
