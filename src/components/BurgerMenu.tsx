import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from './ui/button';

import { MenuNav } from './MenuNav';
import { useState } from 'react';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <Button className="hidden max-md:block">Menu</Button>
      </DrawerTrigger>

      <DrawerContent className="p-4">
        <div className="w-full h-full grid grid-rows-3">
          <DrawerHeader>
            <DrawerTitle className="flex justify-between">
              <span> Menu</span>
              <DrawerClose className="text-black cursor-pointer">
                X<DrawerDescription></DrawerDescription>
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4 mx-auto">
            <MenuNav closeMenu={() => setIsOpen(false)} />
          </div>
          <DrawerFooter></DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
