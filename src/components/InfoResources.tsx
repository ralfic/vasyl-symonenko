import { usedResources } from '@/constants';
import { listVariants, itemVariants } from '@/variants';
import { m } from 'framer-motion';

export const InfoResources = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Використані ресурси:</h2>
      <m.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="list-disc list-inside"
      >
        {usedResources.map((resource, index) => (
          <m.li variants={itemVariants} key={index}>
            <a
              className="underline dark:text-white/80 dark:hover:text-(--tw-color-dark-accent)  transition-colors"
              target="_blank"
              href={resource}
            >
              {resource}
            </a>
          </m.li>
        ))}
      </m.ul>
    </div>
  );
};
