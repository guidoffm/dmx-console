import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href={"foo"} className="text-blue-500 hover:text-blue-700 text-center block font-bold bg-yellow-200 p-2 rounded">
          Foo
        </Link>
        <Link href={"bar"} className="text-blue-500 hover:text-blue-700 text-center block font-bold bg-yellow-200 p-2 rounded">
          Bar
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}