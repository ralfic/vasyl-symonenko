import { Link, useLocation } from 'react-router';
import { NavPaths } from '../constants';
import { cn } from '@/lib/utils';
import { m } from 'framer-motion';

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const MenuNav = ({ closeMenu }: { closeMenu?: () => void }) => {
  const { pathname } = useLocation();

  return (
    <nav>
      <m.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-8 max-md:flex-col "
      >
        {NavPaths.map((path) => (
          <m.li
            variants={linkVariants}
            key={path.name}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="max-md:text-center dark:hover:text-(--tw-color-dark-accent) transition-colors"
          >
            <Link
              className={cn(
                'hover:underline ',
                pathname === path.path && 'underline'
              )}
              onClick={closeMenu}
              key={path.name}
              to={path.path}
            >
              {path.name}
            </Link>
          </m.li>
        ))}
      </m.ul>
    </nav>
  );
};
