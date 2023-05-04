import { observer } from 'mobx-react'
import { FC } from 'react'
import TodoViewModel from 'mvvm/view-models/TodoViewModel'

export const TodoView: FC<{ todoViewModel: TodoViewModel }> = observer(
  ({ todoViewModel: { todos, isTodosLoading } }) => {
    if (isTodosLoading) return <p>Loading...</p>

    return (
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <p>{todo.text}</p>
          </div>
        ))}
      </div>
    )
  },
)
