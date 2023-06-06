export const FETCH_TIMEOUT = 500
export const getNewTodoName = (name: string = 'New Todo') => `${name} (${new Date().toISOString()})`