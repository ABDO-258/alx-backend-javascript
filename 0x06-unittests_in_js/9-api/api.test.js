const request = require('supertest');
const express = require('express');
const app = require('./api'); // Assuming the api.js exports the app

describe('Cart Page', () => {
  
  it('should return 200 status code and correct message when :id is a number', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200)
      .expect('Payment methods for cart 12', done);
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });

});
