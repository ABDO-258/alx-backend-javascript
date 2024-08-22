function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Do nothing; the promise neither resolves nor rejects
    }
  });
}

module.exports = getPaymentTokenFromAPI;