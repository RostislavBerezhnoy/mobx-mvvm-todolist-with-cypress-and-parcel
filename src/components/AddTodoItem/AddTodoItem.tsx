import { PlusIcon } from 'components/Icons'
import { FC, useState } from 'react'

export type AddTodoItemProps = {
  onAdd: (value: string) => void
}

export const AddTodoItem: FC<AddTodoItemProps> = ({ onAdd }) => {
  const [value, setValue] = useState<string>('')

  const onValueAdd = () => {
    if (value) {
      onAdd(value)
      setValue('')
    }
  }

  return (
    <div className='flex flex-row w-full h-8 pl-2 mt-5 text-sm font-medium rounded'>
      <input
        autoFocus
        className='add-todo-input flex-grow h-8 mr-4 bg-transparent border-2 border-gray-600 px-2 rounded-md focus:outline-none font-medium'
        type='text'
        placeholder='Add a new task'
        value={value}
        onChange={e => setValue(e?.target?.value)}
        onKeyDown={e => e.key === 'Enter' && onValueAdd()}
      />
      <button
        className='add-todo-btn mx-1 flex justify-center items-center w-8 border-gray-600 border-2 rounded-full hover:bg-gray-600'
        onClick={() => onValueAdd()}
      >
        <PlusIcon />
      </button>
    </div>
  )
}
