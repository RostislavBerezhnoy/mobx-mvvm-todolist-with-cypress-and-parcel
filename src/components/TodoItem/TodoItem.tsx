import { FC, useState } from 'react'
import { Checkbox } from 'components/Checkbox'
import { TODO_STATUS, Todo } from 'types/todo'
import { STATUS_TYPES } from './helpers'
import { CheckIcon, CrossIcon, EditIcon, TrashIcon } from 'components/Icons'

export type TodoItemProps = Todo & {
  onStatusChange: (todo: Todo) => void
  onDelete: (id: number) => void
  onEdit: (todo: Todo) => void
  disableActions: boolean
}

export const TodoItem: FC<TodoItemProps> = ({
  id,
  text = '',
  status,
  onStatusChange,
  onDelete,
  onEdit,
  disableActions = false,
}) => {
  const [checked, setChecked] = useState<TODO_STATUS>(status)
  const [edit, setEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>(text)

  return (
    <div className='todo-item flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center w-full mr-1 truncate'>
        <input
          id={`task_${id}`}
          className='todo-status invisible'
          type='checkbox'
          checked={checked === TODO_STATUS.DONE}
          disabled={disableActions}
          onChange={e => {
            setChecked(STATUS_TYPES.get(e?.target?.checked))
            onStatusChange({ id, text, status: STATUS_TYPES.get(e?.target?.checked) })
          }}
        />
        <label
          className={
            edit
              ? 'flex items-center h-10 px-2 w-full rounded'
              : 'flex items-center h-10 px-2 w-full rounded cursor-pointer hover:bg-gray-900'
          }
          htmlFor={`task_${id}`}
        >
          <Checkbox />
          {edit ? (
            <input
              className='ml-4 flex-grow bg-transparent border-2 border-gray-600 px-2 rounded-md focus:outline-none'
              type='text'
              value={value}
              disabled={disableActions}
              onChange={e => setValue(e?.target?.value)}
            />
          ) : (
            <span className='ml-4 text-sm'>{text}</span>
          )}
        </label>
      </div>

      <div className='flex flex-row justify-between'>
        {edit ? (
          <>
            <button
              className='mx-1 flex justify-center items-center w-8 rounded-full hover:bg-gray-700'
              disabled={disableActions}
              onClick={() => {
                onEdit({ id, text: value, status })
                setEdit(false)
              }}
            >
              <CheckIcon />
            </button>
            <button
              disabled={disableActions}
              className='mx-1 flex justify-center items-center w-8 rounded-full hover:bg-gray-700'
              onClick={() => setEdit(false)}
            >
              <CrossIcon />
            </button>
          </>
        ) : (
          <button
            disabled={disableActions}
            className='mx-1 flex justify-center items-center w-8 rounded-full hover:bg-gray-700'
            onClick={() => setEdit(true)}
          >
            <EditIcon />
          </button>
        )}
        <button
          disabled={disableActions}
          className='mx-1 flex justify-center items-center w-8 rounded-full hover:bg-gray-700'
          onClick={() => onDelete(id)}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
