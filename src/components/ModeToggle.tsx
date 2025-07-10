import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();


  const resolvedTheme =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="p-2 sm:p-3 md:p-4 lg:p-5 rounded-full text-background bg-foreground"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-8 sm:h-10 md:h-6 lg:h-8 xl:h-10" />
      ) : (
        <Moon className="h-8 sm:h-10 md:h-6 lg:h-8 xl:h-10" />
      )}
    </Button>
  );
}
