import { Github } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="pt-8 pb-4 text-white  bg-black dark:bg-gray-900">
      <Container className="flex gap-4 justify-between items-center max-sm:flex-col max-sm:gap-2">
        <Logo color="white" size="md" />
        <p className="text-center">«Ти знаєш, що ти — людина?».</p>
        <div className="flex flex-col text-sm gap-2 items-end max-sm:items-center ">
          <p>Copyright &copy; 2025</p>
          <div className="flex gap-2">
            <Link to="https://github.com/ralfic" target="_blank">
              <Github className="w-6 h-6" />
            </Link>
            <p>Created by Takhtarov Danylo</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
