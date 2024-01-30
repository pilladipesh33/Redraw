import { Board } from "@/app/_components/board";
import { Navbar } from "./_components/navbar";
import { ToolboxOptions } from "./_components/toolbox-option";
import { ToolBoxContent } from "@/app/_components/toolbox";

export default function Home() {
  return (
    <main className="h-[100vh] w-full">
      <Board />
      <div className="absolute top-5 left-[40%]">
        <ToolBoxContent />
      </div>
      {/* <Navbar /> */}
      <div className="absolute top-12">
        <ToolboxOptions />
      </div>
    </main>
  );
}
