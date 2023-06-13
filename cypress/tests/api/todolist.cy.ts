/* eslint-disable sonarjs/no-duplicate-string */

const API_URL = `${Cypress.env('apiUrl')}/todos`

describe('test todo API', () => {
  context('GET /todos', () => {
    it('get todo list', () => {
      cy.request('GET', API_URL).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.length).to.be.greaterThan(1)
      })
    })
  })

  context('GET /todos/1', () => {
    it('get todo', () => {
      cy.request('GET', `${API_URL}/1`).then(response => {
        expect(response.status).to.eq(200)
      })
    })
  })

  context('POST /todos', () => {
    it('create todo', () => {
      cy.request('POST', API_URL, { text: 'New test todo', status: 'active' }).then(response => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('text', 'New test todo')
        expect(response.body).to.have.property('status', 'active')
      })
    })
  })

  context('PUT /todos/2', () => {
    it('update todo', () => {
      // Create todo with id 2
      cy.request('POST', API_URL, { id: 2, text: 'New test todo', status: 'active' }).then(() => {
        cy.request('PUT', `${API_URL}/2`, { text: 'Updated test todo' }).then(response => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('text', 'Updated test todo')
        })
      })
    })
  })

  context('DELETE /todos/2', () => {
    it('delete todo', () => {
      cy.request('DELETE', `${API_URL}/2`).then(response => {
        expect(response.status).to.eq(200)
      })
    })
  })
})
