/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    createTodo(todo: string, type?: 'enter' | 'button'): Chainable<any>
  }
}
