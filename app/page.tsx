import Link from "next/link";

export default function Homepage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 text-center">
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
