import { MenuContainer } from "@/components/menu-container";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  return (
    <main className="p-4 h-screen w-full">
      <MenuContainer />
    </main>
  );
}
