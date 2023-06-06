import { FC, PropsWithChildren } from 'react'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex items-center justify-center w-screen h-full font-medium'>
    <div className='flex flex-grow items-center justify-center bg-gray-900 min-h-screen h-full py-5'>
      {children}
    </div>
  </div>
)
