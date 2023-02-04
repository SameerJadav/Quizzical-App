/* eslint-disable react/jsx-key */

interface Quiz {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default async function Home() {
  // fetch data from API
  const res = await fetch(
    "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple"
  );
  const data = await res.json();

  // shuffle the quizzes
  const shuffledQuizzes = data.results
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <main className="w-full divide-y-2 divide-solid divide-gray-500 p-4">
      {shuffledQuizzes.map((quiz: Quiz) => (
        <div className=" mx-auto mb-4 max-w-5xl">
          {/* Questions */}
          <h2
            className="my-4 text-xl font-medium"
            dangerouslySetInnerHTML={{ __html: quiz.question }}
          />

          {/* Options */}
          <ul className="mb-4 flex flex-col gap-5 text-center text-lg md:flex-row">
            {/* Correct answer */}
            <li
              className="min-w-[8rem] cursor-pointer rounded-lg border-2 border-teal-500 p-2 transition-all hover:scale-105 hover:border-teal-300"
              dangerouslySetInnerHTML={{ __html: quiz.correct_answer }}
            />

            {/* Incorrect answers */}
            {quiz.incorrect_answers.map((answer) => (
              <li
                className="min-w-[8rem] cursor-pointer rounded-lg border-2 border-teal-500 p-2 transition-all hover:scale-105 hover:border-teal-300"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
