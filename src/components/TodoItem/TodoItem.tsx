import { Checkbox } from 'components/Checkbox'
import { FC } from 'react'

export type TodoItemProps = {
  id: number
  text: string
}

export const TodoItem: FC<TodoItemProps> = ({ id, text }) => (
  <div>
    <input className='hidden' type='checkbox' id={`task_${id}`} />
    <label
      className='flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900'
      htmlFor={`task_${id}`}
    >
      <Checkbox />
      <span className='ml-4 text-sm'>{text}</span>
    </label>
  </div>
)
