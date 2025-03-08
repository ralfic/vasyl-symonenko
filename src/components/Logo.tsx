import { cn } from '@/lib/utils';
import { Link } from 'react-router';
import { m } from 'framer-motion';

interface Props {
  color?: 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
}

const logoVariants = {
  hidden: { opacity: 0, scale: [0.8, 1] },
  visible: { opacity: 1, scale: [1, 0.8], transition: { duration: 0.5 } },
};

export const Logo = ({ color = 'black', size = 'sm' }: Props) => {
  return (
    <Link to="/">
      <m.img
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover={{}}
        src="/ukraine.svg"
        className={cn('cursor-pointer', {
          '': color === 'black',
          invert: color === 'white',
          'w-8 h-8': size === 'sm',
          'w-12 h-12': size === 'md',
          'w-16 h-16': size === 'lg',
        })}
      />
    </Link>
  );
};
