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
    <main className="p-4">
      {shuffledQuizzes.map((quiz: Quiz) => (
        <>
          {/* Questions */}
          <h2
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: quiz.question }}
          />

          {/* Options */}
          <ul className=" list-disc px-8">
            <li>{quiz.correct_answer}</li>
            {quiz.incorrect_answers.map((answer) => (
              <li dangerouslySetInnerHTML={{ __html: answer }} />
            ))}
          </ul>
        </>
      ))}
    </main>
  );
}
