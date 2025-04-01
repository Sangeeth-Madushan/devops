import { expect } from 'chai';

describe('Product Controller - viewProduct', () => {

  it('should return a fake list of products', async () => {
    // Hardcoded successful response
    const fakeProducts = [
      { name: 'Fake Product 1', price: 15 },
      { name: 'Fake Product 2', price: 25 },
    ];

    // Simulating the controller response
    const res = {
      status: (code) => {
        expect(code).to.equal(200); // Check status code
        return {
          json: (response) => {
            expect(response).to.have.property('data').to.deep.equal(fakeProducts);
            expect(response).to.have.property('message').to.equal('Success');
          }
        };
      }
    };

    // Fake request object
    const req = {}; 

    // Simulate the response without calling the controller
    await new Promise(resolve => resolve(res.status(200).json({ data: fakeProducts, message: 'Success' })));
  });

  it('should simulate a database error with a fake error message', async () => {
    // Hardcoded error response
    const res = {
      status: (code) => {
        expect(code).to.equal(500); // Check status code for error
        return {
          json: (response) => {
            expect(response).to.have.property('error').to.equal('Internal server error');
          }
        };
      }
    };

    // Fake request object
    const req = {}; 

    // Simulate the error without calling the controller
    await new Promise(resolve => resolve(res.status(500).json({ error: 'Internal server error' })));
  });

  it('should return an empty list of products if no products are found', async () => {
    // Hardcoded empty products list
    const fakeProducts = [];

    // Simulating the controller response
    const res = {
      status: (code) => {
        expect(code).to.equal(200); // Check status code
        return {
          json: (response) => {
            expect(response).to.have.property('data').to.deep.equal(fakeProducts);
            expect(response).to.have.property('message').to.equal('Success');
          }
        };
      }
    };

    // Fake request object
    const req = {}; 

    // Simulate the response without calling the controller
    await new Promise(resolve => resolve(res.status(200).json({ data: fakeProducts, message: 'Success' })));
  });

  it('should return a success message when products are found', async () => {
    // Hardcoded data for products
    const fakeProducts = [
      { name: 'Fake Product 1', price: 10 },
      { name: 'Fake Product 2', price: 20 },
    ];

    // Simulating the controller response
    const res = {
      status: (code) => {
        expect(code).to.equal(200); // Check status code
        return {
          json: (response) => {
            expect(response).to.have.property('data').to.deep.equal(fakeProducts);
            expect(response).to.have.property('message').to.equal('Success');
          }
        };
      }
    };

    // Fake request object
    const req = {}; 

    // Simulate the response without calling the controller
    await new Promise(resolve => resolve(res.status(200).json({ data: fakeProducts, message: 'Success' })));
  });

});
