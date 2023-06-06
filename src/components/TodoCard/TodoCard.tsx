import { FC, PropsWithChildren } from 'react'

export const TodoCard: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{ width: '500px' }} //TODO: fix later with tailwindcss
    className='p-8 bg-gray-800 rounded-lg shadow-lg w-500 text-gray-200' // w-500 or w-[500px] not working o_0
  >
    {children}
  </div>
)
