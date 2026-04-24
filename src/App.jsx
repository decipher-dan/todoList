import React, { useState } from 'react'
import './App.css'
import { quizData } from './Components/quizData'
import SubjectSelect from './Components/SubjectSelect'
import Questions from './Components/Questions'
import ProgressBar from './Components/ProgressBar'
import Result from './Components/Result'

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false)
  
  // callback handler for the subject sellections
  const handleSubject = (subject) => {
    setSelectedSubject(subject)
    console.log(subject)
  }

  //current question selector
  const currentQuestions = quizData.find(
  (data) => data.subject === selectedSubject
) || null;
 
const isFinished = currentQuestions && current >= currentQuestions.questions.length

   // answers callback handler
const handleAnswer = (index) => {
  if (!currentQuestions) return; // 🛑 prevent crash

  setSelected(index);
  setAnswered(true);

  if (index === currentQuestions.questions[current].correctAnswer) {
    setScore(prev => prev + 1);
  }
};
  
  // next callback handler
  const handleNext = () => {
    setCurrent(current + 1)
    setSelected(null);
    setAnswered(false);
  }

  // handle reset callback handler
  const handleReset = () => {
    setAnswered(false)
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setSelectedSubject(null)
  }
 
  return (
    <>
      <div className='min-h-screen bg-gray-900 text-white p-6'>
          {
      selectedSubject === null ? (
      <div>
          <SubjectSelect 
            subjects={quizData.map(data => ({subject: data.subject, color: data.color}))} 
            onSelectSubject={handleSubject} 
            answered={answered}
          />
      </div>
        ) :  isFinished ?  (
            <Result score={score} onReset={handleReset} total={currentQuestions.questions.length} subjectSelected={selectedSubject} />
        ) :
           (
          <div className=''>
            <ProgressBar current={current} total={currentQuestions.questions.length} />
            <Questions 
              questions={currentQuestions.questions} 
              current={current}
              selected={selected}
              answered={answered}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onReset={handleReset}
              score={score}
              subjectSelected={selectedSubject}
            />

          </div>
        )
    }
      </div>
    </>
  )
}

export default App
