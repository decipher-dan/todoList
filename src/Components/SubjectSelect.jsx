import React from 'react'
import { motion } from 'framer-motion'

const SubjectSelect = ({ subjects, onSelectSubject }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 py-12'>
      <p className='text-xs uppercase tracking-widest text-slate-500 mb-2'>Developer Quiz</p>
      <h1 className='text-2xl font-medium text-white mb-10'>Choose a subject to begin</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl'>
        {subjects.map((subject, index) => (
          <motion.button
            key={subject.subject}
            onClick={() => onSelectSubject(subject.subject)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`${subject.color} flex flex-col items-center justify-center gap-2 p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300`}
          >
            <span className='text-white font-medium text-base'>{subject.subject}</span>
            <span className='text-white/60 text-xs font-normal'>10 questions</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default SubjectSelect