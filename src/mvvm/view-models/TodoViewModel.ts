import { makeAutoObservable, runInAction } from 'mobx'
import api from 'config/axios'
import RootStore from 'store/RootStore'
import { Todo, TODO_STATUS } from 'types/todo'

class TodoViewModel {
  rootStore: RootStore

  //todos
  todos: Todo[] = []

  isTodosLoading = false

  isTodoSuccess = false

  isTodosError = false

  todosError = undefined

  //add todo
  isAddTodoLoading = false

  isAddTodoSuccess = false

  isAddTodoError = false

  addTodoError = undefined

  //update todo
  isUpdateTodoLoading = false

  isUpdateTodoSuccess = false

  isUpdateTodoError = false

  updateTodoError = undefined

  //remove todo
  isRemoveTodoLoading = false

  isRemoveTodoSuccess = false

  isRemoveTodoError = false

  removeTodoError = undefined

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
    void this.fetchTodos()
  }

  fetchTodos = async () => {
    runInAction(() => {
      this.isTodosLoading = true
      this.isTodoSuccess = false
      this.isTodosError = false
      this.todosError = undefined
    })

    try {
      const { data } = await api.get('/todos')
      runInAction(() => {
        this.todos = data
        this.isTodosLoading = false
        this.isTodoSuccess = true
      })
    } catch (error: any) {
      runInAction(() => {
        this.isTodosLoading = false
        this.isTodosError = true
        this.todosError = error.message
      })
    }
  }

  addTodo = async (value: string) => {
    runInAction(() => {
      this.isAddTodoLoading = true
      this.isAddTodoSuccess = false
      this.isAddTodoError = false
      this.addTodoError = undefined
    })

    try {
      const { data } = await api.post('/todos', { text: value, status: TODO_STATUS.ACTIVE })
      runInAction(() => {
        this.todos.push(data)
        this.isAddTodoLoading = false
        this.isAddTodoSuccess = true
      })
    } catch (error: any) {
      runInAction(() => {
        this.isAddTodoLoading = false
        this.isAddTodoError = true
        this.addTodoError = error.message
      })
    }
  }

  updateTodo = async (todo: Todo) => {
    runInAction(() => {
      this.isUpdateTodoLoading = true
      this.isUpdateTodoSuccess = false
      this.isUpdateTodoError = false
      this.updateTodoError = undefined
    })

    try {
      const { data } = await api.put(`/todos/${todo.id}`, todo)
      runInAction(() => {
        let elem = this.todos.find(({ id }) => id === data.id)

        if (elem) elem = data

        this.isUpdateTodoLoading = false
        this.isUpdateTodoSuccess = true
      })
    } catch (error: any) {
      runInAction(() => {
        this.isUpdateTodoLoading = false
        this.isUpdateTodoError = true
        this.updateTodoError = error.message
      })
    }
  }

  removeTodo = async (todo: Todo) => {
    runInAction(() => {
      this.isRemoveTodoLoading = true
      this.isRemoveTodoSuccess = false
      this.isRemoveTodoError = false
      this.removeTodoError = undefined
    })

    try {
      await api.delete(`/todos/${todo.id}`)
      runInAction(() => {
        this.todos.splice(this.todos.indexOf(todo), 1)
        this.isRemoveTodoLoading = false
        this.isRemoveTodoSuccess = true
      })
    } catch (error: any) {
      runInAction(() => {
        this.isRemoveTodoLoading = false
        this.isRemoveTodoError = true
        this.removeTodoError = error.message
      })
    }
  }
}

export default TodoViewModel
