/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default defineConfig({
  fixturesFolder: false,
  env: {
    apiUrl: process.env.REACT_APP_API_URL,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    testIsolation: false,
    setupNodeEvents(/* on, config */) {
      // implement node event listeners here
    },
  },
})
