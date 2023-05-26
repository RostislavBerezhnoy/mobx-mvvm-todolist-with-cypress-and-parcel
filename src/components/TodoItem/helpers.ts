import { TODO_STATUS } from 'types/todo'

export const STATUS_TYPES = new Map()
STATUS_TYPES.set(true, TODO_STATUS.DONE)
STATUS_TYPES.set(false, TODO_STATUS.ACTIVE)
