/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    createTodo(todo: string): Chainable<any>
  }
}
