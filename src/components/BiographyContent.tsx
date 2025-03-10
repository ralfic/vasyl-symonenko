import { ScrollReveal } from '@/components/ScrollReveal';
import { biographyData } from '@/constants';

export const BiographyContent = () => {
  return (
    <div className="flex flex-col gap-4">
      {biographyData.sections.map((section, index) => (
        <ScrollReveal key={index} delay={index * 0.2}>
          <div className="flex gap-4 bg-(--tw-color-card) dark:shadow-[rgba(0,_0,_0,_0.5)] dark:bg-(--tw-color-dark-secondary-background) rounded-lg shadow-md p-4 max-md:flex-col  ">
            {section.image && (
              <img
                className="max-w-[300px] max-h-[300px] rounded-3xl flex-shrink-0 bg-stone-200"
                src={section.image}
                loading="lazy"
              />
            )}
            <ul className="list-disc list-inside flex flex-col gap-1">
              <p className="font-bold text-2xl">{section.title}</p>
              {section.content.map((content, i) => (
                <li className="dark:text-white/80" key={i}>
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};
