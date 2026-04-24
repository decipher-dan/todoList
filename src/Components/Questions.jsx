import React from 'react'
import { motion } from 'framer-motion'

const Questions = ({ questions, current, selected, answered, onAnswer, onNext, subjectSelected }) => {
  const question = questions[current]

  if (current < questions.length) {
    return (
      <div className='w-full max-w-2xl mx-auto px-6 py-8 flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <p className='text-xs text-indigo-400 uppercase tracking-widest font-medium'>{subjectSelected}</p>
          <h1 className='text-2xl md:text-3xl font-bold text-white leading-snug'>{question.question}</h1>
        </div>

        <div className='flex flex-col gap-3'>
          {question.options.map((option, index) => (
            <button
              key={index}
              disabled={answered}
              onClick={() => onAnswer(index)}
              className={`w-full p-4 rounded-xl text-left text-sm border transition-all duration-200 cursor-pointer
                ${answered
                  ? index === question.correctAnswer
                    ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300'
                    : index === selected
                      ? 'bg-red-500/15 border-red-500/50 text-red-300'
                      : 'bg-slate-800/40 border-slate-700/40 text-slate-500'
                  : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-500'
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='bg-slate-800 border-l-4 border-indigo-500 rounded-xl p-4 text-slate-400 text-sm leading-relaxed'
          >
            {question.explanation}
          </motion.div>
        )}

        {answered && (
          <div className='flex justify-end'>
            <button
              onClick={onNext}
              className='border border-indigo-500/50 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 px-6 py-2.5 rounded-xl text-sm cursor-pointer transition-all duration-200'
            >
              Next question →
            </button>
          </div>
        )}
      </div>
    )
  }

  return <></>
}

export default Questions