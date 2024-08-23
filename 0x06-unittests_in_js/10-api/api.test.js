const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;
chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('/login endpoint', () => {
  it('should return a welcome message with the username', (done) => {
    chai.request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .end((err, res) => {
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });
});

describe('/available_payments endpoint', () => {
  it('should return the correct payment methods object', (done) => {
    chai.request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
  });
});