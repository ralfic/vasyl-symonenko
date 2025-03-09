import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('max-w-[1280px] mx-auto h-full px-4 ', className)}>
      {children}
    </div>
  );
};
