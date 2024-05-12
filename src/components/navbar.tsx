"use client";

import { Icon } from "@iconify-icon/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SwatchBook } from "lucide-react";

export default function Navigation() {
  const { themes, setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between items-center p-5 border-b-2">
      <div className="flex gap-2 items-center justify-center">
        <a href="/" className="flex gap-2 ">
          <Icon icon="streamline:galaxy-2" width="38" />
          <div className="flex flex-col leading-5">
            <p className="font-bold">spaceness</p>
            <p className="font-normal">creating things</p>
          </div>
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <a href="/about" className="underline">
          about us
        </a>
        <a
          href="https://discord.gg/ZyE5PPQh"
          target="_blank"
          className="p-1 border-l-2 pl-2"
        >
          <Icon
            icon="ic:baseline-discord"
            width="24"
            className="align-middle"
          />
        </a>
        <a href="https://github.com/spaceness" target="_blank" className="p-1">
          <Icon icon="mdi:github" width="24" className="align-middle" />
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SwatchBook className="size-5 mr-2 justify-self-center" />
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>
              {themes.map((theme) => (
                <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      </div>
    </div>
  );
}
