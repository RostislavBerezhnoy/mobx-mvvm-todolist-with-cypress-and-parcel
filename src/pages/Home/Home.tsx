import { useStores } from 'store/RootStore'
import { TodoView } from 'mvvm/views/TodoView'

export const Home = () => {
  const { todoViewModel } = useStores()

  return <TodoView todoViewModel={todoViewModel} />
}
