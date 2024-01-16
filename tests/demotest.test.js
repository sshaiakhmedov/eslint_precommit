import axios from 'axios'
import { expect } from '@jest/globals'
import { test } from '@jest/globals'


test('GET demo endpoint returns successful response', async () => {
  const response = await axios.get('https://cat-fact.herokuapp.com/facts/');
  expect(response.status).toBe(200); // Assert that the status code is 200

  const data = response.data; // Access parsed JSON data directly
  console.log('GET data:', data);

  // Add more assertions to verify specific data properties if needed
  expect(data.length).toBeGreaterThan(1); // Example assertion for a hypothetical response
});