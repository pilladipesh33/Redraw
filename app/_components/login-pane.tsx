"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const LoginPane = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
