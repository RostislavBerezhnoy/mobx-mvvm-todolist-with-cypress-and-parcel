/* eslint-disable sonarjs/no-duplicate-string */

import { FETCH_TIMEOUT, getNewTodoName } from '../../support/helpers'

describe('mobx mvvm todolist e2e test', () => {
  beforeEach(() => cy.visit('/'))

  it('should focus on the todo input field', () => {
    cy.focused().should('have.class', 'add-todo-input')
  })

  it('should add a new todo item by click', () => {
    cy.get('.todo-item')
      .its('length')
      .then(intialLength => {
        cy.createTodo(getNewTodoName(), 'button')
        cy.get('.todo-item')
          .its('length')
          .should('be.gte', intialLength + 1)
      })
  })

  it('should add a new todo item by pressing enter', () => {
    cy.get('.todo-item')
      .its('length')
      .then(intialLength => {
        cy.createTodo(getNewTodoName())
        cy.get('.todo-item')
          .its('length')
          .should('be.gte', intialLength + 1)
      })
  })

  it('should clear the text input field when an item has been added', () => {
    cy.createTodo(getNewTodoName())
    cy.get('.add-todo-input').should('have.text', '')
  })

  it('should allow me to mark an item as completed', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo').find('.todo-status').check({ force: true })
    cy.get('@newTodo').find('.todo-status').should('be.checked')
  })

  it('should allow me to mark an item as active', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo').find('.todo-status').check({ force: true })
    cy.get('@newTodo').find('.todo-status').uncheck({ force: true })
    cy.get('@newTodo').find('.todo-status').should('not.be.checked')
  })

  it('should allow me to delete an item', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('.todo-item')
      .its('length')
      .then(intialLength => {
        cy.get('@newTodo').find('.delete-todo').click()
        cy.wait(FETCH_TIMEOUT)
        cy.get('.todo-item')
          .its('length')
          .should('be.gte', intialLength - 1)
        cy.get('@newTodo').should('not.exist')
      })
  })

  it('should make the input field appear after clicking on the edit button', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo').find('.edit-todo').click()
    cy.get('.edit-todo-field').should('exist')
  })

  it('should focus on the edit todo input field', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo').find('.edit-todo').click()
    cy.focused().should('have.class', 'edit-todo-field')
  })

  it('should check if the todo span value is equal to the edit todo input field value when I have clicked on the edit button', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo')
      .find('.todo-text')
      .invoke('text')
      .then(prevText => {
        cy.get('@newTodo').find('.edit-todo').click()
        cy.get('.edit-todo-field')
          .invoke('val')
          .should(newText => {
            expect(prevText).to.eq(newText)
          })
      })
  })

  it('should check if the todo span value is not equal to the edit todo input field value when I have typed some text', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo')
      .find('.todo-text')
      .invoke('text')
      .then(prevText => {
        cy.get('@newTodo').find('.edit-todo').click()
        cy.get('.edit-todo-field').type('-Hello world{enter}')
        cy.get('.edit-todo-save').click()
        cy.wait(FETCH_TIMEOUT)
        cy.get('@newTodo')
          .find('.todo-text')
          .invoke('text')
          .then(newText => {
            expect(prevText).not.to.eq(newText)
          })
      })
  })

  it('should check if the todo span value has not been changed if I have clicked on the cancel button', () => {
    cy.createTodo(getNewTodoName()).as('newTodo')
    cy.get('@newTodo')
      .find('.todo-text')
      .invoke('text')
      .then(prevText => {
        cy.get('@newTodo').find('.edit-todo').click()
        cy.get('.edit-todo-cancel').click()
        cy.get('@newTodo')
          .find('.todo-text')
          .invoke('text')
          .then(newText => {
            expect(prevText).to.eq(newText)
          })
      })
  })
})
