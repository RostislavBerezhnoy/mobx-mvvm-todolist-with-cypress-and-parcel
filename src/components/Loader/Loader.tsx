import { FC } from 'react'

export const Loader: FC = () => (
  <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-700 to-pink-700 animate-spin'>
    <div className='h-10 w-10 rounded-full bg-gray-900' />
  </div>
)
