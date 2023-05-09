import { defineConfig } from "cypress";

export default defineConfig({
  
  e2e: {
    testIsolation: true,
    reporter: 'mochawesome',
    baseUrl: 'https://staging.traceflow.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
  },
});

