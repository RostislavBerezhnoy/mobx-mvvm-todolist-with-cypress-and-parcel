import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import toast from 'react-hot-toast'
import TodoViewModel from 'mvvm/view-models/TodoViewModel'
import { TodoItem } from 'components/TodoItem'
import { AddTodoItem } from 'components/AddTodoItem'
import { TodoHeader } from 'components/TodoHeader'
import { TodoCard } from 'components/TodoCard'
import { Loader } from 'components/Loader'

export const TodoView: FC<{ todoViewModel: TodoViewModel }> = observer(
  ({
    todoViewModel: {
      todos,
      isTodosLoading,
      isTodosError,
      todosError = '',
      addTodo,
      isAddTodoLoading,
      isAddTodoError,
      addTodoError = '',
      updateTodo,
      isUpdateTodoLoading,
      isUpdateTodoError,
      updateTodoError = '',
      removeTodo,
      isRemoveTodoLoading,
      isRemoveTodoError,
      removeTodoError = '',
    },
  }) => {
    useEffect(() => {
      if (isTodosError) toast.error(todosError)
    }, [isTodosError, todosError])

    useEffect(() => {
      if (isAddTodoError) toast.error(addTodoError)
    }, [isAddTodoError, addTodoError])

    useEffect(() => {
      if (isUpdateTodoError) toast.error(updateTodoError)
    }, [isUpdateTodoError, updateTodoError])

    useEffect(() => {
      if (isRemoveTodoError) toast.error(removeTodoError)
    }, [isRemoveTodoError, removeTodoError])

    if (isTodosLoading && todos.length === 0) return <Loader />

    return (
      <TodoCard>
        <TodoHeader title='Async Todo list' />
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            onStatusChange={updateTodo}
            onDelete={removeTodo}
            onEdit={updateTodo}
            disableActions={isAddTodoLoading || isUpdateTodoLoading || isRemoveTodoLoading}
          />
        ))}
        <AddTodoItem onAdd={addTodo} />
      </TodoCard>
    )
  },
)
