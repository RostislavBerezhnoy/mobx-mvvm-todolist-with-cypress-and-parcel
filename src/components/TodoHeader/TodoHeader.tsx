import { FC } from 'react'

export type TodoHeaderProps = {
  title: string
}

export const TodoHeader: FC<TodoHeaderProps> = ({ title = 'My todo' }) => (
  <div className='mb-6'>
    <h4 className='font-semibold ml-3 text-lg uppercase text-center'>{title}</h4>
  </div>
)
