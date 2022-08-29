import React, { useState } from "react";
import { questions } from "../Questions";
import { gameContext } from "../context/Contexts";

export default function Questions() {
  const { setGameStage, currentQue, setCurrentQue, setScore } = gameContext();
  const [selected, setSelected] = useState(-1);
  const [isAnswers, setIsAnswerd] = useState(false);

  const flagQuestion = () => {

  };

  const preQuestion = () => {
    // if (currentQue !== 0) setCurrentQue((q) => q - 1);
  };

  const nextQuestion = () => {
    setSelected(-1); 
    setIsAnswerd(false);
    if (currentQue !== questions.length - 1) setCurrentQue((q) => q + 1);
  };

  const finishQuiz = () => {
    setGameStage('finished')
  }

  const handelClick = (key, opt) => {
    setSelected(key); 
    if(!isAnswers && opt === questions[currentQue].answer){
        setScore(s => s + 1);
        setIsAnswerd(a => !a);
    }
  }

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="bg-black/10 sm:w-96 h-96 flex flex-col gap-2 p-2 m-2 rounded justify-evenly">
        <h1
          className="bg-Con_primary p-2  font-bold
         text-primary rounded"
        >
          Q. {questions[currentQue].question}
        </h1>
        {questions[currentQue].options.map((opt, key) => {
          return (
            <h1 className={`p-2 text-primary rounded ${selected === key ? 'bg-slate-200' : `bg-slate-400`}`}
              onClick={()=>handelClick(key, opt)}
              key={key}>
              {key + 1}. {opt}
            </h1>
          );
        })}
        <div className="flex justify-between px-2">
          <button
            className="bg-Con_primary text-primary p-2 rounded"
            onClick={flagQuestion}
          >
            ! marked as flag
          </button>
          {currentQue ? (
            <button
              className="bg-Con_primary text-primary p-2 rounded"
              onClick={preQuestion}
            >
              ! Previous
            </button>
          ) : null}
          {currentQue !== questions.length - 1 ? (
            <button
              className="bg-Con_primary text-primary p-2 rounded"
              onClick={nextQuestion}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-Con_primary text-primary p-2 rounded"
              onClick={finishQuiz}
            >
              Finish Quize
            </button>
          )}
        </div>
      </div>
    </div>
  );
}