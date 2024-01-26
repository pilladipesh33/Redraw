import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    <main className="p-4 h-screen w-full">
      <div className="flex justify-between items-center">
        <Navbar />
      </div>
    </main>
  );
}
