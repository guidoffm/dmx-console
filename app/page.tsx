import Link from "next/link";

export default function Home() {
  return (


    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Link href={"foo"} className="text-blue-500 hover:text-blue-700 text-center block font-bold bg-yellow-200 p-2 rounded">
        Foo
      </Link>
      <Link href={"bar"} className="text-blue-500 hover:text-blue-700 text-center block font-bold bg-yellow-200 p-2 rounded">
        Bar
      </Link>
    </main>


  );
}