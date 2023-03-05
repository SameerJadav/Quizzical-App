import Link from "next/link";

export default function Homepage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center text-center">
      <h1 className="mb-2 text-5xl font-semibold md:text-6xl">Quizzical</h1>
      <p className="mb-8 text-2xl text-gray-300 md:text-3xl">
        Discover the smart in you.
      </p>
      <Link
        className="rounded-lg bg-teal-400 py-4 px-8 text-3xl transition-all hover:scale-105 hover:bg-teal-500 md:text-4xl"
        href="/quiz-arena"
      >
        Start Quiz
      </Link>
    </main>
  );
}
