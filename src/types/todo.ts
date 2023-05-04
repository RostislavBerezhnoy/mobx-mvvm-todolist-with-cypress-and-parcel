export enum TODO_STATUS {
  ACTIVE = 'active',
  DONE = 'done',
}

export type Todo = {
  id: number
  text: string
  status: TODO_STATUS.ACTIVE | TODO_STATUS.DONE
}
