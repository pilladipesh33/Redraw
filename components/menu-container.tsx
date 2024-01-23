"use client";

import { Github, Linkedin, Menu, Moon, Sun, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import Link from "next/link";

export const MenuContainer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="bg-[#bbb8ff] dark:bg-[#232329] rounded-xl hover:bg-[#f1f0ff] dark:hover:bg-[#31303b]"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl w-56 bg-white dark:bg-[#232329] border-none">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <Link
              href={"https://github.com/pilladipesh33/excalidraw-clone"}
              target="_blank"
            >
              GitHub
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Twitter className="mr-2 h-4 w-4" />
            <Link href={"https://x.com/dip3sh_?s=20"} target="_blank">
              Follow me
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Linkedin className="mr-2 h-4 w-4" />
            <Link
              href={"https://www.linkedin.com/in/pilladipesh/"}
              target="_blank"
            >
              Connect with me
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-[#F1F0FF]" />
        <DropdownMenuItem>
          {theme === "dark" ? (
            <Sun className="mr-2 h-4 w-4" />
          ) : (
            <Moon className="mr-2 h-4 w-4" />
          )}
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className=""
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
