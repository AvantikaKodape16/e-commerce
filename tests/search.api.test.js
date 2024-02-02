const request = require('supertest');
const app = require('../app'); // Assuming your Express app file is named app.js

('Product search functionality', () => {
  it('should search products by name', async () => {
   // Write the test logic to send a search request by name and the response
  });

  it('should search products by description', async () => {
    // Write the test logic to send a search request by description and check the response
  });

  // Write more tests for searching by variant name and other scenarios
});