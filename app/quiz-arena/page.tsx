/* eslint-disable react/jsx-key */

interface Quiz {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const metadata = {
  title: "Quiz Aerena",
};

export default async function Home() {
  // fetch data from API
  const res = await fetch(
    "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple",
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  let score = 0;

  // shuffle the quizzes
  const shuffledQuizzes = data.results
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <main className="w-full divide-y-2 divide-solid divide-gray-700 p-4 md:p-0">
      {shuffledQuizzes.map((quiz: Quiz) => (
        <div className=" mx-auto mb-4 max-w-5xl">
          {/* Questions */}
          <h2
            className="my-4 text-lg font-medium"
            dangerouslySetInnerHTML={{ __html: quiz.question }}
          />

          {/* Options */}
          <ul className="mb-4 flex flex-col gap-5 text-center md:flex-row">
            {/* Correct answer */}
            <li
              className="min-w-[8rem] cursor-pointer rounded-lg border-2 border-teal-500 p-2 shadow-sm shadow-teal-300 transition-all hover:scale-105 hover:border-teal-300"
              dangerouslySetInnerHTML={{ __html: quiz.correct_answer }}
            />

            {/* Incorrect answers */}
            {quiz.incorrect_answers.map((answer) => (
              <li
                className="min-w-[8rem] cursor-pointer rounded-lg border-2 border-teal-500 p-2 shadow-sm shadow-teal-300 transition-all hover:scale-105 hover:border-teal-300"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            ))}
          </ul>
        </div>
      ))}

      <div className="mx-auto flex max-w-5xl items-center justify-center gap-4 pt-4">
        <p className="text-lg">Your score is {score}/5</p>
        <button className="rounded-lg bg-teal-400 py-2 px-4 text-lg transition-all hover:scale-105 hover:bg-teal-500">
          Play Again
        </button>
      </div>
    </main>
  );
}
