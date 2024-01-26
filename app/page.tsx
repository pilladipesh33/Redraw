import { Navbar } from "./_components/navbar";
import { ToolboxOptions } from "./_components/toolbox-option";

export default function Home() {
  return (
    <main className="p-4 h-screen w-full">
      <div className="">
        <Navbar />
        <ToolboxOptions />
      </div>
    </main>
  );
}
