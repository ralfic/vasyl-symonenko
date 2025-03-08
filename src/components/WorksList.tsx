import { ArrowRightIcon } from 'lucide-react';
import { vasylSymonenkoWorks } from '@/constants';
import { m } from 'framer-motion';
import { itemVariants, listVariants } from '@/variants';

export const WorksList = () => {
  return (
    <m.ul
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-4 max-md:grid-cols-1"
    >
      {vasylSymonenkoWorks.map((work) => (
        <m.li
          variants={itemVariants}
          key={work.title}
          className="p-4 bg-(--tw-color-card) rounded-lg shadow-md"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">{work.title}</h3>
            <m.a
              whileHover={{ scale: 1.2 }}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--tw-color-primary) hover:underline"
              title="Прочитати"
            >
              <ArrowRightIcon />
            </m.a>
          </div>
          <p className="text-sm text-muted-foreground">Рік: {work.year}</p>
          <p className="mt-2">{work.description}</p>
          <blockquote className="mt-4 italic border-l-4 border-(--tw-color-primary) pl-4">
            {work.quote}
          </blockquote>
        </m.li>
      ))}
    </m.ul>
  );
};
