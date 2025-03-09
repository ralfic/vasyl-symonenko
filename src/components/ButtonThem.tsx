import useToggleThem from '@/hooks/useToggleThem';
import { Sun } from 'lucide-react';

export const ButtonThem = () => {
  const { toggleTheme } = useToggleThem();
  return (
    <Sun
      className="w-6 h-6 cursor-pointer dark:text-white dark:hover:text-(--tw-color-dark-accent) transition-colors" 
      onClick={toggleTheme}
    />
  );
};
