import { FETCH_TIMEOUT, getNewTodoName } from '../support/helpers'

describe('mobx mvvm todolist', () => {
  beforeEach(() => cy.visit('/'))

  it('should focus on the todo input field', () => {
    cy.focused().should('have.class', 'add-todo-input')
  })

  it('add new todo by click', () => {
    cy.get('.todo-item').its('length').then(intialLength => {
      cy.get('.add-todo-input').type(getNewTodoName())
      cy.get('.add-todo-btn').click()
      cy.wait(FETCH_TIMEOUT)
      cy.get('.todo-item').its('length').should('be.gte', intialLength + 1)
    })
  })

  it('add new todo by press enter', () => {
    cy.get('.todo-item').its('length').then(intialLength => {
      cy.get('.add-todo-input').type(`${getNewTodoName()}{enter}`)
      cy.wait(FETCH_TIMEOUT)
      cy.get('.todo-item').its('length').should('be.gte', intialLength + 1)
    })
  })

  it('should clear text input field when an item is added', () => {
    cy.get('.add-todo-input').type(`${getNewTodoName()}{enter}`)
    cy.get('.add-todo-input').should('have.text', '')
  })

  it('check if the first todo marked as done', () => {
    cy.get('.todo-status').first().should('be.checked')
  })

  it('check if the last todo marked as active', () => {
    cy.get('.todo-status').last().should('not.be.checked')
  }) 

  it('should allow me to mark item as completed', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo').find('.todo-status').check({ force: true })
    cy.get('@newTodo').find('.todo-status').should('be.checked')
  })

  it('should allow me to mark item as active', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo').find('.todo-status').check({ force: true })
    cy.get('@newTodo').find('.todo-status').uncheck({ force: true })
    cy.get('@newTodo').find('.todo-status').should('not.be.checked')
  })
})