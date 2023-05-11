import { FC, PropsWithChildren } from 'react'

export const TodoCard: FC<PropsWithChildren> = ({ children }) => (
  <div className='max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200'>
    {children}
  </div>
)
