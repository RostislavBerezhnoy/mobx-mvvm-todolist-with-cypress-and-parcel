import { observer } from 'mobx-react'
import { FC } from 'react'
import TodoViewModel from 'mvvm/view-models/TodoViewModel'
import { TodoItem } from 'components/TodoItem'
import { AddTodoItem } from 'components/AddTodoItem'
import { TodoHeader } from 'components/TodoHeader'
import { TodoCard } from 'components/TodoCard'

export const TodoView: FC<{ todoViewModel: TodoViewModel }> = observer(
  ({ todoViewModel: { todos, isTodosLoading } }) => {
    if (isTodosLoading) return <p>Loading...</p>

    return (
      <TodoCard>
        <TodoHeader title='Todo list' />
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
        <AddTodoItem />
      </TodoCard>
    )
  },
)
