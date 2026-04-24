import React from 'react'
import { motion } from 'framer-motion'

const Result = ({ score, onReset, total, subjectSelected }) => {
  const percentage = Math.round((score / total) * 100)

  const getMessage = () => {
    if (percentage === 100) return "Perfect score!"
    if (percentage >= 70) return "Great work!"
    if (percentage >= 40) return "Good effort!"
    return "Keep practicing!"
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-6'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='bg-slate-800 border border-slate-700 rounded-3xl p-10 w-full max-w-md text-center flex flex-col gap-5'
      >
        <p className='text-xs uppercase tracking-widest text-slate-500'>{subjectSelected} Quiz</p>

        <div>
          <h1 className='text-7xl font-bold text-white'>
            {score}
            <span className='text-4xl text-slate-600'>/{total}</span>
          </h1>
          <p className='text-slate-500 text-sm mt-1'>{percentage}%</p>
        </div>

        <p className='text-lg font-medium text-slate-200'>{getMessage()}</p>

        <div className='flex justify-center gap-3'>
          <div className='bg-slate-900 rounded-2xl p-4 flex-1'>
            <p className='text-3xl font-bold text-emerald-400'>{score}</p>
            <p className='text-xs text-slate-500 mt-1'>correct</p>
          </div>
          <div className='bg-slate-900 rounded-2xl p-4 flex-1'>
            <p className='text-3xl font-bold text-red-400'>{total - score}</p>
            <p className='text-xs text-slate-500 mt-1'>wrong</p>
          </div>
        </div>

        <button
          onClick={onReset}
          className='mt-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white px-8 py-3 rounded-xl text-sm cursor-pointer transition-all duration-200'
        >
          Choose another subject
        </button>
      </motion.div>
    </div>
  )
}

export default Result