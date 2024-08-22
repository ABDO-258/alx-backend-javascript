const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with the correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
        .then(response => {
            expect(response).to.eql({ data: 'Successful response from the API' });
                done(); // Notify Mocha that the test is complete
        })
        .catch(err => done(err)); // Handle any errors
    });

  it('should not resolve or reject when success is false', function(done) {
    getPaymentTokenFromAPI(false)
        .then(() => {
            // If the promise resolves or rejects, this line should not be reached
            done(new Error('Expected promise to neither resolve nor reject'));
        })
        .catch(() => {
            // If the promise rejects, this line should not be reached
            done(new Error('Expected promise to neither resolve nor reject'));
        });
        
    // Use a timeout to ensure that the test waits long enough for the promise to settle
    setTimeout(() => done(), 1000); // Adjust timeout if needed
  });
});