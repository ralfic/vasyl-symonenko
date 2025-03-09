import { Container } from './Container';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="pt-8 pb-4 text-white  bg-black dark:bg-(--tw-color-dark-secondary-background)">
      <Container className="grid grid-cols-3 gap-4 items-center  max-sm:grid-cols-1 max-sm:gap-2">
        <div className='max-sm:hidden'>
          <Logo color="white" size="md" />
        </div>
        <p className="text-center">«Ти знаєш, що ти — людина?».</p>
        <div className="flex flex-col text-sm gap-2 items-end max-sm:items-center ">
          <p>Copyright &copy; 2025</p>
          <p>Created by Takhtarov Danylo</p>
        </div>
      </Container>
    </footer>
  );
};
