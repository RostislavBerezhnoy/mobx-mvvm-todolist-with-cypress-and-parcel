import { PlusIcon } from 'components/Icons'

export const AddTodoItem = () => (
  <button className='flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded'>
    <PlusIcon />
    <input
      className='flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium'
      type='text'
      placeholder='add a new task'
    />
  </button>
)
