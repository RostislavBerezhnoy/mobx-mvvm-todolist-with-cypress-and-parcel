import { createContext, useContext } from 'react'
import TodoViewModel from 'mvvm/view-models/TodoViewModel'

class RootStore {
  todoViewModel: TodoViewModel

  constructor() {
    this.todoViewModel = new TodoViewModel(this)
  }
}

export default RootStore

const StoresContext = createContext<RootStore>(new RootStore())
export const useStores = () => useContext(StoresContext)
