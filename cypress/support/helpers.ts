export const FETCH_TIMEOUT = 500
export const getNewTodoName = (name = 'New Todo') => `${name} (${new Date().toISOString()})`
