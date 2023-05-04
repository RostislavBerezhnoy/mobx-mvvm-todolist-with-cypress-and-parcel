import { makeAutoObservable, runInAction } from 'mobx'
import api from 'config/axios'
import RootStore from 'store/RootStore'
import { Todo, TODO_STATUS } from 'types/todo'

class TodoViewModel {
  rootStore: RootStore

  todos: Todo[] = []

  isTodosLoading = false

  isAddTodoLoading = false

  isRemoveTodoLoading = false

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
    void this.loadTodos()
  }

  async loadTodos() {
    this.isTodosLoading = true
    const { data } = await api.get('/todos')
    runInAction(() => {
      this.todos = data
      this.isTodosLoading = false
    })
  }

  async addTodo(todo: Todo) {
    this.isAddTodoLoading = true
    const { data } = await api.post('/todos', { body: todo })
    runInAction(() => {
      this.todos.push(data)
      this.isAddTodoLoading = false
    })
  }

  async removeTodo(todo: Todo) {
    this.isRemoveTodoLoading = true
    await api.delete(`/todos/${todo.id}`)
    runInAction(() => {
      this.todos.splice(this.todos.indexOf(todo), 1)
      this.isRemoveTodoLoading = false
    })
  }

  get activeTodos() {
    return this.todos.filter(({ status }) => status === TODO_STATUS.ACTIVE)
  }

  get finishedTodos() {
    return this.todos.filter(({ status }) => status === TODO_STATUS.DONE)
  }
}

export default TodoViewModel
