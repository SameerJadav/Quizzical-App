import Link from "next/link";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 text-center">
      <Image
        className="absolute top-0 right-0"
        src="/blob-2.png"
        alt=""
        width={170}
        height={151.71}
      />
      <Image
        className="absolute bottom-0 left-0"
        src="/blob-1.png"
        alt=""
        width={170}
        height={135.54}
      />
      <h1 className="t mb-2 text-6xl font-medium">Quizzical</h1>
      <p className="mb-4 text-xl text-gray-300">Discover the smart in you.</p>
      <Link
        className="w-3/5 rounded-lg bg-teal-400 py-2 px-4 text-2xl font-medium transition-all hover:scale-105 hover:bg-teal-500 md:w-fit md:text-3xl"
        href="/quiz-arena"
      >
        Start Quiz
      </Link>
    </main>
  );
}
