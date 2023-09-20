import { Moon, Sun } from "lucide-react";

import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { Icons } from "@components/ui/icons";
import Section from "@components/ui/section";

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <header>
      <Section className="flex h-16 justify-end">
        <div className="basis-1/3 flex justify-center items-center">
          <Icons.Logo
              className="fill-primary" />
        </div>
        <div className="flex justify-end items-center basis-1/3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Section>
    </header>
  );
};

export default Header;
