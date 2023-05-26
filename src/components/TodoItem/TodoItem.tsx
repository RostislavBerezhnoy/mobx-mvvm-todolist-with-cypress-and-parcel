import { FC, useState } from 'react'
import { Checkbox } from 'components/Checkbox'
import { TODO_STATUS, Todo } from 'types/todo'
import { STATUS_TYPES } from './helpers'
import { EditIcon, TrashIcon } from 'components/Icons'

export type TodoItemProps = Todo & {
  onStatusChange: (todo: Todo) => void
  onDelete: (todo: Todo) => void
}

export const TodoItem: FC<TodoItemProps> = ({ id, text, status, onStatusChange, onDelete }) => {
  const [checked, setChecked] = useState<TODO_STATUS>(status)

  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center w-full mr-1 truncate'>
        <input
          id={`task_${id}`}
          className='hidden'
          type='checkbox'
          checked={checked === TODO_STATUS.DONE}
          onChange={e => {
            setChecked(STATUS_TYPES.get(e?.target?.checked))
            onStatusChange({ id, text, status: STATUS_TYPES.get(e?.target?.checked) })
          }}
        />
        <label
          className='flex items-center h-10 px-2 w-full rounded cursor-pointer hover:bg-gray-900'
          htmlFor={`task_${id}`}
        >
          <Checkbox />
          <span className='ml-4 text-sm'>{text}</span>
        </label>
      </div>

      <div className='flex flex-row justify-between'>
        <button className='mx-1 flex justify-center items-center w-8'>
          <EditIcon />
        </button>
        <button
          className='mx-1 flex justify-center items-center w-8'
          onClick={() => onDelete({ id, text, status })}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
