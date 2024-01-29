import { Board } from "@/app/_components/board";
import { Navbar } from "./_components/navbar";
import { ToolboxOptions } from "./_components/toolbox-option";

export default function Home() {
  return (
    <main className="p-4 h-screen w-full">
      <div className="">
        <Navbar />
        <ToolboxOptions />
        {/* <div className="absolute top-0 left-0">
          <Board />
        </div> */}
      </div>
    </main>
  );
}
