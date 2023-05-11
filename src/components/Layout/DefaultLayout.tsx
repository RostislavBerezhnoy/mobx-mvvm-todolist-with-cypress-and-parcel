import { FC, PropsWithChildren } from 'react'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex items-center justify-center w-screen h-screen font-medium'>
    <div className='flex flex-grow items-center justify-center bg-gray-900 h-full'>{children}</div>
  </div>
)
