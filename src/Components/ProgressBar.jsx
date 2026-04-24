import React from 'react'

const ProgressBar = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100)
  return (
    <div className='w-full px-6 pt-5 pb-2 max-w-2xl mx-auto'>
      <div className='flex justify-between text-xs text-slate-500 mb-2'>
        <span>Question {current + 1} of {total}</span>
        <span>{percentage}%</span>
      </div>
      <div className='w-full h-1.5 bg-slate-800 rounded-full'>
        <div
          style={{ width: `${percentage}%` }}
          className='h-1.5 bg-indigo-500 rounded-full transition-all duration-500'
        />
      </div>
    </div>
  )
}

export default ProgressBar